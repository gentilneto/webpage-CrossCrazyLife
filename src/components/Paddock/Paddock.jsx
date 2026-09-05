import { useState } from 'react';
import styles from './Paddock.module.css';

const Paddock = () => {
  const [activeCam, setActiveCam] = useState('SETOR 02 - CURVA DA VITÓRIA');

  return (
    <>
      {/* 5. ESPAÇO PÓS-CORRIDA & PADDOCK CLUB (COMEMORAÇÃO) */}
      <section id="paddock" className={styles.paddockSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left: Image Showcase of Paddock Party */}
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <div 
                  className={styles.imageBg}
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvvm-1LKzII2gmi2BK6jh8laP2t5l8REFCg9FQ7Qv6Gh8HRz2Kx9IzWn1TY-KR0HAgGsOeHmqKffTcLB2mgMcJ6R6yKf7WpH8MLx5MEKn6vI6Oc1n0lgJ7Pzvu2L22TzR5udpfcR9-k615rGapTxXKvnjopfxTaKfGsZgsJOF3hIaSP8NdHno-Wum_EmL2OC49kc7tfevzqNJ6W90pURSpluMJkganWCSkIn6YKnaiBG0PqszVrWAp')" }}
                  role="img"
                  aria-label="Paddock Club VIP Lounge e Podium"
                ></div>
                <div className={styles.imageGradient}></div>
                <div className={styles.badgeTop}>VIP LOUNGE &amp; PODIUM</div>
              </div>
              
              {/* Decorative Floating Card */}
              <div className={styles.floatingCard}>
                <div className={styles.floatingHeader}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.floatingIcon}`}>celebration</span>
                  <span className={styles.floatingTitle}>CHAMPAGNE SHOWER</span>
                </div>
                <p className={styles.floatingDesc}>
                  Pódio oficial dos vencedores com entrega de troféus, DJ e transmissão instantânea das fotos na telona.
                </p>
              </div>
            </div>
            
            {/* Right: Paddock Perks & Experience Details */}
            <div className={styles.contentCol}>
              <div>
                <div className={styles.subtitleGroup}>
                  <span className={styles.subtitleLine}></span>
                  <span className={styles.subtitleText}>// VIBE PÓS-BATERIA</span>
                </div>
                <h2 className={styles.title}>
                  PADDOCK CLUB &amp; AFTER-RACE: <br />
                  <span className={styles.titleHighlight}>A CELEBRAÇÃO DOS CAMPEÕES</span>
                </h2>
              </div>
              
              <p className={styles.description}>
                A corrida não termina na bandeirada final. Reúna seus amigos, familiares e equipe de box no nosso Paddock Club exclusivo para descontrair após o banho de barro com toda infraestrutura de um festival esportivo.
              </p>
              
              <div className={styles.perksGrid}>
                <div className={styles.perkCard}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconPrimaryContainer}`}>outdoor_grill</span>
                  <h4 className={styles.perkTitle}>Churrasco &amp; Gastronomia</h4>
                  <p className={styles.perkDesc}>Cortes nobres assados no fogo de chão e menu gourmet feito para recarregar as energias.</p>
                </div>
                
                <div className={styles.perkCard}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconSecondaryContainer}`}>sports_bar</span>
                  <h4 className={styles.perkTitle}>Chopp Artesanal &amp; Bar</h4>
                  <p className={styles.perkDesc}>Torneiras de chopp gelado, drinks energéticos e área de bar completa aberta até 23:30.</p>
                </div>
                
                <div className={styles.perkCard}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconTertiary}`}>tv</span>
                  <h4 className={styles.perkTitle}>Telões com Replay 4K</h4>
                  <p className={styles.perkDesc}>Assista às ultrapassagens e acidentes mais insanos em câmera lenta gravados pelos nossos drones.</p>
                </div>
                
                <div className={styles.perkCard}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconPrimary}`}>headphones</span>
                  <h4 className={styles.perkTitle}>DJ &amp; Sunset Sessions</h4>
                  <p className={styles.perkDesc}>Música eletrônica e rock em sincronia perfeita com o pôr do sol nas colinas da pista.</p>
                </div>
              </div>
              
              <div className={styles.actionWrapper}>
                <a href="#agendamento" className={styles.btnAction}>
                  <span>Reservar Lounge para Equipe</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO LIVE STREAM / CÂMERA DA PISTA AO VIVO */}
      <section id="live-cam" className={styles.liveCamSection}>
        <div className={styles.containerCol}>
          <div className={styles.liveHeaderGroup}>
            <div>
              <div className={styles.subtitleGroup}>
                <span className={styles.pulseDotError}></span>
                <span className={styles.subtitleError}>// SINAL DIRETO DO CIRCUITO // 60 FPS ULTRA HD</span>
              </div>
              <h2 className={styles.titleLive}>
                LIVE CAM: <span className={styles.titleLiveHighlight}>PISTA PRINCIPAL &amp; RETA DOS BOXES</span>
              </h2>
            </div>
            
            <div className={styles.liveStats}>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconTertiarySmall}`}>wifi</span>
              <span>LATÊNCIA: 18ms</span>
              <span className={styles.statSeparator}>|</span>
              <span className={styles.spectatorCount}>1.428 ESPECTADORES</span>
            </div>
          </div>
          
          {/* Video Broadcast Player Frame */}
          <div className={styles.videoWrapper}>
            <div 
              className={styles.videoStreamBg}
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP7IiantqjJERx8A76LOzWbopJ1_SLO8VpnyRRIeRCmgGBBRDtabtF2ze3vGI3g5B1slkQYTspRe6ewBNe449FxGC9lKAN7fXwQEpXe2_QXXpgKKKXps2XRJ_Eyj8Zs4Ak5alqYBbKNywbRa5cCl5AmP_mzxs8tQkpB_l1QqhknmT9g6dkYj_6UmuG_EEzmN84u4zzMbF6MCmp2kNB82_KUvH-Wpad5ltNcAr2KnjziKCmhLlhs9U_")' }}
            >
              <div className={styles.gradientOverlayTop}></div>
              <div className={styles.gradientOverlayRight}></div>
            </div>
            
            <div className={styles.scanlines}></div>
            
            {/* HUD Broadcast Overlay (Top Bar) */}
            <div className={styles.videoHudTop}>
              <div className={styles.hudTopLeft}>
                <div className={styles.liveBadge}>
                  <span className={styles.pulseDotWhite}></span>
                  <span>REC / AO VIVO 4K</span>
                </div>
                <span className={styles.camTitle}>{activeCam}</span>
              </div>
              
              <div className={styles.hudTopRight}>
                <span className={styles.hiddenSm}>VOLTA RÁPIDA: <strong className={styles.textTertiary}>1:39.402</strong></span>
                <span className={styles.statSeparatorHiddenSm}>|</span>
                <span>VEL. PONTA: <strong className={styles.textPrimaryContainer}>142 KM/H</strong></span>
              </div>
            </div>
            
            {/* Reticle / Sync Signal */}
            <div className={styles.targetReticle}>
              <div className={styles.reticleOuter}>
                <div className={styles.reticleInner}>
                  <span className={`material-symbols-outlined ${styles.reticleIcon}`}>videocam</span>
                </div>
              </div>
              <span className={styles.reticleText}>SINAL SINCRONIZADO // 60 FPS</span>
            </div>
            
            {/* HUD Broadcast Overlay (Bottom Controls) */}
            <div className={styles.videoHudBottom}>
              <div className={styles.camControls}>
                <button 
                  type="button"
                  className={activeCam === 'SETOR 01 // RETÃO DOS BOXES' ? styles.btnCamActive : styles.btnCam}
                  onClick={() => setActiveCam('SETOR 01 // RETÃO DOS BOXES')}
                >
                  CAM 01: Box &amp; Reta
                </button>
                <button 
                  type="button"
                  className={activeCam === 'SETOR 02 - CURVA DA VITÓRIA' ? styles.btnCamActive : styles.btnCam}
                  onClick={() => setActiveCam('SETOR 02 - CURVA DA VITÓRIA')}
                >
                  CAM 02: Vitória
                </button>
                <button 
                  type="button"
                  className={activeCam === 'SETOR 03 // ONBOARD KTM #73' ? styles.btnCamActive : styles.btnCam}
                  onClick={() => setActiveCam('SETOR 03 // ONBOARD KTM #73')}
                >
                  CAM 03: Onboard #73
                </button>
                <button 
                  type="button"
                  className={activeCam === 'SETOR 04 // PADDOCK & PODIUM' ? styles.btnCamActive : styles.btnCam}
                  onClick={() => setActiveCam('SETOR 04 // PADDOCK & PODIUM')}
                >
                  CAM 04: Paddock
                </button>
              </div>
              
              <div className={styles.hudLinkWrapper}>
                <span className={styles.pulseDotTertiary}></span>
                <span className={styles.viewersText}>1.428 PILOTOS CONECTADOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paddock;
