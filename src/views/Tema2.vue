<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistemas operativos
    .row.bg-c11
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-right")
              .p-4.p-lg-0.bg-c7
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0.px-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img2.png', style="width:220px" alt='').m-auto
                  .col
                    .p-4
                      p.text-white.mb-0 Un sistema operativo se constituye como un conjunto de órdenes y programas que controlan los procesos básicos de una computadora y permiten el correcto funcionamiento de los programas.
          p.mb-5(data-aos="fade-right") Para hablar de un sistema operativo, es importante recordar algunos conceptos desde la informática básica, y es que toda computadora está compuesta por dos elementos fundamentales:
          .row.justify-content-center.mb-5
            .col-md-9.col-lg-6.bg-c8(data-aos="fade-right")
              .p-4.p-lg-5
                figure.mb-4
                  img(src='@/assets/curso/tema2/img1.svg', style="width:120px" alt='').m-auto
                p.text-center.text-white #[b Componente de #[i software]]
                p.text-center.text-white.mb-0 Se refiere a todos los componentes lógicos, como son los programas o aplicaciones, los servicios que hacen posible explotar o aprovechar al máximo los recursos disponibles de una computadora, los cuales son ejecutados mediante una serie de rutinas que permiten la realización de determinadas tareas.
            .col-md-9.col-lg-6.bg-c9(data-aos="fade-left")
              .p-4.p-lg-5
                figure.mb-4
                  img(src='@/assets/curso/tema2/img2.svg', style="width:120px" alt='').m-auto
                p.text-center.text-white #[b Componente de #[i hardware]]
                p.text-center.text-white.mb-0 El #[i hardware] se refiere a todos esos componentes o elementos físicos que en su conjunto, conforman una computadora o un sistema informático.
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Entendiendo estos dos conceptos básicos de la informática, se podrían definir los sistemas operativos como un #[i software] compuesto por un conjunto de programas que administran los recursos #[i hardware], los protocolos, las comunicaciones y los demás contenidos o programas, así como la interacción con el usuario, a través de una interfaz que permite la fácil interacción entre la computadora y el usuario final. 
            .col-lg-8(data-aos="fade-left")
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width:340px" alt='').m-auto
                .col.bg-c10
                  .bloque-texto-d.color-primario.p-2
                    p En el estudio de Rafino (2000):
                    .bloque-texto-d__texto
                      i.fas.fa-quote-left
                      p Los sistemas operativos consisten en interfaces gráficas, entornos de escritorio o gestores de ventanas que brindan al usuario una representación gráfica de los procesos que se están ejecutando en la computadora. También puede ser una línea de comandos, es decir, un conjunto de instrucciones ordenado según su prioridad y que funciona en base a órdenes introducidas por el usuario.
                      i.fas.fa-quote-right
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Características de un sistema operativo
          p(data-aos="fade-right") Las características principales del sistema operativo se centran en:
    .row.bg-c12
      .col-12
        .px-5
          .row.justify-content-center(data-aos="fade-down")
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img4.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Ser el intermediario entre el usuario y el #[i hardware].
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Es necesario para el funcionamiento de todos los computadores, tabletas y teléfonos móviles.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img6.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Otorga seguridad y protege a los programas y archivos del ordenador.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Está diseñado para ser amigable con el usuario y fácil de usar.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img8.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Permite administrar de manera eficiente los recursos del ordenador.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img9.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 La mayoría requiere del pago de una licencia para su uso.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img10.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Permite interactuar con varios dispositivos.
            .col-10.col-md-6.col-lg-3.mb-4
              .p-4.bg-c13.h-100.shadow
                figure.mb-4
                  img(src='@/assets/curso/tema2/img11.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Es progresivo, debido a que existen constantemente nuevas versiones que se actualizan y adaptan a las necesidades del usuario.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Tipos de sistemas operativos
    p.mb-5(data-aos="fade-right") Los sistemas operativos se pueden clasificar de varias maneras (Rufino, 2000):
    TabsC.color-acento-botones(data-aos="fade-left")
      .py-3.py-md-4(titulo="Según el usuario")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width:450px" alt='').m-auto
          .col-lg-6
            p #[b Según el usuario]
            ul.lista-ul
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Multiusuario:] sistema operativo que permite que varios usuarios ejecuten simultáneamente sus programas.
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Monousuario:] sistema operativo que solamente permite ejecutar los programas de un usuario a la vez.
      .py-3.py-md-4(titulo="Según la gestión de tareas")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width:450px" alt='').m-auto
          .col-lg-6
            p #[b Según la gestión de tareas]
            ul.lista-ul
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Monotarea:] sistema operativo que solamente permite ejecutar un proceso a la vez.
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Multitarea:] sistema operativo que puede ejecutar varios procesos al mismo tiempo.
      .py-3.py-md-4(titulo="Según la gestión de recursos")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width:450px" alt='').m-auto
          .col-lg-6
            p #[b Según la gestión de recursos]
            ul.lista-ul
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Centralizado:] sistema operativo que solo permite utilizar los recursos de un solo ordenador.
              li.d-flex
                i.fas.fa-code(style="color:#8722E2")
                |
                p.mb-0 #[b Distribuido:] sistema operativo que permite ejecutar los procesos de más de un ordenador al mismo tiempo.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Sistemas operativos tipo cliente
    p.mb-5(data-aos="fade-right") Son aquellos sistemas operativos que se utilizan en los dispositivos, desde los cuales se accede a los servicios y aplicaciones que son ofrecidos por los servidores, de los más populares se encuentran las computadoras, tabletas o dispositivos móviles, para lo cual tenemos los siguientes ejemplos:
    .row.bg-c14.mb-5
      .col-12
        .px-5
          TabsB.color-acento-botones(data-aos="fade-down")
            .p-4.p-lg-5(titulo="Microsoft Windows" :icono="require('@/assets/curso/tema2/img12.svg')")
              .row.justify-content-center
                .col-lg-7.order-2.order-lg-1
                  p #[b Microsoft Windows]
                  p De los más populares que existen, no solo por uso en el hogar sino a nivel corporativo o empresarial, se trata de un conjunto de distribuciones o entornos operativos gráficos basados en un estándar llamado WIMP (#[i Windows Icon Mouse Pointer]), siendo esta su principal característica, porque funciona a partir de una interfaz gráfica basada en ventanas y el uso del #[i mouse], quien a través de un puntero, permite la ejecución de las tareas. Entre las distribuciones de este sistema operativo más populares en los últimos años, debido a que en su evolución y desarrollo han existido muchas otras, se tiene:
                  ol.lista-ol--cuadro
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 1.
                      | Windows XP
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 2.
                      | Windows Vista
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 3.
                      | Windows 7
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 4.
                      | Windows 8
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 5.
                      | Windows 10
                .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/tema2/img8.png', style="width:330px" alt='').m-auto
            .p-4.p-lg-5(titulo="Mac OS" :icono="require('@/assets/curso/tema2/img13.svg')")
              .row.justify-content-center
                .col-lg-7.order-2.order-lg-1
                  p #[b Mac OS]
                  p Es el sistema operativo de los computadores Macintosh de Apple, también conocido como OSX o Mac OSX. Basado en Unix, desarrollado y vendido en computadores Apple desde 2002, este es un sistema operativo muy popular entre los desarrolladores de #[i software], de videojuegos y de aplicaciones móviles.
                .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/tema2/img9.png', style="width:430px" alt='').m-auto
            .p-4.p-lg-5(titulo="Android" :icono="require('@/assets/curso/tema2/img14.svg')")
              .row.justify-content-center
                .col-lg-7.order-2.order-lg-1
                  p #[b Android]
                  p Este sistema operativo basado en el núcleo Linux de código abierto, opera en teléfonos celulares, tabletas y otros artefactos dotados de pantalla táctil, como teléfonos inteligentes, tabletas, relojes inteligentes, automóviles y televisores.
                .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/tema2/img10.png', style="width:430px" alt='').m-auto
            .p-4.p-lg-5(titulo="iOS" :icono="require('@/assets/curso/tema2/img15.svg')")
              .row.justify-content-center
                .col-lg-7.order-2.order-lg-1
                  p #[b iOS]
                  p Es el sistema operativo móvil creado por Apple Inc; este sistema operativo fue diseñado y construido inicialmente para el iPhone (teléfono inteligente propio de Apple), sin embargo, en los últimos años ha sido empleado por su fabricante en otros dispositivos como el iPad, iPod y diferentes elementos como relojes y otros.
                .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/tema2/img11.png', style="width:430px" alt='').m-auto
            .p-4.p-lg-5(titulo="Linux" :icono="require('@/assets/curso/tema2/img16.svg')")
              .row.justify-content-center
                .col-lg-7.order-2.order-lg-1
                  p #[b Linux]
                  p Es un sistema operativo libre y gratuito. Si bien este sistema operativo no es tan popular a nivel de usuario final en sus computadoras cliente, en los últimos años a nivel de desarrolladores de #[i software] y personal de seguridad o infraestructura de TI usan con mayor frecuencia distribuciones y versiones de Linux construidas bajo la filosofía de ser usadas por usuario final, sin embargo, Linux como tal es un sistema operativo que por sus características tiene la posibilidad de funcionar, sea como cliente entregando unas distribuciones con interfaces muy intuitivas y de fácil utilización o como servidor según se requiera. Dentro de las distribuciones más populares a nivel de cliente, se encuentran: 
                  ol.lista-ol--cuadro
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 1.
                      | Ubuntu
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 2.
                      | Fedora
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 3.
                      | Mint
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 4.
                      | Debian
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 5.
                      | Opensuse
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 6.
                      | Scientific Linux
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 7.
                      | Elementary OS
                .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/tema2/img12.png', style="width:300px" alt='').m-auto
          Separador
          #t_2_4
          .titulo-segundo.color-acento-contenido
            h2 2.4 Sistemas operativos de red
          .row.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Los sistemas operativos de red son aquellos que permiten la interconexión de diferentes computadoras que ofician como clientes, quienes acceden a los recursos o servicios ofrecidos o compartidos por el servidor, requieren estar conectados a redes de computadoras, por eso son conocidos como NOS (#[i Network Operating Systems]).
            .col-lg-8(data-aos="fade-left")
              .row.justify-content-center
                .col-10.col-lg-auto.px-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img13.png', style="width:300px" alt='').m-auto
                .col-10.col-lg.bg-c15
                  .p-4
                    p.mb-0 Estos sistemas operativos se mantienen conectados o unidos a dos o más dispositivos, a través de algún medio de comunicación físico o no (medios de transmisión guiados o no guiados), con el propósito de poder compartir los recursos, sean #[i hardware] o #[i software] dispuestos en él.
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img17.svg', style="width:500px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p Las características de los sistemas operativos de red suelen estar asociadas con tres aspectos principales:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-code(style="color:#8722E2")
                  |
                  p.mb-0 La administración de usuarios.
                li.d-flex
                  i.fas.fa-code(style="color:#8722E2")
                  |
                  p.mb-0 El mantenimiento del sistema.
                li.d-flex
                  i.fas.fa-code(style="color:#8722E2")
                  |
                  p.mb-0 Las funciones de administración de recursos.
              p.mb-0 Esto incluye, entre otros:
          .row.justify-content-center.mb-5(data-aos="fade-up")
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img18.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Soporte básico para sistemas operativos como protocolo y procesador, detección de #[i hardware] y multiprocesamiento.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img19.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Impresora y uso compartido de aplicaciones.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img20.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Sistema de archivos común y uso compartido de bases de datos.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Capacidades de seguridad de red, tales como autenticación de usuario y control de acceso.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img22.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Administración de directorios.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img23.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Copia de seguridad y servicios web.
            .col-8.col-md-6.col-lg-3.mb-4
              .p-4.bg-c16.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img24.svg', style="width:50px" alt='').m-auto
                p.text-center.mb-0 Trabajo en red.
          p.mb-0(data-aos="fade-right") En los sistemas operativos de red, al igual que los sistemas operativos tipo cliente, existen diferentes versiones y distribuciones, dentro de las cuales se destacan las siguientes:
    .row.bg-c18
      .col-12
        .px-5
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c17
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema2/img25.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Windows Server
          .row.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Sistema operativo de uso privativo desarrollado por Microsoft, existen diferentes versiones y distribuciones diseñadas por el fabricante específicamente según su funcionalidad, si bien existen muchas otras versiones, se relacionarán solo las de los últimos años que, en su evolución y desarrollo, se han utilizado:
              .row.justify-content-center.mb-0.mb-lg-4
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2000
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2003
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2008
              .row.justify-content-center.mb-4
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2012
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2016
                .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c13.shadow
                    p.text-center.mb-0 Windows Server 2019
              .row
                .col-12
                  .p-3.bg-c16
                    .row
                      .col-md-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img26.svg', style="width:70px" alt='').m-auto
                      .col
                        p.mb-0 Todas las versiones y distribuciones antes mencionadas obedecen a un nivel de funcionalidad que puede ser desplegado en estos sistemas operativos, es importante mencionar que este sistema operativo es de tipo propietario o de uso restringido y que para su uso se requiere del pago de una licencia, la cual dependerá del número de clientes que se van a conectar al servidor, del tipo de #[i hardware] sobre el cual será instalado, como número de procesadores, capacidad de memoria RAM y si estará desplegado en una máquina o servidor físico o virtual, todas estas son variables que influyen directamente en el costo de la licencia.  
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img15.png', style="width:350px" alt='').m-auto
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c17
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema2/img25.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Linux
    p.mb-4(data-aos="fade-right") Es un sistema operativo multipropósito, dentro de sus principales características se pueden mencionar las siguientes (Adeva, 2021):
    .row.mb-0.mb-lg-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img16.png', style="width:350px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Gratis")
            .col-12
              p.mb-0 Linux es un sistema operativo gratuito y existe en el mercado gran cantidad de distribuciones enfocadas a diferentes tipos de usuarios, por lo que es fácil encontrar una solución que se acomode a cada una de las necesidades.
          .row(titulo="Código abierto")
            .col-12
              p.mb-0 El código fuente está liberado para que cualquiera pueda desarrollar nuevas capacidades y adaptarlo a sus propias necesidades.
          .row(titulo="Seguro")
            .col-12
              p.mb-0 La seguridad es uno de los elementos más destacables de Linux, si bien no se puede afirmar que es 100 % seguro, tiene algunas características clave, entre las que se relacionan las siguientes: contiene una arquitectura para el manejo de archivos, procesos y memoria, que no permite fácilmente la permanencia de virus o #[i malware] y es un sistema operativo personalizable, por lo que se puede permitir el uso de diferentes interfaces para su manipulación y no se limita a una única interfaz.
          .row(titulo="Multitarea")
            .col-12
              p.mb-0 Al igual que otros sistemas operativos presentes en el mercado actual, Linux permite el trabajo con múltiples aplicaciones al tiempo, como por ejemplo, navegar en Internet, mientras se tienen abiertas herramientas de procesamiento de texto, escuchar música, recibir notificaciones de correo electrónico entre otros. Sin embargo, se debe tener en cuenta que al no ser uno de los sistemas operativos más ampliamente utilizado por clientes tradicionales, existen limitantes respecto al tipo de aplicaciones disponibles.
          .row(titulo="Multiusuario")
            .col-12
              p.mb-0 Linux permite que múltiples usuarios se puedan conectar y acceder a los recursos de forma simultánea y segura.
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Personalizable")
            .col-12
              p.mb-0 El sistema operativo puede ser personalizado, para ser usado de acuerdo con las necesidades específicas de los clientes, por esta razón, es que se encuentran gran cantidad de distribuciones en el mercado.
          .row(titulo="Alto control de dispositivos")
            .col-12
              p.mb-0 Este sistema operativo permite la gestión individual de cada dispositivo de la máquina por medio de sus respectivos controladores, lo anterior permite un mayor control e independencia y la posibilidad de realizar actualizaciones y correcciones sobre elementos específicos del sistema.
          .row(titulo="Independiente")
            .col-12
              p.mb-0 Linux al ser un sistema operativo libre y de código abierto, permite que sobre él se puedan realizar modificaciones, ampliar su capacidad y distribuir nuevamente, sin necesidad de autorización por parte de terceros.
          .row(titulo="Estable")
            .col-12
              p.mb-0 Linux es uno de los sistemas operativos considerados más robustos y estables, por lo cual es muy común encontrar este tipo de sistemas en equipos de tipo servidor, donde se requiere disponibilidad de servicios muy cercanos al 100 % y donde las fallas no son toleradas.
          .row(titulo="Escalable")
            .col-12
              p.mb-0 Gracias a la posibilidad de personalización y alto control sobre los dispositivos en las características antes mencionadas, es posible que este tipo de sistemas se pueda adaptar a las nuevas necesidades de crecimiento y de funcionamiento que requieren los sistemas informáticos actuales, conservando altos estándares de calidad.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img27.svg', style="width:300px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Linux, al igual que todos los sistemas operativos, tiene una variedad de distribuciones que no dependen de un solo fabricante sino de diferentes empresas que toman el #[i kernel] del Linux y desarrollan sus propias distribuciones. Dentro de las populares a nivel de servidor se encuentran (Fm, 2021):
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.justify-content-center
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux CenOS
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux RedHat
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux Debian
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux Open Suse
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux Ubuntu Server
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Linux Oracle Linux
          .col-8.col-md-6.col-lg-3.mb-4
            .p-4.bg-c19.h-100
              p.text-center.mb-0 Fedora Linux Server 
      .col-lg-4(data-aos="fade-left")
        .row
          .col-12
            .p-3.bg-c6
              .row
                .col-md-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img28.svg', style="width:70px" alt='').m-auto
                .col
                  p.mb-0 Entre otras más que han sido personalizadas para una serie de funcionalidades muy particulares, solo por mencionar algunas como el scientific Linux, Cloud Linux, ClearOS Linux.
    .row
      .col-12(data-aos="fade-right")
        .p-4.ps-lg-0.pb-lg-0.pt-lg-4.pe-lg-4.bg-c7
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img29.svg', style="width:270px" alt='').m-auto
            .col
              p #[b.txt-c1 MacOS Server]
              p.text-white.mb-0 Este es un sistema operativo basado en UNIX/LINUX, desarrollado por Apple, es una versión de sistema operativo muy similar al MacOS de escritorio o de tipo cliente, se diferencia en que esta versión incluye funcionalidades o herramientas administrativas de tipo gráfico para la gestión y administración de usuarios, red y servicios como LDAP, MAIL, SAMBA, DNS, entre otros servicios.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
