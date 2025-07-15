import express from "express";
import songsRouter from "./routes/songs";
import playlistsRouter from "./routes/playlist";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🎶 Welcome to the Music Player API!");
});

app.use("/songs", songsRouter);
app.use("/playlists", playlistsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
