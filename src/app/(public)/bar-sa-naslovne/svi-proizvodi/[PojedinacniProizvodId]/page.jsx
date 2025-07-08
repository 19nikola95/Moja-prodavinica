import styles from '../../../../../styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
import { DodantniProizvodi } from '@/components/PojedinacniProizvod/DodatniProizvodi';
import { CenaILogo } from '@/components/PojedinacniProizvod/CenaILogoa';
import { ProizvodjacProizvoda } from '@/components/PojedinacniProizvod/ProizvodjacProizvoda';
import { Tezinaroizvoda } from '@/components/PojedinacniProizvod/TezinaProizvoda';
import { KolicinaProizvoda } from '@/components/PojedinacniProizvod/KolicinaProizvoda';
import { UpustvoZaUpotrebu } from '@/components/PojedinacniProizvod/UputstvoZaUpotrebu';
import { Sastojci } from '@/components/PojedinacniProizvod/Sastojci';
import { Napomena } from '@/components/PojedinacniProizvod/Napomena';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { ReklamneSlike } from '@/mocks/reklame';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
export default async function PojedinacniProizvodId({params}) {
  const { PojedinacniProizvodId } = await params;

  const PojedinacniProizvod = opisproizvoda.find((PojedinacniProizvod) => PojedinacniProizvod.id == PojedinacniProizvodId);
  return (
  <div>
  <div className={styles.GlavniKontenjerZaSadrzaj}>
        <div className={styles.VideoReklame}>
        {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama key={ReklamneSlika.id}  slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
        </div>
        <div className={styles.KontenjerZaNaslov} ><p className={styles.IzgledSlovaNaslova}>{PojedinacniProizvod.naziv}</p>
        </div>
        <div className={styles.RasporedSlikeIopisa}>
          <div className={styles.KontenjerZaSlikuIDodatke}>
            <img className={styles.DimenzijeSlike} src={PojedinacniProizvod.slika} alt=""/>
            <div className={styles.KontenjerZaDodatke}>
              <img className={styles.DimenzijeDodatkaKorpa} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
              <img className={styles.DimenzijeDodatkaZvezda} src="/DodatniSmajlici/zvezdica.png" alt=""/>
              <img className={styles.DimenzijeDodatkaSrce} src="/DodatniSmajlici/srce_smanjena.png" alt=""/>
            </div>
          </div>
          <div className={styles.KontenjerZaCene}>
          {PojedinacniProizvod.cenePoMarketika?.map((cenePoMarketika) => <CenaILogo logo={cenePoMarketika.logoproizvoda} market={cenePoMarketika.nazivmakreta} cena={cenePoMarketika.cenaproizvoda} />)}
          </div>
          <div className={styles.KontenjerZaOpis}>
            <div className={styles.NaslovZaOpis}>
              <p>Opis proizvoda</p>
            </div>
            <div className={styles.KlasaTekstOpisa}>
             < ProizvodjacProizvoda proizvodjac={PojedinacniProizvod.proizvodjaC}/>
            < Tezinaroizvoda tezina={PojedinacniProizvod.tezinA}/>
            < KolicinaProizvoda kolicina={PojedinacniProizvod.kolicinA}/>
             < UpustvoZaUpotrebu upustvo={PojedinacniProizvod.upustvoZaupotrebu}/>
             < Sastojci sastojci={PojedinacniProizvod.sasTojci}/>
            < Napomena napomena={PojedinacniProizvod.naPomena}/>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerOstaliPorizvodi}>
        {PojedinacniProizvod.ostalo?.map((ostalo) => <DodantniProizvodi slikaProizvoda={ostalo.Slikaproizvoda} nazivProizvoda={ostalo.Nazivproizvoda} kolicinaProizvoda={ostalo.Kolicinaproizvoda} proizvodjacProizvoda={ostalo.Proizvodjacproizvoda}  />)}
        </div>
       
      </div>
  </div>
   );
  }