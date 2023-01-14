import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { User, UserFormValues } from '../app/models/user';
import { Command, gptAnswr, limeScotter, tireScotter, Weather } from './Interfaces/command';


axios.defaults.baseURL = 'http://127.0.0.1:8082/superapp';

axios.interceptors.request.use(config => {
    return config;
})

axios.interceptors.response.use(async response => {
return response;
}, (error: AxiosError) => {
    toast.error("error");
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}


const Account = {
    login: (creds: UserFormValues) => requests.get<User>(`/users/login/2023a.Assaf.Ariely/${creds.email}`), // need to change this from string
    register :(creds: UserFormValues) => requests.post<User>(`/users`,creds)
} 

const GptOrcal = {
    getAnswer: (creds: Command) => requests.post<gptAnswr>(`/miniapp/chat`,creds), // need to change this from string
}   

const TlvWeather = {
    getWeather: (creds: Command) => requests.post<Weather>(`/miniapp/weather`,creds), // need to change this from string
}

const getScooter = {
    getTire  :(creds : Command) => requests.post<tireScotter[]>(`/miniapp/tier`,creds),
    getLime : (creds : Command) => requests.post<limeScotter[]>(`/miniapp/lime`,creds)
}




const agent = {
    Account,
    GptOrcal,
    TlvWeather,
    getScooter
}

export default agent;