import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniDodatniRecepti({receptDodatan}){
    return   <div className={styles.RedZaJosRecepata}>
    <img className={styles.IzgledSlikeZaJos} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
    <div className={styles.DesnaStranaZaJos}>
      <p className={styles.SlovaZaJos}>{receptDodatan}</p>
    </div>
   </div>
}