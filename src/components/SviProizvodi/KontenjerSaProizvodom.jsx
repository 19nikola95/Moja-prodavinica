import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
import { GlavniMeniOpis } from './OpisProizvoda';
import { GlavniMeniCenaiNaziv } from './CenaINazivMarketa';
import Link from 'next/link';
export function KontenjerSaProizvodom(){
    return  <div>
< div className={styles.KontenjerProizvoda}>
            <div className={styles.GornjiDeoKontenjeraProizvoda}>
              <Link href="/bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
              <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              </Link>
             <GlavniMeniOpis NazivNamernice={"Bademovo mleko"} KolicinaNamernice={"1L"} ProizvodjacNamernice={"Imlek"}/>
              </div>
              <div className={styles.DonjiDeoKontenjeraProizvoda}>
                <GlavniMeniCenaiNaziv NazivMarketa={"UNIVEREXPORT"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"UNIVEREXPORT"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"IDEA"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"DIS"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"AMAN"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"STRELAC"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"MAJA"} cenaMarketa={"254,22"}/>
                <GlavniMeniCenaiNaziv NazivMarketa={"BUCKO"} cenaMarketa={"254,22"}/>
              </div>
              </div>
    </div>
      
    
}