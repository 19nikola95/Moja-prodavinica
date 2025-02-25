import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/sredstvazaodrzavanjeglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { proizvodi } from '@/mocks/svi-proizvodi-sredstva-za-odrzavanje-higijene';
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
      <p className={styles.IzgledSlovaNaslova}>Sredstva za održavanje higijene</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-odrzavanje-domacinstva">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za održavanje domaćinstva</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/oprema-za-odrzavanje-domacinstva">
        <button className={styles.IzgledDugmetaZaObroke}>Oprema za održavanje domaćinstva</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-pranje-vesa">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za pranje veša</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-pranje-sudova">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za pranje sudova</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/osvezivaci-prostora">
        <button className={styles.IzgledDugmetaZaObroke}>Osveživači prostora</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/papirna-galanterija">
        <button className={styles.IzgledDugmetaZaObroke}>Papirna galanterija</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/ostalo">
        <button className={styles.IzgledDugmetaZaObroke}>Ostalo</button>
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
