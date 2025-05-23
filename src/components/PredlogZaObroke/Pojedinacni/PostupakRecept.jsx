import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function PostupakZaRecepte({postupak1}){
    return <div>
         <ul>
        {postupak1.map((item, index) => (
          <li className={styles.RedUDesnomKontenjeru} key={index}>{item}</li>
        ))}
      </ul>

    </div>
}