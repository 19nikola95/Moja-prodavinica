import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/licnahigijenaglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-licna-higijena';
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Lična higijena</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/oralna-higijena">
        <button className={styles.IzgledDugmetaZaObroke}>Oralna higijena</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-tela">
        <button className={styles.IzgledDugmetaZaObroke}>Nega tela</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-kose">
        <button className={styles.IzgledDugmetaZaObroke}>Nega kose</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/intimna-nega">
        <button className={styles.IzgledDugmetaZaObroke}>Intimna nega</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/pribor-za-negu-ruku-lica-tela">
        <button className={styles.IzgledDugmetaZaObroke}>Pribor za negu ruku lica i tela</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-za-muskarce">
        <button className={styles.IzgledDugmetaZaObroke}>Nega za muškarce</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-lica">
        <button className={styles.IzgledDugmetaZaObroke}>Nega lica</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-ruku-i-stopala">
        <button className={styles.IzgledDugmetaZaObroke}>Nega ruku i stopala</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/dezadoransi-i-totalne-vode">
        <button className={styles.IzgledDugmetaZaObroke}>Dezadoransi i toaletne vode</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/depil-program">
        <button className={styles.IzgledDugmetaZaObroke}>Depil program</button>
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
