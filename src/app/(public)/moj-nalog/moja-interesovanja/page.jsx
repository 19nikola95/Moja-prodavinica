import styles from '../../../../styles/mojeInteresovanje.module.scss';
import Link from "next/link";
export default function pocetna() {
  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfila}>
            <img  className={styles.IzgledProfilneSlike} src="/Moj nalog/bred pit.jpg" alt=""/>
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
            <button className={styles.DugmeSacuvajIzmene}>Sačuvaj izmene</button>
            <button className={styles.DugmeOdjaviSe}>Odjavi se</button>
            <div className={styles.LinijaOdvajanja}></div>
          </div>
        </div>
      <div className={styles.BarZaNavigaciju}>
      <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button> </Link>
        <button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> 
          <Link href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
        </div>
      <div className={styles.LinijaNavigacije}></div>
      <div className={styles.KontenjerNaslova}>    
        <p className={styles.IzgledIzaberiSvojaInteresovanja}>Izaberi svoja interesvoanja</p>
      </div>
 <div className={styles.KontenjerIzaberiVrstuProizvoda}>
  <div className={styles.PrviKontenjer}>
  <div className={styles.KontenjerZdravaHrada}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Zdrava hrana.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Zdrava hrana</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
 </div>
<div className={styles.KontenjerMlecniProizvodi}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/mlecni-proizvodi.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Mlecni proizvodi</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
</div>
<div className={styles.PrviKontenjer}>
<div className={styles.KontenjerVoceIPovrce}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Voce i povrce.png" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Voce i povrce</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
<div className={styles.KontenjerMesniProizvodi}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Mesni Proizvodi.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Mesni prozivodi</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
</div>
<div className={styles.PrviKontenjer}>
  <div className={styles.KontenjerSlatkisiIGrickalice}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Slatkisi.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Slatkisi i grickalice</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
<div className={styles.KontenjerPice}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Pice.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Napitci</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
</div>

<div className={styles.PrviKontenjer}>
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
</div>
<div className={styles.PrviKontenjer}>
<div className={styles.KontenjerKucniLjubimci}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Hrana za ljubimcel.png" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Kucni ljubimci</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
<div className={styles.KontenjerTehnikaIPosudje}>
  <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/tehnika.jpg" alt=""/>
  <p className={styles.IzgledSlovaZaCekiranje}>Tehnika i ostalo</p>
  <input className={styles.IzgledChekBoxa} type="checkbox"/>
</div>
 </div>
 <div className={styles.PrviKontenjer}>
  <div className={styles.KontenjerKucnaHemija}>
    <img className={styles.FormatSlika} src="/Moj nalog/Moja-interesovanja/Higijena za kucu.jpg" alt=""/>
    <p className={styles.IzgledSlovaZaCekiranje}>Kućna hemija</p>
    <input className={styles.IzgledChekBoxa} type="checkbox"/>
  </div>
 
   </div>
 <div className={styles.ProstorZaSacuvati}>
<button className={styles.IzgledDugmeta}>Sacuvaj</button>
 </div>
 </div>
  </div>
  </div>
  );
}