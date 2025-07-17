import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const playlists = await prisma.playlist.findMany({
    include: { songs: true },
  });
  res.json(playlists);
});

router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  const playlist = await prisma.playlist.create({
    data: { name },
  });
  res.status(201).json(playlist);
});

router.post("/:playlistId/songs", async (req: Request, res: Response) => {
  const playlistId = parseInt(req.params.playlistId);
  const { songId } = req.body;

  const playlist = await prisma.playlist.update({
    where: { id: playlistId },
    data: {
      songs: {
        connect: { id: songId },
      },
    },
    include: { songs: true },
  });

  res.status(200).json(playlist);
});

export default router;
