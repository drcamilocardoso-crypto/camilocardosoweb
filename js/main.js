/* ============================================================
   CAMILO CARDOZO — ABOGADO | main.js
   Renderiza el contenido de SITE_DATA en el DOM y controla
   las interacciones/animaciones del sitio.
   ============================================================ */

(function () {
  "use strict";

  const d = SITE_DATA;

  // ---------- Helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, opts = {}) => Object.assign(document.createElement(tag), opts);

  function whatsappUrl(mensaje) {
    const texto = encodeURIComponent(mensaje || d.contacto.whatsappMensajeDefault);
    return `https://wa.me/${d.contacto.whatsappNumero}?text=${texto}`;
  }

  // ---------- Inyectar variables de color en :root ----------
  function applyTheme() {
    const root = document.documentElement.style;
    root.setProperty("--bg-primary", d.colores.fondoPrincipal);
    root.setProperty("--bg-secondary", d.colores.fondoSecundario);
    root.setProperty("--bg-card", d.colores.fondoTarjeta);
    root.setProperty("--accent", d.colores.acentoPrimario);
    root.setProperty("--accent-2", d.colores.acentoSecundario);
    root.setProperty("--text-primary", d.colores.textoPrincipal);
    root.setProperty("--text-secondary", d.colores.textoSecundario);
    root.setProperty("--border", d.colores.borde);
    root.setProperty("--success", d.colores.exito);
  }

  // ---------- Marca / Header ----------
  function renderBrand() {
    $("#brandText").textContent = d.marca.nombre;
    $("#footerBrandText").textContent = d.marca.nombre;
    $("#brandLogo").src = d.marca.logo;
    $("#brandLogo").alt = d.marca.logoAlt;
    $("#favicon").href = d.marca.favicon;
    $("#heroPhoto").src = d.marca.fotoPerfil;
    $("#heroPhoto").alt = d.marca.fotoAlt;
    document.title = `${d.marca.nombre} | ${d.marca.tituloProfesional}`;
  }

  // ---------- Navegación ----------
  function renderNav() {
    const navList = $("#navList");
    const mobileList = $("#mobileNavList");
    d.nav.forEach((item) => {
      const li = el("li");
      const a = el("a", { href: item.href, textContent: item.label });
      li.appendChild(a);
      navList.appendChild(li);

      const liM = el("li");
      const aM = el("a", { href: item.href, textContent: item.label });
      liM.appendChild(aM);
      mobileList.appendChild(liM);
    });

    const waUrl = whatsappUrl();
    ["navWhatsapp", "mobileWhatsapp", "whatsappFloat"].forEach((id) => {
      const node = $("#" + id);
      if (node) node.href = waUrl;
    });
  }

  // ---------- Hero ----------
  function renderHero() {
    $("#heroKicker").textContent = d.hero.kicker;
    $("#heroTitle").textContent = d.hero.titulo + " ";
    $("#heroTitleHighlight").textContent = d.hero.tituloDestacado;
    $("#heroDesc").textContent = d.hero.descripcion;

    const ctaP = $("#heroCtaPrimary");
    ctaP.href = whatsappUrl();
    ctaP.querySelector("span").textContent = d.hero.ctaPrimario.texto;
    ctaP.target = "_blank";
    ctaP.rel = "noopener";

    const ctaS = $("#heroCtaSecondary");
    ctaS.href = d.hero.ctaSecundario.href;
    ctaS.textContent = d.hero.ctaSecundario.texto;

    $("#heroBadgeNumber").textContent = "+" + d.hero.statsRapidas[0].numero;

    const statsWrap = $("#heroStats");
    d.hero.statsRapidas.forEach((s) => {
      const item = el("div", { className: "stat-item" });
      const strong = el("strong", { textContent: "0" + s.sufijo });
      strong.dataset.target = s.numero;
      strong.dataset.suffix = s.sufijo;
      const span = el("span", { textContent: s.etiqueta });
      item.append(strong, span);
      statsWrap.appendChild(item);
    });
  }

  // ---------- Sobre mí ----------
  function renderSobreMi() {
    $("#sobreMiSubtitulo").textContent = d.sobreMi.subtitulo;
    $("#sobreMiTitulo").textContent = d.sobreMi.titulo;
    $("#aboutPhoto").src = d.marca.fotoPerfil.replace("perfil.jpg", "perfil-secundaria.jpg");

    const parrafosWrap = $("#sobreMiParrafos");
    d.sobreMi.parrafos.forEach((texto) => {
      parrafosWrap.appendChild(el("p", { textContent: texto }));
    });

    const credWrap = $("#credenciales");
    d.sobreMi.credenciales.forEach((c) => {
      const li = el("li");
      li.innerHTML = `<strong>${c.titulo}</strong><span> — ${c.institucion}</span>`;
      credWrap.appendChild(li);
    });
  }

  // ---------- Áreas de práctica ----------
  function renderAreas() {
    const grid = $("#areasGrid");
    d.areas.forEach((a) => {
      const card = el("div", { className: "area-card" });
      card.setAttribute("data-reveal", "");
      card.innerHTML = `
        <div class="area-card__icon"><svg class="icon" viewBox="0 0 24 24"><use href="#icon-${a.icono}"/></svg></div>
        <h3>${a.titulo}</h3>
        <p>${a.descripcion}</p>
      `;
      grid.appendChild(card);
    });
  }

  // ---------- Por qué elegirme ----------
  function renderPorQue() {
    $("#porQueSubtitulo").textContent = "Ventajas";
    $("#porQueTitulo").textContent = d.porQue.titulo;

    const grid = $("#porQueGrid");
    d.porQue.items.forEach((item) => {
      const box = el("div", { className: "feature-item" });
      box.setAttribute("data-reveal", "");
      box.innerHTML = `
        <div class="feature-item__icon"><svg class="icon" viewBox="0 0 24 24"><use href="#icon-${item.icono}"/></svg></div>
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      `;
      grid.appendChild(box);
    });
  }

  // ---------- Trayectoria (experiencia, educación, cursos, reconocimientos, idiomas) ----------
  function renderTrayectoria() {
    const t = d.trayectoria;
    $("#trayectoriaSubtitulo").textContent = t.subtitulo;
    $("#trayectoriaTitulo").textContent = t.titulo;

    const expWrap = $("#experienciaTimeline");
    t.experiencia.forEach((item) => {
      const node = el("div", { className: "timeline-item" });
      node.innerHTML = `
        <span class="timeline-item__dot"></span>
        <h4>${item.cargo}</h4>
        <p class="timeline-item__place">${item.lugar}</p>
        <p class="timeline-item__period">${item.periodo}</p>
        <p class="timeline-item__detail">${item.detalle}</p>
      `;
      expWrap.appendChild(node);
    });

    const eduWrap = $("#educacionTimeline");
    t.educacion.forEach((item) => {
      const node = el("div", { className: "timeline-item" });
      node.innerHTML = `
        <span class="timeline-item__dot"></span>
        <h4>${item.titulo}</h4>
        <p class="timeline-item__place">${item.institucion}</p>
        <p class="timeline-item__period">${item.periodo}</p>
      `;
      eduWrap.appendChild(node);
    });

    const cursosWrap = $("#cursosList");
    t.cursos.forEach((c) => {
      const li = el("li");
      li.innerHTML = `<strong>${c.titulo}</strong><span>${c.institucion}</span>`;
      cursosWrap.appendChild(li);
    });

    const reconWrap = $("#reconocimientosList");
    t.reconocimientos.forEach((r) => {
      const card = el("div", { className: "recognition-card" });
      card.innerHTML = `
        <h4>${r.titulo}</h4>
        <p class="recognition-card__meta">${r.institucion}</p>
        <p class="recognition-card__desc">${r.descripcion}</p>
      `;
      reconWrap.appendChild(card);
    });

    const idiomasWrap = $("#idiomasList");
    t.idiomas.forEach((i) => {
      const li = el("li", { className: "tag" });
      li.textContent = `${i.idioma} — ${i.nivel}`;
      idiomasWrap.appendChild(li);
    });
  }

  // ---------- CTA final ----------
  function renderCtaFinal() {
    $("#ctaFinalTitulo").textContent = d.ctaFinal.titulo;
    $("#ctaFinalDesc").textContent = d.ctaFinal.descripcion;
    const btn = $("#ctaFinalBtn");
    btn.href = whatsappUrl();
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.querySelector("span").textContent = d.ctaFinal.boton;
  }

  // ---------- Contacto ----------
  function renderContacto() {
    $("#contactoTitulo").textContent = d.contactoSeccion.titulo;
    $("#contactoSubtitulo").textContent = d.contactoSeccion.subtitulo;

    $("#contactWhatsappNumero").textContent = d.contacto.telefono;
    const waLink = $("#contactWhatsappLink");
    waLink.href = whatsappUrl();
    waLink.target = "_blank";
    waLink.rel = "noopener";

    $("#contactEmail").textContent = d.contacto.email;
    const emailLink = $("#contactEmailLink");
    emailLink.href = `mailto:${d.contacto.email}`;

    $("#contactDireccion").textContent = d.contacto.direccion;
    $("#contactHorario").textContent = d.contacto.horario;
  }

  // ---------- Footer ----------
  function renderFooter() {
    $("#footerRights").textContent = d.footer.textoDerechos;
    $("#footerLegal").textContent = d.footer.textoLegal;

    const social = $("#footerSocial");
    const links = [
      { url: d.contacto.linkedin, icon: "linkedin" },
    ].filter((s) => s.url);

    links.forEach((s) => {
      const a = el("a", { href: s.url, target: "_blank", rel: "noopener" });
      a.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><use href="#icon-${s.icon}"/></svg>`;
      social.appendChild(a);
    });
  }

  // ---------- Header scroll state ----------
  function initHeaderScroll() {
    const header = $("#header");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Mobile menu ----------
  function initMobileMenu() {
    const header = $("#header");
    const hamburger = $("#hamburger");
    const mobileMenu = $("#mobileMenu");

    function toggle(open) {
      const isOpen = open ?? !mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open", isOpen);
      header.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    hamburger.addEventListener("click", () => toggle());
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => toggle(false))
    );
  }

  // ---------- Reveal on scroll ----------
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
  }

  // ---------- Animated counters ----------
  function initCounters() {
    const counters = document.querySelectorAll(".stat-item strong[data-target]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const target = parseInt(node.dataset.target, 10);
          const suffix = node.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            node.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(node);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  // ---------- Init ----------
  function init() {
    applyTheme();
    renderBrand();
    renderNav();
    renderHero();
    renderSobreMi();
    renderTrayectoria();
    renderAreas();
    renderPorQue();
    renderCtaFinal();
    renderContacto();
    renderFooter();

    initHeaderScroll();
    initMobileMenu();
    initReveal();
    initCounters();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
