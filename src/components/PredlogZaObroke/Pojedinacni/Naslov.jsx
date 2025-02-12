import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function NaslovRecepta({naslov}){
    return <div>
         <div className={styles.KontenjerZaNaslov}>
        <p className={styles.IzgledSlovaNaslova}>{naslov}</p>
        </div>
    </div>
}