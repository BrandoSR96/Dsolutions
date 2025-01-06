// Objeto con los textos en los diferentes idiomas
const translations = {
  es: {
    "header-title": "Desarrollo Web y SEO Profesional",
    "header-description":
      "Potenciamos tu presencia online con sitios web personalizados y optimización para motores de búsqueda",
    "contact-button": "Contáctanos",
    "services-title": "Nuestros Servicios",
    "service-web": "Desarrollo Web",
    "service-web-description":
      "Creamos sitios web personalizados, diseñados para destacar tu negocio o marca personal con un enfoque profesional y funcional.",
    "service-seo": "Optimización SEO",
    "service-seo-description":
      "Mejoramos tu presencia en línea para asegurar que tu sitio sea fácilmente encontrado por los motores de búsqueda.",
    "service-responsive": "Diseño Responsive",
    "service-responsive-description":
      "Desarrollamos sitios web que se adaptan perfectamente a todos los dispositivos, desde móviles hasta desktops.",
    "service-marketing": "Marketing Digital",
    "service-marketing-description":
      "Implementamos estrategias de marketing digital para aumentar tu visibilidad online y atraer más clientes potenciales.",
    "nav-services": "Servicios",
    "nav-contact": "Contacto",
    "descripcion-empresa":
      "Potenciando tu presencia online con desarrollo web y SEO de calidad.",
    "descripcion-correo": "Correo: info@webseopro.com",
    "descripcion-telefono": "Teléfono: +1 234 567 890",
    "descripcion-contacto": "Contáctanos",
    "descripcion-direccion": "Dirección: Lima, Perú",
    "descripcion-derechos":
      "© 2025 Digital Solutions. Todos los derechos reservados.",
  },
  en: {
    "header-title": "Web Development and Professional SEO",
    "header-description":
      "We boost your online presence with customized websites and search engine optimization.",
    "contact-button": "Contact Us",
    "services-title": "Our Services",
    "service-web": "Web Development",
    "service-web-description":
      "We create customized websites designed to highlight your business or personal brand with a professional and functional approach.",
    "service-seo": "SEO Optimization",
    "service-seo-description":
      "We improve your online presence to ensure that your website is easily found by search engines.",
    "service-responsive": "Responsive Design",
    "service-responsive-description":
      "We develop websites that perfectly adapt to all devices, from mobile to desktop.",
    "service-marketing": "Digital Marketing",
    "service-marketing-description":
      "We implement digital marketing strategies to increase your online visibility and attract more potential customers.",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "descripcion-empresa":
      "Boosting your online presence with quality web development and SEO.",
    "descripcion-correo": "Mail: info@webseopro.com",
    "descripcion-telefono": "Phone: +1 234 567 890",
    "descripcion-contacto": "Contact Us",
    "descripcion-direccion": "Address: Lima, Peru",
    "descripcion-derechos": "© 2025 Digital Solutions. All rights reserved.",
  },
  pt: {
    "header-title": "Desenvolvimento Web e SEO Profissional",
    "header-description":
      "Potencializamos sua presença online com sites personalizados e otimização para motores de busca.",
    "contact-button": "Entre em Contato",
    "services-title": "Nossos Serviços",
    "service-web": "Desenvolvimento Web",
    "service-web-description":
      "Criamos sites personalizados, projetados para destacar seu negócio ou marca pessoal com uma abordagem profissional e funcional.",
    "service-seo": "Otimização SEO",
    "service-seo-description":
      "Melhoramos sua presença online para garantir que seu site seja facilmente encontrado pelos motores de busca.",
    "service-responsive": "Design Responsivo",
    "service-responsive-description":
      "Desenvolvemos sites que se adaptam perfeitamente a todos os dispositivos, desde celulares até desktops.",
    "service-marketing": "Marketing Digital",
    "service-marketing-description":
      "Implementamos estratégias de marketing digital para aumentar sua visibilidade online e atrair mais clientes em potencial.",
    "nav-services": "Serviços",
    "nav-contact": "Contato",
    "descripcion-empresa":
      "Potencializando sua presença online com desenvolvimento web e SEO de qualidade.",
    "descripcion-correo": "Correio eletrónico: info@webseopro.com",
    "descripcion-telefono": "Telefone: +1 234 567 890",
    "descripcion-contacto": "Entre em Contato",
    "descripcion-direccion": "Endereço: Lima, Peru",
    "descripcion-derechos":
      "© 2025 Digital Solutions. Todos os direitos reservados.",
  },
  qc: {
    "header-title": "Desarrollo Web chaymi SEO Profesional",
    "header-description":
      "Ñuqanchik kanki presencia online, webpi qillqaykuna chaymi optimización chaymi motores de búsqueda.",
    "contact-button": "Ñuqanchikuykuy",
    "services-title": "Ñanqaykuna",
    "service-web": "Desarrollo Web",
    "service-web-description":
      "Ñawpaqtaq qillqaykuna webpi, businessni chaymi markaqmi, hukllapi chaymi chayni ñawpaqtaq, profesionalmi chaymi funcionalmi.",
    "service-seo": "Optimización SEO",
    "service-seo-description":
      "Ñawpaqtaq kanki presencia online, chaymi webni qillqaykuna chaymi SEO chaymi chayni.",
    "service-responsive": "Diseño Responsive",
    "service-responsive-description":
      "Ñawpaqtaq webpi qillqaykuna chaymi, móvilmi desktopsni, chaymi akllaykuna.",
    "service-marketing": "Marketing Digital",
    "service-marketing-description":
      "Implementaykuna ñanqaykuna marketing digital, chaymi visibilidad online, clientes potencialkuna.",
    "nav-services": "Ñanqaykuna",
    "nav-contact": "Ñuqanchikuykuy",
    "descripcion-empresa":
      "Ñuqanchikuykuykuna rikch'aykuykita webpi chaymi SEO de calidad.",
    "descripcion-correo": "Qhaway : info@webseopro.com",
    "descripcion-telefono": "Ñawpaq ruraq k'achay: +1 234 567 890",
    "descripcion-contacto": "Ñuqanchikuykuy",
    "descripcion-direccion": "Wasi qhapaq: Lima, Perú",
    "descripcion-derechos":
      "© 2025 Digital Solutions. Ñawpaqtaq chaymi allin ñawpaqtaq.",
  },
};

// Function to change the language
const languageButtons = document.querySelectorAll(".dropdown-item");
languageButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const lang = e.target.getAttribute("data-lang");
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[id]"); // All elements with an id
  elements.forEach((element) => {
    const key = element.id;
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
}

document.getElementById("theme-toggle").addEventListener("click", function () {
  // Cambiar el tema del body
  document.body.classList.toggle("dark-theme");

  // Cambiar el ícono de tema
  const themeIcon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = "assets/Luna.png"; // Ícono de luna para tema oscuro
  } else {
    themeIcon.src = "assets/Sol.png"; // Ícono de sol para tema claro
  }
});
