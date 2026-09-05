import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      {/* 7. PROVA SOCIAL & FAQ RÁPIDO & FORMULÁRIO DE AGENDAMENTO */}
      <section id="agendamento" className={styles.agendamentoSection}>
        <div className={styles.container}>
          {/* Testimonials / Social Proof Grid */}
          <div>
            <div className={styles.sectionHeaderCenter}>
              <span className={styles.subtitleSecondaryContainer}>// VOZES DA PISTA</span>
              <h2 className={styles.titleCenter}>
                QUEM PILOTA AQUI NUNCA ESQUECE
              </h2>
            </div>
            
            <div className={styles.testimonialGrid}>
              {/* Testimonial 1 */}
              <div className={styles.testimonialCard}>
                <div className={styles.starsGroup}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                </div>
                <p className={styles.testimonialText}>
                  "Aluguei a CRF 250R para uma bateria de sábado. A moto veio 100% afinada, pneus novos e o apoio mecânico nos boxes foi de equipe de mundial de motocross. Sensacional!"
                </p>
                <div className={styles.authorGroup}>
                  <div className={styles.avatarPrimary}>LR</div>
                  <div>
                    <strong className={styles.authorName}>Lucas Rezende</strong>
                    <span className={styles.authorRole}>Piloto Amador // SP</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className={styles.testimonialCard}>
                <div className={styles.starsGroup}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                </div>
                <p className={styles.testimonialText}>
                  "Fizemos a confraternização da nossa empresa com a Trilha Sunset e fechamos o Paddock Club com churrasco. Todo mundo, até quem nunca subiu numa moto, saiu extasiado."
                </p>
                <div className={styles.authorGroup}>
                  <div className={styles.avatarTertiary}>BF</div>
                  <div>
                    <strong className={styles.authorName}>Beatriz Farias</strong>
                    <span className={styles.authorRole}>Head de Marketing // Belo Horizonte</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className={styles.testimonialCard}>
                <div className={styles.starsGroup}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                </div>
                <p className={styles.testimonialText}>
                  "A pista de Interlagos combinada com o trecho de terra é a melhor pista mista da América do Sul. A telemetria entrega tudo na hora. Quem curte motorsport DEVE vir."
                </p>
                <div className={styles.authorGroup}>
                  <div className={styles.avatarSecondaryContainer}>MC</div>
                  <div>
                    <strong className={styles.authorName}>Marcos Castilho</strong>
                    <span className={styles.authorRole}>Campeão Estadual de MX2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Split Layout: FAQ & Booking Trigger Form */}
          <div className={styles.splitLayout}>
            {/* Left: FAQ Accordion */}
            <div className={styles.faqCol}>
              <div>
                <span className={styles.subtitleTertiary}>// DÚVIDAS FREQUENTES</span>
                <h3 className={styles.faqTitle}>
                  TUDO O QUE VOCÊ PRECISA SABER ANTES DE ACELERAR
                </h3>
              </div>
              
              <div className={styles.faqList}>
                <details className={styles.faqItem} open>
                  <summary className={styles.faqSummary}>
                    <span>Preciso de CNH de moto para pilotar?</span>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.faqIcon}`}>expand_more</span>
                  </summary>
                  <p className={styles.faqDesc}>
                    Não! Em pistas fechadas e trilhas particulares do complexo a CNH não é obrigatória. Disponibilizamos instrutores credenciados para iniciantes e brief de segurança obrigatório de 20 minutos antes de cada bateria.
                  </p>
                </details>
                
                <details className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>Posso levar minha própria moto e equipamento?</span>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.faqIcon}`}>expand_more</span>
                  </summary>
                  <p className={styles.faqDesc}>
                    Com certeza. Você pode contratar apenas o Track Day Pass e desfrutar de toda infraestrutura do complexo, telemetria por chip e box mecânico com ar comprimido e lavador de alta pressão.
                  </p>
                </details>
                
                <details className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>O que acontece se chover no dia?</span>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.faqIcon}`}>expand_more</span>
                  </summary>
                  <p className={styles.faqDesc}>
                    Chuva e lama fazem parte da alma do motocross! A pista só é interrompida em caso de tempestade elétrica severa. Caso haja cancelamento por força maior, sua reserva pode ser remarcada sem custo algum por até 12 meses.
                  </p>
                </details>
                
                <details className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>Como funciona a segurança médica no local?</span>
                    <span aria-hidden="true" className={`material-symbols-outlined ${styles.faqIcon}`}>expand_more</span>
                  </summary>
                  <p className={styles.faqDesc}>
                    Contamos com UTI móvel 4x4 de resgate rápido de prontidão durante todo o período operacional, equipe médica traumatológica e seguro pessoal contra acidentes esportivos incluso na taxa da pista.
                  </p>
                </details>
              </div>
            </div>
            
            {/* Right: Fast Booking Form Module */}
            <div className={styles.formCol}>
              <div className={styles.formBadge}>VAGAS LIMITADAS POR DIA</div>
              
              <div className={styles.formHeader}>
                <span className={styles.formSubtitle}>// GARANTA SEU LUGAR NO GRID</span>
                <h3 className={styles.formTitle}>
                  RESERVE SUA DATA &amp; MOTO
                </h3>
                <p className={styles.formDesc}>Preencha os dados e nosso coordenador de pista entrará em contato via WhatsApp em até 15 minutos.</p>
              </div>
              
              <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Solicitação recebida!'); }}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="pilotoName" className={styles.inputLabel}>Nome do Piloto *</label>
                    <input id="pilotoName" type="text" required aria-required="true" placeholder="Seu nome completo" className={styles.inputField} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="pilotoPhone" className={styles.inputLabel}>WhatsApp com DDD *</label>
                    <input id="pilotoPhone" type="tel" required aria-required="true" placeholder="(11) 99999-9999" className={styles.inputField} />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="experience" className={styles.inputLabel}>Experiência Desejada</label>
                    <select id="experience" className={styles.selectField}>
                      <option>Aluguel de Moto + Pista (Completo)</option>
                      <option>Trilha Guiada na Lama Extrema</option>
                      <option>Circuito Canyon Dust</option>
                      <option>Iniciante: Trilha Sunset Rookies</option>
                      <option>Track Day com Moto Própria</option>
                      <option>Camarote Paddock Club &amp; Eventos</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="date" className={styles.inputLabel}>Data Preferida</label>
                    <input id="date" type="date" required aria-required="true" className={styles.inputField} />
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend className={styles.inputLabel} style={{ marginBottom: '0.25rem' }}>Nível de Pilotagem</legend>
                    <div className={styles.radioGrid}>
                      <label htmlFor="levelBeg" className={styles.radioLabel}>
                        <input id="levelBeg" type="radio" name="level" value="beg" defaultChecked className={styles.radioInput} />
                        <span className={styles.radioText}>Iniciante</span>
                      </label>
                      <label htmlFor="levelInt" className={styles.radioLabel}>
                        <input id="levelInt" type="radio" name="level" value="int" className={styles.radioInput} />
                        <span className={styles.radioText}>Médio</span>
                      </label>
                      <label htmlFor="levelPro" className={styles.radioLabel}>
                        <input id="levelPro" type="radio" name="level" value="pro" className={styles.radioInput} />
                        <span className={styles.radioText}>Avançado</span>
                      </label>
                    </div>
                  </fieldset>
                </div>
                
                <div className={styles.submitWrapper}>
                  <button type="submit" className={styles.btnSubmit}>
                    <span>Confirmar &amp; Bloquear Vaga</span>
                    <span aria-hidden="true" className="material-symbols-outlined text-xl">check_circle</span>
                  </button>
                  <span className={styles.submitHelper}>CANCELAMENTO GRATUITO COM ATÉ 48 HORAS DE ANTECEDÊNCIA</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColInfo}>
              <div className={styles.footerLogoWrapper}>
                <a href="#" className={styles.footerLogoLink} aria-label="Cross Crazy Life Home">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 900, fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '-1.5px', background: 'linear-gradient(90deg, var(--color-primary) 0%, #ff8a66 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0px 4px 15px rgba(255, 86, 37, 0.4)' }}>CROSS</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 900, fontStyle: 'italic', color: 'var(--color-on-surface)', letterSpacing: '-1px' }}>CRAZY LIFE</span>
                  </div>
                </a>
              </div>
              <p className={styles.footerDesc}>
                O complexo definitivo para os fanáticos por motorsport, terra batida e adrenalina pura. Pistas oficiais, trilhas técnicas, telemetria em tempo real e lounge VIP.
              </p>
              <div className={styles.socialWrapper}>
                <span className={styles.socialTitle}>// TELEMETRIA REDE SOCIAL</span>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Compartilhar" className={styles.socialLink}><span aria-hidden="true" className="material-symbols-outlined text-[20px]">share</span></a>
                  <a href="#" aria-label="Nossos Vídeos" className={styles.socialLink}><span aria-hidden="true" className="material-symbols-outlined text-[20px]">videocam</span></a>
                  <a href="#" aria-label="Ouça nosso Podcast" className={styles.socialLink}><span aria-hidden="true" className="material-symbols-outlined text-[20px]">podcasts</span></a>
                </div>
              </div>
            </div>
            
            <div className={styles.footerColLinks}>
              <span className={styles.colTitle}>// CIRCUITO &amp; UNIDADES</span>
              <ul className={styles.locationList}>
                <li className={styles.locationItem}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.locationIcon}`}>location_on</span>
                  <div>
                    <strong className={styles.locationName}>Arena Pro Motocross</strong>
                    Estrada do Barro Vermelho, Km 42 - SP
                  </div>
                </li>
                <li className={styles.locationItem}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles.locationIcon}`}>location_on</span>
                  <div>
                    <strong className={styles.locationName}>Off-Road Wilderness Hub</strong>
                    Serra dos Pilotos, Ponto Zero - MG
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerColLinks}>
              <span className={styles.colTitle}>// BOX &amp; HORÁRIOS</span>
              <div className={styles.hoursList}>
                <div className={styles.hourRow}>
                  <span>TER - SEX</span>
                  <span className={styles.hourTextTertiary}>08:00 - 18:00</span>
                </div>
                <div className={styles.hourRow}>
                  <span>SÁB &amp; DOM</span>
                  <span className={styles.hourTextPrimary}>07:00 - 20:00</span>
                </div>
                <div className={styles.hourRow}>
                  <span>NOTURNO (QUINTAS)</span>
                  <span className={styles.hourTextSecondary}>19:00 - 23:30</span>
                </div>
                <div className={styles.hourRowError}>
                  <span>SEGUNDAS</span>
                  <span>BOX FECHADO</span>
                </div>
              </div>
            </div>
            
            <div className={styles.footerColLinks}>
              <span className={styles.colTitle}>// SPONSORS &amp; TELEMETRY HUB</span>
              <p className={styles.sponsorDesc}>Parceiros oficiais que aceleram o grid:</p>
              <div className={styles.sponsorGrid}>
                <div className={styles.sponsorBadge}><span>OCTANE FUEL</span></div>
                <div className={styles.sponsorBadge}><span>APEX TIRES</span></div>
                <div className={styles.sponsorBadge}><span>NITRO EXTREME</span></div>
                <div className={styles.sponsorBadge}><span>KINETIC RACING</span></div>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <div className={styles.systemStatus}>
              <span className={styles.pulseDotTertiary}></span>
              <span>CCL_SYS_V4.2 // STATUS: PIT_LANE_OPEN</span>
            </div>
            <div className={styles.copyright}>
              © 2025 Cross Crazy Life. Todos os direitos reservados. Redline Motorsport Systems.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
