import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniPostupak({postupak1}){
  return (
    <div>
      <ul>
        {postupak1.map((item, index) => (
          <li className={styles.RedUDesnomKontenjeru} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
