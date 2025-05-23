import styles from '@/styles/bar-za-naslovnu/prodavnice/sveprodavnice.module.scss';
import Link from "next/link"
export function GlaniMeniProdavnica({imeMarketa, ulicaMarekta, logoProdavnice, Prodavnice}){
    return  <Link href={`/bar-sa-naslovne/prodavnice/${Prodavnice.id}`}>
    <div className={styles.KontenjerSaIzgledom}>
      <div className={styles.KontenjerSaIzgledomGornji}>
        <img className={styles.IzgledSlikeLoga} src={Prodavnice.LOGO} alt=""/>
      </div>
      <div className={styles.KontenjerSaIzgledomDonji}>
        <p className={styles.ImeMarketa}>{Prodavnice.NAZIV}</p>
        <p className={styles.UlicaIbroj}>{Prodavnice.ULICA}</p>
      </div>
    </div>
    </Link>
    
 
}
