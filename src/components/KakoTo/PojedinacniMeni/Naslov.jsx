import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function Naslov({naslov}){
    return <div>
          <div className={styles.KontenjerZaNaslov}>
        <p className={styles.IzgledSlovaNaslova}>{naslov}</p>
        </div>
    </div>
}