import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniPostupak({postupak1}){
    return   <div className={styles.RedULevomKontenjeru}>
    <li>{postupak1}</li>
  </div>
}