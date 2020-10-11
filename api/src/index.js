import expressSession from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";
import { REDIS_OPTIONS, PORT, MONGO_URI, MONGO_OPTIONS } from "./config";
import { createApp } from "./app";
(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const RedisStore = connectRedis(expressSession);

  const client = new Redis({
    ...REDIS_OPTIONS,
  });

  const store = new RedisStore({ client });
  // Redis.on("error", (err) => {
  //   console.log("Caught an error ======================");
  // });

  const app = createApp(store);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
})();
