const db = db.getSiblingDB(process.env.SUNDALAND_MONGODB_DATABASE);

db.createUser({
    user: process.env.SUNDALAND_MONGODB_USER,
    pwd: process.env.SUNDALAND_MONGODB_PASSWORD,
    roles: [{ role: "readWrite", db: process.env.SUNDALAND_MONGODB_DATABASE }]
});

db.createCollection("products");