import styles from '@/styles/korpa.module.scss';
export function PojedinacniProizvodiPoProdavnici({proizvod}){
    return <div className={styles.KontenjerTekstauVasojProdavnici} >
        <p className={styles.TekstPoProdavnicama}>-{proizvod}</p>
    </div>
}
