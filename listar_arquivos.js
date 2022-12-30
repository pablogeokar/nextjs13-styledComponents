const fs = require("fs");
const fsPromises = require("fs/promises");

const folder = "./node_modules/phosphor-react/src/icons/";

// Remove a extensão *.tsx e devolve apenas o nome do arquivo da pasta solicitada
function arquivoNome(arquivo) {
  const nome = arquivo.split("/");
  const nomeSemExtensao = nome[nome.length - 1];
  return nomeSemExtensao.replace(".tsx", "");
}

// Faz a listagem dos arquivos e pastas de um diretório
function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, paths) => {
      if (err) {
        reject(err);
      } else {
        resolve(paths);
      }
    });
  });
}

// Busca as estattísticas do arquivo ou pasta,
// esta função é utilizada para definir se é
// um arquivo ou diretório
function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) {
        reject(err);
      } else {
        resolve({ path, stat });
      }
    });
  });
}

// Faz a listagem apenas dos arquivos ignorando as pastas
async function lista() {
  const paths = await readdir(folder);

  const statsPromises = paths.map(async (path) => await stat(folder + path));

  const stats = await Promise.all(statsPromises);

  const pathsWithIsFile = stats.map((path) => ({
    path: arquivoNome(path.path),
    isFile: path.stat.isFile(),
  }));

  const files = pathsWithIsFile.filter((path) => path.isFile === true);
  const result = files.map((file) => file.path);
  const json = JSON.stringify(result);
  return json;
}


// Salva o resultado em formato *.txt
async function salvaArquivoTXT() {
  const listar = await lista();

  await fsPromises.writeFile("file.txt", listar);
  console.log("File is written successfully.");
}

salvaArquivoTXT();
