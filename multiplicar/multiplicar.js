const fs = require('fs');
module.exports.crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            console.log(` ${ base } * ${ i } = ${ base * i }`);
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        fs.writeFile('tablas/tabla.txt', data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-${ base }.txt`)
        });
    });
};

module.exports.listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        resolve(data);
    });
};