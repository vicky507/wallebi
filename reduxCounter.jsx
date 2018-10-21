import React from "react";
import {createStore} from "redux";

function rootReducer(state=[],action){
    switch(action.type){
        case "ADDED-ONE":
        return(state.concat([action.data]));
        case "SUBTRACTED-ONE" :
        return(state.concat([action.data])); 
    }
}

var store=createStore(rootReducer);




class ReduxCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        store.subscribe(()=>{
            console.log(store.getState());
        });
        this.Increment=this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
    }

    Increment(){
        console.log("incremented");
        store.dispatch({type:"ADDED-ONE",data:"added-one-successfully"});
    }

    Decrement(){
        console.log("decremented");
        store.dispatch({type:"SUBTRACTED-ONE",data:"subtracted-one-successfully"});
    }




    render(){
        return(
            <div>
                <button onClick={this.Increment} className=" btn btn-primary ">increment</button>
                <button onClick={this.Decrement} className="btn btn-primary">decrement</button>
            </div>
        );
    }
}
export default ReduxCounter;