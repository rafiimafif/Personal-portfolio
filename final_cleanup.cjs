const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /niladri1\.vercel\.app/g, replace: 'rafiimafif.github.io/Personal-portfolio' },
  { search: /niladri_chatterjee_portfolio/g, replace: 'rafii_afif_portfolio' },
  { search: /code\.niladri%40gmail\.com/g, replace: 'rafii.afif%40gmail.com' },
  { search: /niladri1/g, replace: 'rafiimafif' },
  { search: /Niladri_Chatterjee\(CV\)\.pdf/g, replace: 'Rafii_Afif_CV.pdf' },
  { search: /'niladri', 'Rafii Afif', 'niladri1'/g, replace: "'rafii', 'afif', 'rafiimafif'" },
  { search: /'niladri', 'chatterjee'/g, replace: "'rafii', 'afif'" },
  { search: />Niladri</g, replace: '>Rafii<' },
  { search: /Niladri's Portfolio/g, replace: "Rafii's Portfolio" },
  // specific fallback for SearchDialog
  { search: /'niladri',/g, replace: '' }
];

const filesToUpdate = [
  'public/sitemap.xml',
  'public/robots.txt',
  'package.json',
  'package-lock.json',
  'README.md',
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/components/SearchDialog.jsx',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx'
];

filesToUpdate.forEach(f => {
  const filePath = path.join(__dirname, f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    replacements.forEach(({ search, replace }) => {
      newContent = newContent.replace(search, replace);
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated leftovers in ${f}`);
    }
  }
});
