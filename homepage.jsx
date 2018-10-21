import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { changeTheState } from "../store/action/action-one";


class HomePage extends React.Component{
 
    render(){
        return(
            <div>
                <h1 className="well text-center">
                    HOME-PAGE:{this.props.stateForUserName}
                    <div className="bg-danger">{this.props.dispatchForUserName()}</div>
                </h1>
                <div className="btn btn-danger">
                    <Link to="/api">Api-page</Link>
                </div>
                <div className="btn btn-danger">
                    <Link to="/redux_counter">ReduxCounter-page</Link>
                </div>
                <div className="btn btn-danger">
                    <Link to="/chat_task">ChatTask-page</Link>
                </div>
                {this.props.stateForFullName}
                
            </div>
        );
    }
}
function mapStateToProps(state){
    return({
        stateForUserName:state.reducerOne.userName,
        stateForFullName:state.reducerTwo.fullName,
    });
}
function mapDispatchToProps(dispatch){
    return({
        dispatchForUserName:()=>{
            dispatch(changeTheState());
        }
    });

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
