import {Album} from "@/libs/Album";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useState} from "react";

export default function AlbumCard({album}: {album: Album}) {
    const [showEditMenu, setShowEditMenu] = useState<boolean>(false);

    return <Card style={{ position: "relative" }} key={album.title} sx={{ maxWidth: 350, maxHeight: 450 }} onMouseEnter={() => setShowEditMenu(true)} onMouseLeave={() => setShowEditMenu(false)}>
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
        <div style={{ width: "350px", height: "450px", backgroundColor: "black", opacity: 0.7, zIndex: 10, position: "absolute", top: 0, left: 0, display: showEditMenu ? "block" : "none" }}>

        </div>
    </Card>;
}