import {NextResponse} from "next/server";
import {SheetsConnection} from "sheets-simplified";
import {googleAuthWrapper} from "@/libs/google-auth-wrapper";
import {Album} from "@/libs/Album";

const sheetsConnection = new SheetsConnection({
    auth: googleAuthWrapper,
    spreadsheetId: process.env.SPREADSHEET_ID!,
    sheet: "Albums",
    range: "A2:F",
});

export async function GET() {
    const res = await sheetsConnection.get();

    if(!res.data.values) return Response.error();

    const albums : Album[] = res.data.values.map((album: string[]) => {
        return {
            title: album[0],
            year: album[1],
            playbackTime: album[2],
            songs: Number(album[3]),
            photo: album[4],
            author: album[5],
        }
    });

    return NextResponse.json(albums);
}