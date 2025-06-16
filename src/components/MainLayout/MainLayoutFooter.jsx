import Link from "next/link"
import styles from '../../styles/mainLayoutFooter.module.scss';
export function MainLayoutFooter() {
  return <footer className={styles.MainLayout__footer}>
    <div className={styles.GlavniIzgledFootera}>
        <div className={styles.KontenjerZapratiNas}>
          <div className={styles.GornjiDeoKontenjeraZapratiNas}>
            <p className={styles.IzgledSlovaNaslovaZObavestenja}>Zaprati nas na mrezama</p>
          </div>
          <div className={styles.DonjiDeoKontenjeraZapratiNas}>
            <div className={styles.KontenjerZaFacebook}>
              <img className={styles.IzgledSimbolaFacebook} src="/Slike za footer/simbol-za-facebook.png" alt=""/>
              <p className={styles.IzgledSlovFacebooka}>Facebook</p>
            </div>
            <div className={styles.KontenjerZaTikTok}>
              <img className={styles.IzgledSimbolaTiktoka} src="/Slike za footer/simbol-za-tiktok.png" alt=""/>
              <p className={styles.IzgledSlovaTiktoka}>TikTok</p>
            </div>
            <div className={styles.KontenjerZaYoutube}>
              <img className={styles.IzgledSimbolaYoutube} src="/Slike za footer/simbol-za-youtube.png" alt=""/>
              <p className={styles.IzgledSlovaYoutube}>Youtube</p>
            </div>
            </div>
        </div>
        <div className={styles.KontenjerSaznajONama}>
          <div className={styles.GornjiDeoKontenjeraSaznajONama}>
            <p className={styles.IzgledSlovaNaslovaZObavestenja}>Saznaj o nama</p>
          </div>
          <Link className={styles.IzgledLinka} href="/o-nama"><p className={styles.IzgleSlovaOpcijeONama}>O mojoj prodavnici</p> </Link>
          <p className={styles.IzgleSlovaOpcijeONama}>Blog</p>
          <Link className={styles.IzgledLinka} href="/registuj-prodavnicu"><p className={styles.IzgleSlovaOpcijeONama}>Registracija prodavnice</p></Link>
          <Link className={styles.IzgledLinka} href="/kontaktiraj-nas"> <p className={styles.IzgleSlovaOpcijeONama}>Kontaktiraj nas</p></Link>
        </div>
        <div className={styles.KontenjerUsloviKoriscenjaIPolitikaPrivatnosti}>
          <div className={styles.GornjiDeoKontenjerUsloviKoriscenjaIPolitikaPrivatnosti}>
            <p className={styles.IzgledSlovaNaslovaZObavestenja}>Uslovi korišćenja i politika privatnosti</p>
          </div>
          <p className={styles.IzgledSlovaUslovaKoriscenjaIPolitikaPrivatnosti}>Uslovi korišćenja</p>
          <p className={styles.IzgledSlovaUslovaKoriscenjaIPolitikaPrivatnosti}>Politika privatnosti</p>
        </div>
      </div>
  </footer>
}