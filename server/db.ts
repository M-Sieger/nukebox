import fs from "fs/promises";
import { APITrack } from "../utils/api";

type DB = {
  tracks: APITrack[];
};

const DB_PATH = "./server/db.json";

export async function readDB(): Promise<DB> {
  const dbJSON = await fs.readFile(DB_PATH, "utf-8");
  const db: DB = JSON.parse(dbJSON);
  return db;
}

export async function writeDB(db: DB) {
  const dbJSON = JSON.stringify(db);
  await fs.writeFile("./server/db.json", dbJSON);
}
