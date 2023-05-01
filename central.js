console.log("before");
setTimeout(() => {
  console.log("getting a user from a database 1000");
}, 1000);
console.log("after");

function getUser(number, callback) {
  setTimeout(() => {
    console.log("getting a user from a database 500");
    callback({ id: number, username: "supermario" });
  }, 500);
}

function getRepositories(user, callback) {
  setTimeout(() => {
    console.log("getting repositories...");
    callback([`${user.username}1`, `${user.username}2`, `${user.username}3`]);
  }, 500);
}

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("getting commits...");
    callback([
      `${repos[0]} - commit1`,
      `${repos[0]} - commit2`,
      `${repos[0]} - commit3`,
    ]);
  }, 500);
}

getUser(1, (user) => {
  console.log(user);
  getRepositories(user, repositories);
});

function commits(commits) {
  console.log(commits);
}

function repositories(repos) {
  console.log(repos);
  getCommits(repos, commits);
}

function user(user) {
  console.log(user);
  getRepositories(user, repositories);
}

getUser(1, user);
const p = new Promise((resolve, reject) => {
  resolve(1);
  reject(new Error("error message"));
});

p.then((result) => console.log(result)).catch((result) => console.log(result));