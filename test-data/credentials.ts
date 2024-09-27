import generateRandomEmail from "../utils/generateRandomEmail";

export const users = {
    mainUser: {
        name: "TestName",
        lastName: "TestLastName",
        email: "PyshnyiM@test.com",
        password: "Qwerty12345",
    },
    user2: {
        name: "TestName2",
        lastName: "TestLastName2",
        email: "PyshnyiM@test.com",
        password: "Qwerty12345",
    },

}
// export const correctEmail = '';
export const incorrectEmail = generateRandomEmail();
// export const correctPassword = '';
export const incorrectPassword = 'wrongPassword';

// export const correctEmail2 = PyshnyiM@test.com';
// export const correctPassword2 = "";