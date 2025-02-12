import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/glavnimenimameibebe.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-mame-i-bebe';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Mame i bebe</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/pelene-i-maramice">
        <button className={styles.IzgledDugmetaZaObroke}>Pelene i maramice</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/kasica-i-hrana-za-bebe">
        <button className={styles.IzgledDugmetaZaObroke}>Kašice i hrana za bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/oprema-za-bebe">
        <button className={styles.IzgledDugmetaZaObroke}>Oprema za bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/kozmetika">
        <button className={styles.IzgledDugmetaZaObroke}>Kozmetika</button>
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
