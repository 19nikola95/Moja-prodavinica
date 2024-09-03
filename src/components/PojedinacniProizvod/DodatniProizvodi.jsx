import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function DodantniProizvodi({slikaProizvoda, nazivProizvoda, kolicinaProizvoda, proizvodjacProizvoda}){
    return <div>
       <div className={styles.GornjiDeoKontenjeraProizvoda}>
            <img className={styles.IzgledSlikaProizvoda} src={slikaProizvoda} alt=""/>
            <div className={styles.KontenjerZaTekstProizvoda}>
              <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                <p className={styles.SlovaZaOpisSadrzaja} >{nazivProizvoda}</p>
              </div>
              <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                <p className={styles.SlovaZaOpisSadrzaja}>{kolicinaProizvoda}</p>
              </div>
              <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                <p className={styles.SlovaZaOpisSadrzaja}>{proizvodjacProizvoda}</p>
              </div>
              
            </div>
          </div>
    </div>
}