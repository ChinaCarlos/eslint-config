/**
 * @file setup.js
 * @description 自动化设置husky和lint-staged的配置脚本
 * 用于在项目中自动配置Git提交前的代码检查工具
 */

const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

// 检查是否正在执行安装流程，防止循环执行
if (process.env.HUSKY_SETUP_IN_PROGRESS) {
  console.log('⚠️ Husky安装已在进行中，跳过重复执行...')
  process.exit(0)
}

// 设置环境变量标记安装进行中
process.env.HUSKY_SETUP_IN_PROGRESS = '1'

// 确保在脚本结束时清理环境变量
process.on('exit', () => {
  delete process.env.HUSKY_SETUP_IN_PROGRESS
})

/**
 * 获取项目根目录路径
 * @returns {string} 项目根目录的绝对路径
 */
function getProjectRoot() {
  // 优先使用 INIT_CWD，这是npm脚本执行时的初始工作目录
  if (process.env.INIT_CWD) {
    return process.env.INIT_CWD
  }
  // 其次使用 PWD，这是当前工作目录的环境变量
  if (process.env.PWD) {
    return process.env.PWD
  }
  // 最后使用 process.cwd()，获取当前工作目录
  return process.cwd()
}

// 获取项目根目录
const execAppPath = getProjectRoot()

/**
 * 检测项目使用的包管理器
 * @returns {string} 包管理器命令 ('npm'|'yarn'|'pnpm')
 */
function detectPackageManager() {
  try {
    const hasYarnLock = fs.existsSync(path.join(execAppPath, 'yarn.lock'))
    const hasPnpmLock = fs.existsSync(path.join(execAppPath, 'pnpm-lock.yaml'))
    const hasPackageLockJson = fs.existsSync(
      path.join(execAppPath, 'package-lock.json')
    )

    if (hasPnpmLock) return 'pnpm'
    if (hasYarnLock) return 'yarn'
    if (hasPackageLockJson) return 'npm'
    return 'yarn' // 默认使用 yarn
  } catch (error) {
    return 'npm' // 出错时默认使用 npm
  }
}

/**
 * 获取安装依赖的命令
 * @param {string} packageManager 包管理器类型
 * @returns {string} 安装命令
 */
function getInstallCommand(packageManager) {
  const packages = 'husky lint-staged'
  switch (packageManager) {
    case 'yarn':
      return `yarn add ${packages} -D -W` // 添加 -W 参数以支持 Workspace 环境
    case 'pnpm':
      return `pnpm add -D ${packages}`
    default:
      return `npm install ${packages} --save-dev`
  }
}

/**
 * 递归向上查找.git目录
 * @param {string} currentPath 当前目录路径
 * @returns {string|null} git根目录路径或null
 */
function findGitRoot(currentPath) {
  console.log('🔍 正在检查目录:', currentPath)
  const gitDir = path.join(currentPath, '.git')
  if (fs.existsSync(gitDir)) {
    console.log('✅ 找到.git目录:', currentPath)
    return currentPath
  }
  const parentPath = path.dirname(currentPath)
  if (parentPath === currentPath) {
    console.log('❌ 未找到.git目录')
    return null
  }
  return findGitRoot(parentPath)
}

/**
 * 设置husky和lint-staged配置
 * @description
 * 1. 创建并初始化husky配置目录
 * 2. 设置Git pre-commit钩子
 * 3. 给子项目添加lint-staged配置
 */
async function setupHusky() {
  try {
    // 检查是否已初始化git仓库
    const gitRoot = findGitRoot(execAppPath)
    if (!gitRoot) {
      console.log('📦 Initializing git repository...')
      execSync('git init', {stdio: 'inherit', cwd: execAppPath})
      console.log('✅ Git repository initialized successfully!')
    }

    // 检测包管理器并安装依赖
    const packageManager = detectPackageManager()
    const installCommand = getInstallCommand(packageManager)

    console.log('📦 Installing husky and lint-staged...')
    execSync(installCommand, {
      stdio: 'inherit',
      cwd: gitRoot,
      env: {...process.env, NODE_ENV: 'development'},
    })
    console.log('✅ Husky and lint-staged installed successfully!')

    // 创建并初始化.husky目录，用于存放Git钩子脚本
    const huskyDir = path.join(gitRoot, '.husky')
    if (!fs.existsSync(huskyDir)) {
      execSync('npx husky install', {
        stdio: 'inherit',
        cwd: gitRoot,
        env: {...process.env, HUSKY_GIT_PARAMS: gitRoot},
      })
    }

    // 创建pre-commit钩子脚本，在Git提交前执行lint-staged
    const preCommitPath = path.join(huskyDir, 'pre-commit')
    if (!fs.existsSync(preCommitPath)) {
      const preCommitContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

lerna run lint-staged --stream --since
`
      // 创建钩子脚本文件并设置可执行权限(0o755)
      fs.writeFileSync(preCommitPath, preCommitContent, {mode: 0o755})
    }

    console.log('✅ Husky setup completed successfully!')

    try {
      console.log(
        `💡 提示：请在各个子包的package.json中配置lint-staged规则，例如：`
      )
      console.log(`{
    "lint-staged": {
      "*.{js,jsx,ts,tsx}": ["eslint --fix"]
    }
  }`)
      // 读取当前 appPath 路径下的package.json 内容，自动添加lint-staged配置和命令
      const packageJsonPath = path.join(execAppPath, 'package.json')
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

      // 添加lint-staged配置
      packageJson['lint-staged'] = {
        '*.{js,jsx,ts,tsx}': ['eslint --fix'],
      }
      console.log(`✅ 已经对${execAppPath}/package.json添加lint-staged配置`)
      // 添加lint-staged命令到scripts
      if (!packageJson.scripts) {
        packageJson.scripts = {}
      }
      packageJson.scripts['lint-staged'] = 'lint-staged'
      console.log(
        `✅ 已经对${execAppPath}/package.json添加lint-staged命令到scripts`
      )

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    } catch (error) {
      console.error('❌ Error adding lint-staged to package.json:', error)
    }
  } catch (error) {
    console.error('❌ Error setting up husky and lint-staged:', error)
    process.exit(1)
  }
}

// 执行配置函数
setupHusky()
