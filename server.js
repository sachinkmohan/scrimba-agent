import express from "express";
import { runChatCompletionsDemo } from "./chat-completions.js";
import { runResponsesDemo } from "./responses.js";

const app = express();

app.post("/api/chat-completions", async (_req, res) => {
  try {
    await runChatCompletionsDemo();
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Something went wrong. Please try again." });
  }
});

app.post("/api/responses", async (_req, res) => {
  try {
    await runResponsesDemo();
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Something went wrong. Please try again." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}`);
});
