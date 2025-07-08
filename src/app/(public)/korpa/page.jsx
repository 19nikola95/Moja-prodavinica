import styles from '../../../styles/korpa.module.scss';
import { NajeftinijePoProdavnicama } from '@/components/Korpa/NajeftinijePoProdavnicama';
import { PojedinacniProizvodiPoProdavnici } from '@/components/Korpa/PojedinacniProizvodiPoProdavnici';
import { NaruceniProizvodi } from '@/components/Korpa/NaruceniProizvodi';
import { KorpaPojedinacneProdavnice } from '@/components/Korpa/KorpaPojedinacnaProdavnica';
import { najeftinijeSve } from '@/mocks/korpa-najeftinije-za-sve';
import { najblizizaSve } from '@/mocks/korpa-najblize-za-sve';
import { vasaProdavnica } from '@/mocks/korpa-vasa-prodavnica';
import { najeftinijiProizvodiPoProdavnici } from '@/mocks/korpa-pojedinacna-jeftina-prodavnica-proizvodi';
import { pojedinacnaProdavnica } from '@/mocks/korpa-pojedinacna-jeftina-prodavnica';
import { mojaKorpa } from '@/mocks/korpa-moja-korpa';
export default function korpa() {
  return (
  <div>
<div className={styles.KontenjerKorpe}>
        <div className={styles.KontenjerZaNaslov}>
        <p className={styles.TekstNaslova}>Korpa</p>
        </div>
      <div className={styles.KontenjerSaSvimInformacijama}>
        <div className={styles.LevaStranaKontenjeraSaSvimInformacijama}>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najjeftinije prodavnice/marketi u vašem mestu gde možete kupiti:</p>
          </div>
          {najeftinijeSve.map((najeftinijeSvI) => <NajeftinijePoProdavnicama LogoProdavnice={najeftinijeSvI.LOGO} nazivProdavnice={najeftinijeSvI.NAZIV} cenauProdavnici={najeftinijeSvI.CENA} obavestenjeuProdavnicei={najeftinijeSvI.OBAVESTENJE} />)}


          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najbliže prodavnice/marketi u kojima možete kupiti sve:</p>
          </div>
          {najblizizaSve.map((najblizizaSvi) => <NajeftinijePoProdavnicama LogoProdavnice={najblizizaSvi.LOGO} nazivProdavnice={najblizizaSvi.NAZIV} cenauProdavnici={najblizizaSvi.CENA} obavestenjeuProdavnicei={najblizizaSvi.OBAVESTENJE} />)}

          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>U vašoj najbližoj prodavnici možete uzeti sledeće namirnice:</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
          {vasaProdavnica.map((vasaProdavnici) => <PojedinacniProizvodiPoProdavnici proizvod={vasaProdavnici.PROIZVOD} />)}  
          </div>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najjeftiniji proizvodi po prodavnicama/marketima:</p>
          </div>
          {pojedinacnaProdavnica.map((pojedinacnaProdavnici) => <KorpaPojedinacneProdavnice logo={pojedinacnaProdavnici.LOGO} ime={pojedinacnaProdavnici.IME} />)} 
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
          {najeftinijiProizvodiPoProdavnici.map((najeftinijiProizvodiPoProdavnica) => <PojedinacniProizvodiPoProdavnici proizvod={najeftinijiProizvodiPoProdavnica.PROIZVOD} />)}  
          </div>
        </div>
        <div className={styles.DesnaStranaKontenjeraSaSvimInformacijama}>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Proizvodi iz Vaše korpe:</p>
          </div>
         <div className={styles.KontenjerZaDugmice}>
          <button className={styles.Dugmici}>Odštampaj</button>
          <button className={styles.Dugmici}>Pošalji</button>
          <input className={styles.IzgledCekBoxa} type="checkbox"/>
          <p>Ukoliko želite  spisak sa proizvodima podeljenim po prodavnicama čekirajte ovde.</p>
         </div>
         <div className={styles.KontenjerSvihIzabranihProizvoda}>
         {mojaKorpa.map((mojaKorpI) => <NaruceniProizvodi slikaProizvoda={mojaKorpI.SLIKAPROIZVODA} imeProizvoda={mojaKorpI.IMEPROIZVODA} />)} 
         </div>
        </div>
      </div>
      </div>
  </div>
  );
}