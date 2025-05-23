import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/mledcniproizvodisirijaja.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function MleciProizvodiSirIJaja() {
    const filtriraniProizvodi = opisproizvoda.filter(PojedinacniProizvod =>
      PojedinacniProizvod.kategorija.includes("4"));
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
       {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Mlečni proizvodi, sir i jaja</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/mleko">
        <button className={styles.IzgledDugmetaZaObroke}>Mleko</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/jogurt-i-kiselo-mlecni-proizvodi">
        <button className={styles.IzgledDugmetaZaObroke}>Jogurt i kiselo mlečni proizvodi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/biljni-i-mesoviti-namazi">
        <button className={styles.IzgledDugmetaZaObroke}>Biljni i mešoviti namazi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/maslac-i-margarin">
        <button className={styles.IzgledDugmetaZaObroke}>Maslac i margarin</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/sir-i-namazi-od-sira">
        <button className={styles.IzgledDugmetaZaObroke}>Sir i namazi od sira</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/jaja">
        <button className={styles.IzgledDugmetaZaObroke}>Jaja</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/pudinzi-i-slatkisi-u-casicama">
        <button className={styles.IzgledDugmetaZaObroke}>Pudinzi i slatkiši u čašicama</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/slatka-i-neutralna-pavlaka">
        <button className={styles.IzgledDugmetaZaObroke}>Slatka i neutralna pavlaka</button>
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
