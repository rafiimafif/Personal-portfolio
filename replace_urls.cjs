const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /https:\/\/niladri1\.vercel\.app/g, replace: 'https://rafiimafif.github.io/Personal-portfolio' },
  { search: /niladri1\.vercel\.app/g, replace: 'rafiimafif.github.io/Personal-portfolio' },
  { search: /github\.com\/niladri-1/g, replace: 'github.com/rafiimafif' },
  { search: /niladri-1/g, replace: 'rafiimafif' },
  { search: /linkedin\.com\/in\/niladri1/g, replace: 'linkedin.com/in/rafii-muhammad-afif' },
  { search: /wa\.me\/\+916296554939/g, replace: 'wa.me/+6285155103214' },
  { search: /code\.niladri@gmail\.com/g, replace: 'rafii.afif@gmail.com' },
  { search: /https:\/\/spam-detector1\.vercel\.app/g, replace: '#' },
  { search: /https:\/\/curd-auth-app\.vercel\.app/g, replace: '#' },
  { search: /https:\/\/techfolio1\.vercel\.app/g, replace: '#' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'public') {
        processDirectory(fullPath);
      } else if (file === 'public') {
        processDirectory(fullPath);
      }
    } else {
      if (['.html', '.jsx', '.js', '.md', '.json'].includes(path.extname(fullPath)) && file !== 'package-lock.json' && file !== 'package.json') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content;
        replacements.forEach(({ search, replace }) => {
          newContent = newContent.replace(search, replace);
        });
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated URLs in ${fullPath}`);
        }
      }
    }
  });
}

processDirectory(__dirname);
