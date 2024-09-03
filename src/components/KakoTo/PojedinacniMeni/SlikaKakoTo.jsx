import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function SlikaKakoTo({slika}){
    return <div>
 <img className={styles.IzgledSlike} src={slika} alt=""/>
    </div>
}