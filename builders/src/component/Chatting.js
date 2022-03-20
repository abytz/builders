// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Chat } from '@progress/kendo-react-conversational-ui';

// function MessageTemplate(props) {
//   return (
//     <div className="k-bubble">
//       <div>The message text is {props.item.text}</div>
//     </div>
//   );
// }

// class Chat extends React.Component {
//   user = {
//     id: 1,
//     name: 'builders',
//     avatarUrl: 'https://via.placeholder.com/24/008000/008000.png',
//   };
//   state = {
//     messages: [],
//   };
//   addNewMessage = (event) => {
//     this.setState((prevState) => {
//       return {
//         messages: [...prevState.messages, event.message],
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Chat
//           user={this.user}
//           messages={this.state.messages}
//           onMessageSend={this.addNewMessage}
//           width={400}
//           messageTemplate={MessageTemplate}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Chat />, document.querySelector('my-app'));
