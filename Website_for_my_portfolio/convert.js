const fs = require('fs');
const path = require('path');
const root = 'C:/Users/rishun/OneDrive/Portfolio website/Website_for_my_portfolio';

function convertToTSX(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertToTSX(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // simple conversions for react component typing (functional)
      content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*\{/g, 'const $1: React.FC<any> = ($2) => {');

      // write to .tsx
      const newPath = fullPath.replace('.jsx', '.tsx');
      fs.writeFileSync(newPath, content);
      fs.unlinkSync(fullPath);
    }
  }
}

convertToTSX(path.join(root, 'src'));

const indexPath = path.join(root, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace('main.jsx', 'main.tsx');
  fs.writeFileSync(indexPath, html);
}
console.log('Conversion script done!');