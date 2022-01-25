import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"walker.jade@gmail.com", password: "Polaris600$"});

    assert.equal(loginToken.length,36);
})