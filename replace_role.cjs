const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /Full Stack Developer/gi, replace: 'DevOps Engineer' },
  { search: /full stack web development/gi, replace: 'DevOps and Cloud Infrastructure' },
  { search: /full-stack web projects/gi, replace: 'infrastructure and automation projects' },
  { search: /MERN Stack Expert/gi, replace: 'Cloud & Automation Expert' },
  { search: /MERN stack/gi, replace: 'Cloud Infrastructure' },
  { search: /React Developer/gi, replace: 'Cloud Engineer' },
  { search: /React\.js, Node\.js, Next\.js, TypeScript, AWS, Docker and more/gi, replace: 'Jenkins, Docker, AWS, OpenShift, Bash, Python and more' },
  { search: /React\.js, Node\.js, Next\.js and TypeScript/gi, replace: 'Jenkins, Docker, Linux and AWS' },
  { search: /React\.js, Node\.js, MongoDB, Next\.js and TypeScript/gi, replace: 'Docker, Kubernetes, AWS, and CI/CD pipelines' },
  { search: /Node\.js, MongoDB, Next\.js and TypeScript/gi, replace: 'Docker, Kubernetes, AWS, and CI/CD pipelines' },
  { search: /Node\.js, Next\.js, TypeScript, Kolkata, India, Web Developer Portfolio/gi, replace: 'CI/CD, Docker, Kubernetes, AWS, Bandung, Indonesia, Tech Portfolio' },
  { search: /Based in Kolkata, India/gi, replace: 'Based in Bandung, Indonesia' },
  { search: /B\.Tech Computer Science graduate/gi, replace: 'B.Sc. Informatics Engineering graduate' },
  { search: /B\.Tech in Computer Science with 8\.48 CGPA/gi, replace: 'B.Sc. in Informatics Engineering with 3.41 GPA' },
  { search: /3\+ internships and 10\+ projects/gi, replace: '4+ years of IT experience' },
  { search: /3\+ internships/gi, replace: '4+ years of experience' },
  { search: /4000\+ LinkedIn followers/gi, replace: 'Dedicated IT Professional' },
  { search: /'software developer', 'full stack developer', 'mern stack', 'web developer'/gi, replace: "'devops engineer', 'cloud engineer', 'infrastructure', 'automation'" },
  { search: /React, Node\.js, MERN Stack/gi, replace: "Jenkins, Docker, AWS" }
];

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
    let newContent = content;
    
    replacements.forEach(({ search, replace }) => {
      newContent = newContent.replace(search, replace);
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated roles in ${f}`);
    }
  }
});
