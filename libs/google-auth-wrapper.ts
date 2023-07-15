import {GoogleSheetsAuth} from "sheets-simplified";

const key = process.env.GOOGLE_KEY!.toString().split('\\n').map(i => i + "\n").join("");

const googleAuthWrapper = new GoogleSheetsAuth({
    email: process.env.GOOGLE_EMAIL!,
    key: key
}).login();

export { googleAuthWrapper };