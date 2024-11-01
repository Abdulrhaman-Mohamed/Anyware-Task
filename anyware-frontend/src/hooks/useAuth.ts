import  Cookies from 'js-cookie';

// Desc: Custom hook to handle authentication state
export default function useAuth() {
    const isAuth = ()=> Cookies.get("accessToken") ? true : false;
   return {isAuth}
}