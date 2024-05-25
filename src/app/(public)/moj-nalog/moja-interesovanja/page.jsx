import '../../../../styles/_mojaInteresovanja.scss';
import Link from "next/link";
export default function pocetna() {
  return (
  <div>
    <div className="MojNalog">
        <div className="InicijalniPodatci">
          <div className="KontenjerSlikaProfila">
            <img  className="IzgledProfilneSlike" src="/Moj nalog/bred pit.jpg" alt=""/>
            <div className="KontenjerIme">
            <p className="IzgledSlovaProfila">Nikola Milojević</p>
            <img  className="SimbolIzmeni" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerMesto">
            <p className="IzgledMestaProfila">Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className="SimbolIzmeni1" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerEmail">
            <p className="IzgledEmailaProfila">nikolamilojevic78@gmail.com</p>
            <img  className="SimbolIzmeni2" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className="KontenjerBroj">
            <p className="IzgledBrojaProfila">066001215</p>
            <img  className="SimbolIzmeni3" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
            <button className="DugmeSacuvajIzmene">Sačuvaj izmene</button>
            <button className="DugmeOdjaviSe">Odjavi se</button>
            <div className="LinijaOdvajanja"></div>
          </div>
        </div>
      <div className="BarZaNavigaciju">
      <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className="DugmeProizvodiKojiMiSeSvidjaju">Proizvodi koji mi se sviđaju</button> </Link>
        <button className="DugmeMojaInteresovanja">Moja interesovanja</button> 
          <Link href="/moj-nalog/Istorija-korpe"> <button className="DugmeIstorijaKorpe">Istorija korpe</button></Link>
          <Link href="/moj-nalog/moje-prodavnice"><button className="MojeProdavnice">Moje prodavnice</button></Link>
        </div>
      <div className="LinijaNavigacije"></div>
      <div className="KontenjerNaslova">    
        <p className="IzgledIzaberiSvojaInteresovanja">Izaberi svoja interesvoanja</p>
      </div>
 <div className="KontenjerIzaberiVrstuProizvoda">
  <div className="PrviKontenjer">
  <div className="KontenjerZdravaHrada">
    <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Zdrava hrana.jpg" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Zdrava hrana</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
 </div>
<div className="KontenjerMlecniProizvodi">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/mlecni-proizvodi.jpg" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Mlecni proizvodi</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
</div>
<div className="PrviKontenjer">
<div className="KontenjerVoceIPovrce">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Voce i povrce.png" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Voce i povrce</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
<div className="KontenjerMesniProizvodi">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Mesni Proizvodi.jpg" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Mesni prozivodi</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
</div>
<div className="PrviKontenjer">
  <div className="KontenjerSlatkisiIGrickalice">
    <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Slatkisi.jpg" alt=""/>
    <p className="IzgledSlovaZaCekiranje">Slatkisi i grickalice</p>
    <input className="IzgledChekBoxa" type="checkbox"/>
  </div>
<div className="KontenjerPice">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Pice.jpg" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Napitci</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
</div>

<div className="PrviKontenjer">
  <div className="KontenjerLicnaHigijena">
    <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Licna higijena.jpg" alt=""/>
    <p className="IzgledSlovaZaCekiranje">Lična higijena</p>
    <input className="IzgledChekBoxa" type="checkbox"/>
  </div>
  <div className="KontenjerKutakZaBebe">
    <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Proizvodi za bebe.jpg" alt=""/>
    <p className="IzgledSlovaZaCekiranje">Kutak za bebe</p>
    <input className="IzgledChekBoxa" type="checkbox"/>
  </div>
</div>
<div className="PrviKontenjer">
<div className="KontenjerKucniLjubimci">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Hrana za ljubimcel.png" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Kucni ljubimci</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
<div className="KontenjerTehnikaIPosudje">
  <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/tehnika.jpg" alt=""/>
  <p className="IzgledSlovaZaCekiranje">Tehnika i ostalo</p>
  <input className="IzgledChekBoxa" type="checkbox"/>
</div>
 </div>
 <div className="PrviKontenjer">
  <div className="KontenjerKucnaHemija">
    <img className="FormatSlika" src="/Moj nalog/Moja-interesovanja/Higijena za kucu.jpg" alt=""/>
    <p className="IzgledSlovaZaCekiranje">Kućna hemija</p>
    <input className="IzgledChekBoxa" type="checkbox"/>
  </div>
 
   </div>
 <div className="ProstorZaSacuvati">
<button className="IzgledDugmeta">Sacuvaj</button>
 </div>
 </div>
  </div>
  </div>
  );
}