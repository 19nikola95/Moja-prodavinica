import '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/_glavnimeniglavnojelo.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
<div class="GlavniKontenjerZaSadrzaj">
<div class="VideoReklame"></div>
<p class="IzgledSlovaNaslova">Glavno jelo</p>
<div class="KontenjerSaIzboromObroka">
<Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-mesa">
  <button class="IzgledDugmetaZaObroke">Jela od mesa</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-ribe">
  <button class="IzgledDugmetaZaObroke">Jela od ribe</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/jela-od-povrca">
  <button class="IzgledDugmetaZaObroke">Jela od povrća</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/paste">
  <button class="IzgledDugmetaZaObroke">Paste</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/pice">
  <button class="IzgledDugmetaZaObroke">Pice</button>
  </Link>
  <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/rizota-i-jela-sa-pirincem">
  <button class="IzgledDugmetaZaObroke">Rižota i jela sa pirinčem</button>
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