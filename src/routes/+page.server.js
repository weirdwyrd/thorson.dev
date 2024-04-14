import { GoogleAuth } from 'google-auth-library';
import { SHEETS_JSON } from '$env/static/private';

const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
const auth = new GoogleAuth({
    scopes: SCOPES
});

// fetch quotes from Google Sheets, and TODO: save for client access
export async function load() {
    const client = await auth.fromJSON(JSON.parse(SHEETS_JSON));
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1VREnjjMCN19Ud6othFbfpxvJx6F51z-t-iMFpCm0OBU/values/Light!A1:D2000`;
    const res = await client.request({url})

    const quoteData = res.data; 
    return quoteData;
}