"use client";
import {Box, Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {Album} from "@/libs/Album";
import AlbumCard from "@/components/AlbumCard";

export default function HomePage() {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {
        const res = await fetch("http://localhost:3000/api/albums").then(res => res.json());

        setAlbums(res);
    };


    useEffect(() => {
        try {
            fetchAlbums();
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <Box>
            <h1>Albums</h1>
            {albums.length > 0 ? <Grid container spacing={2} style={{margin: "auto", justifyContent: "center"}}>
                    {albums.map((album: Album) => {
                        return <Grid item xs={6} md={4}><AlbumCard album={album}/></Grid>;
                    })}
                    <Grid item xs={6} md={4}>
                        <Button size="large" sx={{ width: 350, height: 450 }} variant="outlined">Add new album +</Button>
                    </Grid>
                </Grid> :
                <p>Loading...</p>}
        </Box>
    );
}
