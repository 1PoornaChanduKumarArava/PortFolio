import { createStore } from "redux";

const intialState={
    mode:true
}

function reducer1(state=intialState,action:{type:string,payload:any}){
    switch(action.type){
        case "MODE":
            return {...state,mode:action.payload}
        default:
            return {...state}
    }
}

const store=createStore(reducer1);

export default store