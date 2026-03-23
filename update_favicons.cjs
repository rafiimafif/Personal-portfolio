const fs = require('fs');
const path = require('path');

// Update index.html
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(/<link rel="icon" type="image\/x-icon" href="\/favicon\.ico" \/>\s*<link rel="icon" type="image\/png" sizes="16x16" href="\/favicon-16x16\.png" \/>\s*<link rel="icon" type="image\/png" sizes="32x32" href="\/favicon-32x32\.png" \/>\s*<link rel="apple-touch-icon" sizes="180x180" href="\/apple-touch-icon\.png" \/>/, '<link rel="icon" type="image/jpeg" href="/profile.jpg" />\n  <link rel="apple-touch-icon" href="/profile.jpg" />');
indexContent = indexContent.replace(/og-image\.png/g, 'profile.jpg');
fs.writeFileSync(indexPath, indexContent);

// Update manifest.json
const manifestPath = path.join(__dirname, 'public/manifest.json');
let manifestContent = fs.readFileSync(manifestPath, 'utf8');
manifestContent = manifestContent.replace(/"src": "\/favicon-192\.png"/g, '"src": "/profile.jpg"').replace(/"src": "\/favicon-512\.png"/g, '"src": "/profile.jpg"').replace(/"type": "image\/png"/g, '"type": "image/jpeg"');
fs.writeFileSync(manifestPath, manifestContent);

console.log('Updated favicons mapping');
