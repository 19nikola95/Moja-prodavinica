import styles from '../../../styles/korpa.module.scss';
import { NajeftinijePoProdavnicama } from '@/components/Korpa/NajeftinijePoProdavnicama';
import { PojedinacniProizvodiPoProdavnici } from '@/components/Korpa/PojedinacniProizvodiPoProdavnici';
import { NaruceniProizvodi } from '@/components/Korpa/NaruceniProizvodi';
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
            <p>Najeftinije prodavnice/marketi u vašem mestu gde možete kupiti:</p>
          </div>

          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>

          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najbliža prodavnice/marketi u kome mozete kupiti sve:</p>
          </div>

          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>
          <NajeftinijePoProdavnicama LogoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} cenauProdavnici={"3542,12"} obavestenjeuProdavnicei={"DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste"}/>

          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>U vasoj najblizoj prodavnici možete uzeti sledeće namernice:</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
           <PojedinacniProizvodiPoProdavnici proizvod={"jaje"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Brasno"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Secer"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Sok"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Hleb"}/>
          </div>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Njeftiniji proizvodi po prodavnicama/marketima:</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
          <PojedinacniProizvodiPoProdavnici proizvod={"jaje"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Brasno"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Secer"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Sok"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Hleb"}/>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
          <PojedinacniProizvodiPoProdavnici proizvod={"jaje"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Brasno"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Secer"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Sok"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Hleb"}/>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
          <PojedinacniProizvodiPoProdavnici proizvod={"jaje"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Brasno"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Secer"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Sok"}/>
           <PojedinacniProizvodiPoProdavnici proizvod={"Hleb"}/>
          </div>
        </div>
        <div className={styles.DesnaStranaKontenjeraSaSvimInformacijama}>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Proizvodi iz vase korpe:</p>
          </div>
         <div className={styles.KontenjerZaDugmice}>
          <button className={styles.Dugmici}>Odštampaj</button>
          <button className={styles.Dugmici}>Pošalji</button>
          <input className={styles.IzgledCekBoxa} type="checkbox"/>
          <p>Ukoliko želite  spisak sa proizvodima podeljenim po prodavnicama čekirajte ovde.</p>
         </div>
         <div className={styles.KontenjerSvihIzabranihProizvoda}>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
          <NaruceniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} imeProizvoda={"Bademovo melko"}/>
         </div>
        </div>
      </div>
      </div>
  </div>
  );
}