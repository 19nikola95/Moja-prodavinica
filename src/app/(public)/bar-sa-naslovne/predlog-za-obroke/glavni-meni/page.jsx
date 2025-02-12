import Link from "next/link"
import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredlogzaobroke.module.scss';
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
import { obroci } from '@/mocks/predlog-za-obrok-glavni-meni';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function predlogZaObroke() {
  return (
  <div>
   <div className={styles.GlavniKontenjerZaSadrzaj}>
   <div className={styles.VideoReklame}>
   {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
   </div>
  <div className={styles.KontenjerZaNaslov}>
  <p className={styles.IzgledSlovaNaslova}>Predlog za obroke</p>
  </div>
      
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga obroka"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/predlog-za-obroke/dorucak">
        <button className={styles.IzgledDugmetaZaObroke}>Doručak</button>
        </Link>     
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Predjelo</button>
        </Link>   
        <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Glavno jelo</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Dezert</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/zimnice">
        <button className={styles.IzgledDugmetaZaObroke}>Zimnice</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/lagani-obroci-salate">
        <button className={styles.IzgledDugmetaZaObroke}>Lagani obroci i salate</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/variva-i-prilozi">
        <button className={styles.IzgledDugmetaZaObroke}>Variva i prilozi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/smuti-i-sejkovi">
        <button className={styles.IzgledDugmetaZaObroke}>Smuti i šejkovi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/kasice-za-bebe">
        <button className={styles.IzgledDugmetaZaObroke}>Kašice za bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/zdravi-obroci">
        <button className={styles.IzgledDugmetaZaObroke}>Zdravi obroci</button>
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
  