import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function ProizvodjacProizvoda({proizvodjac}){
    return <div>
            <p className={styles.TekstOpisa}><b>Proizvođač:</b> {proizvodjac}</p>
    </div>
}