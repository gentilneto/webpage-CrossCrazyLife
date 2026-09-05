import styles from './Rental.module.css';

const Rental = () => {
  const bikes = [
    {
      id: 1,
      tagLabel: '// MONSTER RACE SPEC',
      tagValue: '450 CC',
      tagColorClass: styles.textPrimaryContainer,
      title: 'Yamaha YZ450F',
      desc: 'Mapeamento de potência ajustável via smartphone. Suspensão KYB pressurizada e partida elétrica instantânea.',
      power: '59 HP',
      weight: '109 KG',
      price: 'Alugar por R$ 680 / Bateria'
    },
    {
      id: 2,
      tagLabel: '// FACTORY EDITION',
      tagValue: '350 CC',
      tagColorClass: styles.textSecondaryContainer,
      title: 'KTM 350 SX-F',
      desc: 'A agilidade inacreditável de uma 250cc com torque de 450cc. Controle de tração eletrônico de largada.',
      power: '57 HP',
      weight: '101 KG',
      price: 'Alugar por R$ 620 / Bateria'
    },
    {
      id: 3,
      tagLabel: '// PRO CIRCUIT RACER',
      tagValue: '250 CC',
      tagColorClass: styles.textPrimary,
      title: 'Honda CRF 250R',
      desc: 'Perfeita para atacar curvas em ângulos agressivos e mandar chicotes no ar com leveza milimétrica.',
      power: '44 HP',
      weight: '104 KG',
      price: 'Alugar por R$ 540 / Bateria'
    },
    {
      id: 4,
      tagLabel: '// DIRT KING PRO',
      tagValue: '450 CC',
      tagColorClass: styles.textPrimaryContainer,
      title: 'Kawasaki KX450',
      desc: 'Guidão Renthal Fatbar e embreagem hidráulica direta para explosões vorazes no portão de largada.',
      power: '61 HP',
      weight: '108 KG',
      price: 'Alugar por R$ 680 / Bateria'
    }
  ];

  return (
    <section id="aluguel" className={styles.rentalSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.subtitleGroup}>
              <span className={styles.subtitleLine}></span>
              <span className={styles.subtitleText}>// GARAGEM DE PERFORMANCE</span>
            </div>
            <h2 className={styles.title}>
              ALUGUEL DE MOTOS: <span className={styles.titleHighlight}>FROTA PREMIUM PRONTA PRO COMBATE</span>
            </h2>
          </div>
          <p className={styles.description}>
            Você não precisa ter moto própria para acelerar no topo do pódio. Nossa frota oficial é calibrada diariamente por engenheiros de corrida e pronta para pista.
          </p>
        </div>

        {/* Feature Image Showcase of Pit Fleet */}
        <div className={styles.showcase}>
          <div 
            className={styles.showcaseBg} 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq9yVnBEn-uL0uIAkBkL9YQW8FZAkpoKbjdBEKP8JhQmCTfIfv4KgC04DwvkNy2sDQfYFWEoCfhhs7FuI7UP_VJ1Yx1D-hMo9u3hLrVv6tuNDW0hrlmEgM9a8WSfz51D1l_Tsn2v69EQM86cTq2-vq66wzyE1e_iMeVnLadsMApUwSJvva2nfd4nL7KDPvCWB__pjSMUq6OS487otlDYvI9bmUZTFCRYaiLP_OpugKHqqMj_iPh_P_')" }}
          ></div>
          <div className={styles.showcaseGradient}></div>
          <div className={styles.showcaseFooter}>
            <div className={styles.showcaseBadgeGroup}>
              <span className={styles.badgePulse}></span>
              <span className={styles.badgeText}>100% DAS MOTOS COM INJEÇÃO PREPARADA &amp; PNEUS APEX NOVOS</span>
            </div>
            <span className={styles.showcaseTag}>SUPORTE DE MECÂNICO DE BOX INCLUSO</span>
          </div>
        </div>

        {/* Bikes Specifications Grid */}
        <div className={styles.grid}>
          {bikes.map(bike => (
            <div key={bike.id} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={bike.tagColorClass}>{bike.tagLabel}</span>
                  <span className={`${styles.cardHeaderValue} ${bike.tagColorClass}`}>{bike.tagValue}</span>
                </div>
                <h3 className={styles.cardTitle}>{bike.title}</h3>
                <p className={styles.cardDesc}>{bike.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>POTÊNCIA</span>
                  <span className={styles.specValue}>{bike.power}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>PESO SECO</span>
                  <span className={styles.specValue}>{bike.weight}</span>
                </div>
                <a href="#agendamento" className={styles.btnAction}>{bike.price}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Gear Included Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerIconWrapper}>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles.bannerIcon}`}>shield</span>
            </div>
            <div>
              <h4 className={styles.bannerTitle}>KIT DE PROTEÇÃO COMPLETO INCLUSO</h4>
              <p className={styles.bannerDesc}>Capacetes certificados Alpinestars/Fox, botas de motocross reforçadas, colete integral com protetor cervical e luvas de corrida.</p>
            </div>
          </div>
          <span className={styles.bannerTag}>// CUSTO ZERO ADICIONAL</span>
        </div>
      </div>
    </section>
  );
};

export default Rental;
