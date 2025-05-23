import styles from '../../../../styles/mojeInteresovanje.module.scss';
import Link from "next/link";
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { SlikaProfila } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/LicnaSlika';
import { profili } from '@/mocks/moj-nalog-profil';
export default function mojaInteresovanja() {
  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfilaiOpisa}>
          {profili.map((profil) => <SlikaProfila slika={profil.SLIKA} />)}  
          {profili.map((profil) => <ProizvodiKojiMiSeSvidjajuKomponente imeiPrezime={profil.IME} adresaiMesto={profil.ADRESA} email={profil.EMAIL} brojMobilnog={profil.BROJ} />)}
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
        <button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> 
          <Link href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
        </div>
      <div className={styles.KontenjerNaslova}>    
        <p className={styles.IzgledIzaberiSvojaInteresovanja}>Izaberi svoja interesovanja</p>
      </div>
 <div className={styles.KontenjerIzaberiVrstuProizvoda}>
  <div className={styles.KontenjerZdravaHrada}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Zdrava hrana.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Zdrava hrana</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
 </div>
<div className={styles.KontenjerMlecniProizvodi}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/mlecni-proizvodi.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Mlečni proizvodi</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
<div className={styles.KontenjerVoceIPovrce}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Voce i povrce.png" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Voće i povrće</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
<div className={styles.KontenjerMesniProizvodi}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Mesni Proizvodi.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Mesni prozivodi</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
  <div className={styles.KontenjerSlatkisiIGrickalice}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Slatkisi.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Slatkiši i grickalice</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
<div className={styles.KontenjerPice}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Pice.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Napici</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
  <div className={styles.KontenjerLicnaHigijena}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Licna higijena.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Lična higijena</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
  <div className={styles.KontenjerKutakZaBebe}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Proizvodi za bebe.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Kutak za bebe</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
<div className={styles.KontenjerKucniLjubimci}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Hrana za ljubimcel.png" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Kućni ljubimci</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
<div className={styles.KontenjerTehnikaIPosudje}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/tehnika.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Tehnika i ostalo</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
  <div className={styles.KontenjerKucnaHemija}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Higijena za kucu.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Kućna hemija</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
 </div>
 <div className={styles.ProstorZaSacuvati}>
<button className={styles.IzgledDugmeta}>Sačuvaj</button>
 </div>
  </div>
  </div>
  </div>
  );
}