import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/svezakucneljubimceglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-sve-za-kucne-ljubimce';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Sve za kućne ljubimce</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/hrana-za-pse">
        <button className={styles.IzgledDugmetaZaObroke}>Hrana za pse</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/hrana-za-macke">
        <button className={styles.IzgledDugmetaZaObroke}>Hrana za mačke</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/hrana-za-ostale-kucne-ljubimce">
        <button className={styles.IzgledDugmetaZaObroke}>Hrana za ostale kućne ljubimce</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/pet-oprema">
        <button className={styles.IzgledDugmetaZaObroke}>Pet oprema</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaSlikama}>
      {proizvodi.map((proizvod) => <KontenjerSaProizvodom slikaProizvoda={proizvod.slika} imeProizvoda={proizvod.naziv} tezinaProizvoda={proizvod.tezina} proizvodjacProizvoda={proizvod.proizvodjac} marketi={proizvod.marketi}/>)}   
  
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
