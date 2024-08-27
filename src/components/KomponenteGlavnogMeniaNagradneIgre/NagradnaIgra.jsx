import Link from "next/link";
import styles from '@/styles/bar-za-naslovnu/nagradne-igre/glavnimeniNagradneigre.module.scss';
export function NagradnaIgra({ime,datumOd,datumDo,slikaUrl} ){
    return   <Link href="/bar-sa-naslovne/nagradne-igre/pojedinacni-meni">
    <div className={styles.KontenjerZaNagradnuIgru}>
      <div className={styles.GornjiDeoZaNagradnuIgru}>
        <img className={styles.SlikaNagradneIgre} src={slikaUrl} alt=""/>
      </div>
      <div className={styles.DonjiDeoZaNagradneIgre}>
        <div className={styles.DonjiDeoZaNaslov}>
          <p className={styles.SlovaNaslovaIgre}>{ime}</p>
        </div>
        <div className={styles.DonjiDeoZaTrajanje}>
        {datumOd && datumDo && <p className={styles.SlovaTrajanjeIgre}>Trajanje: {datumOd} do {datumDo}</p> }
        {!datumOd && datumDo && <p className={styles.SlovaTrajanjeIgre}>Trajanje: do {datumDo}</p> }
        </div>
      </div>
    </div>
    </Link>
}  

