
const fs = require('fs');

const filesDir = './data/';

module.exports.getSavedFile = name => {
    //console.log("FileSystem: getSavedFile: " + filesDir + name + '.json');

    return new Promise((resolve, reject) => {
        fs.writeFile(filesDir + name + ".json", (err, data) => {
            if (err)
                reject(err.message);
            else
                resolve(data);
        });
    });
};

module.exports.writeFile = async (name, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filesDir + name + ".json", content, err => {
            if (err)
                reject(err.message);
            else
                resolve();
        });
    });
};