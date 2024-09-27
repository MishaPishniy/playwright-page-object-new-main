import { request } from "@playwright/test";


export default async function deleteUser(header) {
    const contextRequest = await request.newContext();
    const deleteUserRequest = await contextRequest.delete('/api/users', {
        headers: header
    });
    console.log(await deleteUserRequest.json());

    // console.log((await deleteUserRequest).json())

}