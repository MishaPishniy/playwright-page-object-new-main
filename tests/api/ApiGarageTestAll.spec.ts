import test, { expect } from "@playwright/test";
import { users } from "../../test-data/credentials";
import createAuthCookies from "../../utils/api/cookies/createAuthCookies";
import generateHeaderWithCookies from "../../utils/api/cookies/generateHeaderWithCookies";
import getUserCarsList from "../../utils/api/garage/getUserCarsList";

test('/cars/models public request', async ({ request }) => {
    const response = await request.get('/api/cars/models');
    const body = await response.json();
    const allCars = body.data;
    const carTitle = allCars[10].title;
    expect(carTitle).toEqual('Fiesta');
    expect(allCars.length).toEqual(23);
    expect(body.status).toEqual('ok');
});

test('/cars private request', async ({ request }) => {
    console.log('-------------Storage State BEFORE--------------');
    console.log(await request.storageState());
    console.log('---------------------------');

    const authRequest = await request.post('/api/auth/signin', {
        data: {
            "email": users.mainUser.email,
            "password": users.mainUser.password,
            "remember": true
        }
    })


    const response = await request.get('/api/cars/');
    const body = await response.json();
    console.log(body);
    console.log('-------------Storage State AFTER--------------');
    console.log(await request.storageState());
    console.log('---------------------------');
});


//   7 passed (8.3s)
test.describe('GARAGE API TESTS with auth in BeforeEach', () => {

    test.beforeEach(async ({ request }) => {
        const authRequest = await request.post('/api/auth/signin', {
            data: {
                "email": users.mainUser.email,
                "password": users.mainUser.password,
                "remember": true
            }
        })
    })

    test('/cars private request with auth in BeforeEach 1', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 2', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 3', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 4', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 5', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });
    test('/cars private request with auth in BeforeEach 6', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 7', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

})

test.describe('GARAGE API TESTS with auth in BeforeAll', () => {

    let authHeader;

    test.beforeAll(async () => {
        authHeader = await generateHeaderWithCookies(users.mainUser.email, users.mainUser.password);
    })



    test('/cars private request with auth in BeforeAll 1', async ({ request }) => {
        const response = getUserCarsList(authHeader);
        console.log(await response);
    })


    test('/cars private request with auth in BeforeAll 2', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: authHeader
            }
        );
        const body = await response.json();
        console.log(body);
    })


    // test('/cars private request with auth in BeforeAll 3', async ({ request }) => {
    //     const response = await request.get('/api/cars/',
    //         {
    //             headers: {
    //                 'Cookie': `sid=${sid}`
    //             }
    //         }
    //     );
    //     const body = await response.json();
    //     console.log(body);
    // })


    // test('/cars private request with auth in BeforeAll 4', async ({ request }) => {
    //     const response = await request.get('/api/cars/',
    //         {
    //             headers: {
    //                 'Cookie': `sid=${sid}`
    //             }
    //         }
    //     );
    //     const body = await response.json();
    //     console.log(body);
    // })


    // test('/cars private request with auth in BeforeAll 5', async ({ request }) => {
    //     const response = await request.get('/api/cars/',
    //         {
    //             headers: {
    //                 'Cookie': `sid=${sid}`
    //             }
    //         }
    //     );
    //     const body = await response.json();
    //     console.log(body);
    // })


    // test('/cars private request with auth in BeforeAll 6', async ({ request }) => {
    //     const response = await request.get('/api/cars/',
    //         {
    //             headers: {
    //                 'Cookie': `sid=${sid}`
    //             }
    //         }
    //     );
    //     const body = await response.json();
    //     console.log(body);
    // })


    // test('/cars private request with auth in BeforeAll 7', async ({ request }) => {
    //     const response = await request.get('/api/cars/',
    //         {
    //             headers: {
    //                 'Cookie': `sid=${sid}`
    //             }
    //         }
    //     );
    //     const body = await response.json();
    //     console.log(body);
    // })



})