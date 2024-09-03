import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniDodatniRecepti({receptDodatan, slika}){
    return   <div className={styles.RedZaJosRecepata}>
    <img className={styles.IzgledSlikeZaJos} src={slika} alt=""/>
    <div className={styles.DesnaStranaZaJos}>
      <p className={styles.SlovaZaJos}>{receptDodatan}</p>
    </div>
   </div>
}