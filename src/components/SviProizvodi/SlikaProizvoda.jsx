import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
import Link from 'next/link';
export function SlikaProizvoda({slika, linkProizvoda}){
    return <div>
 <Link href={linkProizvoda}>
              <img className={styles.IzgledSlikaProizvoda} src={slika} alt=""/>
              </Link>
    </div>
}