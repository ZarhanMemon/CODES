// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, 
// jpg/cat.jpg 

// png/name.png 

// pdf/this.pdf 
// pdf/harry.pdf

// zip/harry.zip 
// zip/Rohan.zip


// ME --2ver :-

const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'this');

if (fs.existsSync(folderPath)) {
    console.log('Main Folder exists!');
} else {
    console.log('Main Folder created!');
    fs.mkdirSync(folderPath)
}

const files = fs.readdirSync(folderPath);


for (let i = 0; i < files.length; i++) {
    const element = files[i];
    const rawfolderpath = path.join(folderPath, element);

    const ext = path.extname(element).slice(1)

    if (!ext) continue
 
    const newfolderpath = path.join(folderPath, ext);

    if (!fs.existsSync(newfolderpath)) {
        console.log(ext + ' file created!');
        fs.mkdirSync(newfolderpath)
    }
    
    fs.renameSync(rawfolderpath, path.join(newfolderpath,element))
}



//  ME --1ver:-

// const fs = require('fs');
// const path = require('path');

// const folderPath = path.join(__dirname, 'this');

// if (fs.existsSync(folderPath)) {
//     console.log('Folder exists!');
// } else {
//     console.log('Folder does not exist!');
//     fs.mkdirSync(folderPath)
// }

// const files = fs.readdirSync(folderPath);

// const jpgpath = path.join(folderPath, 'jpg')
// const pngpath = path.join(folderPath, 'png')
// const zippath = path.join(folderPath, 'zip')
// const pdfpath = path.join(folderPath, 'pdf')
 

// if ( !fs.existsSync(jpgpath)) fs.mkdirSync(jpgpath)
// if ( !fs.existsSync(pngpath)) fs.mkdirSync(pngpath)
// if ( !fs.existsSync(zippath)) fs.mkdirSync(zippath)
// if ( !fs.existsSync(pdfpath)) fs.mkdirSync(pdfpath)

// for (let i = 0; i < files.length; i++) {
//     const element = files[i];
//     const rawfolderpath = path.join(folderPath,element);

//     if (element.endsWith('.jpg')) {
//         fs.renameSync( rawfolderpath , path.join(jpgpath,element))
        
//     } else if (element.endsWith('.png')) {
//         fs.renameSync(rawfolderpath , path.join(pngpath,element))
        
//     } else if (element.endsWith('.zip')) {
//         fs.renameSync(rawfolderpath , path.join(zippath,element))
        
//     } else if (element.endsWith('.pdf')) {
//         fs.renameSync(rawfolderpath , path.join(pdfpath,element))
//     }

// }
