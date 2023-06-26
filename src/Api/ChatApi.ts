import axios,{AxiosRequestHeaders} from 'axios';

const ChatApi=axios.create({
    baseURL:'http://localhost:8000/api',
});

//Agregar token al header

ChatApi.interceptors.request.use(config=>{
    
    config.headers={
        ...config.headers,
        'x-token':localStorage.getItem('x-token')
    }as unknown as AxiosRequestHeaders


    return config;
    
})


export default ChatApi;