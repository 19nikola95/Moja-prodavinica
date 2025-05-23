import { NagradnaIgraUGlavnomMeni } from '@/components/KomponenteGlavnogMeniaNagradneIgre/NagradnaIgra';
import styles from '../../../../../styles/bar-za-naslovnu/nagradne-igre/glavnimeniNagradneigre.module.scss';
import { uopsteno } from '@/mocks/nagradna-igra-pojedinacna-uopsteno';
import Link from "next/link"
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function GlavniMeniNagradneIgre() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}

  </div>
<div className={styles.PozicijaNaslova}>
      <p className={styles.IzgledSlovaNaslova}>Sve nagradne igre</p>
      </div>
      <div className={styles.ProstorZaKontenjereNagradneIgre}>
         {uopsteno.map((nagradneigre) => <NagradnaIgraUGlavnomMeni NagradneIgre={nagradneigre}  />)}
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