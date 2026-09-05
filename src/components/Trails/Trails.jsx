import styles from './Trails.module.css';

const Trails = () => {
  const trails = [
    {
      id: 1,
      title: 'Trilha da Lama Extrema',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoaC1Xx6XUJ6XLNQVJMb7qtVsqT62t6yPgi1uxtSjCAp-OdYPxgjTK08R6UCS3nYHIOOlnjsqsm88Vhc2-3T4F6_0kLIqSM63u-c-1CPwhyksOR2eRil_kzip6WpfuYQirwAO_4dgOzPgvrKsYWsIHI2DToKqD-cp2xlnLyIUinb_pCWjhk7OduDOhAgIHF_GR39hGycW2eGfbSZkk6WYKNm4M20XG-rVE-z94fBTzQElOwYBwxmbA',
      level: 'PRO EXTREME',
      levelClass: styles.badgeError,
      distance: '18.4 KM',
      time: '2h 45m',
      desc: 'Pedreiras soltas, atoleiros profundos e inclinações de até 42 graus. O teste de resistência final para quem não tem medo de sujar o macacão.',
      featureTitle: 'GUIA: MESTRE DE TRILHA RED BULL',
      featureValue: 'INCLUSO',
      featureValueClass: styles.textSecondary
    },
    {
      id: 2,
      title: 'Circuito Canyon Dust',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC607tSP9E9NFePE9mGMi8SJY_L1fcqpzXj1zjpHOyaSZBd58zkcnzMiad5cmSG7tgzVqUO6iPv9jxe5YVDzHRFiGtkO8okzw_Q7MB3nYk0-a-kNSSQnqgvcvQabi28DyQ_NcvKZ5JqA_M0OoRcLi_L97FLsFCyU8xBvDWyW5RhYerWfAP092_almeN3KZhK9IqoAqcE-uf7iWZ6OfihPnpMRc31EAGyR7nPp3VlLvHgZMlf1RF5QqS',
      level: 'INTERMEDIÁRIO',
      levelClass: styles.badgeSecondary,
      distance: '14.2 KM',
      time: '1h 30m',
      desc: 'Velocidade pura e terra compactada. Curvas com paredão de apoio, descidas rápidas em cânions e mesas de salto de média extensão.',
      featureTitle: 'RADAR TELEMÉTRICO ATIVO',
      featureValue: '115 KM/H MAX',
      featureValueClass: styles.textTertiary
    },
    {
      id: 3,
      title: 'Trilha Sunset Rookies',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY3nmf2ToJElf0ot8c-e8DuC77YhBm7FlyTQ0Ppn4EtbwaakzIypIiQdfNsxkWqwJCfKh2LKGPPZKk7qrm-15A6wFyeyrEpR6Nd23PFqrmHpd92QWiIYhUCIo0oAPMNC-sAZcxn_vp_QyCByYW0Oo2zR-KellpGyjWYkFHEY5bHNjJJ_T3oPy_qkMVvIeSAZB5VA4s504BxYb-GKwdgGjRnBg0n6lOcZXM6ZF_87bbXYWxICuddVGr',
      level: 'INICIANTE',
      levelClass: styles.badgeTertiary,
      distance: '9.5 KM',
      time: '1h 00m',
      desc: 'Ideal para sua primeira vez ou aprimoramento de pilotagem. Pistas largas com terreno nivelado, acompanhamento rádio e paradas fotográficas épicas.',
      featureTitle: 'INSTRUTOR DEDICADO 1-PARA-1',
      featureValue: '100% SEGURO',
      featureValueClass: styles.textSecondaryContainer
    }
  ];

  return (
    <section id="trilhas" className={styles.trailsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.subtitleGroup}>
              <span className={styles.subtitleLine}></span>
              <span className={styles.subtitleText}>// SETOR OFF-ROAD</span>
            </div>
            <h2 className={styles.title}>
              TRILHAS RADICAIS &amp; <span className={styles.titleHighlight}>ENDURO EXTREMO</span>
            </h2>
          </div>
          <p className={styles.description}>
            Rotas homologadas desenhadas para exigir técnica, equilíbrio e coragem. Do barro espesso aos saltos cegos nas encostas.
          </p>
        </div>
        
        <div className={styles.grid}>
          {trails.map(trail => (
            <div key={trail.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div 
                  className={styles.image} 
                  style={{ backgroundImage: `url('${trail.image}')` }}
                ></div>
                <div className={styles.imageGradient}></div>
                <span className={`${styles.badge} ${trail.levelClass}`}>NÍVEL: {trail.level}</span>
                <div className={styles.statsRow}>
                  <span className={styles.stat}>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.statIconPrimary}`}>straighten</span>
                    {trail.distance}
                  </span>
                  <span className={styles.stat}>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.statIconTertiary}`}>timer</span>
                    {trail.time}
                  </span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div>
                  <h3 className={styles.cardTitle}>{trail.title}</h3>
                  <p className={styles.cardDesc}>{trail.desc}</p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.featureRow}>
                    <span>{trail.featureTitle}</span>
                    <span className={trail.featureValueClass}>{trail.featureValue}</span>
                  </div>
                  <a href="#agendamento" className={styles.btnReserve}>Reservar Esta Trilha</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trails;
