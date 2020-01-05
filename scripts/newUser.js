/*
This is a script to generate a new company user with a placeholder name and a password, 
that is written to the database with its hashed password.
Username and password is put out to the console.
*/
const bcrypt = require('bcryptjs')

function generateRandomString(length) {
    var result           = ''
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
 }

const companyService = require('../services/company.service')

const name = generateRandomString(8)
const mail = generateRandomString(8) + '@mail.com'
const password = generateRandomString(8);

(async () => {
   try {
      await companyService.addCompany(name, mail, bcrypt.hashSync(password))
      console.log(`Companyname: ${name} - Mail: ${mail} - Password: ${password}`)
   } catch (e) {
      console.log(e)
   }

   process.exit()
})()
