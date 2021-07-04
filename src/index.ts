import app from "./server";
import { config } from "dotenv";
//load envrioment variables
config();

//connect to DB
import { MongoClient, MongoError } from "mongodb";

const client: MongoClient = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(async (err: MongoError) => {
  if (err) {
    console.log(err.errmsg);
    process.exit(1);
  }
  //start the server
  const port = process.env.PORT || 3333;
  app.listen(port, () =>
    console.log(`API available on http://localhost:${port}`)
  );
});
