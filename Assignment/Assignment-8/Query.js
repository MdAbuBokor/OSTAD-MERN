// Import necessary MongoDB libraries and establish a connection

const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url =
  "mongodb+srv://AbuBokor:25800852@cluster0.qblic3f.mongodb.net/?retryWrites=true&w=majority";

// Database name
const dbName = "craftShop";

// Create a new collection
async function createCollection(collectionName) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.createCollection(collectionName);
    console.log(`Collection "${collectionName}" created successfully.`);
  } catch (error) {
    console.error(`Error creating collection: ${error}`);
  } finally {
    client.close();
  }
}

// Remove a collection from the database
async function removeCollection(collectionName) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection(collectionName).drop();
    console.log(`Collection "${collectionName}" removed successfully.`);
  } catch (error) {
    console.error(`Error removing collection: ${error}`);
  } finally {
    client.close();
  }
}

// Insert a single document into a collection
async function insertDocument(collectionName, document) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).insertOne(document);
    console.log(`Document inserted with ID: ${result.insertedId}`);
  } catch (error) {
    console.error(`Error inserting document: ${error}`);
  } finally {
    client.close();
  }
}

// Delete/remove a single document from the collection
async function deleteDocument(collectionName, query) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).deleteOne(query);
    console.log(`Deleted ${result.deletedCount} document(s)`);
  } catch (error) {
    console.error(`Error deleting document: ${error}`);
  } finally {
    client.close();
  }
}

async function ab(a, b) {
  console.log(a + b);
}

module.exports = {
  ab,
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
};
