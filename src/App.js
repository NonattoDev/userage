import React, { useState } from "react";
import UserList from "./Components/Inputs/UserList";
import UserInput from "./Components/Inputs/UserInput";
import "./App.css";
import MessageModal from "./Components/UI/MessageModal";

const usersDummy = [
  { id: 1, name: "João", age: 25 },
  { id: 2, name: "Maria", age: 42 },
  { id: 3, name: "Pedro", age: 19 },
  { id: 4, name: "Ana", age: 32 },
  { id: 5, name: "Lucas", age: 26 },
  { id: 6, name: "Carla", age: 55 },
  { id: 7, name: "Rodrigo", age: 31 },
  { id: 8, name: "Larissa", age: 23 },
  { id: 9, name: "Fernando", age: 40 },
  { id: 10, name: "Gabriela", age: 27 },
  { id: 11, name: "Luiza", age: 28 },
  { id: 12, name: "Rafael", age: 37 },
  { id: 13, name: "Carolina", age: 22 },
  { id: 14, name: "Julio", age: 45 },
  { id: 15, name: "Mariana", age: 29 },
  { id: 16, name: "Tatiana", age: 33 },
  { id: 17, name: "Roberto", age: 51 },
  { id: 18, name: "Renata", age: 24 },
  { id: 19, name: "Diego", age: 34 },
  { id: 20, name: "Camila", age: 30 },
  { id: 21, name: "Vinícius", age: 26 },
  { id: 22, name: "Letícia", age: 35 },
  { id: 23, name: "Henrique", age: 38 },
  { id: 24, name: "Júlia", age: 21 },
  { id: 25, name: "Paulo", age: 41 },
  { id: 26, name: "Cristina", age: 49 },
  { id: 27, name: "Marcelo", age: 36 },
  { id: 28, name: "Luciana", age: 27 },
  { id: 29, name: "Pedro Henrique", age: 23 },
  { id: 30, name: "Vitória", age: 20 },
];

function App() {
  const [users, setUsers] = useState(usersDummy);
  const [info, setInfo] = useState({
    active: false,
    msg: "",
  });

  // This function is called when the user input changes, and the form is submitted on UserInput.js
  // So, we receive the newUser variable, and add to users List
  const sendMeUser = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  // This function is called to update the user input on the UserList.js
  const deleteUser = (id) => {
    console.log(`Cliquei no id ${id}`);
    const newArr = users.filter((user) => user.id !== id);
    setUsers(newArr);
  };

  const verifyInput = (message) => {
    if (message) {
      setInfo({
        active: true,
        msg: message,
      });
    }
  };

  const onClose = () => {
    setInfo({
      active: false,
      msg: "",
    });
    return;
  };

  return (
    <div className="App">
      {info.active ? <MessageModal info={info} onClose={onClose} /> : ""}
      <UserInput sendMeUser={sendMeUser} verifyInput={verifyInput} />
      <UserList userList={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
