import React, { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || /\d/.test(name)) {
      props.verifyInput(
        "O campo input não pode ser vazio, e deve conter apenas letras"
      );
      return;
    } else if (age < 0) {
      props.verifyInput("A idade deve ser maior que 0");
      return;
    }

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name,
      age,
    };

    props.sendMeUser(newUser);

    setName("");
    setAge(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <label>Username</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Tell me your name"
            />
          </div>
          <div className={styles.inputField}>
            <label>Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              value={age}
              type="number"
              min={0}
              max={99}
              placeholder="Tell me your age"
            />
          </div>
          <button className={styles.submitButton} type="submit">
            Send-me
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
