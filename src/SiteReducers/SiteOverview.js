import { SIGN_IN } from "./SiteAction"

const InitialState = {

   UserDetails:[]
  
   
}

const SiteOverview = (state = InitialState , action) =>{

    const UserLoginCredentials ={
        id: action.payloadId,
        Username: action.payloadUsername,
        Password : action.payloadPassword,
        Email: action.payloadEmail,
        Contact: action.payloadContact
    }

    switch(action.type){

        case SIGN_IN:
            return{
                
                UserDetails: [...state.UserDetails,UserLoginCredentials]
            }
        default:
            return state
    }
}

export default SiteOverview