# fe-utils
前端常用方法、工具函数


### npm
// 校验名字是否在npm库已经存在
npm search xxxx

// 查看npm镜像源地址
npm config get registry

// 设置npm默认源
npm config set registry https://registry.npmjs.org/

// 登陆
npm login

// 自动更改版本号，并且commit
// npm version xxx

// 控制台会返回下一个小版本号 如v1.0.1
npm version patch

// 重新发布
npm publish
