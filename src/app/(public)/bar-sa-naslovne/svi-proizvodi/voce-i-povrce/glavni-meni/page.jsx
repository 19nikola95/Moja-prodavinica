import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/voceipovrceglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Voće i povrće</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/voce-i-povrce/sveze-voce">
        <button className={styles.IzgledDugmetaZaObroke}>Sveže voće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/voce-i-povrce/sveze-povrce">
        <button className={styles.IzgledDugmetaZaObroke}>Sveže povrće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/voce-i-povrce/pakovane-salate">
        <button className={styles.IzgledDugmetaZaObroke}>Pakovane salate</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaSlikama}>
      <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>
         <KontenjerSaProizvodom/>    
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
