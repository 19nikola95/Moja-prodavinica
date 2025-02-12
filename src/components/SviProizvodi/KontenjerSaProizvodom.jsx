import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
import { GlavniMeniOpis } from './OpisProizvoda';
import { GlavniMeniCenaiNaziv } from './CenaINazivMarketa';
import { SlikaProizvoda } from './SlikaProizvoda';
import Link from 'next/link';
export function KontenjerSaProizvodom({marketi, slikaProizvoda, imeProizvoda, tezinaProizvoda, proizvodjacProizvoda}){
    return  <div>
< div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
            <Link href="bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
              <img className={styles.IzgledSlikaProizvoda} src={slikaProizvoda} alt=""/>
            </Link>
             <GlavniMeniOpis ImeProizvoda={imeProizvoda} TezinaProizvoda={tezinaProizvoda} ProizvodjacProizvoda={proizvodjacProizvoda}/>
              </div>
              <div className={styles.DonjiDeoKontenjeraProizvoda}>
              {marketi?.map((market) =>  <GlavniMeniCenaiNaziv ime= {market.naziv} cena={market.cena}/>)}
              </div>
              </div>
    </div>
      
    
}