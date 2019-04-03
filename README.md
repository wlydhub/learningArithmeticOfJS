初始化项目
创建文件目录 learn
初始化package.json npm init
...
test command: jest --coverage
...
安装三个包
npm install jest babel-jest @babel/preset-env --save-dev
创建 .babelrc 文件
...
{
  "presets": ["@babel/preset-env"]
}
...
创建code目录
创建test目录