import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
import { PojedinacnaProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledPojedinacneProdavnice';
import { PojedinacnaProdavnicaOpis } from '@/components/KomponenteMojeProdavnice/PojedinacnaProdavnicaObavestenje';
import { infromacije } from '@/mocks/prodavnica-pojedinacno-informacije';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default async function ProdavniceIdPage({params}) {
    const { ProdavniceId } = await params;
  
    const Prodavnice = infromacije.find((Prodavnice) => Prodavnice.id == ProdavniceId);
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <PojedinacnaProdavnicaOpis logoProdavnice={Prodavnice.LOGO} nazivProdavnice={Prodavnice.NAZIV} nazivProdavniceUOPis={Prodavnice.NAZIVUTEKSTU} linSajta={Prodavnice.LINK} nazivAplikacije={Prodavnice.NAZIVAPLIKACIJE} />

        <div className={styles.KontenjerSaSvimProizvodima}>
        {Prodavnice.PROIZVODI?.map((PROIZVODI) => <PojedinacnaProdavnica key={PROIZVODI.id} imeProizvoda={PROIZVODI.NAZIVpROIZVODA} tezinaProizvoda={PROIZVODI.TEZINA} proizvodjacProizvoda={PROIZVODI.PROIZVODJAC} cenaProizvoda={PROIZVODI.CENA} slikaProizvoda={PROIZVODI.SLIKA} />)}  
        </div>
        <div className={styles.KontenjerZaDugmice}>
          <button className={styles.DugmrStrane}>1</button>
          <button className={styles.DugmrStrane}>2</button>
          <button className={styles.DugmrStrane}>3</button>
          <button className={styles.DugmrStrane}>4</button>
          <button className={styles.DugmrStrane}>5</button>
        </div>
</div>
  </div>
    );
  }