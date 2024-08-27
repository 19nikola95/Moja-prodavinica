import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
export function GlavniMeniOpis({NazivNamernice, KolicinaNamernice, ProizvodjacNamernice}){
    return  <div>
        <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{NazivNamernice}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{KolicinaNamernice}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p className={styles.SlovaZaOpisSadrzaja} >{ProizvodjacNamernice}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
    </div>
}