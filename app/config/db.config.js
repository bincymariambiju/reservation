module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "anjali@1998",
    DB: "reservation",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };