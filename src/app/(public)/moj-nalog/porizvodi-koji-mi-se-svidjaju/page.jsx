import '../../../../styles/_ProizvodiKojiMiSeSvidjaju.scss';
import Link from "next/link"
export default function proizvodiKojiMiSeSvidjaju() {
  return (
  <div>
    <div className="MojNalog">
        <div className="InicijalniPodatci">
          <div className="KontenjerSlikaProfila">
            <img  className="IzgledProfilneSlike" src="/Moj nalog/bred pit.jpg" alt=""/>
            <div className="KontenjerIme">
            <p className="IzgledSlovaProfila">Nikola Milojević</p>
            <img  className="SimbolIzmeni" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerMesto">
            <p className="IzgledMestaProfila">Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className="SimbolIzmeni1" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerEmail">
            <p className="IzgledEmailaProfila">nikolamilojevic78@gmail.com</p>
            <img  className="SimbolIzmeni2" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className="KontenjerBroj">
            <p className="IzgledBrojaProfila">066001215</p>
            <img  className="SimbolIzmeni3" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
            <button className="DugmeSacuvajIzmene">Sačuvaj izmene</button>
            <button className="DugmeOdjaviSe">Odjavi se</button>
            <div className="LinijaOdvajanja"></div>
          </div>
        </div>
        <div className="BarZaNavigaciju">
          <button className="DugmeProizvodiKojiMiSeSvidjaju">Proizvodi koji mi se sviđaju</button>
          <Link href="/moj-nalog/moja-interesovanja"><button className="DugmeMojaInteresovanja">Moja interesovanja</button> </Link>
          <Link href="/moj-nalog/Istorija-korpe"> <button className="DugmeIstorijaKorpe">Istorija korpe</button></Link>
          <Link href="/moj-nalog/moje-prodavnice"><button className="MojeProdavnice">Moje prodavnice</button></Link>
          </div>
        <div className="LinijaNavigacije"></div>
        <div className="KontenjerPratiteProizvode">
          <p className="NaslovZaAkciju">Pratite proizvode koji vam se svidjaju</p>
        </div>
        <div className="KontenjerSaSlikama">
         
          <div className="KontenjerProizvoda">
            <div className="GornjiDeoKontenjeraProizvoda">
              <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className="KontenjerZaTekstProizvoda">
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Mleko od badema</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >350g</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Doktor etker</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <img className="DimenzijeSlikeKorpe" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="DonjiDeoKontenjeraProizvoda">
            <div className="IzgledNaslovaMarketa">
            <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
            </div>
          </div>
          <div className="KontenjerProizvoda">
            <div className="GornjiDeoKontenjeraProizvoda">
              <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className="KontenjerZaTekstProizvoda">
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Mleko od badema</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >350g</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Doktor etker</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <img className="DimenzijeSlikeKorpe" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="DonjiDeoKontenjeraProizvoda">
            <div className="IzgledNaslovaMarketa">
            <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
            </div>
          </div>
          <div className="KontenjerProizvoda">
            <div className="GornjiDeoKontenjeraProizvoda">
              <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className="KontenjerZaTekstProizvoda">
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Mleko od badema</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >350g</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Doktor etker</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <img className="DimenzijeSlikeKorpe" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="DonjiDeoKontenjeraProizvoda">
            <div className="IzgledNaslovaMarketa">
            <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
            </div>
          </div>
          <div className="KontenjerProizvoda">
            <div className="GornjiDeoKontenjeraProizvoda">
              <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className="KontenjerZaTekstProizvoda">
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Mleko od badema</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >350g</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Doktor etker</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <img className="DimenzijeSlikeKorpe" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="DonjiDeoKontenjeraProizvoda">
            <div className="IzgledNaslovaMarketa">
            <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
            </div>
          </div>
          <div className="KontenjerProizvoda">
            <div className="GornjiDeoKontenjeraProizvoda">
              <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div className="KontenjerZaTekstProizvoda">
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Mleko od badema</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >350g</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <p className="SlovaZaOpisSadrzaja" >Doktor etker</p>
                </div>
                <div className="RedUKontenjeruZaTekstProizvoda">
                  <img className="DimenzijeSlikeKorpe" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="DonjiDeoKontenjeraProizvoda">
            <div className="IzgledNaslovaMarketa">
            <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
            </div>
          </div>
          
        
          </div>
         
       
        <div className="KontenjerZaDruguStranicu">
          <button className="DugmeZaSledecuStranu">1</button>
          <button className="DugmeZaSledecuStranu">2</button>
          <button className="DugmeZaSledecuStranu">3</button>
          <button className="DugmeZaSledecuStranu">4</button>
          <button className="DugmeZaSledecuStranu">5</button>
          <button className="DugmeZaSledecuStranu">6</button>
          <button className="DugmeZaSledecuStranu">7</button>
          <button className="DugmeZaSledecuStranu">8</button>
          <button className="DugmeZaSledecuStranu">9</button>
        </div>
      </div>
</div>
  );
}
