import styles from '../../../../styles/Racun.module.scss';
import { IzabraneNamirnica } from '@/mocks/IzabraneNamirnice';
import { KoncePtRacuna } from '@/components/MojNalog/IstorijaKorpe/IzgledRacuna';
import { IzgledRacunaNaPocetku } from '@/components/MojNalog/IstorijaKorpe/IzgledRacunaPocetakTabele';
export default async function RacunIdPage({params}) {
  const { RacunId } = await params;
  const Racun = IzabraneNamirnica.find((Racun) => Racun.id == RacunId);
    return ( 
        <div className={styles.MojNalog}>
    <div className={styles.KontenjerNaslova}>
 <p className={styles.IzgledSlovaIstorijaKorpe}>Racun</p>
 </div>
 <div className={styles.CeoKontenjer}>
 <div className={styles.GornjiDeoKontenjera}>
   <IzgledRacunaNaPocetku  slikaRacuna= "Slika" imeProizvoda= "Naziv proizvoda" brojProizvoda="Količina" cenaProizvoda="Cena proizvoda"/>
    {Racun.IzabraniArtikli?.map((IzabraniArtikli)=> <KoncePtRacuna key={IzabraniArtikli.id} slikaRacuna= {IzabraniArtikli.Slika} imeProizvoda= {IzabraniArtikli.NazivProizvoda} brojProizvoda={IzabraniArtikli.kolicina} cenaProizvoda={IzabraniArtikli.CenaProizvodaNARACUNU}/>)}
    </div>
    <div className={styles.DonjiDeoKontenjera}>
    <p className={styles.ImeProizvoda}>Datum: {Racun.datum}</p>
    <p className={styles.ImeProizvoda}>Cena racuna: {Racun.UkupnaCena} din</p>
    </div>
</div>
</div>
    );
};