const { createClient } = require("@astrajs/collections");
const collection = "posts";

exports.handler = async function (event, context, callback) {
  // create an Astra client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    // create a user subdocument
    await posts.create("a post", {
      title: "my first post",
    });
    return {
      statusCode: 200,
    };
  } catch (e) {
    console.log("error" + e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
