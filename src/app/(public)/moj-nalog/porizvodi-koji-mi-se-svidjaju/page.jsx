import styles from '../../../../styles/proizvodiKojiMiSeSvidjaju.module.scss';
import Link from "next/link"
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { KontenjerProizvodaKomponentea } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/KontenjerProizvodiKojiMiSeSvidajju';
export default function proizvodiKojiMiSeSvidjaju() {
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
          <button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button>
          <Link className={styles.IzgledLinka} href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
          <Link className={styles.IzgledLinka} href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <Link className={styles.IzgledLinka} href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
          </div>
     
        <div className={styles.KontenjerPratiteProizvode}>
          <p className={styles.NaslovZaAkciju}>Pratite proizvode koji vam se svidjaju</p>
        </div>
        <div className={styles.KontenjerSaSlikama}>
         <KontenjerProizvodaKomponentea/>
         <KontenjerProizvodaKomponentea/>
         <KontenjerProizvodaKomponentea/>
         <KontenjerProizvodaKomponentea/>
         <KontenjerProizvodaKomponentea/>
         <KontenjerProizvodaKomponentea/>
          </div>
        <div className={styles.KontenjerZaDruguStranicu}>
          <button className={styles.DugmeZaSledecuStranu}>1</button>
          <button className={styles.DugmeZaSledecuStranu}>2</button>
          <button className={styles.DugmeZaSledecuStranu}>3</button>
          <button className={styles.DugmeZaSledecuStranu}>4</button>
          <button className={styles.DugmeZaSledecuStranu}>5</button>
          <button className={styles.DugmeZaSledecuStranu}>6</button>
          <button className={styles.DugmeZaSledecuStranu}>7</button>
          <button className={styles.DugmeZaSledecuStranu}>8</button>
          <button className={styles.DugmeZaSledecuStranu}>9</button>
        </div>
      </div>
      </div>
</div>
  );
}
