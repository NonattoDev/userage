import React from "react";
import styles from "./UserList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserList = ({ userList, deleteUser }) => {
  return (
    <div className={styles.container}>
      <h1>Users List</h1>
      {userList.map((user) => (
        <div className={styles.listItem} key={user.id}>
          <input
            readOnly
            value={`${
              user.age > 1
                ? `${user.name} tem ${user.age} anos de idade`
                : `${user.name} é um recem nascido`
            } `}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteUser(user.id)}
            className={styles.deleteIcon}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
