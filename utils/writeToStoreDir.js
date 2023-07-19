const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const writeToStoreDir = (name, password) => {
    fs.open(path.join(__dirname, '../store', name + ".txt"), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green((`Password saved to ./store as ${name}.txt`)));
            })
        })
    })
}
module.exports = writeToStoreDir

