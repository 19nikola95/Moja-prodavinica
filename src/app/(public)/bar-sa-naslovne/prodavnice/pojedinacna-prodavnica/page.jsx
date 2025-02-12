import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
import { PojedinacnaProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledPojedinacneProdavnice';
import { PojedinacnaProdavnicaOpis } from '@/components/KomponenteMojeProdavnice/PojedinacnaProdavnicaObavestenje';
import { ostalo } from '@/mocks/prodavnica-pojedinacna-ostalo';
import { infromacije } from '@/mocks/prodavnica-pojedinacno-informacije';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  {infromacije.map((infromacijA) => <PojedinacnaProdavnicaOpis logoProdavnice={infromacijA.LOGO} nazivProdavnice={infromacijA.NAZIV} nazivProdavniceUOPis={infromacijA.NAZIVUTEKSTU} linSajta={infromacijA.LINK} nazivAplikacije={infromacijA.NAZIVAPLIKACIJE} />)}  

        <div className={styles.KontenjerSaSvimProizvodima}>
        {ostalo.map((ostalI) => <PojedinacnaProdavnica imeProizvoda={ostalI.IME} tezinaProizvoda={ostalI.TEZINA} proizvodjacProizvoda={ostalI.PROIZVODJAC} cenaProizvoda={ostalI.CENA} slikaProizvoda={ostalI.SLIKA} />)}  
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