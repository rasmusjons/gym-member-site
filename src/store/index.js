import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    userImage: null,
    classes: null,
    news: null,
    loginFailed: false
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUserMutation(state, user) {
      state.user = user;
    },
    updateUserInStore(state, updateData) {
      const keys = Object.keys(updateData);
      const values = Object.values(updateData);

      for (let index = 0; index < keys.length; index++) {
        state.user[keys[index]] = values[index];
      }
    },
    loginFailed(state) {
      state.loginFailed = true;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      state.user = null;
      state.userImage = null;
      state.classes = null;
      router.push("/user");
    },
    storeClasses(state, classes) {
      state.classes = [...classes];
    },
    setUserImageUrl(state, url) {
      state.userImage = url;
    },
    storeNews(state, news) {
      state.news = news;
    }
  },
  actions,
  getters: {
    user(state) {
      return state.user;
    },
    classes(state) {
      return state.classes;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
    news(state) {
      return state.news;
    },
    getloginFailed(state) {
      return state.loginFailed;
    }
  }
});
