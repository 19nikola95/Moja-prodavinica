import styles from '../../../../../styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
import { DodantniProizvodi } from '@/components/PojedinacniProizvod/DodatniProizvodi';
import { CenaILogo } from '@/components/PojedinacniProizvod/CenaILogoa';
import { ProizvodjacProizvoda } from '@/components/PojedinacniProizvod/ProizvodjacProizvoda';
import { Tezinaroizvoda } from '@/components/PojedinacniProizvod/TezinaProizvoda';
import { KolicinaProizvoda } from '@/components/PojedinacniProizvod/KolicinaProizvoda';
import { UpustvoZaUpotrebu } from '@/components/PojedinacniProizvod/UputstvoZaUpotrebu';
import { Sastojci } from '@/components/PojedinacniProizvod/Sastojci';
import { Napomena } from '@/components/PojedinacniProizvod/Napomena';
export default function kontaktirajnas() {
  return (
  <div>
  <div className={styles.GlavniKontenjerZaSadrzaj}>
        <div className={styles.VideoReklame}></div>
        <div className={styles.KontenjerZaNaslov} ><p className={styles.IzgledSlovaNaslova}>Čaj od limuna i đumbira</p>
        </div>
        <div className={styles.RasporedSlikeIopisa}>
          <div className={styles.KontenjerZaSlikuIDodatke}>
            <img className={styles.DimenzijeSlike} src="/SlikaProizvoda/Caj K plus.jpg" alt=""/>
            <div className={styles.KontenjerZaDodatke}>
              <img className={styles.DimenzijeDodatkaKorpa} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
              <img className={styles.DimenzijeDodatkaZvezda} src="/DodatniSmajlici/zvezdica.png" alt=""/>
              <img className={styles.DimenzijeDodatkaSrce} src="/DodatniSmajlici/srce_smanjena.png" alt=""/>
            </div>
          </div>
          <div className={styles.KontenjerZaCene}>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS1"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS2"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS3"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS4"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS5"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS6"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS7"} cena={"102,22"}/>
          <CenaILogo logo={"/LogoProdavnica/DIS LOGO.jpg"} market={"DIS8"} cena={"102,22"}/>
          </div>
          <div className={styles.KontenjerZaOpis}>
            <div className={styles.NaslovZaOpis}>
              <p>Opis proizvoda</p>
            </div>
            <div className={styles.KlasaTekstOpisa}>
              <ProizvodjacProizvoda proizvodjac={"K Plus"}/>
              <Tezinaroizvoda tezina={"40g"}/>
              <KolicinaProizvoda kolicina={"20 kesica"}/>
              <UpustvoZaUpotrebu upustvo={"Filter kesici iz aroma omotača staviti u posudu, preliti sa 200ml ključale vode i preklopiti. Nakon 10 min stajanja izvaditi kesicu i gotov čaj zasladiti po želji."}/>
              <Sastojci sastojci={"koren đumbira 25%, plod divlje jabuke 23%, plod šipka 16%, aroma limun-limete 9%, kora limuna 8%, list slatke kupine 7%, kiselina: limunska kiselina 6%, list matičnjaka 5%, aroma đumbira 1%. "}/>
              <Napomena napomena={"Čuvati na suvom i hladnom mestu. Proizvod je najbolje upotrebiti u roko od 60 dana nakon otvaranja. Najbolje upotrebiti do/ Oznake serije: označeno na dnu ambalaže."}/>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerOstaliPorizvodi}>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa1"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa2"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa3"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa4"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
          <DodantniProizvodi slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"} nazivProizvoda={"Mleko od badema sa dsadsadsa4"} kolicinaProizvoda={"350g"} proizvodjacProizvoda={"Doktor etker i braca grasad dsa dsasd as"}/>
        </div>
       
      </div>
  </div>
   );
  }