import styles from '@/styles/mojeProdavnice.module.scss';
export function MojaPojedinacnaProdavnica({nazivProdavnica, slika,ulica}){
    return <div>
        <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src={slika} alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
              <div className={styles.NazivIUlica}>
              <p className={styles.FontSlovaImenaProdavnica}>{nazivProdavnica}</p>
              <p className={styles.FontSlovaUlicaProdavnica}>{ulica}</p>
              </div>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
    </div>
}