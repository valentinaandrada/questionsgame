import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.resolve("./api/questions.json"); 
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const questions = JSON.parse(fileContent);
    return res.status(200).json(questions); 

  } catch (error) {
    console.error("Error loading questions:", error);
    return res.status(500).json({ error: "Failed to load questions" });
  }
}
