import styles from '@/styles/mojeProdavnice.module.scss';
export function MojaPojedinacnaProdavnica({nazivProdavnica, slika}){
    return <div>
        <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src={slika} alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>{nazivProdavnica}</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
    </div>
}