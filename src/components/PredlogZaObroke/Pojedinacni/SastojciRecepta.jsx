import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';

export function SastojciRecepta({sastojci1}){
    return <div>
            <ul>
          <li className={styles.RedULevomKontenjeru} > {sastojci1} </li>
      </ul>
    </div>
}