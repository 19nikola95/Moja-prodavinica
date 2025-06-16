import Link from "next/link";
import { KontenjerProizvodaImeICena } from "./KontenjerProizvodaImeICena";
import styles from '@/styles/pocetnastrana.module.scss';
import { KontenjerOpisNamernica } from "./KontenjerOpisNamirnice";

export function KontenjerProizvoda({ marketi, slikaProizvoda, imeProizvoda, tezinaProizvoda, proizvodjacProizvoda, }){
    return <div className={styles.KontenjerProizvoda}>
    <div className={styles.GornjiDeoKontenjeraProizvoda}>
    <Link href="bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
    <img className={styles.IzgledSlikaProizvoda} src={slikaProizvoda} alt=""/>
    </Link>
      <div className={styles.KontenjerZaTekstProizvoda}>
       <KontenjerOpisNamernica imeProizvoda={imeProizvoda} TezinaProizvoda={tezinaProizvoda} ProizvodjacProizvoda={proizvodjacProizvoda}/>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
    {marketi?.map((market) =>  <KontenjerProizvodaImeICena ime= {market.naziv} cena={market.cena}/>)}
    </div>
  </div>
}