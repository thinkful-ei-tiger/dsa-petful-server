module.exports = {
  CLIENT_ORIGIN:
    process.env.CLIENT_ORIGIN ||
    'https://petful-client-template-tan.vercel.app',
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development'
};
