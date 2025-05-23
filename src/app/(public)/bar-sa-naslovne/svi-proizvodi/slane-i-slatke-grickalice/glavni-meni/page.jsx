import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/glavnimenislatkisi.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function SlaneISlatkeGrickalice() {
  const filtriraniProizvodi = opisproizvoda.filter(PojedinacniProizvod =>
    PojedinacniProizvod.kategorija.includes("7"));
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Slane i slatke grickalice</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/cokolada-i-cokoladice">
        <button className={styles.IzgledDugmetaZaObroke}>Čokolada i čokoladice</button>
        </Link>  
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/krosani-i-rolati">
        <button className={styles.IzgledDugmetaZaObroke}>Kroasani i rolati</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/zvake-i-bombone">
        <button className={styles.IzgledDugmetaZaObroke}>Žvake i bombone</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/keks">
        <button className={styles.IzgledDugmetaZaObroke}>Keks</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/slane-grickalice">
        <button className={styles.IzgledDugmetaZaObroke}>Slane grickalice</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/ratluci-i-ostali-slatki-proizvodi">
        <button className={styles.IzgledDugmetaZaObroke}>Ratluci i ostali slatki proizvodi</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaSlikama}>
      {filtriraniProizvodi.map((opisproizvodi) => <KontenjerSaProizvodom PojedinacniProizvod={opisproizvodi} />)}       
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
