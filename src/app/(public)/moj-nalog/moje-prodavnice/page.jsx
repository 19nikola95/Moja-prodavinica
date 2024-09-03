import styles from '../../../../styles/mojeProdavnice.module.scss';
import Link from "next/link";
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { MojaPojedinacnaProdavnica } from '@/components/MojNalog/MojeProdavice/PojedinacnaProdavnica';
export default function MojeProdavnice() {
  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfilaiOpisa}>
            <div className={styles.KontenjerSlike}>
            <img  className={styles.IzgledProfilneSlike} src="/Moj nalog/bred pit.jpg" alt=""/>
            </div>
          <ProizvodiKojiMiSeSvidjajuKomponente imeiPrezime={"Nikola Milojevic"} adresaiMesto={"Jasenicka 2 Smederevska Palanka Srbija"} email={"nikolamilojevic78@gmail.com"} brojMobilnog={"066001215"}/>
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
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
         <MojaPojedinacnaProdavnica nazivProdavnica={"UniverExport"} slika={"/LogoProdavnica/univerexport logo.jpg"}/>
      </div>
      <div className={styles.ProstorZaSacuvati}>
      <button className={styles.DugrmeSacuvajProdavnice}>Sačuvaj</button>
      </div>
  </div>
  </div>
  </div>
  );
}