<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Licenciamiento de #[i software] a nivel de sistemas operativos
    .row.bg-c20
      .col-12
        .p-5
          .row.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Es importante iniciar este punto, mencionando que en Colombia existe una normatividad que regula el licenciamiento y se encuentra en la Ley 603 de 2000, llamada en algunos casos como Ley de licencias de #[i software] o Ley para cumplimiento de las licencias de #[i software].
            .col-lg-8(data-aos="fade-left")
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img1.png', style="width:300px" alt='').m-auto
                .col.bg-c10
                  .p-4
                    p.mb-0 Una licencia de #[i software] es el equivalente a un contrato, donde se pueden encontrar las condiciones que se establecen entre las partes para el uso de este, entre los elementos descritos en este contrato se especifica el proceso de instalación, la reproducción, el proceso de copia, el uso que se debe hacer del #[i software] y las limitantes. (Zuta, 2021)
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width:400px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p Normalmente, la licencia de #[i software] se especifica en el momento previo de la instalación o descarga del mismo y deberá de forma explícita, indicar si acepta o no los términos y condiciones establecidas en la licencia.
              .row
                .col-auto.d-none.d-md-block
                  figure.mt-2
                    img(src='@/assets/curso/tema3/img2.svg', style="width:80px" alt='').m-auto
                .col
                  p.mb-0 En este aspecto, es importante centrarse en los tipos de licencias que tienen los sistemas operativos y su tipo de uso restrictivo como Windows y MacOS y a los libres como lo es Linux, por ello, se ampliará la información sobre estos tres sistemas operativos, porque son los más utilizados o populares en el proceso de despliegue e implantación de servicios. 
          Separador
          #t_3_1
          .titulo-segundo.color-acento-contenido
            h2 3.1 Licencias de Windows
          .row.align-items-center.mb-4(data-aos="fade-right")
            .col-auto
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width:80px" alt='').m-auto
            .col
              p.mb-0 Windows es un sistema operativo que tiene diferentes tipos de licencias de tipo propietario. Un #[i software] propietario es aquel sobre el que rigen ciertas restricciones y prohibiciones determinadas por sus propietarios, entre las que se encuentran la copia y la redistribución o modificación, y para hacer uso de estas acciones se debe solicitar permiso o pagar.
          p.mb-0(data-aos="fade-left") En el caso de Microsoft, este posee cuatro tipos de licencias básicas que se pueden adquirir, estas son:
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="OEM")
            p #[b OEM]
            p.mb-0 Son las licencias que vienen preinstaladas en las computadoras que se adquieren en las tiendas de computadoras o a través de cualquier sitio web de comercialización de equipos de cómputo. Tiene como desventaja que este tipo de licencia solo puede ser utilizada de manera exclusiva en el equipo que se adquirió y tiene algunas limitantes en la funcionalidad, sobre todo en los servicios de red.
          .tarjeta.color-acento-botones.p-4(titulo="RITAIL")
            p #[b RITAIL]
            p.mb-0 Son licencias que se adquieren, sean físicas en un medio como CD o DVD o en forma digital descargando un archivo ISO; se adquieren para el usuario final en tiendas de computadoras o en sitios web, tienen como característica fundamental, que puede ser utilizada e instalada en cualquier equipo sin problema, es decir, que no está condicionada a un solo equipo como el caso de la OEM.
          .tarjeta.color-acento-botones.p-4(titulo="OEMBOX")
            p #[b OEMBOX]
            p.mb-0 Son licencias que se adquieren en medio físico, traen un CD o DVD de instalación y adjunto un holograma adhesivo. Este tipo de licencia permite una sola instalación y no permite cambios en el #[i hardware] del equipo donde se instaló.
          .tarjeta.color-acento-botones.p-4(titulo="Volumen")
            p #[b Volumen]
            p.mb-0  La licencia Microsoft de #[i software] por volumen, permite ejecutar el #[i software] en múltiples ordenadores dentro de una misma empresa, de forma sencilla y accesible por múltiples usuarios.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.svg', style="width:300px" alt='').m-auto
    p.mb-4(data-aos="fade-right") Es importante mencionar que por cada tipo de licencia existen ya diferentes versiones de sistema operativo, no solo desde el lado del cliente, sino del lado del servidor, como se mencionó con anterioridad, por ejemplo, se encuentran licencias de tipo Home, PRO, Pro for Workstation, Professional, entre otros.
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width:500px" alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p En el caso de las licencias de tipo servidor, existen otras variables que se deben considerar a nivel del licenciamiento, entre las cuales se encuentran:
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1.
            | Arquitectura del servidor (X86, aarch64, armhfp, ppc64le power9, i386, entre otras).
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2.
            | Número de procesadores.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3.
            | Cantidad de memoria RAM.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4.
            | Servicios que soportará.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5.
            | Tipo de instalación si se hará en servidor físico o virtualizado.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Licenciamiento en Linux
    .row.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img5.svg', style="width:300px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p.mb-0 Linux es un sistema operativo diseñado y desarrollado por gran cantidad de desarrolladores en el mundo y se distribuye bajo la Licencia Pública General GNU (GPL), lo que garantiza que los usuarios tengan la libertad de usarlo, distribuirlo y/o modificarlo. Al ser desarrollado por una comunidad de personas alrededor del mundo, quienes hacen sus aportes al crecimiento y evolución del sistema operativo, ha permitido múltiples variables de Linux, lo que ha llevado a la generación de varios tipos de licencia, como son:
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="GPL")
            .col-12
              p.mb-0 La licencia GNU GPL (GNU #[i General Public License] en español Licencia Pública General de GNU) es una licencia de #[i software] en la cual puedes hacer uso e instalar sin limitaciones, se puede modificar el #[i software] y distribuirlo con o sin las modificaciones realizadas de forma gratuita o no siempre que el código fuente se siga entregando para ser leído (#[i Free Software Foundation], 2021).
          .row(titulo="BSD")
            .col-12
              p.mb-0 La licencia BSD permite mantener la protección de derechos de autor para requerir la atribución de autoría en trabajo derivados y para la renuncia de la garantía, lo anterior permite la libre redistribución y modificación y también permite el uso del código fuente en #[i software] no libre, Es decir es una licencia de baja restricción para #[i software] de código abierto que no impone requisitos de redistribución (#[i Open source initiative], 2021).
          .row(titulo="DFSG")
            .col-12
              p.mb-0 Se le conoce como #[i Debian Free Software Guideline] al contrato realizado entre la comunidad de usuarios de #[i software] libre y Debian, Este tipo de licencia contiene criterios para la distribución y exigencias referentes a la publicación del código fuente. entre las exigencias podemos encontrar: (i) distribución 100% libre, (ii) DFSG: Se le conoce como #[i Debian Free Software Guideline] al contrato realizado entre la comunidad de usuarios de #[i software] libre y Debian, Este tipo de licencia contiene criterios para la distribución y exigencias referentes a la publicación del código fuente. entre las exigencias podemos encontrar: (i) distribución 100% libre, (ii) código fuente debe ser incluido en el proceso de redistribución para contribuir a la comunidad de #[i software] libre, (iii) La licencia permite modificación y trabajo derivado pero estos se deben redistribuir con la licencia original, (iv) la licencia puede restringir la distribución del código fuente en forma modificada sólo si la licencia permite distribución de parches para modificar el código fuente original del programa en el momento de compilarlo, (v) no debe existir discriminación sobre personas o grupos de personas ni sobre el uso que le den al #[i software], (vi) los derechos otorgados no dependen del sitio de distribución y (vii) la licencia no puede afectar otros programas que se distribuyan junto con el programa bajo esta licencia (Debian, 2021).
          .row(titulo="X.org")
            .col-12
              p.mb-0 Proyecto desarrollado por la fundación X.org en conjunto freedesktop.org sin ánimo de lucro y proporciona implementaciones de código abierto del sistema X Windows para fines educativos. 
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width:380px" alt='').m-auto
    p.mb-0(data-aos="fade-right") Si bien estas licencias son tan solo algunas, pueden existir múltiples variables de los licenciamientos que pueden obtenerse al adquirir licencias de tipo Linux, por lo que se recomienda al aprendiz profundizar en la lectura de esta temática, con el fin de lograr tener una visión más amplia de todo el tema del licenciamiento de #[i software] en general.
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Licenciamiento MacOS
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Apple realmente no tiene un solo tipo de licencia, estas varían según la versión o distribución mediante diferentes tipos de licencia de código abierto como GPL, BSD, MIT o APSL (#[i Apple Public Source License]), permitiendo a desarrolladores y estudiantes acceder a su código fuente para aprender de él, enviar sugerencias o realizar modificaciones.
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img5.png', style="width:300px" alt='').m-auto
          .col.bg-c21
            .p-4
              p.mb-0 Sin embargo, uno de los más utilizados son de tipo EULA que significa Acuerdo de Licencia de Usuario Final, el cual es un contrato celebrado entre una organización o entidad desarrolladora o vendedor y el usuario de #[i software], Apple tiene distintos tipos de licencias que pueden ser consultadas según el producto adquirido.
    .row
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img6.svg', style="width:400px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para conocer los diferentes tipos de contratos y licencias de #[i software] MacOS, lo invitamos a visitar el siguiente enlace:
        .row
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://www.apple.com/mx/legal/sla/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. Contratos de licencia de #[i software]

</template>

<script>
export default {
  name: 'Tema3',
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
