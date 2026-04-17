import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Hakkımda", "Yetenekler", "Deneyim", "Eğitim", "Freelance", "İletişim"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"], icon: "⬡" },
  { category: "Backend", items: ["Python", "Django", "MySQL", "MSSQL"], icon: "◈" },
  { category: "Test & QA", items: ["Manuel Test", "Otomasyon Test", "Test Senaryosu", "Regresyon"], icon: "◎" },
  { category: "API & Araçlar", items: ["Postman", "Apidog", "Jenkins", "CI/CD"], icon: "⬢" },
  { category: "Analitik", items: ["Tableau", "Grafana", "Gereksinim Analizi", "Kök Neden Analizi"], icon: "◇" },
  { category: "Metodoloji", items: ["Agile / Scrum", "Git / GitLab", "Agile", "Dokümantasyon"], icon: "◉" },
];

const experiences = [
  {
    role: "Yazılım Geliştirici & İş Analisti",
    company: "Vodafone",
    period: "Aralık 2022 – Halen",
    color: "#e8272a",
    logo: "V",
    bullets: [
      "Ekiplerden gelen taleplerin teknik ve işlevsel analizlerini yaparak yazılım çözümlerine dönüştürme",
      "Collaboration sisteminde task, proje, request ve efor yönetimi modüllerine ilişkin gereksinimlerin belirlenmesi ve analizi",
      "Frontend ve backend geliştirme ekipleriyle birlikte analiz, geliştirme, test ve canlıya alma süreçlerinde rol alma",
      "Gereksinimlerin API, veri yapıları ve kullanıcı arayüzü açısından detaylı dokümantasyonu (Postman, Apidog)",
    ],
  },
  {
    role: "Yazılım Test Mühendisi",
    company: "Mobisem Teknoloji",
    period: "Haziran 2022 – Aralık 2022",
    color: "#f59e0b",
    logo: "M",
    bullets: [
      "Mobil uygulamalar için manuel ve otomasyon test senaryolarının hazırlanması ve yürütülmesi",
      "Test planlarının oluşturulması, test case yazımı ve hata raporlarının takibi",
      "API testleri (Postman, Apidog) ve regresyon testlerinin gerçekleştirilmesi",
      "Jenkins ile CI/CD süreçlerinin takibi ve test entegrasyonlarının yönetilmesi",
      "JavaScript tabanlı otomasyon test altyapılarına katkı sağlanması",
    ],
  },
];

const education = [
  {
    degree: "İnşaat Mühendisliği – Lisans",
    school: "Bülent Ecevit Üniversitesi, Zonguldak",
    period: "2016 – 2020",
    icon: "🎓",
  },
  {
    degree: "Nitelikli Bilişim Uzmanı Yetiştirme Programı",
    school: "Kadıköy Bilişim Eğitim Merkezi",
    period: "2021",
    icon: "💻",
  },
];

const certs = [
  { title: "Yazılım Uzmanı Sertifikası", year: "2022", status: "completed" },
  { title: "Business Analyst Bootcamp", year: "2025", status: "planned" },
  { title: "İngilizce – B2 Seviyesi", year: "", status: "completed" },
];

const freelanceServices = [
  {
    icon: "◈",
    title: "Kurumsal Web Sitesi",
    desc: "Şirketinizi veya markanızı en iyi şekilde temsil eden, modern ve etkileyici kurumsal web siteleri tasarlarım.",
    features: ["Responsive tasarım", "SEO uyumlu yapı", "Hızlı yükleme", "CMS entegrasyonu", "İletişim formu"],
  },
  {
    icon: "⬡",
    title: "Landing Page & Tanıtım",
    desc: "Ürününüzü veya hizmetinizi öne çıkaran, dönüşüm odaklı tek sayfalık tanıtım siteleri.",
    features: ["Yüksek dönüşüm tasarımı", "Animasyonlu bölümler", "Hızlı teslimat", "Revizyon hakkı", "Mobil öncelikli"],
  },
  {
    icon: "◉",
    title: "Web Uygulama (Django)",
    desc: "Python & Django ile backend, modern arayüzle frontend'i birleştiren tam kapsamlı web uygulamaları.",
    features: ["Admin paneli", "Veritabanı tasarımı", "API geliştirme", "Kullanıcı yönetimi", "Deployment desteği"],
  },
  {
    icon: "◎",
    title: "Mevcut Site Revizyonu",
    desc: "Eski veya bozuk sitenizi baştan aşağı yenileyerek modern, hızlı ve mobil uyumlu hale getiririm.",
    features: ["Kod temizleme", "Mobil optimizasyon", "Hız iyileştirme", "Görsel güncelleme", "Test & QA"],
  },
];

const packages = [
  {
    name: "Başlangıç",
    price: "5.000",
    currency: "₺",
    desc: "Küçük işletmeler ve bireysel girişimler için",
    color: "#64748b",
    features: [
      "5 sayfaya kadar site",
      "Responsive tasarım",
      "İletişim formu",
      "7 gün teslimat",
      "1 revizyon turu",
      "1 ay destek",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "12.000",
    currency: "₺",
    desc: "Kurumsal firmalar ve ciddi projeler için",
    color: "#f59e0b",
    features: [
      "10 sayfaya kadar site",
      "Özel tasarım + animasyonlar",
      "SEO temel optimizasyon",
      "Admin paneli",
      "14 gün teslimat",
      "3 revizyon turu",
      "3 ay destek",
    ],
    popular: true,
  },
  {
    name: "Kurumsal",
    price: "Teklif Al",
    currency: "",
    desc: "Büyük ölçekli projeler ve özel ihtiyaçlar",
    color: "#10b981",
    features: [
      "Sınırsız sayfa",
      "Django web uygulaması",
      "API entegrasyonları",
      "Veritabanı tasarımı",
      "Özel teslimat planı",
      "Sınırsız revizyon",
      "6 ay destek",
    ],
    popular: false,
  },
];

const workProcess = [
  { step: "01", title: "Keşif & Analiz", desc: "İhtiyaçlarınızı detaylıca dinler, hedef kitlenizi ve beklentilerinizi analiz ederim." },
  { step: "02", title: "Tasarım & Prototip", desc: "Görsel tasarımı oluştururum, onayınızı alırım. Hiçbir sürpriz olmaz." },
  { step: "03", title: "Geliştirme", desc: "Onaylanan tasarımı temiz, hızlı ve ölçeklenebilir kodla hayata geçiririm." },
  { step: "04", title: "Test & Teslim", desc: "Her cihazda test ederim, deployment desteğiyle birlikte siteyi teslim ederim." },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Hakkımda");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionIds = ["hakkimda", "yetenekler", "deneyim", "egitim", "freelance", "iletisim"];

  return (
    <div style={{ background: "#080c14", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />

      {/* Cursor glow */}
      <div style={{
        position: "fixed", top: cursorPos.y - 200, left: cursorPos.x - 200,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0, transition: "top 0.1s, left 0.1s",
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(245,158,11,0.12)" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(1rem,5vw,3rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 70,
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", letterSpacing: 2, color: "#f59e0b" }}>
          MY<span style={{ color: "#e2e8f0" }}>.</span>
        </div>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {NAV_LINKS.map((link, i) => (
            <button key={link} onClick={() => scrollTo(sectionIds[i])}
              style={{
                background: "none", border: "none", color: activeNav === link ? "#f59e0b" : "#94a3b8",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500,
                cursor: "pointer", transition: "color 0.2s", letterSpacing: 0.5,
                padding: "4px 0", borderBottom: activeNav === link ? "1px solid #f59e0b" : "1px solid transparent",
              }}
              onMouseEnter={e => e.target.style.color = "#f59e0b"}
              onMouseLeave={e => e.target.style.color = activeNav === link ? "#f59e0b" : "#94a3b8"}
            >
              {link}
            </button>
          ))}
        </div>
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#f59e0b", fontSize: "1.5rem", cursor: "pointer" }} className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99, background: "rgba(8,12,20,0.98)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
        }}>
          {NAV_LINKS.map((link, i) => (
            <button key={link} onClick={() => scrollTo(sectionIds[i])}
              style={{ background: "none", border: "none", color: "#e2e8f0", fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 700, cursor: "pointer" }}>
              {link}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hakkimda" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1rem,6vw,6rem) 80px", position: "relative" }}>
        <div style={{ maxWidth: 900, width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.1s" }}>
            <div style={{ width: 40, height: 1, background: "#f59e0b" }} />
            <span style={{ color: "#f59e0b", fontSize: "0.85rem", fontWeight: 500, letterSpacing: 3, textTransform: "uppercase" }}>Portfolyo</span>
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(3rem, 10vw, 7rem)", lineHeight: 1.05,
            margin: "0 0 1rem", letterSpacing: -2,
            animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.2s",
          }}>
            Mustafa<br />
            <span style={{ WebkitTextStroke: "2px rgba(245,158,11,0.5)", color: "transparent" }}>Yıldız</span>
          </h1>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.35s" }}>
            {["Software Developer", "Business Analyst", "QA Engineer"].map(tag => (
              <span key={tag} style={{
                padding: "6px 16px", borderRadius: 4,
                border: "1px solid rgba(245,158,11,0.3)",
                color: "#f59e0b", fontSize: "0.8rem", fontWeight: 500, letterSpacing: 1,
                background: "rgba(245,158,11,0.05)",
              }}>{tag}</span>
            ))}
          </div>
          <p style={{
            fontSize: "clamp(1rem,2vw,1.15rem)", lineHeight: 1.85, color: "#94a3b8",
            maxWidth: 640, marginBottom: "2.5rem",
            animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.45s",
          }}>
            Kod yazmaya teknik ofislerde proje raporları hazırlarken merak saldım; bugün ise Vodafone'da uçtan uca yazılım geliştirme süreçlerinde yer alıyor, iş ihtiyaçlarını çözüme dönüştürüyorum.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.55s" }}>
            <button onClick={() => scrollTo("iletisim")} style={{
              padding: "14px 32px", background: "#f59e0b", color: "#080c14",
              border: "none", borderRadius: 6, fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              letterSpacing: 0.5,
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 30px rgba(245,158,11,0.35)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >
              İletişime Geç
            </button>
            <a href="https://www.linkedin.com/in/mustafa-yıldız-9203371a2" target="_blank" rel="noreferrer" style={{
              padding: "14px 32px", background: "transparent", color: "#e2e8f0",
              border: "1px solid rgba(226,232,240,0.2)", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem",
              cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#f59e0b"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(226,232,240,0.2)"; e.currentTarget.style.color = "#e2e8f0"; }}
            >
              LinkedIn ↗
            </a>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap", animation: "fadeUp 0.8s ease forwards", opacity: 0, animationDelay: "0.65s" }}>
            {[["3+", "Yıl Deneyim"], ["2", "Şirket"], ["1", "Aktif Proje"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#f59e0b", lineHeight: 1 }}>{num}</div>
                <div style={{ color: "#475569", fontSize: "0.8rem", marginTop: 4, letterSpacing: 1 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative circle */}
        <div style={{
          position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)",
          width: "clamp(200px, 35vw, 500px)", height: "clamp(200px, 35vw, 500px)",
          borderRadius: "50%", border: "1px solid rgba(245,158,11,0.1)",
          pointerEvents: "none",
        }}>
          <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "1px solid rgba(245,158,11,0.08)" }}>
            <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "1px solid rgba(245,158,11,0.05)" }} />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="yetenekler" style={{ padding: "100px clamp(1rem,6vw,6rem)", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <SectionLabel>Yetenekler</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: "0.5rem", letterSpacing: -1 }}>
            Teknik <span style={{ color: "#f59e0b" }}>Yetkinlikler</span>
          </h2>
          <p style={{ color: "#475569", marginBottom: "3.5rem", fontSize: "1rem" }}>Kullandığım teknoloji ve metodolojiler</p>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", maxWidth: 1100 }}>
          {skills.map((sk, i) => (
            <AnimatedSection key={sk.category} delay={i * 0.08}>
              <SkillCard {...sk} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="deneyim" style={{ padding: "100px clamp(1rem,6vw,6rem)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 900 }}>
          <AnimatedSection>
            <SectionLabel>Deneyim</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: "3.5rem", letterSpacing: -1 }}>
              Kariyer <span style={{ color: "#f59e0b" }}>Yolculuğu</span>
            </h2>
          </AnimatedSection>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 28, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #f59e0b, rgba(245,158,11,0.1))" }} />
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.15}>
                <ExperienceCard {...exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="egitim" style={{ padding: "100px clamp(1rem,6vw,6rem)", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <SectionLabel>Eğitim & Sertifikalar</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: "3.5rem", letterSpacing: -1 }}>
            Akademik <span style={{ color: "#f59e0b" }}>Geçmiş</span>
          </h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", maxWidth: 1000 }}>
          <div>
            <AnimatedSection>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", color: "#475569", letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.5rem" }}>Eğitim</h3>
            </AnimatedSection>
            {education.map((ed, i) => (
              <AnimatedSection key={ed.degree} delay={i * 0.1}>
                <div style={{
                  padding: "1.5rem", borderRadius: 10,
                  border: "1px solid rgba(245,158,11,0.12)",
                  background: "rgba(245,158,11,0.03)", marginBottom: "1rem",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{ed.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.35rem" }}>{ed.degree}</div>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>{ed.school}</div>
                  <div style={{ color: "#f59e0b", fontSize: "0.8rem", marginTop: "0.5rem", fontWeight: 500 }}>{ed.period}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div>
            <AnimatedSection>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", color: "#475569", letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.5rem" }}>Sertifikalar & Dil</h3>
            </AnimatedSection>
            {certs.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div style={{
                  padding: "1.25rem 1.5rem", borderRadius: 10,
                  border: "1px solid rgba(245,158,11,0.12)",
                  background: "rgba(245,158,11,0.03)", marginBottom: "1rem",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{cert.title}</div>
                    {cert.year && <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{cert.year}</div>}
                  </div>
                  <span style={{
                    padding: "4px 12px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, letterSpacing: 0.5,
                    background: cert.status === "completed" ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
                    color: cert.status === "completed" ? "#10b981" : "#f59e0b",
                    border: `1px solid ${cert.status === "completed" ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
                  }}>
                    {cert.status === "completed" ? "✓ Tamamlandı" : "◷ Planlandı"}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FREELANCE */}
      <section id="freelance" style={{ padding: "100px clamp(1rem,6vw,6rem)", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <AnimatedSection>
          <SectionLabel>Freelance</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: "0.5rem", letterSpacing: -1 }}>
            Web <span style={{ color: "#f59e0b" }}>Hizmetlerim</span>
          </h2>
          <p style={{ color: "#475569", marginBottom: "3.5rem", fontSize: "1rem", maxWidth: 560 }}>
            Vodafone'daki yazılım geliştirme deneyimim ve QA altyapımla, işinize değer katan kaliteli web siteleri tasarlıyorum.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", maxWidth: 1100, marginBottom: "5rem" }}>
          {freelanceServices.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.08}>
              <FreelanceServiceCard {...svc} />
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
            <div style={{ width: 30, height: 1, background: "#f59e0b" }} />
            <span style={{ color: "#f59e0b", fontSize: "0.75rem", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>Nasıl Çalışırım?</span>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", maxWidth: 1000, marginBottom: "5rem" }}>
          {workProcess.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1}>
              <div style={{
                padding: "1.75rem", borderRadius: 12,
                border: "1px solid rgba(245,158,11,0.1)",
                background: "rgba(255,255,255,0.01)",
                position: "relative", overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "3rem",
                  color: "rgba(245,158,11,0.08)", position: "absolute", top: 8, right: 16,
                  lineHeight: 1, userSelect: "none",
                }}>{step.step}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#f59e0b", letterSpacing: 2, marginBottom: "0.75rem" }}>
                  ADIM {step.step}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem" }}>{step.title}</div>
                <div style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pricing */}
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
            <div style={{ width: 30, height: 1, background: "#f59e0b" }} />
            <span style={{ color: "#f59e0b", fontSize: "0.75rem", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>Fiyatlandırma</span>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", maxWidth: 960 }}>
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.12}>
              <PricingCard {...pkg} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={0.2}>
          <div style={{
            marginTop: "4rem", maxWidth: 960,
            padding: "2.5rem clamp(1.5rem,4vw,3rem)",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 100%)",
            border: "1px solid rgba(245,158,11,0.25)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "1.5rem",
          }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem,3vw,1.6rem)", marginBottom: "0.4rem" }}>
                Projeniz için <span style={{ color: "#f59e0b" }}>ücretsiz danışın</span>
              </div>
              <div style={{ color: "#64748b", fontSize: "0.9rem" }}>
                Bütçenize ve ihtiyaçlarınıza özel fiyat teklifi alın — 24 saat içinde dönüş.
              </div>
            </div>
            <a href="mailto:yldzzmustafaa.98@gmail.com?subject=Freelance%20Web%20Projesi%20Teklif%20Talebi"
              style={{
                padding: "14px 32px", background: "#f59e0b", color: "#080c14",
                border: "none", borderRadius: 8, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
                textDecoration: "none", display: "inline-block", whiteSpace: "nowrap",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(245,158,11,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Teklif Al →
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT */}
      <section id="iletisim" style={{ padding: "100px clamp(1rem,6vw,6rem) 120px", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{
            maxWidth: 700, margin: "0 auto", textAlign: "center",
            padding: "4rem clamp(1.5rem,5vw,4rem)",
            border: "1px solid rgba(245,158,11,0.15)",
            borderRadius: 16, background: "rgba(245,158,11,0.03)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -60, right: -60, width: 200, height: 200,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08), transparent)",
              pointerEvents: "none",
            }} />
            <SectionLabel center>İletişim</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: "1rem", letterSpacing: -1 }}>
              Birlikte <span style={{ color: "#f59e0b" }}>Çalışalım</span>
            </h2>
            <p style={{ color: "#64748b", marginBottom: "2.5rem", lineHeight: 1.7 }}>
              Yeni fırsatlar, projeler veya sadece bir merhaba için benimle iletişime geçebilirsiniz.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              {[
                { icon: "✉", label: "yldzzmustafaa.98@gmail.com", href: "mailto:yldzzmustafaa.98@gmail.com" },
                { icon: "📞", label: "+90 531 962 14 82", href: "tel:+905319621482" },
                { icon: "🔗", label: "LinkedIn Profili", href: "https://www.linkedin.com/in/mustafa-yıldız-9203371a2" },
                { icon: "📍", label: "Ümraniye, İstanbul", href: null },
              ].map(({ icon, label, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#f59e0b"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}
                    >{label}</a>
                  ) : (
                    <span style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(245,158,11,0.08)", padding: "2rem clamp(1rem,6vw,6rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", zIndex: 1, position: "relative" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#f59e0b", letterSpacing: 2 }}>MY.</div>
        <div style={{ color: "#334155", fontSize: "0.8rem" }}>© 2025 Mustafa Yıldız. Tüm hakları saklıdır.</div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: rgba(245,158,11,0.3); border-radius: 3px; }
      `}</style>
    </div>
  );
}

function SectionLabel({ children, center = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 30, height: 1, background: "#f59e0b" }} />
      <span style={{ color: "#f59e0b", fontSize: "0.75rem", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>{children}</span>
      {center && <div style={{ width: 30, height: 1, background: "#f59e0b" }} />}
    </div>
  );
}

function SkillCard({ category, items, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.75rem", borderRadius: 12,
        border: `1px solid ${hovered ? "rgba(245,158,11,0.35)" : "rgba(245,158,11,0.1)"}`,
        background: hovered ? "rgba(245,158,11,0.05)" : "rgba(255,255,255,0.01)",
        transition: "all 0.3s ease", cursor: "default",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "#f59e0b" }}>{icon}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#e2e8f0" }}>{category}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map(item => (
          <span key={item} style={{
            padding: "4px 12px", borderRadius: 4, fontSize: "0.78rem",
            background: "rgba(245,158,11,0.08)", color: "#94a3b8",
            border: "1px solid rgba(245,158,11,0.12)", fontWeight: 400,
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function FreelanceServiceCard({ icon, title, desc, features }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.75rem", borderRadius: 12,
        border: `1px solid ${hovered ? "rgba(245,158,11,0.4)" : "rgba(245,158,11,0.1)"}`,
        background: hovered ? "rgba(245,158,11,0.05)" : "rgba(255,255,255,0.01)",
        transition: "all 0.3s ease", cursor: "default",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.35)" : "none",
        display: "flex", flexDirection: "column", height: "100%",
      }}
    >
      <div style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "#f59e0b" }}>{icon}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.65rem" }}>{title}</div>
      <div style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem", flex: 1 }}>{desc}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {features.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#94a3b8" }}>
            <span style={{ color: "#f59e0b", fontSize: "0.65rem" }}>▸</span>{f}
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingCard({ name, price, currency, desc, color, features, popular }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem", borderRadius: 14,
        border: popular
          ? `2px solid ${color}`
          : `1px solid ${hovered ? "rgba(245,158,11,0.3)" : "rgba(245,158,11,0.1)"}`,
        background: popular ? "rgba(245,158,11,0.06)" : "rgba(255,255,255,0.01)",
        transition: "all 0.3s ease", position: "relative", overflow: "hidden",
        transform: popular || hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: popular ? "0 0 40px rgba(245,158,11,0.15)" : hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
        display: "flex", flexDirection: "column",
      }}
    >
      {popular && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "4px 14px", borderRadius: 20, fontSize: "0.68rem", fontWeight: 700, letterSpacing: 1,
          background: "rgba(245,158,11,0.2)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.4)",
          textTransform: "uppercase",
        }}>★ Popüler</div>
      )}
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.4rem", color }}>{name}</div>
      <div style={{ color: "#475569", fontSize: "0.8rem", marginBottom: "1.5rem" }}>{desc}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "1.75rem" }}>
        {currency && <span style={{ color, fontSize: "1.2rem", fontWeight: 600 }}>{currency}</span>}
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: price.length > 6 ? "1.4rem" : "2.2rem", color }}>{price}</span>
        {currency && <span style={{ color: "#475569", fontSize: "0.8rem", marginLeft: 4 }}>'den başlayan</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
        {features.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.85rem", color: "#94a3b8" }}>
            <span style={{ color, fontWeight: 700, fontSize: "0.8rem" }}>✓</span>{f}
          </div>
        ))}
      </div>
      <a href="mailto:yldzzmustafaa.98@gmail.com?subject=Freelance%20Web%20Projesi%20Teklif%20Talebi"
        style={{
          marginTop: "1.75rem", padding: "12px", borderRadius: 8, textAlign: "center",
          background: popular ? color : "transparent",
          color: popular ? "#080c14" : color,
          border: `1px solid ${color}`,
          fontWeight: 700, fontSize: "0.88rem", cursor: "pointer",
          textDecoration: "none", display: "block",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { if (!popular) { e.currentTarget.style.background = color; e.currentTarget.style.color = "#080c14"; }}}
        onMouseLeave={e => { if (!popular) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = color; }}}
      >
        {price === "Teklif Al" ? "Teklif İste →" : "Hemen Başla →"}
      </a>
    </div>
  );
}

function ExperienceCard({ role, company, period, color, logo, bullets }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem", paddingLeft: "0.5rem" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Timeline dot */}
      <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", boxShadow: `0 0 0 4px rgba(8,12,20,1), 0 0 0 5px ${color}40`, zIndex: 1, transition: "transform 0.2s", transform: hovered ? "scale(1.08)" : "scale(1)" }}>
        {logo}
      </div>
      <div style={{
        flex: 1, padding: "1.75rem",
        border: `1px solid ${hovered ? `${color}40` : "rgba(245,158,11,0.1)"}`,
        borderRadius: 12, background: hovered ? "rgba(255,255,255,0.02)" : "transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>{role}</div>
          <div style={{ color: color, fontSize: "0.8rem", fontWeight: 600, letterSpacing: 0.5 }}>{period}</div>
        </div>
        <div style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1.25rem", fontWeight: 500 }}>{company}</div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.6 }}>
              <span style={{ color: color, marginTop: "0.35rem", flexShrink: 0 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}