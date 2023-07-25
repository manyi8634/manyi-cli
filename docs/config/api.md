# 使用说明
- **使用前请核对node版本**。如你使用的node版本过低`manyi-cli`可以创建项目，但是由于创建的项目是基于vite/create-react-app，所以你创建的项目可能无法运行。目前vue项目要求node为14+，react项目要求node为16+，为此我们在创建完项目时增加了检测你正在使用的node版本，如低于以上版本，则会报警告提示，否则不报警告。另外`manyi-cli`的模板项目是放在仓库托管的，并没有集成在包中，所以**创建项目时请确保电脑联网状态**~

```js
npm i manyi-cli -g / yarn add manyi-cli -g /...       下载
npm uni manyi-cli -g / yarn remove manyi-cli -g /...  卸载
```

::: warning 下载不了？
如遇到下载不了，请核对您的镜像地址或换个网络
:::

## 创建vue项目

打开终端切换到指定路径，执行以下命令，然后输入项目名称即可

```js
manyi vue
```

## 创建react项目

打开终端切换到指定路径，执行以下命令，然后输入项目名称即可

```js
manyi react
```
## 其他命令

```
manyi list                    查看所有可用模板
```
```
manyi -V / manyi --version    查看当前脚手架版本
```
```
manyi -h / manyi              查看帮助
```

::: tip  Welcome
欢迎您的建言献策，我会将您提供的建议添加进去的~
:::