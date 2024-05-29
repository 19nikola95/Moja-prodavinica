import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/sredstvazaodrzavanjeglavnimeni.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Sredstva za održavanje higijene</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-odrzavanje-domacinstva">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za održavanje domaćinstva</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/oprema-za-odrzavanje-domacinstva">
        <button className={styles.IzgledDugmetaZaObroke}>Oprema za održavanje domaćinstva</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-pranje-vesa">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za pranje veša</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/sredstva-za-pranje-sudova">
        <button className={styles.IzgledDugmetaZaObroke}>Sredstva za pranje sudova</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/osvezivaci-prostora">
        <button className={styles.IzgledDugmetaZaObroke}>Osveživači prostora</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/papirna-galanterija">
        <button className={styles.IzgledDugmetaZaObroke}>Papirna galanterija</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/ostalo">
        <button className={styles.IzgledDugmetaZaObroke}>Ostalo</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaSlikama}>
         
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
         <div className={styles.KontenjerProizvoda}>
           <div className={styles.GornjiDeoKontenjeraProizvoda}>
             <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
             <div className={styles.KontenjerZaTekstProizvoda}>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Mleko od badema</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >350g</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <p className={styles.SlovaZaOpisSadrzaja} >Doktor etker</p>
               </div>
               <div className={styles.RedUKontenjeruZaTekstProizvoda}>
                 <img className={styles.DimenzijeSlikeKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
               </div>
             </div>
           </div>
           <div className={styles.DonjiDeoKontenjeraProizvoda}>
           <div className={styles.IzgledNaslovaMarketa}>
           <p>Univerexport</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>DIS</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Aman</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Idea</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>Mega Market</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Gomex</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
     <p>STR MAJA</p>
     </div>
     <div className={styles.IzgledNaslovaMarketa}>
     <p>Tempo</p>
     </div>
     <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
      <p>211.300 din</p>
      </div>
           </div>
         </div>
       
         </div>
        
      
       <div className={styles.KontenjerZaDruguStranicu}>
         <button className={styles.DugmeZaSledecuStranu}>1</button>
         <button className={styles.DugmeZaSledecuStranu}>2</button>
         <button className={styles.DugmeZaSledecuStranu}>3</button>
         <button className={styles.DugmeZaSledecuStranu}>4</button>
         <button className={styles.DugmeZaSledecuStranu}>5</button>
         <button className={styles.DugmeZaSledecuStranu}>6</button>
         <button className={styles.DugmeZaSledecuStranu}>7</button>
         <button className={styles.DugmeZaSledecuStranu}>8</button>
         <button className={styles.DugmeZaSledecuStranu}>9</button>
       </div>
     </div>
</div>
 );
}
