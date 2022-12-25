import express, { Request, Response } from "express";
import { Template } from "ejs"
import path from "path";

const app = express();
const viewsPath = path.resolve(__dirname, "views");
const buildPath = path.resolve(__dirname, "../client/dist");
app.use(express.json());

app.use("/public", express.static("public"));
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// ? API Route
app.get('/api', (req: Request, res: Response) => {
  res.send("API route");
});

app.use(express.static(buildPath));

// ? React App Route
app.use("*", (req: Request, res: Response) => {
  res.sendFile(
    path.resolve(__dirname, "../client/dist", "index.html")
  );
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
