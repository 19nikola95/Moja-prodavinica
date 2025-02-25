import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/zdravahranaglavnimeni.module.scss';
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-zdrava-hrana-glavni-meni';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
     {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Zdrava hrana</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/zdrava-hrana">
        <button className={styles.IzgledDugmetaZaObroke}>Zdrava hrana</button>
        </Link>  
        <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/organska-hrana">
        <button className={styles.IzgledDugmetaZaObroke}>Organska hrana</button>
        </Link> 
        <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/bezglutenski-proizvodi">
        <button className={styles.IzgledDugmetaZaObroke}>Bezglutenski proizvodi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/kostunjavo-voce-i-orascasti-plodovi">
        <button className={styles.IzgledDugmetaZaObroke}>Koštunjavo voće i orašasti plodovi</button>
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
