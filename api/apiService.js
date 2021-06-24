const users = [{ id: 1, username: 'evam', password: 'evam' }];
const resultGet = "5ef9a217291ff37768d49ab3";

module.exports = {
    authenticate,
    getResult,
    postResult
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getResult() {

    return resultGet;
}

async function postResult() {
    
    return true;
}
