import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
    storeClasses(state, booking) {
      state.user.classes.push(booking);
    }
  },
  actions: {
    bookClass({ commit }, bookingData) {
      //const userId = this.state.userId;
      //const url = `http://localhost:3002/users/+${userId}`;

      console.log(bookingData);
      const fakeResponse = bookingData;

      axios
        .post("http://localhost:3002/users", bookingData)
        .then(response => {
          console.log(response);
          commit("storeClasses", {
            fakeResponse
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    signup({ commit }, authData) {
      console.log(commit);
      const url = "http://localhost:3002/users";

      const token = 43211;
      const userId = "User id";

      axios
        .post(url, authData)
        .then(response => {
          console.log(response);
          commit("authUser", {
            token,
            userId
          });
          localStorage.setItem("token", token);
          router.replace("/dashboard").catch(error => console.log(error));
        })
        .catch(error => {
          console.log(error);
        });
    },
    login({ commit }, authData) {
      console.log(commit);
      const url = "http://localhost:3002/users";
      const token = 43211;
      const userId = "User id";

      axios
        .post(url, authData)
        .then(response => {
          console.log(response);
          commit("authUser", {
            token,
            userId
          });
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          router.replace("/dashboard").catch(error => console.log(error));
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      router.replace("/user").catch(error => console.log(error));
    },
    fetchUser({ commit }) {
      const url = "http://localhost:3002/users";
      if (!this.state.idToken) {
        return;
      }
      axios
        //OBS POST!!!
        .post(url, { token: this.state.idToken })
        .then(response => {
          console.log(response);
          const responseUser = {
            name: "Rasmus",
            email: "rasmus@mail.com",
            role: "student",
            image: null,
            classes: []
          };
          commit("storeUser", responseUser);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
