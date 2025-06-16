import styles from '@/styles/bar-za-naslovnu/kako-to/glavnimenikakoto.module.scss';
import Link from "next/link"
export function GlavniMeniKakoTo({naslov, slika, kakoTo}){
    return <Link className={styles.IzgledLinka}  href={`/bar-sa-naslovne/kako-to/${kakoTo.id}`}>
    <div className={styles.KontenjerSaIzgledom}>
      <div className={styles.KontenjerSaIzgledomGornji}>
        <img className={styles.IzgledSlikeLoga} src={kakoTo.slikaObroka} alt=""/>
      </div>
      <div className={styles.KontenjerSaIzgledomDonji}>
        <p>{kakoTo.naslovObroka}</p>
      </div>
    </div>
    </Link>
}
