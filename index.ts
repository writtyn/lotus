import album_track from './album_track.json' with { type: 'json' };
import artist from './artist.json' with { type: 'json' };
import combined_artists from './combined_artists.json' with { type: 'json' };
import redirects from './redirects.json' with { type: 'json' };
import romanised_artists from './romanised_artists.json' with { type: 'json' };

interface album_track_props {
    version: string,
    [k: string]: string | Record<string, string>
}

const typed_album_track = album_track as album_track_props;

export {
    typed_album_track as album_track,
    artist,
    combined_artists,
    redirects,
    romanised_artists
}
