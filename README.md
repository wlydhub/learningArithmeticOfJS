初始化项目
---
(1)创建文件目录 learn  
(2)初始化package.json  
npm init 
``` 
test command: jest --coverage
```
(3)安装三个包
```
npm install jest babel-jest @babel/preset-env --save-dev
```
(4)创建 .babelrc 文件
```
{
  "presets": ["@babel/preset-env"]
}
```
(5)创建code和test目录,开始学习与测试