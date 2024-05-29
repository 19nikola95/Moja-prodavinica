import styles from '../../../../../../styles/bar-za-naslovnu/svi-proizvodi/osnovnenamerniceglavnimeni.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Osnovne namernice</p>
      </div>
      <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/hleb-i-peciva">
        <button className={styles.IzgledDugmetaZaObroke}>Hleb i pecivo</button>
        </Link>  
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/brasno">
        <button className={styles.IzgledDugmetaZaObroke}>Brašno</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/secer">
        <button className={styles.IzgledDugmetaZaObroke}>Šećer</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/ulja-i-sirce">
        <button className={styles.IzgledDugmetaZaObroke}>Ulje i sirće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/so-i-zacini">
        <button className={styles.IzgledDugmetaZaObroke}>So i začini</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/pirinac">
        <button className={styles.IzgledDugmetaZaObroke}>Pirinač</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/testenine">
        <button className={styles.IzgledDugmetaZaObroke}>Testenina</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/zimnice-i-konzervirano-voce-i-povrce">
        <button className={styles.IzgledDugmetaZaObroke}>Zimnica i konzervirano voći i povrće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/majonez-kecap-i-sosovi">
        <button className={styles.IzgledDugmetaZaObroke}>Majonez, kečap i sosovi</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/med">
        <button className={styles.IzgledDugmetaZaObroke}>Med</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/instant-supe-i-pirei">
        <button className={styles.IzgledDugmetaZaObroke}>Instant supe i pirei</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/priprema-kolaca-i-torti">
        <button className={styles.IzgledDugmetaZaObroke}>Priprema kolača i torti</button>
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
