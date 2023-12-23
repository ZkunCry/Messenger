import React from "react";
import styles from "./Window.module.css";
import { Form, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Window = () => {
  const { register, control } = useForm();
  const navigate = useNavigate();
  const handleClick = async ({ data }) => {
    navigate(`/chat?name=${data.userLogin}&room=${data.idRoom}`);
    console.log(data);
  };
  return (
    <Form control={control} className={styles.window} onSubmit={handleClick}>
      <div className={styles.windowInner}>
        <div className={styles.windowHeader}>
          <h2>Вход в аккаунт</h2>
        </div>

        <div className={styles.windowBody}>
          <input
            type="text"
            placeholder="Id room"
            className={styles.windowBodyInput}
            {...register("idRoom")}
          />
          <input
            type="text"
            placeholder="Your name"
            className={styles.windowBodyInput}
            {...register("userLogin")}
          />
        </div>

        <div className={styles.windowFooter}>
          <button type="submit" className={styles.windowFooterButton}>
            Войти
          </button>
        </div>
      </div>
    </Form>
  );
};
export default Window;
