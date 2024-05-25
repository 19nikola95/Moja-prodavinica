import '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/_dezertglavnimeni.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
 <div class="GlavniKontenjerZaSadrzaj">
      <div class="VideoReklame"></div>
      <p class="IzgledSlovaNaslova">Dezerti</p>
      <div class="KontenjerSaIzboromObroka">
      <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/torte">
        <button class="IzgledDugmetaZaObroke">Torte</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/kolaci">
        <button class="IzgledDugmetaZaObroke">Kolači</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/mafini">
        <button class="IzgledDugmetaZaObroke">Mafini</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/namazi">
        <button class="IzgledDugmetaZaObroke">Namazi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/sladoledi-i-pudinzi">
        <button class="IzgledDugmetaZaObroke">Sladoled i pudinzi</button>
        </Link>
          </div>
      <div class="KontenjerSaObrocima">
        <div class="KontenjerSaPojedinacnimObrokom">
          <div class="KontenjerZaSliku">
            <img class="IzgledSlike" src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
          </div>
          <div class="KonjtenjerZaTekst">
            <p>Musaka</p>
          </div>
        </div>
        </div>
    </div>
  </div>
    );
  }
  