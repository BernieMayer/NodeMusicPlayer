import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const songs = await prisma.song.findMany();
  res.json(songs);
});

router.post("/", async (req: Request, res: Response) => {
  const { title, artist } = req.body;
  const newSong = await prisma.song.create({
    data: { title, artist },
  });
  res.status(201).json(newSong);
});

export default router;
