import styles from '../../../../../../../styles/bar-za-naslovnu/svi-proizvodi/mesoimesnepreradjevineglavnimeni.module.scss';
import Link from "next/link"
import { KontenjerSaProizvodom } from '@/components/SviProizvodi/KontenjerSaProizvodom';
import { opisproizvoda } from '@/mocks/pojedinacni-proizvodi-opis';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function MesoIMesnePreradjevine() {
  const filtriraniProizvodi = opisproizvoda.filter(PojedinacniProizvod =>
    PojedinacniProizvod.podkategorija.includes("3.2"));
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}>
       {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
    
  </div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Meso i mesne prerađevine</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/meso-i-mesne-preradjevine/sveze-meso">
        <button className={styles.IzgledDugmetaZaObroke}>Sveže meso</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/meso-i-mesne-preradjevine/delikates">
        <button className={styles.IzgledDugmetaZaObroke}>Delikates</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/meso-i-mesne-preradjevine/pakovano-meso">
        <button className={styles.IzgledDugmetaZaObroke}>Pakovano meso</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/meso-i-mesne-preradjevine/pakovani-delikates-i-slajs-proizvodi">
        <button className={styles.IzgledDugmetaZaObroke}>Pakovani delikates i slajs proizvodi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/meso-i-mesne-preradjevine/pastete-i-mesne-konzerve">
        <button className={styles.IzgledDugmetaZaObroke}>Paštete i mesne konzerve</button>
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
