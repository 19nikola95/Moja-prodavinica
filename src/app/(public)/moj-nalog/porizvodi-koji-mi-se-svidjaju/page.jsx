"use client"

import styles from '../../../../styles/proizvodiKojiMiSeSvidjaju.module.scss';
import Link from "next/link"
import {useState} from 'react';
import { ProizvodiKojiMiSeSvidjajuKomponente } from '@/components/MojNalog/LicneInformacije';
import { SlikaProfila } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/LicnaSlika';
import { KontenjerProizvodaKomponentea } from '@/components/MojNalog/ProizvodiKojiMISeSvidjaju/KontenjerProizvodiKojiMiSeSvidajju';
import {proizvodi} from '@/mocks/moj-nalog-proizvodi-koji-mi-se-svidjaju-proizvodi';
import {createPaginationPages, createPagination} from '@/utils/paginationUtils'
import { profili } from '@/mocks/moj-nalog-profil';
export default function proizvodiKojiMiSeSvidjaju() {
  const [strana, setStrana] = useState(1);
  const proizvodiPaginated = createPagination(proizvodi, strana, { perPage: 4 });

  function idiNaStranu(strana) { 
    setStrana(strana);
  }

  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfilaiOpisa}>
          {profili.map((profil) => <SlikaProfila slika={profil.SLIKA} />)}  
            {profili.map((profil) => <ProizvodiKojiMiSeSvidjajuKomponente imeiPrezime={profil.IME} adresaiMesto={profil.ADRESA} email={profil.EMAIL} brojMobilnog={profil.BROJ} />)}  
          <div className={styles.KontenjerZaDugmeZaSacuvati}>
            <button className={styles.DugmeSacuvajIzmene}>Sačuvaj izmene</button>
            </div>
            <div className={styles.KontenjerOdjaviSe}>
            <button className={styles.DugmeOdjaviSe}>Odjavi se</button>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerSaCelimSadrzajem}>
        <div className={styles.BarZaNavigaciju}>
          <button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button>
          <Link className={styles.IzgledLinka} href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
          <Link className={styles.IzgledLinka} href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <Link className={styles.IzgledLinka} href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
          </div>
     
        <div className={styles.KontenjerPratiteProizvode}>
          <p className={styles.NaslovZaAkciju}>Pratite proizvode koji Vam se sviđaju</p>
        </div>
        <div className={styles.KontenjerSaSlikama}>
         {proizvodiPaginated.items?.map((proizvod) => <KontenjerProizvodaKomponentea proizvod={proizvod}/>)}         
          </div>
        <div className={styles.KontenjerZaDruguStranicu}>
            { proizvodiPaginated.pages.map((strana) => <button className={styles.DugmeZaSledecuStranu} onClick={() => idiNaStranu(strana)}>{strana}</button>)}
        </div>
      </div>
      </div>
</div>
  );
}
