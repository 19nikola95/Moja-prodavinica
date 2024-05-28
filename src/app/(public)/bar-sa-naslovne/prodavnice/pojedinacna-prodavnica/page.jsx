import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerNaslovILogo}>
    <img className={styles.LogoZaNaslov} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
    <p className={styles.IzgledSlovaNaslova}>DIS</p>
  </div>
   <p className={styles.IzgledOpisa}>Dis je market koji ima svoju aplikaciju kako bi ste uštedeli još više ili dobili neku povoljnost preuzmite aplikaciju <a href="https://www.nasakartica.rs/">Naša kartica</a></p>
        <div className={styles.KontenjerSaSvimProizvodima}>
          <div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
              <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>Mleko od badema</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>350g</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>Doktor etker</p>
                </div>
                <div className={styles.IzgledSlovaCena}>
                  <p><b>356,22 din</b></p>
                </div>
              </div>
            </div>
            <div className={styles.DonjiDeoKontenjeraProizvoda}>
             <input className={styles.IzgledOdabiraKolicine} type="number" placeholder="0"/>
             <img  className={styles.IzgledKorpeUKontenjeruZaProizvod} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
              <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className={styles.KontenjerZaTekstProizvoda}>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>Mleko od badema</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>350g</p>
                </div>
                <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                  <p>Doktor etker</p>
                </div>
                <div className={styles.IzgledSlovaCena}>
                  <p>356,22 din</p>
                </div>
              </div>
            </div>
            <div className={styles.DonjiDeoKontenjeraProizvoda}>
             <input className={styles.IzgledOdabiraKolicine} type="number" placeholder="0"/>
             <img  className={styles.IzgledKorpeUKontenjeruZaProizvod} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerZaDugmice}>
          <button className={styles.DugmrStrane}>1</button>
          <button className={styles.DugmrStrane}>2</button>
          <button className={styles.DugmrStrane}>3</button>
          <button className={styles.DugmrStrane}>4</button>
          <button className={styles.DugmrStrane}>5</button>
        </div>
</div>
  </div>
    );
  }