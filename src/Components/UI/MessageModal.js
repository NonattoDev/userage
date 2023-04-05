import React, { useEffect, useRef } from "react";
import styles from "./MessageModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MessageModal = ({ info, onClose }) => {
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    if (info.active) {
      timeoutIdRef.current = setTimeout(() => onClose(), 3000);
    } else {
      clearTimeout(timeoutIdRef.current);
    }

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [info.active, onClose, timeoutIdRef]);

  return (
    <div className={styles.MessageModal}>
      <div className={styles.MessageModalBox}>
        <div className={styles.MessageModalContent}>
          <div className={styles.MessageModalHeader}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={onClose}
              className={styles.MessageModalCloseIcon}
            />
          </div>
          <div className={styles.MessageModalBody}>{info.msg}</div>
          <div className={styles.MessageModalFooter}>
            <button onClick={onClose} className={styles.MessageModalButton}>
              Fechar
            </button>
          </div>
          <div className={styles.MessageModalBar}></div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
