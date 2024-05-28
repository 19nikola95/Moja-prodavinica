import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/glavnimeniglavnojelo.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
<div className={styles.VideoReklame}></div>
<p className={styles.IzgledSlovaNaslova}>Glavno jelo</p>
<div className={styles.KontenjerSaIzboromObroka}>
<Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-mesa">
  <button className={styles.IzgledDugmetaZaObroke}>Jela od mesa</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-ribe">
  <button className={styles.IzgledDugmetaZaObroke}>Jela od ribe</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-povrca">
  <button className={styles.IzgledDugmetaZaObroke}>Jela od povrća</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/paste">
  <button className={styles.IzgledDugmetaZaObroke}>Paste</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/pice">
  <button className={styles.IzgledDugmetaZaObroke}>Pice</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/rizota-i-jela-sa-pirincem">
  <button className={styles.IzgledDugmetaZaObroke}>Rižota i jela sa pirinčem</button>
  </Link>
</div>
<div className={styles.KontenjerSaObrocima}>
  <div className={styles.KontenjerSaPojedinacnimObrokom}>
    <div className={styles.KontenjerZaSliku}>
      <img className={styles.IzgledSlike} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
    </div>
    <div className={styles.KonjtenjerZaTekst}>
      <p>Musaka</p>
    </div>
  </div>
  </div>
</div>
</div>
  );
}