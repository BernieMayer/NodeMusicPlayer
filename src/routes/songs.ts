import express, { Request, Response } from "express";
import { songs } from "../data/mockData";
import { Song } from "../types";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json(songs);
});

router.post("/", (req: Request, res: Response) => {
  const { title, artist } = req.body;
  const newSong: Song = { id: songs.length + 1, title, artist };
  songs.push(newSong);
  res.status(201).json(newSong);
});

export default router;
