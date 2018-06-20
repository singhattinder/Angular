
export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  updateUser(user) {
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/profile',
      {
        method: 'put',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
  }

  createUser(username, password, firstName, lastName, email, userType) {
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      userType: userType
    };
    return fetch('https://nodejs-mongo-assignment5.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
