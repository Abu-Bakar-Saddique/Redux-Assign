// import React from 'react';
// import UserForm from './components/userForm/UserForm';
// import { useDispatch } from 'react-redux';
// import GetMultiUsers from './components/getMultiUser/GetUsers';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <UserForm />
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import UserForm from './components/userForm/UserForm';
import GetMultiUsers from './components/getMultiUser/GetUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetMultiUsers />
        <UserForm />
      </header>
    </div>
  );
}

export default App;