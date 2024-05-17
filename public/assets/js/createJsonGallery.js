import fs from "fs";
import path from "path";

// Definir la ruta base de tu proyecto
const basePath = "D:\\Progra\\app-femme\\public\\";

// Definir la ruta de la carpeta de imágenes
const imageFolder =
  "D:\\Progra\\app-femme\\public\\assets\\img\\sitio_femme\\gallery-webp";

// Leer las rutas de las imágenes en la carpeta
fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error("Error al leer el directorio de imágenes:", err);
    return;
  }

  // Filtrar archivos de imágenes
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  // Obtener las rutas relativas de las imágenes
  const imagePaths = imageFiles.map((file) => {
    const fullPath = path.join(imageFolder, file);
    return path.relative(basePath, fullPath).replace(/\\/g, "\\\\"); // Reemplazar diagonales simples con diagonales dobles
  });

  // Generar el contenido del archivo TypeScript
  const tsContent = `export const data = [\n${imagePaths.map(path => `  "${path}"`).join(',\n')}\n];`;

  // Escribir el contenido en un archivo TypeScript
  fs.writeFile("src/data/galleryData.ts", tsContent, "utf8", (err) => {
    if (err) {
      console.error("Error al escribir el archivo de salida:", err);
    } else {
      console.log("Archivo de datos de galería TypeScript generado con éxito.");
    }
  });
});
