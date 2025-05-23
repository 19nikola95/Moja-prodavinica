import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/umaci.module.scss';
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
import { uopstenooObrocima } from '@/mocks/pojedinacni-obrok-uopstene-informacije';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function Umaci() {
  const filtriraniObroci = uopstenooObrocima.filter(PojedinacniObrok =>
    PojedinacniObrok.podkategorija.includes("6.4"));
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
      <div className={styles.VideoReklame}>
      {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
      </div>
      <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Umaci</p>
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