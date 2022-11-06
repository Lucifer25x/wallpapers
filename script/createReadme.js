const fs = require('fs');
const { homedir } = require('os');
const path = require('path');

let files = fs.readdirSync(path.join(homedir(), 'Pictures/Wallpapers'))
let code = `# Wallpapers`;
for(let i = 0; i < files.length; i++){
    code += `\n<details><summary>${path.parse(files[i]).name}</summary><img alt="${path.parse(files[i]).name}" src="${files[i]}"/></details>`
}

fs.writeFileSync(path.join(__dirname, 'README.md'), code);
