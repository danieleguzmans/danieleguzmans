if(process.ENV === 'PROD'){
    DATABASE_URL = process.ENV.DATABASE_URL,
    PORT = process.ENV.PORT
}else{
    DATABASE_URL = 'mongodb://localhost/angular-auth',
    PORT = 3000
}
module.exports = {
    DATABASE_URL,
    PORT
}