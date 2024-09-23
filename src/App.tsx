//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Create from './Component/Create'
/*import CreateFunctional from './Component/CreateFunctional'*/

interface IUser {
    name: string;
    age: number;
}

//interface UserSub {
//    iusers: IUser[];
//    iusers2: IUser[];
//}




function App() {
    const users: IUser[] = [
        { name: "John Doe", age: 30 },
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 }
    ];

    const users2: IUser[] = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 }
    ];
    return (
        <div className="App">
            <Create iusers={users} iusers2={users2} />
           {/* <CreateFunctional iusers={users} iusers2={users2} / > */}

        
    </div>
    );
}

export default App;