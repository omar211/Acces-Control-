import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { analyzeAccessPatterns } from './server/utils/policyUpdater.js';

dotenv.config(); // Load .env variables

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");

    const result = await analyzeAccessPatterns();
    console.log("📊 Access Pattern Analysis Result:");
    console.log(JSON.stringify(result, null, 2));

    await mongoose.disconnect();
    console.log("❌ Disconnected from MongoDB");
  } catch (err) {
    console.error("❌ Error running analysis:", err);
  }
};

run();
