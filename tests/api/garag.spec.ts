import { expect, test } from "@playwright/test";
import createAuthCookies from "../../utils/api/cookies/createAuthCookies";
import { users } from "../../test-data/credentials";

test.describe('Garage API test with SID beforeAll', () => {
  
    let authHeaders: { [key: string]: string }; 

    test.beforeAll(async () => {
        authHeaders = await createAuthCookies(users.mainUser.email, users.mainUser.password);
        console.log('Auth Headers:', authHeaders);
    });

    test('GET /cars is a private request with auth', async ({ request}) => {
        const response = await request.get('/api/cars/', {
         headers:{
            'Cookie': `sid=${authHeaders['Cookie']}`
         }
        });
    
        const body = await response.json();
        console.log(body);
    });
});
