import styles from '@/styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
export function SlikaNagradneIgre({slika}){
    return <div>
          <img className={styles.IzgledSlike} src={slika} alt=""/>
    </div>
}