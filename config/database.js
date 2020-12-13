module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations" : [
    "appAdocao/database/migrations/**/*.js"
  ],
}