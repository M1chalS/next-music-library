"use client";
import {Button, Card, CardContent, TextField} from "@mui/material";
import {useState} from "react";

export default function CreateAlbumCard({setShowCreateCard, fetchAlbums}: { setShowCreateCard: (show: boolean) => void, fetchAlbums: () => void }) {
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [playbackTime, setPlaybackTime] = useState<string>("");
    const [songs, setSongs] = useState<number|null>(null);
    const [photo, setPhoto] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const handleClick = async () => {
        let photoLink = photo;

        if(!title || !year || !playbackTime || !songs || !author) {
            alert("Please fill all required fields!");
            return;
        }

        if(!photoLink) {
            photoLink = "https://picsum.photos/200";
        }

        await fetch("http://localhost:3000/api/albums", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                year,
                playbackTime,
                songs,
                photo: photoLink,
                author
            })
        });

        setShowCreateCard(false);
        fetchAlbums();
    };

    return <Card sx={{width: 350, height: 450}}>
        <CardContent style={{ display: "flex", flexDirection: "column"}}>
            <TextField style={{ margin: "0.25rem 0" }} label="Title" variant="outlined" value={title} onChange={(event) => setTitle(event.target.value)} required/>
            <TextField style={{ margin: "0.25rem 0" }} label="Date of release (YYYY-MM-DD)" variant="outlined" value={year} onChange={(event) => setYear(event.target.value)} required/>
            <TextField style={{ margin: "0.25rem 0" }} label="Playback time" variant="outlined" value={playbackTime} onChange={(event) => setPlaybackTime(event.target.value)} required/>
            <TextField style={{ margin: "0.25rem 0" }} label="Number of songs" variant="outlined" value={songs} onChange={(event) => setSongs(Number(event.target.value))} required/>
            <TextField style={{ margin: "0.25rem 0" }} label="Photo link" variant="outlined" value={photo} onChange={(event) => setPhoto(event.target.value)}/>
            <TextField style={{ margin: "0.25rem 0" }} label="Author" variant="outlined" value={author} onChange={(event) => setAuthor(event.target.value)} required/>
            <Button variant="outlined" style={{ margin: "0.25rem 0" }} onClick={handleClick}>Add new album</Button>
        </CardContent>
    </Card>;
}