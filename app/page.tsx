"use client";
import {Box, Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {Album} from "@/libs/Album";
import AlbumCard from "@/components/AlbumCard";
import CreateAlbumCard from "@/components/CreateAlbumCard";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Edit} from "@mui/icons-material";

export default function HomePage() {
    const [albums, setAlbums] = useState([]);
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [editMode, setEditMode] = useState(false);

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
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center"><h1>Albums</h1><Edit style={{ cursor: "pointer" }} onClick={() => setEditMode(!editMode)}/></Box>
            {albums.length > 0 ? <Grid container spacing={2} style={{margin: "auto", justifyContent: "center"}}>
                    {albums.map((album: Album) => {
                        return <Grid item xs={6} md={4}><AlbumCard album={album} editMode={editMode}/></Grid>;
                    })}
                    <Grid item xs={6} md={4}>
                        {!showCreateCard ? <Button size="large" sx={{width: 350, height: 450}} variant="outlined"
                                 onClick={() => setShowCreateCard(true)}>Add new album +</Button> : <CreateAlbumCard setShowCreateCard={setShowCreateCard} fetchAlbums={fetchAlbums}/>}
                    </Grid>
                </Grid> :
                <p>Loading...</p>}
        </Box>
    );
}
