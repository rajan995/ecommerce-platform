import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'ecommerce';

let client: MongoClient;
let db: Db;

export async function connectDb(): Promise<Db> {
  if (db) return db;

  try {
    console.log(`Connecting to MongoDB at ${MONGODB_URI}...`);
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log('MongoDB connected successfully');
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function disconnectDb(): Promise<void> {
  if (client) {
    await client.close();
    client = undefined;
    db = undefined;
    console.log('MongoDB connection closed');
  }
}

export { connectDb, disconnectDb };
