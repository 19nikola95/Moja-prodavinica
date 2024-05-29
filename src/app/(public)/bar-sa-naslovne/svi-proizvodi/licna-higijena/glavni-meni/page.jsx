import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/licnahigijenaglavnimeni.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Lična higijena</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/oralna-higijena">
        <button className={styles.IzgledDugmetaZaObroke}>Oralna higijena</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-tela">
        <button className={styles.IzgledDugmetaZaObroke}>Nega tela</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-kose">
        <button className={styles.IzgledDugmetaZaObroke}>Nega kose</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/intimna-nega">
        <button className={styles.IzgledDugmetaZaObroke}>Intimna nega</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/pribor-za-negu-ruku-lica-tela">
        <button className={styles.IzgledDugmetaZaObroke}>Pribor za negu ruku lica i tela</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-za-muskarce">
        <button className={styles.IzgledDugmetaZaObroke}>Nega za muškarce</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-lica">
        <button className={styles.IzgledDugmetaZaObroke}>Nega lica</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/nega-ruku-i-stopala">
        <button className={styles.IzgledDugmetaZaObroke}>Nega ruku i stopala</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/dezadoransi-i-totalne-vode">
        <button className={styles.IzgledDugmetaZaObroke}>Dezadoransi i toletne vode</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/depil-program">
        <button className={styles.IzgledDugmetaZaObroke}>Depil program</button>
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
