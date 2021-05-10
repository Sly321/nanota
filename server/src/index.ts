import express, { RequestHandler } from "express";
import { register, Routes } from "./routes/routes";

const app = express();

app.use(express.json({ type: "application/json" }));
app.use(express.text({ type: "text/html" }));

register(app);

app.listen(8080, () => {
  console.log(`nanota-server is listening on: ${8080}`);
});
