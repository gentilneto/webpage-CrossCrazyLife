import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} aria-label="Hero">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.heroVideo} 
        src="/MT_1.mp4"
      ></video>
      <div className={styles.gradientTop}></div>
      <div className={styles.gradientRight}></div>

      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={`${styles.leftContent} animate-fade-in-up`}>
          <div className={styles.seasonBadge}>
            <span className={styles.badgePulse}></span>
            <span className={styles.badgeText}>TEMPORADA 2025 ABERTA</span>
          </div>

          <h1 className={styles.title}>
            DOMINE O BARRO.<br />
            <span className={styles.titleHighlight}>DESAFIE A GRAVIDADE.</span>
          </h1>

          <p className={styles.description}>
            Viva a adrenalina do maior complexo de motocross e off-road do país. Pistas oficiais, aluguel de motos preparadas, telemetria ao vivo e o lifestyle radical que você respira.
          </p>

          <div className={styles.actions}>
            <a href="#agendamento" className={styles.btnPrimary}>
              <span>Acelerar Agora</span>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconPrimary}`} style={{ fontVariationSettings: "'FILL' 1" }}>sports_motorsports</span>
            </a>
            <a href="#live-cam" className={styles.btnSecondary}>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconSecondary}`}>videocam</span>
              Ver Câmeras da Pista
            </a>
          </div>

          <div className={styles.telemetryBar}>
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryLabel}>PISTAS ABERTAS</span>
              <div>
                <span className={styles.telemetryValue}>04</span><span className={styles.telemetryUnitPrimary}>/06</span>
              </div>
            </div>
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryLabel}>CONDIÇÃO HOJE</span>
              <span className={styles.telemetryValueStatus}>TERRA ÚMIDA</span>
            </div>
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryLabel}>VELOCIDADE RECORD</span>
              <div>
                <span className={styles.telemetryValue}>142</span><span className={styles.telemetryUnitSecondary}>km/h</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (COCKPIT ESTÁTICO) */}
        <div className={styles.cockpitWrapper}>
          <div className={styles.cockpitCard}>
            <div className={styles.cockpitHeader}>
              <div className={styles.cockpitTitleGroup}>
                <span className={styles.cockpitPulse}></span>
                <span className={styles.cockpitTitle}>COCKPIT RADICAL // PIT 01</span>
              </div>
              <span className={styles.cockpitSpec}>450cc PRO SPEC</span>
            </div>

            <div className={styles.cockpitImageArea}>
              <div 
                className={styles.cockpitBgImage}
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP7IiantqjJERx8A76LOzWbopJ1_SLO8VpnyRRIeRCmgGBBRDtabtF2ze3vGI3g5B1slkQYTspRe6ewBNe449FxGC9lKAN7fXwQEpXe2_QXXpgKKKXps2XRJ_Eyj8Zs4Ak5alqYBbKNywbRa5cCl5AmP_mzxs8tQkpB_l1QqhknmT9g6dkYj_6UmuG_EEzmN84u4zzMbF6MCmp2kNB82_KUvH-Wpad5ltNcAr2KnjziKCmhLlhs9U_')" }}
              ></div>
              <div className={styles.cockpitGradient}></div>
              <div className={styles.cockpitHudRow}>
                <span className={styles.hudBadge}>LIVE SECTOR</span>
                <span className={styles.hudLocation}>CURVA DO SOL // PIT ACCEL</span>
              </div>
            </div>

            <div className={styles.cockpitDataGrid}>
              <div className={styles.dataBox}>
                <span className={styles.dataLabel}>RPM ATUAL</span>
                <span className={styles.dataValueSec}>11.850</span>
              </div>
              <div className={styles.dataBox}>
                <span className={styles.dataLabel}>TRAÇÃO TRASEIRA</span>
                <span className={styles.dataValuePrim}>94.2%</span>
              </div>
            </div>

            <div className={styles.cockpitFooter}>
              <span className={styles.footerText}>Equipamento 100% revisado para o grid</span>
              <a href="#aluguel" className={styles.footerLink}>Ver Frota &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
