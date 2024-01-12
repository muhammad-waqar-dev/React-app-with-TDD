import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookies = (data)=>{
    cookies.set('accessToken', JSON.stringify(data?.accessToken), { path: '/' });
    cookies.set('refreshToken', JSON.stringify(data?.refreshToken), { path: '/' });
    cookies.set('user-credentials', JSON.stringify(data?.user), { path: '/' });
}

export const removeCookies = (data)=>{
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    cookies.remove('user-credentials');
}