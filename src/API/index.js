const baseUrl = "https://strangers-things.herokuapp.com/api/2304-ftb-et-web-ft";

export async function fetchPosts(token) {
  try {
    let resposne = await fetch(`${baseUrl}/posts`,{
      headers : {
        'Content-Type' : 'application.json',
        'Authorization' : `Bearer ${token}`
      }
    });
    let results = await resposne.json();
    return results.data.posts;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(username, password) {
  try {
    let response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    let results = await response.json();
    return results.data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(username, password){
  try {
    let response = await fetch(`${baseUrl}/users/login`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        user : {
          username : username,
          password : password
        }
      })
    })
    let result = await response.json()
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function myData(token) {
  try {
    let response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(
  token,
  title,
  description,
  price,
  location,
  willDeliver
) {
  try {
    let response = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: `${willDeliver}`,
        },
      }),
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(
  token,
  postId,
  title,
  description,
  price,
  location,
  willDeliver
) {
  try {
    let response = await fetch(`${baseUrl}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(token, postId) {
  try {
    let response = await fetch(`${baseUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function postMessage(token, postId, message) {
  try {
    let response = await fetch(`${baseUrl}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
