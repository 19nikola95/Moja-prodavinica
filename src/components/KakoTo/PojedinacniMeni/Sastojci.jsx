import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniSastojci({sastojci1}){
    return   <div className={styles.RedULevomKontenjeru}>
    <li>{sastojci1}</li>
  </div>
}