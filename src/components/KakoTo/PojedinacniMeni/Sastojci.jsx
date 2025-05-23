import styles from '@/styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
export function PojedinacniMeniSastojci({sastojci1}) {
  return (
    <div>
      <ul>
        {sastojci1.map((item, index) => (
          <li className={styles.RedULevomKontenjeru} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}