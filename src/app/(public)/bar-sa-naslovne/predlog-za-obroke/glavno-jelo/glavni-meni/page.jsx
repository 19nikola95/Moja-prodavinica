import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/glavnimeniglavnojelo.module.scss';
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
import { uopstenooObrocima } from "@/mocks/pojedinacni-obrok-uopstene-informacije";
import Link from "next/link"
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function GlavnoJelo() {
    const filtriraniObroci = uopstenooObrocima.filter(PojedinacniObrok =>
      PojedinacniObrok.kategorija.includes("3"));
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
<div className={styles.VideoReklame}>
    {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
</div>
<div className={styles.KontenjerZaNaslov}>
<p className={styles.IzgledSlovaNaslova}>Glavno jelo</p>
</div>
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
{filtriraniObroci.map((uopstenooObrocima) => <GlavniMeniPredlogZaObroke PojedinacniObrok={uopstenooObrocima} />)} 

  </div>
  <div className={styles.KontenjerZaDruguStranicu}>
         <button className={styles.DugmeZaSledecuStranu}>1</button>
         <button className={styles.DugmeZaSledecuStranu}>2</button>
         <button className={styles.DugmeZaSledecuStranu}>3</button>
         <button className={styles.DugmeZaSledecuStranu}>4</button>
         <button className={styles.DugmeZaSledecuStranu}>5</button>
         <button className={styles.DugmeZaSledecuStranu}>6</button>
         <button className={styles.DugmeZaSledecuStranu}>7</button>
         <button className={styles.DugmeZaSledecuStranu}>8</button>
         <button className={styles.DugmeZaSledecuStranu}>9</button>
       </div>
</div>
</div>
  );
}