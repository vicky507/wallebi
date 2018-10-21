import React from "react";

class ChatList extends React.Component{
  constructor(props){
    super(props);
    this.state={};

  }
  render(){
    return(
      <div>
        <ul>
          {
            this.props.chats.map(function(elem,i){
              return(
                <div>
                  <div className="row show-grid">
                    <div className="col-xs-12">

                      <div className="chatMessage">
                        <div key={elem.id} className="box">
                          <p>
                            <strong>{elem.username}</strong>
                          </p>
                          <p>{elem.message}</p>
                        </div>
                        <div className="imageHolder">
                        {/* <img src={avatar} className="img-responsive avatar" alt="logo" /> */}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
export default ChatList;


// export default ({ chats }) => (
//   <ul>
//     {chats.map(chat => {
//       return (
//         <div>
//           <div className="row show-grid">
//             <div className="col-xs-12">

//               <div className="chatMessage">
//                 <div key={chat.id} className="box">
//                   <p>
//                     <strong>{chat.username}</strong>
//                   </p>
//                   <p>{chat.message}</p>
//                 </div>
//                 <div className="imageHolder">
//                 {/* <img src={avatar} className="img-responsive avatar" alt="logo" /> */}
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </ul>
// );