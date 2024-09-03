import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function SlikaJela({slika}){
    return <div>
 <img className={styles.IzgledSlike} src={slika} alt=""/>
    </div>
}