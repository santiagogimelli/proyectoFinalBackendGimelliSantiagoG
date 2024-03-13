export default {
    ENV: process.env.NODE_ENV || 'dev',
    persistence: process.env.PERSISTENCE,
    port: process.env.PORT || 8080,
    host: {
        localhost: process.env.LOCALHOST,
        host: process.env.HOST,
    },
    db: {
        mongodbURL: process.env.DB_MONGO_ATLAS,
        mongodbURL_TEST: process.env.DB_MONGO_ATLAS_TEST
    },
    jwtSecret: process.env.JWT_SECRET,
    sessionSecret: process.env.SESSION_SECRET,
    github: {
        urlCallbackGithub: process.env.URL_CALLBACK_GITHUB,
        clientGithub: process.env.CLIENT_GITHUB,
        secretGithub: process.env.SECRET_GITHUB
    },
    mail: {
        service: process.env.EMAIL_SERVICE || 'gmail',
        port: process.env.EMAIL_PORT || 587,
        user: process.env.EMAIL_USER,
        password: process.env.APP_PASS,
    }
}