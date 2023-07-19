const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const saveToNewFile = (name, password) => {
    fs.open(path.join(__dirname, '../', name + '.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved as ' + name + '.txt'));
            })
        })
    })
}
module.exports = saveToNewFile