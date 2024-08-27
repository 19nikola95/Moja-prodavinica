import styles from '@/styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
export function PojedinacnaProdavnica({imeProizvoda, tezinaProizvoda, proizvodjacProizvoda ,cenaProizvoda}){
    return <div>
    <div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
              <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>{imeProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>{tezinaProizvoda}</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>{proizvodjacProizvoda}</p>
                </div>
                <div className={styles.IzgledSlovaCena}>
                  <p><b>{cenaProizvoda} din</b></p>
                </div>
              </div>
            </div>
            <div className={styles.DonjiDeoKontenjeraProizvoda}>
             <input className={styles.IzgledOdabiraKolicine} type="number" placeholder="0"/>
             <img  className={styles.IzgledKorpeUKontenjeruZaProizvod} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
    </div>
 
}