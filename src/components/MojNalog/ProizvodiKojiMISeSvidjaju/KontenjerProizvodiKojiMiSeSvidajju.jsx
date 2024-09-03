import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
import { CenaiNazivProizvodiKojiMiSeSvidjaju } from './CenaiNazivProizvodiKojiMiSeSvidjaju';
import { ProizvodGornjiMEni } from './ProizvodiGornjiMeni';

// proizvod = {naziv, tezinu, proizvodjac, slika, marketi: [{cena, naziv}]}
// prop "proizvodi" je array(niz) proizvoda

export function KontenjerProizvodaKomponentea ({proizvod}){
    return <div>
         <div className={styles.KontenjerProizvoda}>
         <ProizvodGornjiMEni imeProizvoda={proizvod.naziv} tezinaProizvoda={proizvod.tezina} proizvodjacProizvoca={proizvod.proizvodjac} slika={proizvod.slika}/>
        <div className={styles.DonjiDeoKontenjeraProizvoda}>
        
        {proizvod?.marketi?.map((market) => <CenaiNazivProizvodiKojiMiSeSvidjaju nazivProizvodiKojiMiSeSvidjaju={market.naziv} cenaProizvodiKojiMiseSvidjaju={market.cena}/>)}
            </div>
         </div>
    
    </div>
}