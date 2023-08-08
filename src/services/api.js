import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

//UserRequests

function postSignIn(obj, success, failure) {
  axios
    .post("/sign-in", obj)
    .then((res) => {
      success(res.data);
    })
    .catch((error) => {
      alert(error.response.data);
      failure();
    });
}
function postSignUp(obj, success, failure) {
  axios
    .post("/sign-up", obj)
    .then(() => {
      success();
    })
    .catch((error) => {
      alert(error.response.data);
      failure();
    });
}
function deleteSignOut(auth, success) {
  axios
    .delete("/sign-out", tokenProvider(auth))
    .then(() => {
      success();
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

export { postSignIn, postSignUp, deleteSignOut };
