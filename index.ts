import album_track from './album_track.json';
import artist from './artist.json';
import combined_artists from './combined_artists.json';
import redirects from './redirects.json';
import romanised_artists from './romanised_artists.json';

interface album_track {
    version: string,
    [k: string]: string | Record<string, string>
}

export {
    album_track as album_track,
    artist,
    combined_artists,
    redirects,
    romanised_artists
}
