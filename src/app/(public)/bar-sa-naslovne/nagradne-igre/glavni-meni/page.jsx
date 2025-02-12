import { NagradnaIgra } from '@/components/KomponenteGlavnogMeniaNagradneIgre/NagradnaIgra';
import styles from '../../../../../styles/bar-za-naslovnu/nagradne-igre/glavnimeniNagradneigre.module.scss';
import { NagradneIgre } from '@/mocks/nagradne-igre-glavni-meni';
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
      {NagradneIgre.map((NagradneIgra) => <NagradnaIgra ime={NagradneIgra.IMEIGRE} datumOd={NagradneIgra.DATUMOD} datumDo={NagradneIgra.DATUMDO} slikaUrl={NagradneIgra.SLIKA} />)}   
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