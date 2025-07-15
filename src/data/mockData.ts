import { Song, Playlist } from "../types";

export let songs: Song[] = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen" },
  { id: 2, title: "Imagine", artist: "John Lennon" },
];

export let playlists: Playlist[] = [
  { id: 1, name: "Favorites", songs: [1, 2] },
];
