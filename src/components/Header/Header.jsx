import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logoWrapper}>
          <a href="#" className={styles.logoLink}>
            <div className={styles.creativeLogo}>
              <span className={styles.logoCross}>CROSS</span>
              <span className={styles.logoCrazy}>CRAZY LIFE</span>
            </div>
          </a>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navMobileOpen : ''}`}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.creativeLogo}>
              <span className={styles.logoCross}>CROSS</span>
              <span className={styles.logoCrazy}>CRAZY LIFE</span>
            </div>
            <button className={styles.closeMenuBtn} onClick={toggleMobileMenu}>
              <span aria-hidden="true" className="material-symbols-outlined">close</span>
            </button>
          </div>
          <a href="#" className={styles.navLinkActive} onClick={toggleMobileMenu}>Início</a>
          <a href="#trilhas" className={styles.navLink} onClick={toggleMobileMenu}>Trilhas Radicais</a>
          <a href="#circuitos" className={styles.navLink} onClick={toggleMobileMenu}>Pistas & Interlagos</a>
          <a href="#aluguel" className={styles.navLink} onClick={toggleMobileMenu}>Aluguel de Frotas</a>
          <a href="#paddock" className={styles.navLink} onClick={toggleMobileMenu}>Paddock Club</a>
          <a href="#live-cam" className={`${styles.navLink} ${styles.liveCam}`} onClick={toggleMobileMenu}>
            <span className={styles.pulseDot}></span>
            Live Cam
          </a>
        </nav>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay} onClick={toggleMobileMenu}></div>
        )}

        {/* Right: Actions */}
        <div className={styles.actionsWrapper}>
          <a href="#agendamento" className={styles.btnAction}>
            <span aria-hidden="true" className={`material-symbols-outlined ${styles.iconAction}`}>speed</span>
            <span className={styles.btnActionText}>Agendar Grid</span>
          </a>
          <button className={styles.hamburgerBtn} onClick={toggleMobileMenu}>
            <span aria-hidden="true" className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
