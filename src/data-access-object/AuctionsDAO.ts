import { Collection, Db, MongoClient } from "mongodb";

//reference to the database
let db: Db;
let auctions: Collection;

export default class AuctionsDAO {
  /**
   *
   * @param client
   * @returns
   */
  static async connectDB(client: MongoClient) {
    if (db && auctions) {
      return;
    }
    try {
      db = await client.db(process.env.DB_NAME);
      auctions = db.collection("auctions");
    } catch (err) {
      console.log("Unable to conect to database", err);
    }
  }

  static async getAuctions() {}
}
