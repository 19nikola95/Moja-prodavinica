import styles from '@/styles/korpa.module.scss';
export function KorpaPojedinacneProdavnice({logo, ime}){
    return <div>
        <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src={logo} alt=""/>
            <p>{ime}</p>
          </div>
    </div>
}
