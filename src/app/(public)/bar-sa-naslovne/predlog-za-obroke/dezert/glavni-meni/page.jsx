import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/dezertiglavnimeni.module.scss';
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
import Link from "next/link"
import { obroci } from '@/mocks/predlog-za-obrok-dezert';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
      <div className={styles.VideoReklame}>
      {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
      </div>
      <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Dezerti</p>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/torte">
        <button className={styles.IzgledDugmetaZaObroke}>Torte</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/kolaci">
        <button className={styles.IzgledDugmetaZaObroke}>Kolači</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/mafini">
        <button className={styles.IzgledDugmetaZaObroke}>Mafini</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/namazi">
        <button className={styles.IzgledDugmetaZaObroke}>Namazi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/sladoledi-i-pudinzi">
        <button className={styles.IzgledDugmetaZaObroke}>Sladoled i pudinzi</button>
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
  