import styles from '../../../../../styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
import Link from "next/link"
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function SviProizvodiGlavnimeni() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Svi proizvodi</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Osnovne namirnice</button>
       </Link>   
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Meso, riba i njihove prerađevine</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Mlečni proizvodi, sir i jaja</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/voce-i-povrce/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Voće i povrće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Slane i slatke grickalice</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Zdrava hrana</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Napici</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Lična higijena</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Mame i bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Sve za kućne ljubimce</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za održavanje higijene</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/glavni-meni">
        <button className={styles.IzgledDugmetaZaObroke}>Tehnika i ostalo</button>
        </Link>
      </div>
        <div className={styles.KontenjerSaSlikama}>
        {opisproizvoda.map((opisproizvodi) => <KontenjerSaProizvodom PojedinacniProizvod={opisproizvodi} />)}
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
