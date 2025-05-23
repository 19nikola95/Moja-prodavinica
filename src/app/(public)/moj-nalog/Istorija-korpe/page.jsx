import styles from '../../../../styles/istorijaKorpe.module.scss';
import Link from "next/link";
import { ZaSveRacune } from '@/components/MojNalog/IstorijaKorpe/Racuni';
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { SlikaProfila } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/LicnaSlika';
import { profili } from '@/mocks/moj-nalog-profil';
import { MesecniOpis } from '@/components/MojNalog/IstorijaKorpe/MesecniOpis';
import { GodisnjiOpis } from '@/components/MojNalog/IstorijaKorpe/GodisnjiOpis';
import { IstroijaRacuna } from '@/mocks/moj-nalog-istorija-korpe-racun';
import { IzabraneNamirnica } from '@/mocks/IzabraneNamirnice';
export default function IstorijaKorpe() {
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
 {IstroijaRacuna.map((istorijaracune) => <GodisnjiOpis GodisnjaCena={istorijaracune.UkupnaUsteda} />)}
</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
{IstroijaRacuna.UstedaPoMesecima?.map((UstedaPoMesecima) => <MesecniOpis mesec={UstedaPoMesecima.TRENITNIMESEC}  cena={UstedaPoMesecima.TRENUTNACENA}  />)}
<div className={styles.KontenjerzaMesecneTroskove}>
{IzabraneNamirnica.map((racun) => <ZaSveRacune Racun={racun} />)}              
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