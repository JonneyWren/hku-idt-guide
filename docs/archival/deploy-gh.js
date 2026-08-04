// 配置代理后部署到 GitHub Pages
const cp = require('child_process');
const path = require('path');

process.chdir('D:\\hku-idt-guide');

// 配置 git 代理
console.log('配置 git 代理...');
cp.execSync('git config http.proxy http://127.0.0.1:7897', { stdio: 'inherit' });

// 执行部署
console.log('部署到 GitHub Pages...');
try {
  cp.execSync('npx gh-pages -d dist', { stdio: 'inherit', timeout: 90000 });
  console.log('✓ 部署成功');
} catch (e) {
  console.error('✗ 部署失败:', e.message);
  process.exit(1);
}
