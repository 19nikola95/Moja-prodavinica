import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function PojeidnacniReceptDodatno({slika, naslovRecepta}){
    return <div>
 <div className={styles.RedZaJosRecepata}>
              <img className={styles.IzgledSlikeZaJos} src={slika} alt=""/>
              <div className={styles.DesnaStranaZaJos}>
                <p className={styles.SlovaZaJos}>{naslovRecepta}</p>
              </div>
             </div>
    </div>
}