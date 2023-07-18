import {NextResponse} from "next/server";
import {SheetsConnection} from "sheets-simplified";
import {googleAuthWrapper} from "@/libs/google-auth-wrapper";
import {ValueInputOption} from "sheets-simplified/build/types/types";

const sheetsConnection = new SheetsConnection({
    auth: googleAuthWrapper,
    spreadsheetId: process.env.SPREADSHEET_ID!,
    sheet: "Albums",
    range: "A1:F",
    includeValuesInResponse: true,
    valueInputOption: ValueInputOption.USER_ENTERED,
    firstRowAsHeader: true,
});

export async function GET() {
    const res = await sheetsConnection.get();

    if(!res.data.values) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

    return NextResponse.json(res.data.values);
}

export async function POST(request: Request) {
    const body = await request.json();

    if(!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

    const res = await sheetsConnection.append([[
        body.title,
        body.year,
        body.playbackTime,
        body.songs,
        body.photo,
        body.author,
    ]]);

    return NextResponse.json(res);
}