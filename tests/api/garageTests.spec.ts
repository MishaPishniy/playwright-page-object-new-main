import { expect, test } from "@playwright/test"
import { request } from "http";
import createAuthCookies from "../../utils/api/cookies/createAuthCookies";
import { users } from "../../test-data/credentials";

test('/cars/models is pub get request', async({request}) => {

    const respons = await request.get('/api/cars/models');
    const body =  await respons.json();
    const allCars = body.data;
    const carTitle = allCars[10].title;
    expect(carTitle).toEqual('Fiesta')
    expect(allCars.length).toEqual(23)
    expect(body.status).toEqual('ok')
})

test.describe('Garage API test wiht sid beforEach', ()=>{


    test.beforeEach(async ({request})=>{

    const authRequest = await request.post('/api/auth/signin', {
        data: {
                "email": "PyshnyiM@test.com",
                "password": "Qwerty12345",
                "remember": true
              }
        })
    })
    test('/cars is privat get request wit aut befoeach1', async({request}) => {
        const respons = await request.get('/api/cars/');
        const body =  await respons.json();
        console.log(body) 
    })
    test('/cars is privat get request wit aut befoeach2', async({request}) => {
        const respons = await request.get('/api/cars/');
        const body =  await respons.json();
        console.log(body) 
    })
    test('/cars is privat get request wit aut befoeach3', async({request}) => {
        const respons = await request.get('/api/cars/');
        const body =  await respons.json();
        console.log(body) 
    })
    test('/cars is privat get request wit aut befoeach4', async({request}) => {
        const respons = await request.get('/api/cars/');
        const body =  await respons.json();
        console.log(body) 
    })
    test('/cars is privat get request wit aut befoeach5', async({request}) => {
        const respons = await request.get('/api/cars/');
        const body =  await respons.json();
        console.log(body) 
    })

})

test.describe('Garage API test wiht sid beforALL', ()=>{

    let sid: string;

  test.beforeAll(async ({request})=>{

      const authRequest = await request.post('/api/auth/signin', {
        data: {
                "email": "PyshnyiM@test.com",
                "password": "Qwerty12345",
                "remember": true
              }
        })

        const cookies = authRequest.headers()['set-cookies']
        console.log(authRequest.headers())
        if (cookies) {
            const cookiesArray = cookies.split('\n')
            for(const cookie of cookiesArray){
                if(cookie.trim().startsWith("sid=")){
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                        break;
                }
            }
        } 
    })


    test('GET /cars is a private request with auth', async ({ request }) => {
        const response = await request.get('/api/cars/', {
          headers: {
            'Cookie': `sid=${sid}`
          }
        });
    
        const body = await response.json();
        console.log(body);
      });
})