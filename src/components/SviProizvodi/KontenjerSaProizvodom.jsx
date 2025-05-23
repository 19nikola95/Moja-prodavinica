import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
import { GlavniMeniOpis } from './OpisProizvoda';
import { GlavniMeniCenaiNaziv } from './CenaINazivMarketa';
import { SlikaProizvoda } from './SlikaProizvoda';
import Link from 'next/link';
export function KontenjerSaProizvodom({marketi, slikaProizvoda, imeProizvoda, tezinaProizvoda, proizvodjacProizvoda, PojedinacniProizvod}){
    return  <div>
< div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
            <Link href={`/bar-sa-naslovne/svi-proizvodi/${PojedinacniProizvod.id}`}>
              <img className={styles.IzgledSlikaProizvoda} src={PojedinacniProizvod.slika} alt=""/>
            </Link>
             <GlavniMeniOpis ImeProizvoda={PojedinacniProizvod.naziv} TezinaProizvoda={PojedinacniProizvod.tezinA} ProizvodjacProizvoda={PojedinacniProizvod.proizvodjaC}/>
              </div>
              <div className={styles.DonjiDeoKontenjeraProizvoda}>
              {PojedinacniProizvod.cenePoMarketika?.map((cenePoMarketika) =>  <GlavniMeniCenaiNaziv ime= {cenePoMarketika.nazivmakreta} cena={cenePoMarketika.cenaproizvoda}/>)}
              </div>
              </div>
    </div>
      
    
}