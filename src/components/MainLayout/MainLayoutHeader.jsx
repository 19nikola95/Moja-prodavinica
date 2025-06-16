              
import Link from "next/link"
import styles from '../../styles/mainLiyoutHeader.module.scss';
export function MainLayoutHeader() {
  return <header className={styles.MainLayout__header}>
      <div className={styles.HeaderPozadina}>
      <div className={styles.GlavniIzgledHedera}>
      <Link href="/"><div className={styles.KontenjerLoga}>
         <img className={styles.IzgledLoga} src="/Logo sajta/Logo.png" alt=""/> 
        </div></Link>
        <div className={styles.KontenjerdShearchBara}>
          <input className={styles.IzgledShearchBara} type="text" placeholder="Unesi naziv namirnice"/>
        </div>
        <div className={styles.KontenjerZaLupuu}>
        <img className={styles.IzgledLupe} src="/Slike za heder/simbol-za-lupu.png" alt="" />
        </div>
        <div className={styles.KontenjerZaAplikaciju}>
          <div className={styles.LevaStranjaKontenjerZaAplikaciju}>
            <img className={styles.SimbolZaAplikaciju} src="/Slike za heder/simbol-za-aplikaciju.png" alt=""/>
          </div>
          <div className={styles.DesnaStranjaKontenjerZaAplikaciju}>
            <p>Preuzmi aplikaciju</p>
          </div>
        </div>
       <Link className={styles.IzgledLinka} href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"> <div className={styles.KontenjerZaAkaunt}>
          <div className={styles.LevaStranaKontenjeraZaAkaunt}>
            <img  className={styles.SimbolZaKorisnika} src="/Slike za heder/simbol-za-korisnika.png" alt=""/>
          </div>
          <div className={styles.DesnaStranaKontenjeraZaAkaunt}>
            <p>Nikola Milojević</p>
          </div>
        </div> </Link>
        <Link className={styles.IzgledLinka} href="/korpa"><div className={styles.KontenjerZaKorpu}>
          <div className={styles.LevaStranaKontenjeraZaKorpu}>
            <img  className={styles.SimboliZaKorpu} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
          <div className={styles.DesnaStranjaKontenjeraZaKorpu}>
            <p >110</p>
          </div>
          </div>
        </div> </Link>
      </div>


      </div>
      <nav className={styles.MainLayout__navigation}>
        
      </nav>
    </header>
}