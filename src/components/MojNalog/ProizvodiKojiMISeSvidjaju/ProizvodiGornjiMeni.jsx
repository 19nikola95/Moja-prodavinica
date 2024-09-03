import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
export function ProizvodGornjiMEni({imeProizvoda,tezinaProizvoda,proizvodjacProizvoca, slika }){
    return <div>
<div className={styles.GornjiDeoKontenjeraProizvoda}>
        <img className={styles.IzgledSlikaProizvoda} src={slika} alt=""/>
              <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{imeProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{tezinaProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{proizvodjacProizvoca}</p>
                </div>
                <div className={styles.RedUkontenjeruZaTekstProizvodaSamoKorpa}>
                  <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
    </div>
}