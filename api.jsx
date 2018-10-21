import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import Websocket from 'react-websocket';

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state={
            responseArray:[]
        };
        this.callBack=this.callBack.bind(this);
        this.handleData=this.handleData.bind(this);
    }

    handleData(data){
        // var url="http://localhost:8080/";
        // axios.get(url).then(this.callBack);
            let result = JSON.parse(data);
            this.setState({responseArray: this.state.responseArray + result.movement});
            console.log(result)
        
    }
 
    callBack(res){
        this.setState({
            responseArray:res.data
        });
        // document.write(res.data[0].time);
        console.log(res);
        
    }

    render(){
        return(
            <div>
                <div className="well">
                    <div className="bg-success col-sm-2">{this.props.stateForUserName}</div>
                    <div className="bg-success col-sm-2">{this.props.stateForFullName}</div>
                </div>
                 responseArray: <strong>{this.state.responseArray}</strong>
                 <Websocket url='ws://localhost:4000/'
                    onMessage={this.handleData}/> 
                render
                {/* {
                    this.state.responseArray.map(function(elem,i){
                        return(
                            <div key={elem.trade_id} className="container col-sm-4 btn-info">
                                <p><i>Time: </i>{elem.time}</p>
                                <p><i>Trade_id: </i>{elem.trade_id}</p>
                                <p><i>Price: </i>{elem.price}</p>
                                <p><i>Size: </i>{elem.size}</p>
                                <p><i>Side: </i>{elem.side}</p>
                            </div>

                        )
                    })
                } */}
               
                
            </div>
        )
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

    });

}
export default connect(mapStateToProps,mapDispatchToProps)(Api);
