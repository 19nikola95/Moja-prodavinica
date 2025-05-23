import styles from '@/styles/istorijaKorpe.module.scss';
export function GodisnjiOpis({GodisnjaCena}){
    return <div>
        <div className={styles.KontenjerzaUstetuPrekoAplikacije}>
        <p className={styles.izgledTekstaOpisa}>Koristeći aplikaciju u ovoj godini ste uštedeli:</p>
        <p className={styles.IzgledCeneUstede}>{GodisnjaCena} din</p>
        <img className={styles.IzgledSmajliUstede} src="/DodatniSmajlici/Smajli ustede.png" alt=""/>
        </div>
    </div>
}