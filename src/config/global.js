export default {
  global: {
    componenteFormativo: 'Sistemas operativos de red',
    descripcionCurso:
      'El despliegue e implantación de sistemas, requiere una serie de componentes de infraestructura y plataforma tecnológica, dentro de los cuales se encuentran los sistemas operativos, quienes en un entorno cliente-servidor, tienen la responsabilidad de alojar las aplicaciones y servicios que estarán dispuestos para el acceso desde los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas y arquitectura cliente/servidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de una arquitectura cliente/servidor',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de un sistema operativo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de sistemas operativos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sistemas operativos tipo cliente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistemas operativos de red',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Licenciamiento de <i>software</i> a nivel de sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Licencias de Windows',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Licenciamiento en Linux',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Licenciamiento MacOS',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicaciones y servicios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF28_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas operativos de red',
      referencia:
        'Morales Lagunas, B. J. (2019). <i>Sistemas operativos de red (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=js6LhkIx2oo&feature=youtu.be',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'son las computadoras que acceden a los servidores, haciendo peticiones y solicitudes de acceso a recursos y servicios alojados o dispuestos en los servidores.',
    },
    {
      termino: 'DHCP',
      significado: 'protocolo de configuración dinámica de <i>host</i>.',
    },
    {
      termino: 'DNS',
      significado: 'servidor de nombres de dominio.',
    },
    {
      termino: 'GPL',
      significado:
        'licencia pública general de GNU o más conocida por su nombre en inglés, GPL.',
    },
    {
      termino: 'GNU',
      significado: '<i>General Public License.</i>',
    },
    {
      termino: 'NOS',
      significado:
        '<i>Network Operating Systems</i> (sistemas operativos de red).',
    },
    {
      termino: 'Servidor',
      significado:
        'es una computadora con potente <i>hardware</i> y <i>software</i> especializado y dispuesto para atender y dar respuesta a las peticiones o solicitudes que hacen las otras computadoras, las cuales acceden a los recursos o servicios ofrecidos por el servidor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adeva, R. (2021, 4 febrero). Todo sobre Linux, el sistema operativo de código abierto. ADSLZone. ',
      link: 'https://www.adslzone.net/reportajes/software/que-es-linux/',
    },
    {
      referencia: 'Apple, (s.f). Disponible en: ',
      link: 'https://www.apple.com/mx/legal/sla/',
    },
    {
      referencia:
        'Carretero Pérez, J., De Miguel Anasagasti, P., García Carballeira, F., & Pérez Costoya, F. (2001). Sistemas Operativos. Una Visión Aplicada. Mac Graw Hill. ',
      link: '',
    },
    {
      referencia:
        'Debian. (s. f.). Debian -- Contrato social de Debian. https://www.debian.org. Recuperado 31 de mayo de 2021, de. ',
      link: 'https://www.debian.org/social_contract.es.html',
    },
    {
      referencia:
        'Fm, Y. (2021, 30 marzo). 31 distribuciones Linux para elegir bien la que más necesitas. Genbeta. ',
      link:
        'https://www.genbeta.com/linux/31-distribuciones-linux-para-elegir-bien-que-necesitas-1',
    },
    {
      referencia:
        'Free Software Foundation. (s. f.). Licencias - Proyecto GNU - Free Software Foundation. El sistema operativo GNU. Recuperado 31 de mayo de 2021, de. ',
      link: 'https://www.gnu.org/licenses/licenses.es.html',
    },
    {
      referencia:
        'Naty, L. (2004). Sistemas operativos. Instituto Tecnológico Superior de Acayucan. ',
      link: '',
    },
    {
      referencia:
        'Open source initiative. (s. f.). The 3-Clause BSD License | Open Source Initiative. Opensource.Org. Recuperado 31 de mayo de 2021, de. ',
      link: 'https://opensource.org/licenses/BSD-3-Clause',
    },
    {
      referencia:
        'Rafino, M. S. (2000, 23 septiembre). Sistemas Operativos, de. ',
      link: 'https://concepto.de/sistema-operativo/',
    },
    {
      referencia:
        'Rodríguez Ramírez, A. M., & Obando Ortiz, F. R. (2005). Análisis comparativo de sistemas operativos de red (Bachelor"s thesis, QUITO/PUCE/2005). ',
      link: '',
    },
    {
      referencia:
        'Sistemas, S. (2016, 24 octubre). Tipos de licencia en Windows. Solvetic. ',
      link:
        'https://www.solvetic.com/page/recopilaciones/s/profesionales/tipos-de-licencias-windows-oem-retail-volumen',
    },
    {
      referencia: 'Sotés, J. D. OTROS SISTEMAS OPERATIVOS EN RED. ',
      link: '',
    },
    {
      referencia:
        'Stallings, W., Aguilar, L. J., Dodero, J. M., Torres, E., & Mora, M. K. (1997). Sistemas operativos (Vol. 732). Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'Zuta, J. A. (2011). Tipos de licencias para software - Monografias.com. Monografias.com. ',
      link:
        'https://www.monografias.com/trabajos88/tipos-licencias-software/tipos-licencias-software.shtml',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
