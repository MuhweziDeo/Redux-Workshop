import { LOGIN_SUCCESSFUL } from "./actionTypes";

const initState={
    isAuthenticated:false,
    token:""

}

const loginReducer=(state=initState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESSFUL:
        return{
            ...state,
            isAuthenticated:true,
            token:action.token
        }
        default:
        return{
            ...state
        }
    }
}

export default loginReducer;