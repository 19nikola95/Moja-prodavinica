import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function SastojciRecepta({sastojci1}){
    return <div>
            <ul>
        {sastojci1.map((item, index) => (
          <li className={styles.RedULevomKontenjeru} key={index}>{item}</li>
        ))}
      </ul>
    </div>
}