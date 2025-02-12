import styles from '@/styles/istorijaKorpe.module.scss';
export function GodisnjiOpis({cena}){
    return <div>
        <div className={styles.KontenjerzaUstetuPrekoAplikacije}>
        <p className={styles.izgledTekstaOpisa}>Koristeći aplikaciju u ovoj godini ste uštedeli:</p>
        <p className={styles.IzgledCeneUstede}>{cena} din</p>
        <img className={styles.IzgledSmajliUstede} src="/DodatniSmajlici/Smajli ustede.png" alt=""/>
        </div>
    </div>
}