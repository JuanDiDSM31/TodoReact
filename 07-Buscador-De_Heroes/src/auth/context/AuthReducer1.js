import { types } from "../types/types";
// const initialstate={
// logget:false,

// }

export const AuthReducer1=(state={}, action )=>{
    switch (action.type) {
        case types.login:
        return {
            ...state,
            logged:true,
            user:action.payload,
        };
         
        case types.logout:
            return {
                logged: false
            }
    
        default: state
            break;
    }

}