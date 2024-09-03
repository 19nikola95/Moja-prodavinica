import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function SastojciRecepta({sastojci1}){
    return <div>
         <div className={styles.RedULevomKontenjeru}>
              <li>{sastojci1}</li>
            </div>
    </div>
}