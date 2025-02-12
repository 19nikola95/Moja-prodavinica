import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/napitcihlavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-napitci';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Napici</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/napici/sokovi">
        <button className={styles.IzgledDugmetaZaObroke}>Sokovi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/kafa">
        <button className={styles.IzgledDugmetaZaObroke}>Kafa</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/caj">
        <button className={styles.IzgledDugmetaZaObroke}>Čaj</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/mineralna-voda">
        <button className={styles.IzgledDugmetaZaObroke}>Mineralne vode</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/gazirane-vode">
        <button className={styles.IzgledDugmetaZaObroke}>Gazirane vode</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/pivo">
        <button className={styles.IzgledDugmetaZaObroke}>Pivo</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/vino">
        <button className={styles.IzgledDugmetaZaObroke}>Vino</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/zestkoa-pica">
        <button className={styles.IzgledDugmetaZaObroke}>Žestoka pića</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/energetski-napici">
        <button className={styles.IzgledDugmetaZaObroke}>Energetski napici</button>
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
