import styles from '../../../../../styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
import { DodantniProizvodi } from '@/components/PojedinacniProizvod/DodatniProizvodi';
import { CenaILogo } from '@/components/PojedinacniProizvod/CenaILogoa';
import { ProizvodjacProizvoda } from '@/components/PojedinacniProizvod/ProizvodjacProizvoda';
import { Tezinaroizvoda } from '@/components/PojedinacniProizvod/TezinaProizvoda';
import { KolicinaProizvoda } from '@/components/PojedinacniProizvod/KolicinaProizvoda';
import { UpustvoZaUpotrebu } from '@/components/PojedinacniProizvod/UputstvoZaUpotrebu';
import { Sastojci } from '@/components/PojedinacniProizvod/Sastojci';
import { Napomena } from '@/components/PojedinacniProizvod/Napomena';
import { cenepomarketima } from '@/mocks/pojedinacni-proizvodi-cena-po-marketima';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { ostalo } from '@/mocks/pojedinacni-proizvodi-ostalo';
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
          {cenepomarketima.map((cenepomarketu) => <CenaILogo logo={cenepomarketu.logoproizvoda} market={cenepomarketu.nazivmakreta} cena={cenepomarketu.cenaproizvoda} />)}
          </div>
          <div className={styles.KontenjerZaOpis}>
            <div className={styles.NaslovZaOpis}>
              <p>Opis proizvoda</p>
            </div>
            <div className={styles.KlasaTekstOpisa}>
            {opisproizvoda.map((opisproizvodi) => < ProizvodjacProizvoda proizvodjac={opisproizvodi.proizvodjaC}/>)}
            {opisproizvoda.map((opisproizvodi) => < Tezinaroizvoda tezina={opisproizvodi.tezinA}/>)}
            {opisproizvoda.map((opisproizvodi) => < KolicinaProizvoda kolicina={opisproizvodi.kolicinA}/>)}
            {opisproizvoda.map((opisproizvodi) => < UpustvoZaUpotrebu upustvo={opisproizvodi.upustvoZaupotrebu}/>)}
            {opisproizvoda.map((opisproizvodi) => < Sastojci sastojci={opisproizvodi.sasTojci}/>)}
            {opisproizvoda.map((opisproizvodi) => < Napomena napomena={opisproizvodi.naPomena}/>)}
            </div>
          </div>
        </div>
        <div className={styles.KontenjerOstaliPorizvodi}>
        {ostalo.map((ostali) => <DodantniProizvodi slikaProizvoda={ostali.Slikaproizvoda} nazivProizvoda={ostali.Nazivproizvoda} kolicinaProizvoda={ostali.Kolicinaproizvoda} proizvodjacProizvoda={ostali.Proizvodjacproizvoda}  />)}
        </div>
       
      </div>
  </div>
   );
  }