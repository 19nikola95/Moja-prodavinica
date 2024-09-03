import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function CenaILogo({logo, market, cena}){
    return <div>
 <div className={styles.KontenjerZaRed}>
              <div className={styles.LogoProdavnice}>
                <img className={styles.DimenzijeLoga} src={logo} alt=""/>
              </div>
              <div className={styles.KontenjerZaCenu}>
                <p>{market}: {cena} din</p>
              </div>
            </div>
    </div>
}