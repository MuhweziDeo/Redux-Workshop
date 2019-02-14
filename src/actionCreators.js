import { LOGIN_SUCCESSFUL,LOGIN_FAILS } from "./actionTypes";


const LoginUser=(payload)=>dispatch=>{
fetch('https://ah-backend-xmen-staging.herokuapp.com/api/users/login/',{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({user:payload})
}).then(
    res=>res.json()
).then(data=>{
    if(data.errors){
        dispatch({
            type:LOGIN_FAILS
        })
    }
    else{
        console.log(data)
        dispatch({
            type:LOGIN_SUCCESSFUL,
            token:data.token
        })  
    }
}).catch(err=>{
    console.log(err)
})
}

export default LoginUser;