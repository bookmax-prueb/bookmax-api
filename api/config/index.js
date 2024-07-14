const database = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  name: process.env.DB_NAME
}

const token = {
  secret: process.env.TOKEN_SECRET
}

export { database, token }
