export default class Web3Service {
  public register = async (username: any) => {
    await sleep(1000);

    console.log('username', username);

    const usernameId = username.split("-")[1];

    if(usernameId > 0.4) {
      return Promise.reject(`Invalid username ${username}`);
    }

    return username;
  };
}


function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}