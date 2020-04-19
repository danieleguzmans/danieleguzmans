if(process.ENV === 'PROD'){
    DATABASE_URL = 'process.ENV.DATABASE_URL'
}else{
    DATABASE_URL = 'mongodb://localhost/angular-auth'
}
module.exports = {
    DATABASE_URL
}