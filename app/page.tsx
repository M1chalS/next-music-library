import {Grid} from "@mui/material";
import {Album} from "@/libs/Album";
import AlbumCard from "@/components/AlbumCard";

export default async function Home() {
    const res = await fetch('http://localhost:3000/api/albums', { cache: "no-store" }).then(res => res.json());

    return (
        <main>
            <article>
                <h1>Albums</h1>

                <Grid container spacing={2} style={{ margin: "auto", justifyContent: "center" }}>
                    {res.map((album: Album) => {
                        return <Grid item xs={6} md={4}><AlbumCard album={album} /></Grid>;
                    })}
                </Grid>
            </article>
        </main>
    )
}
