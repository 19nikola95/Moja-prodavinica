import Link from "next/link";
import styles from '@/styles/bar-za-naslovnu/nagradne-igre/glavnimeniNagradneigre.module.scss';
export function NagradnaIgraUGlavnomMeni({ime,datumOd,datumDo,slikaUrl,NagradneIgre} ){
    return   <Link className={styles.IzgledLinka} href={`/bar-sa-naslovne/nagradne-igre/${NagradneIgre.id}`}>
    <div className={styles.KontenjerZaNagradnuIgru}>
      <div className={styles.GornjiDeoZaNagradnuIgru}>
        <img className={styles.SlikaNagradneIgre} src={NagradneIgre.Slika} alt=""/>
      </div>
      <div className={styles.DonjiDeoZaNagradneIgre}>
        <div className={styles.DonjiDeoZaNaslov}>
          <p className={styles.SlovaNaslovaIgre}>{NagradneIgre.Naslov}</p>
        </div>
        <div className={styles.DonjiDeoZaTrajanje}>
        {NagradneIgre.datumod && NagradneIgre.datumdo && <p className={styles.SlovaTrajanjeIgre}>Trajanje: {NagradneIgre.datumod} do {NagradneIgre.datumdo}</p> }
        {!NagradneIgre.datumod && NagradneIgre.datumdo && <p className={styles.SlovaTrajanjeIgre}>Trajanje: do {NagradneIgre.datumdo}</p> }
        </div>
      </div>
    </div>
    </Link>
}  

