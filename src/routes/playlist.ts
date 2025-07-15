import express, { Request, Response } from "express";
import { playlists, songs } from "../data/mockData";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json(playlists);
});

router.post("/:playlistId/songs", (req: Request, res: Response) => {
  const playlistId = parseInt(req.params.playlistId);
  const playlist = playlists.find(p => p.id === playlistId);

  if (!playlist) {
    return res.status(404).json({ error: "Playlist not found" });
  }

  const { songId } = req.body;
  const songExists = songs.find(s => s.id === songId);

  if (!songExists) {
    return res.status(400).json({ error: "Song does not exist" });
  }

  playlist.songs.push(songId);
  res.status(200).json(playlist);
});

export default router;
