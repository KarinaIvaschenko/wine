module.exports = {
    mongoURI: `mongodb+srv://admin:admin@wine.vmggmg3.mongodb.net/?retryWrites=true&w=majority`,
    secretOrKey: process.env.SECRET_OR_KEY,
    nodemailerUser: process.env.NODEMAILER_USER,
    nodemailerPassword: process.env.NODEMAILER_PASSWORD,
    nodemailerService: process.env.NODEMAILER_SERVICE,
};
