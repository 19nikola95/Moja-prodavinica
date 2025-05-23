import styles from '../../../../../styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
import { PojedinacniMeniSastojci } from '@/components/KakoTo/PojedinacniMeni/Sastojci';
import { PojedinacniMeniPostupak } from '@/components/KakoTo/PojedinacniMeni/Postupak';
import { PojedinacniMeniDodatniRecepti } from '@/components/KakoTo/PojedinacniMeni/DodatniRecepti';
import { Naslov } from '@/components/KakoTo/PojedinacniMeni/Naslov';
import { SlikaKakoTo } from '@/components/KakoTo/PojedinacniMeni/SlikaKakoTo';
import { VideoKakotO } from '@/components/KakoTo/PojedinacniMeni/VideoKakoTo';  
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
import { KakoTO } from '@/mocks/kako-to';
export default async function KakoToIdPage({params}) {
  const { kakoToId } = await params;

  const kakoTo = KakoTO.find((kakoTo) => kakoTo.id == kakoToId);

  return (
    <div>
      <div className={styles.KontenjerSadrzaja}>
      <div className={styles.VideoReklame}>
      {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
      </div>
      <Naslov naslov={kakoTo.naslovObroka} />
      <div className={styles.KontenjerStranice}>
        <div className={styles.LevaStranaKontenjeraStranice}>
          <SlikaKakoTo slika={kakoTo.slikaObroka} />
          <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
          <PojedinacniMeniSastojci sastojci1={kakoTo.Sastojci} />
          <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
          </div>
        </div>
        <div className={styles.DesnaStranaKontenjeraStranice}>
          <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako uraditi:</p>
          <div className={styles.KontenjerZaPostupke}>
            <PojedinacniMeniPostupak postupak1={kakoTo.PoStupak} />
          </div>
            <VideoKakotO video={kakoTo.videoObroka} />
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
          {kakoTo.DodatanOpis?.map((DodatanOpis, index) => <PojedinacniMeniDodatniRecepti key={DodatanOpis.id} slika={DodatanOpis.Slicica} receptDodatan={DodatanOpis.DodatanreCept}/>)}  
          </div>
        </div>
      </div>
  </div>
  );
}