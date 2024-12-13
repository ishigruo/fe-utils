import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // 入口文件
  output: {
    file: 'dist/bundle.js', // 输出文件
    format: 'cjs', // 输出格式，可以是 'cjs', 'esm', 'umd' 等
  },
  plugins: [
    typescript() // 使用 TypeScript 插件
  ]
};