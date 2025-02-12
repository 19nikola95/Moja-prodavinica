
import styles from '../../../../styles/istorijaKorpe.module.scss';
import Link from "next/link";
import { Racun } from '@/components/MojNalog/IstorijaKorpe/Racuni';
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { SlikaProfila } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/LicnaSlika';
import { profili } from '@/mocks/moj-nalog-profil';
import { MesecniOpis } from '@/components/MojNalog/IstorijaKorpe/MesecniOpis';
import { GodisnjiOpis } from '@/components/MojNalog/IstorijaKorpe/GodisnjiOpis';
import { meseciCena } from '@/mocks/moj-nalog-istorija-korpe-mesec-i-cena';
import { racun } from '@/mocks/moj-nalog-istorija-korpe-racun';
import { usteda } from '@/mocks/moj-nalog-istorija-korpe-usteda';
export default function pocetna() {
  return (
  <div>
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
        <Link href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
           <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
      </div>
 <div className={styles.KontenjerNaslova}>
 <p className={styles.IzgledSlovaIstorijaKorpe}>Istorija korpe</p>
 </div>
 <div className={styles.PozicijaKontenjeraZaUsteduPrekoAplikaciju}>
 {usteda.map((ustedi) => <GodisnjiOpis cena={ustedi.CENA} />)}  
</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
{meseciCena.map((meseciCeni) => <MesecniOpis mesec={meseciCeni.MESEC} cena={meseciCeni.CENA} />)} 
<div className={styles.KontenjerzaMesecneTroskove}>
{racun.map((racunI) => <Racun datum={racunI.DATUM} cena={racunI.CENA} />)}              
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