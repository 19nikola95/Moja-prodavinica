import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
export function GlavniMeniOpis({ImeProizvoda, TezinaProizvoda, ProizvodjacProizvoda}){
    return  <div>
        <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{ImeProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{TezinaProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{ProizvodjacProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
    </div>
}