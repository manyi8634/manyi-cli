#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const handlebars = require('handlebars')
const inquirer = require('inquirer')
const fs = require('fs')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const templates = require('./templates')
const version = require('./package.json').version
const requiredVersion = require('./package.json').engines.node
const semver = require('semver')

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    console.log(chalk.red(
      'OMG你的node版本为' + process.version + ',这个有点低了哈！' + id +
      '需要使用的版本为' + wanted + '.\n赶快去更新node版本吧~'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'manyi-cli')

program
  .version(version) // -v 或者 --version 的时候会输出该版本号

program
  .command('vue')
  .description('创建vue项目模板')
  .action(() => {
    inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: '请输入项目名称',
      default: 'manyi-vue-admin'
    }]).then((res)=>{
      const spinner = ora('正在下载模板...').start()
      const { downloadUrl } = templates.vue
      download(downloadUrl, res.name, { clone: true }, (err) => {
        if (err) {
          spinner.fail()
          console.log(logSymbols.error, chalk.red(err))
          console.log(chalk.red('OMG发生异常了...请检查: 1.网络是否正常? 2.项目名称是否合法?'))
          return
        }
        spinner.succeed()

        const packagePath = `${res.name}/package.json`
        const packageContent = fs.readFileSync(packagePath, 'utf8')
        // 使用模板引擎把用户输入的数据解析到 package.json 文件中
        const packageResult = handlebars.compile(packageContent)(res)
        // 解析完毕，把解析之后的结果重新写入 package.json 文件中
        fs.writeFileSync(packagePath, packageResult)
        console.log(logSymbols.success, chalk.green('vue项目创建成功，赶快去体验吧~'))
      })
    })
  })

program
  .command('react')
  .description('创建react项目模板')
  .action(() => {
    inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: '请输入项目名称',
      default: 'manyi-react-admin'
    }]).then((res)=>{
      const spinner = ora('正在下载模板...').start()
      const { downloadUrl } = templates.react
      download(downloadUrl, res.name, { clone: true }, (err) => {
        if (err) {
          spinner.fail()
          console.log(logSymbols.error, chalk.red(err))
          console.log(chalk.red('OMG发生异常了...请检查: 1.网络是否正常? 2.项目名称是否合法?'))
          return
        }
        spinner.succeed()

        const packagePath = `${res.name}/package.json`
        const packageContent = fs.readFileSync(packagePath, 'utf8')
        // 使用模板引擎把用户输入的数据解析到 package.json 文件中
        const packageResult = handlebars.compile(packageContent)(res)
        // 解析完毕，把解析之后的结果重新写入 package.json 文件中
        fs.writeFileSync(packagePath, packageResult)
        console.log(logSymbols.success, chalk.green('react项目创建成功，赶快去体验吧~'))
      })
    })
  })

program
  .command('list')
  .description('查看所有可用模板')
  .action(() => {
    for (let key in templates) {
      console.log(`${key}  ${templates[key].description}`)}
    }
  )

// 没有任何命令的时候输出使用帮助
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

program.parse(process.argv)
