import styles from '../../../../styles/mojeProdavnice.module.scss';
import Link from "next/link";
export default function MojeProdavnice() {
  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfilaiOpisa}>
            <div className={styles.KontenjerSlike}>
            <img  className={styles.IzgledProfilneSlike} src="/Moj nalog/bred pit.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerIme}>
            <p className={styles.IzgledSlovaProfila}>Nikola Milojević</p>
            <img  className={styles.SimbolIzmeni} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerMesto}>
            <p className={styles.IzgledMestaProfila}>Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className={styles.SimbolIzmeni1} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerEmail}>
            <p className={styles.IzgledEmailaProfila}>nikolamilojevic78@gmail.com</p>
            <img  className={styles.SimbolIzmeni2} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className={styles.KontenjerBroj}>
            <p className={styles.IzgledBrojaProfila}>066001215</p>
            <img  className={styles.SimbolIzmeni3} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
          <div className={styles.KontenjerZaDugmeZaSacuvati}>
            <button className={styles.DugmeSacuvajIzmene}>Sačuvaj izmene</button>
            </div>
            <div className={styles.KontenjerOdjaviSe}>
            <button className={styles.DugmeOdjaviSe}>Odjavi se</button>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerSaCelimSadrzajem}>
        <div className={styles.BarZaNavigaciju}>
    <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button> </Link>
        <Link href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
          <Link href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <button className={styles.MojeProdavnice}>Moje prodavnice</button>
      </div>
      <div className={styles.KontenjerNaslova}>
      <p className={styles.IzgledIzaberiSvojeProdavnice}>Izaberi svoje prodavnice</p>
      </div>
      <div className={styles.KontenjerZaProdavnice}>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/univerexport logo.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>Univerexport</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>DIS</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/Idea_Logo.svg" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>IDEA</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
          <div className={styles.RedZaProdavnice}>
            <div className={styles.LevaStranaReda}>
              <img className={styles.iZGLEDlOGApRODAVNICA} src="/LogoProdavnica/aman_logo_v2.png" alt=""/>
            </div>
            <div className={styles.DesnaStranaReda}>
            <p className={styles.FontSlovaImenaProdavnica}>Aman</p>
            <input className={styles.CekboxProdavnica} type="checkbox"/>
            </div>
          </div>
      </div>
      <div className={styles.ProstorZaSacuvati}>
      <button className={styles.DugrmeSacuvajProdavnice}>Sačuvaj</button>
      </div>
  </div>
  </div>
  </div>
  );
}