import {Album} from "@/libs/Album";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function AlbumCard({album}: {album: Album}) {
    return <Card key={album.title} sx={{ maxWidth: 350, maxHeight: 450 }}>
        <CardMedia sx={{ height: 350, width: 350, marginX: "auto" }} image={album.photo} title={album.title} />
        <CardContent>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <Typography variant="h6" component="div">
                    {album.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {album.songs} songs
                </Typography>
            </div>
            <Typography variant="subtitle2" color="text.secondary" component="div">
                <b>{album.author}</b> - {album.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Playback time: {album.playbackTime}
            </Typography>
        </CardContent>
        {album.year}
    </Card>;
}