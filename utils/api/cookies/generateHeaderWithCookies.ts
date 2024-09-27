import createAuthCookies from "./createAuthCookies";

export default async function generateHeaderWithCookies(email: string, password: string) {
    const sid = await createAuthCookies(email, password);
    return { 'Cookie': `sid=${sid}` }
}