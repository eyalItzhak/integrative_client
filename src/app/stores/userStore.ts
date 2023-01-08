import { makeAutoObservable} from "mobx";
import { history } from "../..";
import agent from "../../api/agent";
// import agent from "../api/agent";
import { UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
    user: UserFormValues | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            console.log(user);
            history.push('/Services');
            store.modalStore.closeModal();
            
            console.log(creds);
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        // store.commonStore.setToken(null);
        // window.localStorage.removeItem('jwt');
        // this.user = null;
        // history.push('/');
        console.log("logut");
    }

    getUser = async () => {
        try {
            // const user = await agent.Account.current();
            // runInAction(() => this.user = user);
            console.log("get user");
        } catch (error) {
            console.log(error);
        }
    }

    register = async (creds: UserFormValues) => {
        try {
             const user = await agent.Account.register(creds);
             console.log(user);
            history.push('/Services');
            store.modalStore.closeModal();
            
        } catch (error) {
            throw error;
        }
    }


}