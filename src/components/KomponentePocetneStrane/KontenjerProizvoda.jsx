import Link from "next/link";
import { KontenjerProizvodaImeICena } from "./KontenjerProizvodaImeICena";
import styles from '@/styles/pocetnastrana.module.scss';
import { KontenjerOpisNamernica } from "./KontenjerOpisNamirnice";

const marketiPrimer=[
    {
        ime: "Univerexport",
        cena: 12312122
    },
    {
        ime: "Idea",
        cena: 12212422
    },
    {
        ime: "Dis",
        cena: 124
    },
    {
      ime: "Dis",
      cena: 124
  },
  {
    ime: "Dis",
    cena: 124
},
{
  ime: "Dis",
  cena: 124
},
{
  ime: "Dis",
  cena: 124
},
{
  ime: "Dis",
  cena: 124
}
    
]

export function KontenjerProizvoda({marketi=marketiPrimer}){
    return <div className={styles.KontenjerProizvoda}>
    <div className={styles.GornjiDeoKontenjeraProizvoda}>
    <Link href="bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
    <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
    </Link>
      <div className={styles.KontenjerZaTekstProizvoda}>
       <KontenjerOpisNamernica imeProizvoda="Pavlaka sa dosta mlecne masti" TezinaProizvoda="250g" ProizvodjacProizvoda="Imlek subotica Novi Sad aaa"/>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
    
    {marketi.map((market) =>  <KontenjerProizvodaImeICena ime= {market.ime} cena={market.cena}/>)}
    </div>
  </div>
}