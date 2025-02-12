import styles from '@/styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
export function DodatneIgre({linkdodanto, tekstDodatno, slika}){
        return   <div className={styles.KontenjerSaOstalimNagradnimIgrama}>
        <div className={styles.LevaKontenjerSaOstalimNagradnimIgrama}>
          <img className={styles.MalaSlicicaNagradneIgre} src={slika} alt=""/>
        </div>
        <div className={styles.DesnaKontenjerSaOstalimNagradnimIgrama}>
    <p><a href={linkdodanto}>{tekstDodatno}</a></p>
  </div>
        </div>
}