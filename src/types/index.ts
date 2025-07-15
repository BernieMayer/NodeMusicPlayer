export interface Song {
  id: number;
  title: string;
  artist: string;
}

export interface Playlist {
  id: number;
  name: string;
  songs: number[];
}
