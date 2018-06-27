
export class UserServiceClient {
  LOCAL_URL = 'http://localhost:3000';
  HEROKU_URL = 'https://nodejs-mongo-assignment5.herokuapp.com';

  findUserById(userId) {
    return fetch(this.HEROKU_URL + '/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.HEROKU_URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch( this.HEROKU_URL + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch( this.HEROKU_URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  updateUser(user) {
    return fetch( this.HEROKU_URL + '/api/profile',
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
    return fetch(this.HEROKU_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
