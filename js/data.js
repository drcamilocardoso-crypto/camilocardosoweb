/* ============================================================
   ARCHIVO DE CONFIGURACIÓN — CAMILO CARDOSO ABOGADO
   ============================================================
   Todo el contenido editable del sitio vive en este único archivo.
   Cambiá textos, imágenes, colores y datos de contacto acá;
   no hace falta tocar el HTML, CSS ni el resto del JS.
   ============================================================ */

const SITE_DATA = {

  // ---------- IDENTIDAD / MARCA ----------
  marca: {
    nombre: "Camilo Cardoso",
    apellidoCorto: "Cardoso",
    tituloProfesional: "Abogado",
    tagline: "Asesoría legal clara, cercana y efectiva",
    logo: "assets/img/logo.svg",          // Logo (SVG o PNG). Reemplazar por el propio.
    logoAlt: "Logo Camilo Cardoso Abogado",
    favicon: "assets/img/favicon.png",
    fotoPerfil: "assets/img/perfil.jpg",  // Foto principal del abogado
    fotoAlt: "Camilo Cardoso, Abogado",
  },

  // ---------- COLORES (se inyectan como variables CSS) ----------
  // Cambiá estos valores para re-tematizar todo el sitio al instante.
  colores: {
    fondoPrincipal: "#0a0d14",
    fondoSecundario: "#10141d",
    fondoTarjeta: "#151a24",
    acentoPrimario: "#c9a256",   // dorado/bronce — asociado a abogacía
    acentoSecundario: "#7c9cff", // azul frío para contrastes/links
    textoPrincipal: "#f2f3f5",
    textoSecundario: "#9aa3b2",
    borde: "#232838",
    exito: "#3ecf8e",
  },

  // ---------- CONTACTO ----------
  contacto: {
    whatsappNumero: "59897301476", // formato internacional sin '+' ni espacios
    whatsappMensajeDefault: "Hola Camilo, encontré tu página web y me gustaría hacer una consulta legal.",
    email: "contacto@camilocardoso.com.uy", // Reemplazar por el email real
    telefono: "+598 97 301 476",
    direccion: "Montevideo, Uruguay",
    horario: "Lunes a viernes, 9:00 – 18:00 hs",
    linkedin: "https://uy.linkedin.com/in/camilo-cardoso-544b75173",
    instagram: "",
    facebook: "",
  },

  // ---------- NAVEGACIÓN ----------
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Áreas de práctica", href: "#areas" },
    { label: "Por qué elegirme", href: "#por-que" },
    { label: "Contacto", href: "#contacto" },
  ],

  // ---------- HERO / PORTADA ----------
  hero: {
    kicker: "Estudio Jurídico · Montevideo, Uruguay",
    titulo: "Defiendo tus derechos con",
    tituloDestacado: "criterio y compromiso",
    descripcion: "Abogado egresado de la Universidad de la República del Uruguay, con sólida experiencia en firmas jurídicas de primer nivel y en la docencia universitaria. Asesoramiento legal cercano, riguroso y a la medida de cada caso.",
    ctaPrimario: { texto: "Consultar por WhatsApp", tipo: "whatsapp" },
    ctaSecundario: { texto: "Ver trayectoria", href: "#trayectoria" },
    statsRapidas: [
      { numero: 2, sufijo: "+", etiqueta: "Años de experiencia profesional" },
      { numero: 4, sufijo: "", etiqueta: "Estudios y firmas jurídicas" },
      { numero: 3, sufijo: "+", etiqueta: "Años como docente universitario" },
    ],
  },

  // ---------- SOBRE MÍ ----------
  sobreMi: {
    titulo: "Sobre mí",
    subtitulo: "Formación sólida, cercanía profesional",
    parrafos: [
      "Soy Camilo Cardoso, abogado egresado de la Facultad de Derecho de la Universidad de la República (UdelaR), con formación y experiencia en prestigiosas firmas jurídicas de Uruguay.",
      "Comencé mi carrera como procurador en FERRERE, continué como abogado asociado en Dentons Jiménez de Aréchaga y actualmente ejerzo como abogado asociado en Donnángelo & Sasson, combinando la práctica profesional con la docencia universitaria como ayudante de Derecho Penal y colaborador docente en Derecho Procesal I y II.",
      "Esa doble mirada —académica y profesional— me permite ofrecer un asesoramiento riguroso, actualizado y explicado en términos claros, acompañando a cada cliente en la resolución concreta de su situación legal.",
    ],
    credenciales: [
      { titulo: "Abogado", institucion: "Universidad de la República (UdelaR) · 2020 – 2025" },
    ],
  },

  // ---------- TRAYECTORIA (experiencia, educación, cursos, reconocimientos, idiomas) ----------
  trayectoria: {
    titulo: "Trayectoria",
    subtitulo: "Experiencia y formación",

    experiencia: [
      {
        cargo: "Abogado Asociado",
        lugar: "Donnángelo & Sasson",
        periodo: "may. 2026 — actualidad",
        detalle: "Jornada completa · Montevideo, Uruguay · Presencial",
      },
      {
        cargo: "Ayudante (G1) de Derecho Penal",
        lugar: "Facultad de Derecho — Universidad de la República",
        periodo: "mar. 2026 — actualidad",
        detalle: "Jornada parcial · Montevideo, Uruguay · Presencial",
      },
      {
        cargo: "Abogado Asociado",
        lugar: "Dentons Jiménez de Aréchaga",
        periodo: "ago. 2025 — may. 2026",
        detalle: "Jornada completa",
      },
      {
        cargo: "Procurador",
        lugar: "FERRERE",
        periodo: "mar. 2024 — ago. 2025",
        detalle: "Jornada parcial · Montevideo, Uruguay",
      },
      {
        cargo: "Colaborador docente en Derecho Procesal I y II",
        lugar: "Facultad de Derecho — Universidad de la República",
        periodo: "jul. 2023 — actualidad",
        detalle: "Voluntariado · Educación",
      },
    ],

    educacion: [
      {
        titulo: "Abogado",
        institucion: "Universidad de la República",
        periodo: "mar. 2020 — abr. 2025 · Derecho",
      },
    ],

    cursos: [
      {
        titulo: "A diez años de la reforma del CGP: evaluación de su interpretación, aplicación e impacto y definición de los nuevos desafíos para el futuro",
        institucion: "FCU, 2024 · Asociado con Universidad de la República",
      },
      {
        titulo: "Curso de proceso penal",
        institucion: "Colegio de Abogados del Uruguay · Asociado con Universidad de la República",
      },
    ],

    reconocimientos: [
      {
        titulo: "Ponente en las Jornadas Estudiantiles de Derecho Procesal",
        institucion: "Instituto Uruguayo de Derecho Procesal · sept. 2024",
        descripcion: "Ponencia: “La medida innovativa: su tratamiento en el derecho positivo uruguayo”.",
      },
    ],

    idiomas: [
      { idioma: "Inglés", nivel: "Competencia profesional completa" },
    ],
  },

  // ---------- ÁREAS DE PRÁCTICA ----------
  // Agregá, quitá o editá objetos de este arreglo para modificar las tarjetas.
  areas: [
    {
      icono: "balance-scale",
      titulo: "Derecho Penal",
      descripcion: "Asesoramiento y representación en procesos penales, con base en la práctica docente en la materia.",
    },
    {
      icono: "file-text",
      titulo: "Derecho Procesal",
      descripcion: "Estrategia y acompañamiento en procesos judiciales bajo el Código General del Proceso.",
    },
    {
      icono: "briefcase",
      titulo: "Derecho Comercial",
      descripcion: "Constitución de sociedades, contratos comerciales y asesoría a empresas.",
    },
    {
      icono: "shield",
      titulo: "Servicios Legales Generales",
      descripcion: "Consultoría legal integral para personas y empresas ante distintas situaciones jurídicas.",
    },
    {
      icono: "users",
      titulo: "Derecho Civil",
      descripcion: "Contratos, responsabilidad civil y asuntos patrimoniales.",
    },
    {
      icono: "message-circle",
      titulo: "Consultoría Legal",
      descripcion: "Asesoramiento preventivo y acompañamiento legal continuo, con comunicación directa y clara.",
    },
  ],

  // ---------- POR QUÉ ELEGIRME ----------
  porQue: {
    titulo: "¿Por qué elegirme?",
    subtitulo: "Un servicio legal pensado en vos",
    items: [
      { icono: "message-circle", titulo: "Comunicación directa", descripcion: "Respuesta ágil por WhatsApp y seguimiento constante de tu caso." },
      { icono: "target", titulo: "Formación actualizada", descripcion: "Experiencia en firmas jurídicas de primer nivel y docencia universitaria activa." },
      { icono: "lock", titulo: "Confidencialidad", descripcion: "Absoluta reserva y ética profesional en cada consulta." },
      { icono: "trending-up", titulo: "Resultados concretos", descripcion: "Foco en soluciones eficaces, no solo en procesos." },
    ],
  },

  // ---------- LLAMADO A LA ACCIÓN FINAL ----------
  ctaFinal: {
    titulo: "¿Tenés una consulta legal?",
    descripcion: "Escribime directamente por WhatsApp y te respondo a la brevedad.",
    boton: "Escribir por WhatsApp",
  },

  // ---------- CONTACTO (sección) ----------
  contactoSeccion: {
    titulo: "Contacto",
    subtitulo: "Estoy para ayudarte. Contactame por el medio que prefieras.",
  },

  // ---------- FOOTER ----------
  footer: {
    textoDerechos: `© ${new Date().getFullYear()} Camilo Cardoso — Abogado. Todos los derechos reservados.`,
    textoLegal: "Sitio informativo. No constituye asesoramiento legal formal hasta la confirmación de una consulta.",
  },
};
