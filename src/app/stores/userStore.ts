import { makeAutoObservable } from "mobx";
import { history } from "../..";
import agent from "../../api/agent";
// import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
    this.userFromLOcalstorage();
  }

  get isLoggedIn() {
    return !!this.user;
  }

  userFromLOcalstorage = () => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      this.user = JSON.parse(userJson);
      console.log("get user from localstorage");
    }
  };

  login = async (creds: UserFormValues) => {
    try {
      const getUser = await agent.Account.login(creds);
      this.saveUser(getUser);
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    localStorage.removeItem("user");
    this.user = null;
    history.push("/");
    console.log("logut");
  };

  register = async (creds: UserFormValues) => {
    try {
      const getUser = await agent.Account.register(creds);
      this.saveUser(getUser);
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  saveUser = (user: User) => {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(this.user));
    history.push("/Services");
  };
}
