import React from "react";
import styles from "./Window.module.css";
import { Form, useForm } from "react-hook-form";
const Window = () => {
  const { register, control } = useForm();
  const handleClick = async ({ data }) => {
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
