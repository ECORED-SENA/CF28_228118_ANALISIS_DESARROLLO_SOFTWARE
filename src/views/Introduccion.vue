<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.mb-5
            .col-12
              .p-4.bg-c2
                .row.align-items-center
                  .col-lg-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/intro/img3.png', style="width:320px" alt='').m-auto
                  .col(data-aos="fade-left")
                    p.mb-0 En este componente formativo, se estudiarán los principios básicos de los sistemas operativos de red (NOS) y su funcionamiento e importancia en un sistema cliente servidor, los cuales son los fundamentos sobre los que se planea y ejecuta un proceso de despliegue de servicios. Con el desarrollo de este componente formativo, se podrán identificar las características de los sistemas operativos, tipos de sistemas operativos y licenciamiento.
          .row
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Se hará un recorrido por la definición y sus generalidades, para conocer el sistema de cliente/servidor, esto permitirá comprender sus diferentes componentes y situarlos en la arquitectura, con el fin de reconocer las características e identificar las similitudes y diferencias; de esta misma forma se llegará a los sistemas operativos, para identificar desde el software y hardware, el conjunto de programas que lo conforman. Posteriormente, se reconocerá el licenciamiento de software a nivel de sistemas operativos (Windows, Linux y MacOS) y se finalizará con las aplicaciones y servicios que permiten la implantación de un sistema o aplicación. 
              p.mb-0 #[b.txt-c1 Le deseamos muchos éxitos en este proceso de aprendizaje.]
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img4.png', style="width:520px" alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
