import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { Input } from "../../shared/ui";
import { atsign,lock,city,user } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
export const Auth2 = () => {
    const object={
        values:['Почта','Пароль','Имя','Город'],
        svgs:[atsign,lock,user,city]
    }
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]= useState('')
    const [town,setTown]=useState('')
    const states = {
        0: setEmail,
        1: setPassword,
        2: setName,
        3: setTown
      };
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            {[...new Array(4)].map((value,index)=>{
                return <Input setState={states[index]} svg={object.svgs[index]} key={index} text={object.values[index]} />
            })}
          </div>
          <div className={styles.groupButton}>
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
