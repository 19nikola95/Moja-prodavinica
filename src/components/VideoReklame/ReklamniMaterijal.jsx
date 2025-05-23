import styles from '@/styles/bar-za-naslovnu/kako-to/glavnimenikakoto.module.scss';
import Link from "next/link"
export function FunkcijaReklama({slika, link, id}){
    return  <div className={styles.VideoReklame}>
    <div className={styles.KontenjerSlikaReklame}>
   <Link href={link} >
      <img  className={styles.SlikaReklame} src={slika} alt="" />
      </Link>
      </div>
    </div>

}