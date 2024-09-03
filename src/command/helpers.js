import { AuthToken } from "./constant"
 export const getToken=( )=>{
    const Token=localStorage.getItem(AuthToken);
    return Token

}
