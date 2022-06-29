const fs = require("fs");
const bibliaDir = __dirname + "/Biblia/";
const bibliaBooks = fs.readdirSync(bibliaDir);

for (let i = 0; i < bibliaBooks.length; i++) {
    const bibliaBook = bibliaBooks[i];
    const bibliaBookPath = bibliaDir + bibliaBook;
    if(bibliaBookPath.endsWith(".json")) {
        const contents = require(bibliaBookPath);
        for(let iChapter = 0; iChapter < contents.length; iChapter++) {
            const chapter = contents[iChapter];
            for(let iVerse = 0; iVerse < chapter.length; iVerse++) {
                const verse = chapter[iVerse];
                contents[iChapter][iVerse] = verse.replace(/\/n/g, "\n");
            }
        }
        const contentsJSON = JSON.stringify(contents);
        fs.writeFileSync(bibliaBookPath, contentsJSON, "utf8");
    }
}