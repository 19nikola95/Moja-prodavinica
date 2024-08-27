import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
import { CenaiNazivProizvodiKojiMiSeSvidjaju } from './CenaiNazivProizvodiKojiMiSeSvidjaju';
import { ProizvodGornjiMEni } from './ProizvodiGornjiMeni';
export function KontenjerProizvodaKomponentea (){
    return <div>
         <div className={styles.KontenjerProizvoda}>
         <ProizvodGornjiMEni imeProizvoda={"Smoki"} tezinaProizvoda={"50g"} proizvodjacProizvoca={"Stark"}/>
        <div className={styles.DonjiDeoKontenjeraProizvoda}>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"UNIVEREXPORT"} cenaProizvodiKojiMiseSvidjaju={"60"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"MAXI"} cenaProizvodiKojiMiseSvidjaju={"61"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"AMAN"} cenaProizvodiKojiMiseSvidjaju={"62"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"TEMPO"} cenaProizvodiKojiMiseSvidjaju={"63"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"IDEA"} cenaProizvodiKojiMiseSvidjaju={"64"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"STRELAC"} cenaProizvodiKojiMiseSvidjaju={"65"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"MAXI"} cenaProizvodiKojiMiseSvidjaju={"66"}/>
        <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={"MAXI"} cenaProizvodiKojiMiseSvidjaju={"67"}/>
            </div>
         </div>
    
    </div>
}