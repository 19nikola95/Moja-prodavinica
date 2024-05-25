import '../../../../../styles/bar-za-naslovnu/svi-proizvodi/_sviproizvodiglavnimeni.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
<div class="GlavniKontenjerZaSadrzaj">
  <div className="KontenjerZaNaslov">
      <p class="IzgledSlovaNaslova">Svi proizvodi</p>
      </div>
      <div class="KontenjerZaPretragu">
        <input class="IzgledInputaZaProdavnice" type="text" name="" id="" placeholder="Pretraga proizvoda"/>
      </div>
      <div class="KontenjerSaIzboromObroka">
      <Link href="/bar-sa-naslovne/svi-proizvodi/osnovne-namirnice/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Osnovne namernice</button>
        </Link>   
        <Link href="/bar-sa-naslovne/svi-proizvodi/meso-riba-i-njihove-prepradjevine/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Meso, riba i njihove prerađevine</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mlacni-proizvodi-sir-i-jaja/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Mlečni proizvodi, sir i jaja</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/voce-i-povrce/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Voće i povrće</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/slane-i-slatke-grickalice/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Slane i slatke grickalice</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/zdrava-hrana/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Zdrava hrana</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/napici/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Napici</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/licna-higijena/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Lična higijena</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/mame-i-bebe/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Mame i bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sve-za-kucne-ljubimce/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Sve za kućne ljubimce</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/sredstva-za-odrzavanje-higijene/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Sredstva za održavanje higijene</button>
        </Link>
        <Link href="/bar-sa-naslovne/svi-proizvodi/tehnika-posudje-i-igracke/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Tehnika i ostalo</button>
        </Link>
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
