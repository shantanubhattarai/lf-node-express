const fs = require('fs');

function write(name, content){
  return new Promise(function(resolve, reject){
    fs.writeFile(`./files/${name}`, content, function(err, done) {
      if(err){
        reject(err)
      }else{
        resolve(done);
      }
    });
  });
}

function read(name){
  return new Promise(function(resolve, reject){
    fs.readFile(`./files/${name}`, 'UTF-8', function(err, data) {
      if(err){
        reject(err)
      }else{
        resolve(data);
      }
    });
  });
}

function rename(oldName, newName){
  return new Promise(function(resolve, reject){
    fs.rename(`./files/${oldName}`, `./files/${newName}`, function(err, done) {
      if(err){
        reject(err)
      }else{
        resolve(done);
      }
    });
  });
}

function deleteFile(name){
  return new Promise(function(resolve, reject){
    fs.unlink(`./files/${name}`, function(err, data) {
      if(err){
        reject(err)
      }else{
        resolve(data);
      }
    });
  });
}

module.exports = {
  write,
  read,
  rename,
  deleteFile
}