import fetch from "node-fetch";
import fs from "fs";

const CODEWARS_USERNAME = "Navid-007"; // Replace with your Codewars username
const FILE_NAME = "codewars-progress.md";

async function fetchCodewarsData() {
  const url = `https://www.codewars.com/api/v1/users/${CODEWARS_USERNAME}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function updateLog() {
  const data = await fetchCodewarsData();
  const today = new Date().toISOString().split("T")[0];
  const logEntry = `\n- **Date:** ${today}\n  - Total Challenges Completed: ${data.codeChallenges.totalCompleted}\n`;

  // Append to the markdown file
  fs.appendFileSync(FILE_NAME, logEntry);

  console.log("Log updated!");
}

updateLog().catch(console.error);
