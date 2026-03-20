const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/SearchDialog.jsx',
  'src/components/Footer.jsx',
  'src/App.jsx',
  'README.md',
  'public/manifest.json',
  'index.html'
];

filesToUpdate.forEach(f => {
  const filePath = path.join(__dirname, f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/Niladri Chatterjee/gi, 'Rafii Afif');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${f}`);
    }
  }
});
