#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const log = console.log
//import utility functions
const createPassword = require('./utils/createPassword')
const savedPassword = require('./utils/savePassword')
const saveToNewFile = require('./utils/saveToNewFile')
const writeToStoreDir = require('./utils/writeToStoreDir') //store directory
const createDir = require('./utils/createDir')

//?     config program
program
    .version('1.0.0')
    .description('Simple Password Generator')
// .parse()


//?     prepare values -->length,save,numbers,symbols
program
    // .command('generate')
    // .action(() => {
    //     log('Generated!');
    // })
    // .command('mkdir')
    // .action((dirPath) => {
    //     createDir(dirPath)
    // })
    .option('-l, --length <number>', 'length of password', '8')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nf, --newfile <string>', 'save password to new file by adding <filename>>')
    .option('-st, --store <string>', 'save to .././store ')
    .option('-dir', 'make new directory ')
    .parse()

log(program.opts());
// { length: '10' }


//?     destructuring program.opts() because all options ar inside
const { length, save, numbers, symbols, newfile, store, dir } = program.opts()
// log(numbers, symbols);
// true true


//?    store function for generating password
const generatedPassword = createPassword(length, numbers, symbols)



//?     Save to file "passwords.txt"
//*     passgen -s
if (save) {
    savedPassword(generatedPassword)
}


//??    Save new file 
//*     passgen -nf 'yourfilename'
//      saves a new file to /root
if (newfile) {
    saveToNewFile(newfile, generatedPassword)
}


//??    Save new file to ./store/${yourfilename}
//*     passgen -st "yourfilename"
if (store) {
    writeToStoreDir(store, generatedPassword)
}

//?     Create a new Directory
//*     passgen -dir
//!     not workink yet!
// let dirPath = './'

// if (dir) {
//     createDir()
// }

//?     Output generated 
// log(generatedPassword)
log(chalk.red('Generated Password: ') + chalk.bold.white.underline(generatedPassword))

