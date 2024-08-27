import styles from '@/styles/bar-za-naslovnu/kako-to/glavnimenikakoto.module.scss';
import Link from "next/link"
export function GlavniMeniKakoTo({naslov}){
    return <Link href="/bar-sa-naslovne/kako-to/pojedinacni-tab">
    <div className={styles.KontenjerSaIzgledom}>
      <div className={styles.KontenjerSaIzgledomGornji}>
        <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
      </div>
      <div className={styles.KontenjerSaIzgledomDonji}>
        <p>{naslov}</p>
      </div>
    </div>
    </Link>
}
