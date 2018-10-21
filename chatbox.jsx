import React from "react";

class ChatBox extends React.Component{
  constructor(props){
    super(props);
    this.state={};

  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="chat">
              <div className="col-xs-5 col-xs-offset-3">
                <input
                  type="text"
                  value={this.props.text}
                  placeholder="chat here..."
                  className="form-control"
                  onChange={this.props.handleTextChange}
                  onKeyDown={this.props.handleTextChange}
                />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <h4 className="greetings">Hello, {this.props.username}</h4>
        </div>
      </div>
    );
  }
}
export default ChatBox;


// export default ({ text, username, handleTextChange }) => (
//   <div>
//     <div className="row">
//     <div className="col-xs-12">
//       <div className="chat">
//         <div className="col-xs-5 col-xs-offset-3">
//           <input
//             type="text"
//             value={text}
//             placeholder="chat here..."
//             className="form-control"
//             onChange={handleTextChange}
//             onKeyDown={handleTextChange}
//           />
//         </div>
//         <div className="clearfix"></div>
//       </div>
//     </div>
//     <h4 className="greetings">Hello, {username}</h4>
//   </div>
// </div>
// );