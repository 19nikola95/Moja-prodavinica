import styles from '../../../../styles/mojeProdavnice.module.scss';
import Link from "next/link";
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { SlikaProfila } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/LicnaSlika';
import { MojaPojedinacnaProdavnica } from '@/components/MojNalog/MojeProdavice/PojedinacnaProdavnica';
import { profili } from '@/mocks/moj-nalog-profil';
import { prodavnice } from '@/mocks/moj-nalog-prodavnice';
export default function MojeProdavnice() {
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
        <Link href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
          <Link href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <button className={styles.MojeProdavnice}>Moje prodavnice</button>
      </div>
      <div className={styles.KontenjerNaslova}>
      <p className={styles.IzgledIzaberiSvojeProdavnice}>Izaberi svoje prodavnice</p>
      </div>
      <div className={styles.KontenjerZaProdavnice}>
      {prodavnice.map((prodavnicA) => <MojaPojedinacnaProdavnica nazivProdavnica={prodavnicA.IME} slika={prodavnicA.LOGO} ulica={prodavnicA.ULICA}/>)}  
      </div>
      <div className={styles.ProstorZaSacuvati}>
      <button className={styles.DugrmeSacuvajProdavnice}>Sačuvaj</button>
      </div>
  </div>
  </div>
  </div>
  );
}