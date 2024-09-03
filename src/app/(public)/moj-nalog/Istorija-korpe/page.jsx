
import styles from '../../../../styles/istorijaKorpe.module.scss';
import Link from "next/link";
import { Racun } from '@/components/MojNalog/IstorijaKorpe/Racuni';
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { MesecniOpis } from '@/components/MojNalog/IstorijaKorpe/MesecniOpis';
import { GodisnjiOpis } from '@/components/MojNalog/IstorijaKorpe/GodisnjiOpis';
export default function pocetna() {
  return (
  <div>
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
           <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
      </div>
 <div className={styles.KontenjerNaslova}>
 <p className={styles.IzgledSlovaIstorijaKorpe}>Istorija korpe</p>
 </div>
 <div className={styles.PozicijaKontenjeraZaUsteduPrekoAplikaciju}>
<GodisnjiOpis cena={"15854,23"}/>
</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
<MesecniOpis mesec={"April"} cena={"2356,54"}/>
<div className={styles.KontenjerzaMesecneTroskove}>
 
<Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/>
<Racun datum={"14.09.2024"} cena={"1568,00"}/>
<Racun datum={"11.09.2024"} cena={"1568,00"}/>
<Racun datum={"19.09.2024"} cena={"1568,00"}/>
<Racun datum={"17.09.2024"} cena={"1568,00"}/>
<Racun datum={"18.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/> 
<Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/>             
   </div>
  <div className={styles.KontenjerZaDugme}>
  <button className={styles.DugmeVidiJos} >Vidi još</button>
  </div>

</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
  <div className={styles.OpisniTekstMeseca}>
  <MesecniOpis mesec={"Mart"} cena={"5421,24"}/>
  </div>
  <div className={styles.KontenjerzaMesecneTroskove}>
   
 <Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/>
<Racun datum={"14.09.2024"} cena={"1568,00"}/>
<Racun datum={"11.09.2024"} cena={"1568,00"}/>
<Racun datum={"19.09.2024"} cena={"1568,00"}/>
<Racun datum={"17.09.2024"} cena={"1568,00"}/>
<Racun datum={"18.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.09.2024"} cena={"1568,00"}/>
<Racun datum={"15.05.2024"} cena={"1568,00"}/>
<Racun datum={"15.07.2024"} cena={"1568,00"}/>
<Racun datum={"15.08.2024"} cena={"1568,00"}/>
<Racun datum={"15.10.2024"} cena={"1568,00"}/>
<Racun datum={"10.09.2024"} cena={"1568,00"}/>
 </div>
 <div className={styles.KontenjerZaDugme}>
  <button className={styles.DugmeVidiJos} >Vidi još</button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}