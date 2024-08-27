import styles from '@/styles/bar-za-naslovnu/prodavnice/sveprodavnice.module.scss';
import Link from "next/link"
export function GlaniMeniProdavnica({imeMarketa, ulicaMarekta}){
    return <div>
    <Link href="/bar-sa-naslovne/prodavnice/pojedinacna-prodavnica">
    <div className={styles.KontenjerSaIzgledom}>
      <div className={styles.KontenjerSaIzgledomGornji}>
        <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
      </div>
      <div className={styles.KontenjerSaIzgledomDonji}>
        <p className={styles.ImeMarketa}>{imeMarketa}</p>
        <p className={styles.UlicaIbroj}>{ulicaMarekta}</p>
      </div>
    </div>
    </Link>
    </div>
 
}
