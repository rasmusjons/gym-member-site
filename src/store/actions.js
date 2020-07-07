import axios from "axios";
import router from "../router/index";

export const bookClass = ({ state, dispatch }, bookingData) => {
  const url = "https://membersite-21e51.firebaseio.com/classes.json";
  const userID = localStorage.getItem("fetchUserID");
  const data = { userID, ...bookingData };

  axios
    .post(url + "?auth=" + state.idToken, data)
    .then(response => {
      console.log(response);
      dispatch("fetchClasses");
    })
    .catch(error => {
      console.log(error);
    });
};

export const cancelClass = ({ state, dispatch }, bookingId) => {
  const url = "https://membersite-21e51.firebaseio.com/classes/";

  axios
    .delete(url + bookingId + ".json" + "?auth=" + state.idToken)
    .then(response => {
      console.log(response);
      dispatch("fetchClasses");
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchClasses = ({ commit, state }) => {
  const url = "https://membersite-21e51.firebaseio.com/classes.json";
  if (!state.idToken) {
    return;
  }
  const userID = localStorage.getItem("fetchUserID");
  axios
    .get(url + "?auth=" + state.idToken)
    .then(response => {
      const responseData = response.data;
      const classes = [];
      for (let key in responseData) {
        const singleClass = responseData[key];
        singleClass.id = key;
        classes.push(singleClass);
      }

      let classList = [];
      classes.forEach(aClass => {
        if (aClass.userID === userID) {
          classList.push(aClass);
        }
      });
      console.log("classes", classList);
      commit("storeClasses", classList);
    })
    .catch(error => console.log(error));
};

// AUTH  AND USER -------------->>>>

export const setLogoutTimer = ({ dispatch }, expirationTime) => {
  setTimeout(() => {
    dispatch("logout");
  }, expirationTime * 1000);
};

export const login = ({ commit, dispatch }, authData) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRXKeC7nBwzeqBzfLBsz19d0AitLBLlds";

  axios
    .post(url, authData)
    .then(response => {
      commit("authUser", {
        token: response.data.idToken,
        userId: response.data.localId
      });
      const now = new Date();
      const expirationDate = new Date(now.getTime() + response.data.expiresIn);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      localStorage.setItem("fetchUserID", authData.email);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch("fetchUser", authData.email);
      dispatch("setLogoutTimer", response.data.expiresIn);

      router.replace("/dashboard").catch(error => console.log(error));
    })
    .catch(error => {
      commit("loginFailed");
      console.log(error);
    });
};

export const logout = ({ commit }) => {
  commit("clearAuthData");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  router.replace("/user").catch(error => console.log(error));
};

export const signup = ({ commit, dispatch }, formData) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRXKeC7nBwzeqBzfLBsz19d0AitLBLlds";

  axios
    .post(url, {
      email: formData.email,
      password: formData.password1,
      returnSecureToken: true
    })
    .then(response => {
      commit("authUser", {
        token: response.data.idToken,
        userId: response.data.localId
      });
      dispatch("storeUser", formData);
      dispatch("setLogoutTimer", response.data.expiresIn);

      const now = new Date();
      const expirationDate = new Date(now.getTime() + response.data.expiresIn);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      localStorage.setItem("expirationDate", expirationDate);
      router.replace("/dashboard").catch(error => console.log(error));
    })
    .catch(error => {
      console.log(error);
    });
};
export const storeUser = ({ state, dispatch }, userData) => {
  if (!state.idToken) {
    return;
  }
  const url = "https://membersite-21e51.firebaseio.com/user.json";
  axios
    .post(url + "?auth=" + state.idToken, userData)
    .then(response => {
      const fetchUserID = response.data.name;
      localStorage.setItem("fetchUserID", fetchUserID);
      dispatch("fetchUser", fetchUserID);
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchUser = ({ commit, state }, identification) => {
  const url = "https://membersite-21e51.firebaseio.com/user.json";
  if (!state.idToken) {
    return;
  }
  axios
    .get(url + "?auth=" + state.idToken)
    .then(response => {
      const data = response.data;
      const users = [];
      for (let key in data) {
        const user = data[key];
        user.id = key;
        users.push(user);
      }

      users.forEach(id => {
        if (id.id === identification || id.email === identification) {
          commit("storeUserMutation", id);
        }
      });
    })
    .catch(error => {
      commit("clearAuthData");
      console.log(error);
    });
};

export const tryAutoLogin = ({ commit, dispatch }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const expirationDate = localStorage.getItem("expirationDate");
  const now = new Date();
  if (now >= expirationDate) {
    commit("clearAuthData");
    return;
  }
  const userId = localStorage.getItem("userId");
  commit("authUser", {
    token: token,
    userId: userId
  });
  const id = localStorage.getItem("fetchUserID");
  dispatch("fetchUser", id);
};

export const updateUser = ({ commit, state }, updateData) => {
  const url = "https://membersite-21e51.firebaseio.com/user.json";

  const userData = { ...state.user, ...updateData };
  axios
    .post(url + "?auth=" + state.idToken, userData)
    .then(response => {
      console.log(response);
      commit("updateUserInStore", updateData);
    })
    .catch(error => {
      console.log(error);
    });
};

///NEWS
export const fetchNews = ({ commit, state }) => {
  const url = "https://membersite-21e51.firebaseio.com/news.json";
  if (!state.idToken) {
    return;
  }
  axios
    .get(url + "?auth=" + state.idToken)
    .then(response => {
      const data = response.data;
      const news = [];
      for (let key in data) {
        const user = data[key];
        user.id = key;
        news.push(user);
      }

      commit("storeNews", news);
    })
    .catch(error => console.log(error));
};

export const removeNews = ({ state, dispatch }, newsId) => {
  const url = "https://membersite-21e51.firebaseio.com/news/";

  axios
    .delete(url + newsId + ".json" + "?auth=" + state.idToken)
    .then(response => {
      console.log(response);
      dispatch("fetchNews");
    })
    .catch(error => {
      console.log(error);
    });
};
