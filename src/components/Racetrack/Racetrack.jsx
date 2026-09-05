import styles from './Racetrack.module.css';

const Racetrack = () => {
  const records = [
    { rank: 1, name: '#73 R. VANDERLEI', time: '1:42.809', isSelf: true },
    { rank: 2, name: '#44 T. ALBUQUERQUE', time: '1:43.112' },
    { rank: 3, name: '#14 M. BITTENCOURT', time: '1:44.004' },
    { rank: 4, name: '#91 G. PRADO', time: '1:45.320' },
  ];

  return (
    <section id="circuitos" className={styles.racetrackSection}>
      {/* Decorative racetrack line graphic */}
      <div className={styles.decorativeGraphic}>
        <svg className={styles.graphicSvg} fill="none" viewBox="0 0 200 200">
          <path d="M20,100 C20,40 60,20 120,20 C180,20 190,80 180,120 C170,160 120,180 80,180 C40,180 20,150 20,100 Z" strokeDasharray="10 5" strokeWidth="12"></path>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <div className={styles.badgeWrapper}>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconBadge}`}>flag_circle</span>
              <span className={styles.badgeText}>// CALENDÁRIO OFICIAL DE PROVAS</span>
            </div>
            
            <h2 className={styles.title}>
              CORRIDAS EM CIRCUITOS DE VELOCIDADE: <br />
              <span className={styles.titleHighlight}>SINTA O ASFALTO E A TERRA DE INTERLAGOS</span>
            </h2>
            
            <p className={styles.description}>
              Uma fusão sem precedentes entre o templo do automobilismo brasileiro e as pistas fechadas de Supercross internacional. Experimente bater o recorde da Curva do Sol e aterrissar em mesas de triplo salto com cronometragem oficial via chip transponder.
            </p>
            
            {/* Race Countdown & Info Module */}
            <div className={styles.countdownCard}>
              <div className={styles.countdownHeader}>
                <div>
                  <span className={styles.eventLabel}>// PRÓXIMO GRANDE PRÊMIO</span>
                  <span className={styles.eventName}>Interlagos Redline Cup 2025</span>
                </div>
                
                <div className={styles.timerGroup}>
                  <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>08</span>
                    <span className={styles.timeUnit}>DIAS</span>
                  </div>
                  <span className={styles.timeSeparator}>:</span>
                  <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>14</span>
                    <span className={styles.timeUnit}>HORAS</span>
                  </div>
                  <span className={styles.timeSeparator}>:</span>
                  <div className={styles.timeBlock}>
                    <span className={`${styles.timeValue} ${styles.textPrimary}`}>22</span>
                    <span className={styles.timeUnit}>MIN</span>
                  </div>
                </div>
              </div>
              
              {/* Categories Grid */}
              <div className={styles.catGrid}>
                <div className={styles.catBlock}>
                  <span className={styles.catLabel}>CAT 01</span>
                  <span className={styles.catName}>250cc</span>
                  <span className={`${styles.catDesc} ${styles.textTertiary}`}>Pro Lites</span>
                </div>
                <div className={styles.catBlock}>
                  <span className={styles.catLabel}>CAT 02</span>
                  <span className={styles.catName}>450cc</span>
                  <span className={`${styles.catDesc} ${styles.textPrimary}`}>Open Apex</span>
                </div>
                <div className={styles.catBlock}>
                  <span className={styles.catLabel}>CAT 03</span>
                  <span className={styles.catName}>Master</span>
                  <span className={`${styles.catDesc} ${styles.textSecondaryContainer}`}>Pilotos 40+</span>
                </div>
                <div className={styles.catBlock}>
                  <span className={styles.catLabel}>CAT 04</span>
                  <span className={styles.catName}>Amador</span>
                  <span className={styles.catDesc}>Grid Aberto</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.leaderboardCol}>
            {/* Interactive Leaderboard Preview Card */}
            <div className={styles.leaderboardCard}>
              <div className={styles.leaderboardHeader}>
                <span className={styles.leaderboardTitle}>// GRID RECORDES - INTERLAGOS MX</span>
                <span aria-hidden="true" className={`material-symbols-outlined ${styles.leaderboardIcon}`}>trophy</span>
              </div>
              
              <div className={styles.recordsList}>
                {records.map((rec) => (
                  <div key={rec.rank} className={`${styles.recordRow} ${rec.isSelf ? styles.recordSelf : styles.recordOther}`}>
                    <div className={styles.recordUser}>
                      <span className={`${styles.recordRank} ${rec.isSelf ? styles.rankSelf : styles.rankOther}`}>
                        {rec.rank}
                      </span>
                      <span className={rec.isSelf ? styles.fontWeightBold : ''}>{rec.name}</span>
                    </div>
                    <span className={`${styles.recordTime} ${rec.isSelf ? styles.timeSelf : ''}`}>{rec.time}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.actionWrapper}>
                <a href="#agendamento" className={styles.btnAction}>
                  Inscrever Minha Moto no Grid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Racetrack;
