import { expect, request } from '@playwright/test';
import { test } from '@playwright/test';
import generateHeaderWithCookies from '../../utils/api/cookies/generateHeaderWithCookies';
import { users } from "../../test-data/credentials";
import deleteUser from '../../utils/api/users/deleteUser';
import createUser from '../../utils/api/users/createUser';

test.describe('Users removing preconditions', () => {
    let header;
    test('Remove user 1', async ({ request }) => {
        header = await generateHeaderWithCookies(users.mainUser.email, users.mainUser.password);

        const response = await deleteUser(header);
    })

});

test.describe('Users creation preconditions', () => {
    let header;
    test('Create user 1', async ({ request }) => {
        header = await generateHeaderWithCookies(users.mainUser.email, users.mainUser.password);

        const response = await createUser(users.mainUser.name, users.mainUser.lastName, users.mainUser.email, users.mainUser.password);
        //   console.log(response);
    })

});