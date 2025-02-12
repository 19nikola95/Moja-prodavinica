import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredjela.module.scss';
import Link from "next/link"
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
import { obroci } from '@/mocks/predlog-za-obroke-predjelo';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function GlavniMeniPredjela() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
      <div className={styles.VideoReklame}>
      {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
      </div>
      <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Predjelo</p>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/topla-predjela">
        <button className={styles.IzgledDugmetaZaObroke}>Topla predjela</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/hladna-predjela-i-salate-torte">
        <button className={styles.IzgledDugmetaZaObroke}>Hladna predjela i slane torte</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/peciva">
        <button className={styles.IzgledDugmetaZaObroke}>Peciva</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/umaci">
        <button className={styles.IzgledDugmetaZaObroke}>Umaci</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaObrocima}>
      {obroci.map((obrok) => <GlavniMeniPredlogZaObroke nazivObroka={obrok.nazivobroka} slikaObroka={obrok.slikaobroka} />)}    
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