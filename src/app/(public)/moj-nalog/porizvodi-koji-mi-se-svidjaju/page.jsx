import styles from '../../../../styles/proizvodiKojiMiSeSvidjaju.module.scss';
import Link from "next/link"
export default function proizvodiKojiMiSeSvidjaju() {
  return (
  <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfila}>
            <img  className={styles.IzgledProfilneSlike} src="/Moj nalog/bred pit.jpg" alt=""/>
            <div className={styles.KontenjerIme}>
            <p className={styles.IzgledSlovaProfila}>Nikola Milojević</p>
            <img  className={styles.SimbolIzmeni} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerMesto}>
            <p className={styles.IzgledMestaProfila}>Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className={styles.SimbolIzmeni1} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerEmail}>
            <p className={styles.IzgledEmailaProfila}>nikolamilojevic78@gmail.com</p>
            <img  className={styles.SimbolIzmeni2} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className={styles.KontenjerBroj}>
            <p className={styles.IzgledBrojaProfila}>066001215</p>
            <img  className={styles.SimbolIzmeni3} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
            <button className={styles.DugmeSacuvajIzmene}>Sačuvaj izmene</button>
            <button className={styles.DugmeOdjaviSe}>Odjavi se</button>
            <div className={styles.LinijaOdvajanja}></div>
          </div>
        </div>
        <div className={styles.BarZaNavigaciju}>
          <button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button>
          <Link href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
          <Link href="/moj-nalog/Istorija-korpe"> <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button></Link>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
          </div>
        <div className={styles.LinijaNavigacije}></div>
        <div className={styles.KontenjerPratiteProizvode}>
          <p className={styles.NaslovZaAkciju}>Pratite proizvode koji vam se svidjaju</p>
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
