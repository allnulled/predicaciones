const fs = require("fs");
const path = require("path");

const projectDir = path.resolve(__dirname + "/../..");
const booksPaths = [
  `${projectDir}/books/neto/Biblia/Abdias.json`,
  `${projectDir}/books/neto/Biblia/Amos.json`,
  `${projectDir}/books/neto/Biblia/Apocalipsis.json`,
  `${projectDir}/books/neto/Biblia/Cantares.json`,
  `${projectDir}/books/neto/Biblia/Colosenses.json`,
  `${projectDir}/books/neto/Biblia/Corintios_1.json`,
  `${projectDir}/books/neto/Biblia/Corintios_2.json`,
  `${projectDir}/books/neto/Biblia/Cronicas_1.json`,
  `${projectDir}/books/neto/Biblia/Cronicas_2.json`,
  `${projectDir}/books/neto/Biblia/Daniel.json`,
  `${projectDir}/books/neto/Biblia/Deuteronomio.json`,
  `${projectDir}/books/neto/Biblia/Eclesiastes.json`,
  `${projectDir}/books/neto/Biblia/Efesios.json`,
  `${projectDir}/books/neto/Biblia/Esdras.json`,
  `${projectDir}/books/neto/Biblia/Ester.json`,
  `${projectDir}/books/neto/Biblia/Exodo.json`,
  `${projectDir}/books/neto/Biblia/Ezequiel.json`,
  `${projectDir}/books/neto/Biblia/Filemon.json`,
  `${projectDir}/books/neto/Biblia/Filipenses.json`,
  `${projectDir}/books/neto/Biblia/Galatas.json`,
  `${projectDir}/books/neto/Biblia/Genesis.json`,
  `${projectDir}/books/neto/Biblia/Habacuc.json`,
  `${projectDir}/books/neto/Biblia/Hageo.json`,
  `${projectDir}/books/neto/Biblia/Hebreos.json`,
  `${projectDir}/books/neto/Biblia/Hechos.json`,
  `${projectDir}/books/neto/Biblia/Isaias.json`,
  `${projectDir}/books/neto/Biblia/Jeremias.json`,
  `${projectDir}/books/neto/Biblia/Job.json`,
  `${projectDir}/books/neto/Biblia/Joel.json`,
  `${projectDir}/books/neto/Biblia/Jonas.json`,
  `${projectDir}/books/neto/Biblia/Josue.json`,
  `${projectDir}/books/neto/Biblia/Juan_1.json`,
  `${projectDir}/books/neto/Biblia/Juan_2.json`,
  `${projectDir}/books/neto/Biblia/Juan_3.json`,
  `${projectDir}/books/neto/Biblia/Juan.json`,
  `${projectDir}/books/neto/Biblia/Judas.json`,
  `${projectDir}/books/neto/Biblia/Jueces.json`,
  `${projectDir}/books/neto/Biblia/Lamentaciones.json`,
  `${projectDir}/books/neto/Biblia/Levitico.json`,
  `${projectDir}/books/neto/Biblia/Lucas.json`,
  `${projectDir}/books/neto/Biblia/Malaquias.json`,
  `${projectDir}/books/neto/Biblia/Marcos.json`,
  `${projectDir}/books/neto/Biblia/Mateo.json`,
  `${projectDir}/books/neto/Biblia/Miqueas.json`,
  `${projectDir}/books/neto/Biblia/Nahum.json`,
  `${projectDir}/books/neto/Biblia/Nehemias.json`,
  `${projectDir}/books/neto/Biblia/Numeros.json`,
  `${projectDir}/books/neto/Biblia/Oseas.json`,
  `${projectDir}/books/neto/Biblia/Pedro_1.json`,
  `${projectDir}/books/neto/Biblia/Pedro_2.json`,
  `${projectDir}/books/neto/Biblia/Proverbios.json`,
  `${projectDir}/books/neto/Biblia/Reyes_1.json`,
  `${projectDir}/books/neto/Biblia/Reyes_2.json`,
  `${projectDir}/books/neto/Biblia/Romanos.json`,
  `${projectDir}/books/neto/Biblia/Rut.json`,
  `${projectDir}/books/neto/Biblia/Salmos.json`,
  `${projectDir}/books/neto/Biblia/Samuel_1.json`,
  `${projectDir}/books/neto/Biblia/Samuel_2.json`,
  `${projectDir}/books/neto/Biblia/Santiago.json`,
  `${projectDir}/books/neto/Biblia/Sofonias.json`,
  `${projectDir}/books/neto/Biblia/Tesalonicenses_1.json`,
  `${projectDir}/books/neto/Biblia/Tesalonicenses_2.json`,
  `${projectDir}/books/neto/Biblia/Timoteo_1.json`,
  `${projectDir}/books/neto/Biblia/Timoteo_2.json`,
  `${projectDir}/books/neto/Biblia/Tito.json`,
  `${projectDir}/books/neto/Biblia/Zacarias.json`,
  `${projectDir}/books/neto/Carta_Universal_de_los_Derechos_Humanos.json`,
  `${projectDir}/books/neto/El_Camino_del_Tao.json`,
  `${projectDir}/books/neto/El_Coran.json`,
  `${projectDir}/books/neto/El_Dhammapada.json`,
  `${projectDir}/books/neto/La_Logica.json`,
];
for(let indexBook=0; indexBook<booksPaths.length; indexBook++) {
  const bookPath = booksPaths[indexBook];
  const bookData = require(bookPath);
  let bookContents = "";
  if(!Array.isArray(bookData)) {
    console.log(`[!] Excepto libro ${bookPath} que no es un array`);
  }
  for(let indexChapter=0; indexChapter<bookData.length; indexChapter++) {
    const bookChapter = bookData[indexChapter];
    if(!Array.isArray(bookChapter)) {
      console.log(`[!] Excepto capítulo ${bookPath}::${indexChapter} que no es un array`);
    }
    for(let indexLine=0; indexLine<bookChapter.length; indexLine++) {
      const bookLine = bookChapter[indexLine];
      if(typeof bookLine !== "string") {
        console.log(`[!] Excepto linea ${bookPath}::${indexChapter}::${indexLine} que no es un texto`);
      }
    }
    const chapterContent = bookChapter.join("\n");
    bookContents += chapterContent + "\n\n";
  }
  const plainPath = bookPath.replace("/books/neto/", "/books/plano/").replace(/\.json$/g, ".txt");
  const plainContent = bookContents;
  fs.writeFileSync(plainPath, plainContent, "utf8");
}
