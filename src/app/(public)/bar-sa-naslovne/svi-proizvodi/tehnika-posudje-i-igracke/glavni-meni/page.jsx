import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/tehnikaposudjeialatiglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function TehnikaPosudjeIIgracke() {
  const filtriraniProizvodi = opisproizvoda.filter(PojedinacniProizvod =>
    PojedinacniProizvod.kategorija.includes("10")); 
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
       {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Tehnika posuđe i igračke</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/tehnika">
        <button className={styles.IzgledDugmetaZaObroke}>Tehnika</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/posudje">
        <button className={styles.IzgledDugmetaZaObroke}>Posuđe</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/stvari-za-kucu">
        <button className={styles.IzgledDugmetaZaObroke}>Stvari za kuću</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/igracke">
        <button className={styles.IzgledDugmetaZaObroke}>Igračke</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/alati">
        <button className={styles.IzgledDugmetaZaObroke}>Alati</button>
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
