<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Aplicaciones y servicios
    .row.bg-c22
      .col-12
        .p-5
          .row.align-items-center.mb-5
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema4/img1.svg', style="width:70px" alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 En términos generales, son todos aquellos servicios que pueden ser desplegados o configurados en un servidor, utilizando para esto un sistema operativo de red, el cual dependerá del tipo de sistema operativo que será utilizado y del nivel de licenciamiento con que se cuente, sin embargo, se mencionan algunos de los servicios más utilizados en un modelo cliente servidor:
          .row.mb-5
            .col-12.bg-c23
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema4/img2.png', style="width:350px" alt='').m-auto
                .col-lg-8(data-aos="fade-left")
                  .p-4
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span a.
                        |
                        p.mb-0 #[b DNS:] servidor de nombres de dominio (hace la función y traduce nombres de dominio a direcciones IP y viceversa).
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span b.
                        |
                        p.mb-0 #[b DHCP:] protocolo de asignación automática de direcciones IP.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span c.
                        |
                        p.mb-0 #[b Web:] servidor que provee el servicio para publicar o alojar desarrollos de tipo web.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span d.
                        |
                        p.mb-0 #[b Base de datos:] servidores que permiten el almacenamiento, procesamiento y gestión de los datos.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span e.
                        |
                        p.mb-0 #[b Archivos:] permite compartir el acceso a directorios y archivos compartidos entre los diferentes usuarios de la organización.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span f.
                        |
                        p.mb-0 #[b Directorio:] servicio de directorio que permite administrar y gestionar los recursos de la red, como usuarios, autenticación, permisos, roles y acceso a los recursos compartidos.
          .row
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c13.shadow
                p.mb-0 Los servicios para implementar son de suma importancia al momento de planear el despliegue o implantación de un sistema o aplicación, por lo que deben ser parte fundamental en el levantamiento de los requerimientos al inicio de todo proyecto de desarrollo de #[i software] o implementación de servicios previos durante el desarrollo, pruebas y puesta en producción de servicios y aplicaciones.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img4.png', style="width:450px" alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
