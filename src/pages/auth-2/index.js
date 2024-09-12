import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { Input } from "../../shared/ui";
import { atsign,lock,city,user } from "../../shared/assets";
import styles from "./style.module.scss";
export const Auth2 = () => {
    const object={
        values:['Почта','Пароль','Имя','Город'],
        svgs:[atsign,lock,city,user]
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            {[...new Array(4)].map((valuue,index)=>{
                return <Input svg={object.svgs[index]} key={index} text={object.values[index]} />
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
