import styles from '../../../../../styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
import { PojedinacniMeniSastojci } from '@/components/KakoTo/PojedinacniMeni/Sastojci';
import { PojedinacniMeniPostupak } from '@/components/KakoTo/PojedinacniMeni/Postupak';
import { PojedinacniMeniDodatniRecepti } from '@/components/KakoTo/PojedinacniMeni/DodatniRecepti';
import { Naslov } from '@/components/KakoTo/PojedinacniMeni/Naslov';
import { SlikaKakoTo } from '@/components/KakoTo/PojedinacniMeni/SlikaKakoTo';
import { VideoKakotO } from '@/components/KakoTo/PojedinacniMeni/VideoKakoTo';  
import { uopstenooObrocima } from '@/mocks/kako-to-uopstene-infromacije';
import { sastojciObroci } from '@/mocks/kako-to-sastojci';
import { Postupci } from '@/mocks/kako-to-postupak';
import { Ostali } from '@/mocks/kako-to-ostalo';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function kontaktirajnas() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
<div className={styles.VideoReklame}>
{ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
</div>
{uopstenooObrocima.map((uopstenooObroku) => <Naslov naslov={uopstenooObroku.naslovObroka} />)}   
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
          {uopstenooObrocima.map((uopstenooObroku) => <SlikaKakoTo slika={uopstenooObroku.slikaObroka} />)}  
            <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}> 
            {sastojciObroci.map((sastojciObroka) => <PojedinacniMeniSastojci sastojci1={sastojciObroka.Sastojci} />)} 
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako oprati stvari</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
             {Postupci.map((Postupak) => <PojedinacniMeniPostupak postupak1={Postupak.PoStupak} />)} 
            
            </ol>
            </div>
            {uopstenooObrocima.map((uopstenooObroku) => <VideoKakotO video={uopstenooObroku.videoObroka} />)}  
      
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
          {Ostali.map((Ostalo) => <PojedinacniMeniDodatniRecepti slika={Ostalo.Slika} receptDodatan={Ostalo.NaslovRecepta}/>)}  
          </div>
        </div>
      </div>
  </div>
  );
}