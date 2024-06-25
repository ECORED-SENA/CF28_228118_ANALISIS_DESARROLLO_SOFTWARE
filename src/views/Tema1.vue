<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Sistemas y arquitectura cliente/servidor
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:320px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-3
          .col-12
            .p-1.bg-c3
              .bloque-texto-d.color-secundario.p-4
                .bloque-texto-d__texto.mb-3
                  i.fas.fa-quote-left
                  p El sistema cliente/servidor, es un modelo de aplicación distribuida, en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Las aplicaciones clientes realizan peticiones a una o varias aplicaciones servidores, que deben encontrarse en ejecución, para atender dichas demandas.
                  i.fas.fa-quote-right
                .bloque-texto-d__autor 
                  p.mb-0 (Marini, 2012).
        p Cuando se habla de sistemas cliente/servidor desde el punto de vista tecnológico o informático, se pueden especificar claramente dos componentes:
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Servidor")
            .col-12
              p.mb-0 Es una computadora bastante potente, con #[i hardware] y #[i software] especializado, además, dispuesta para atender y dar respuesta a las peticiones o solicitudes que hacen las otras computadoras, quienes acceden a los recursos o servicios ofrecidos por el servidor, es decir, están al servicio de otras computadoras. Los servidores se utilizan para gestionar los recursos de una red.
          .row(titulo="Cliente")
            .col-12
              p.mb-0 Son las computadoras quienes acceden a los servidores, haciendo peticiones y solicitudes de acceso a recursos y servicios alojados o dispuestos en los servidores.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Componentes de una arquitectura cliente/servidor
    p.mb-5(data-aos="fade-right") Este sistema tiene definido una serie de componentes que permiten entender de mejor manera su concepto y articulación, los cuales hacen parte integral de su arquitectura.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] Componentes de arquitectura cliente/servidor
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img1.svg', style="width:1050px" alt='Imagen que presenta un diagrama de los componentes de arquitectura cliente/servidor.').m-auto
    p.mb-5 Ampliemos la información sobre cada uno de estos componentes:
    .row.bg-c5
      .col-12
        .px-5
          .row.mb-5
            .col-12
              .p-4.p-lg-5.bg-c4(data-aos="fade-up")
                SlyderF(columnas="col-lg-6 col-xl-4")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
                    p.text-center #[b Red]
                    p.text-center.mb-0 Conjunto de dispositivos interconectados de una manera física o no física entre sí, con el propósito de poder compartir recursos e información.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                    p.text-center #[b Servidor]
                    p.text-center.mb-0 Hace referencia a un proveedor de servicios, este servidor a su vez puede ser un ordenador o una aplicación informática, la cual envía información a los demás usuarios o dispositivos de la red.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
                    p.text-center #[b Cliente]
                    p.text-center.mb-0 Se refiere a un demandante de servicios, es un dispositivo que envía las peticiones y solicitudes al servidor, este cliente puede ser un ordenador como también una aplicación, la cual requiere información proveniente de la red para funcionar.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
                    p.text-center #[b Protocolo]
                    p.text-center.mb-0 Normas y pasos establecidos sobre el flujo de información en una red, permite que todos los dispositivos interconectados manejen el mismo lenguaje, para establecer las comunicaciones entre un cliente y un servidor al momento de solicitar un recurso o servicio.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
                    p.text-center #[b Servicios]
                    p.text-center.mb-0 Es un conjunto de información que busca responder las necesidades de un cliente, estos pueden ser de diferentes tipos como mensajes, música, #[i software], bases de datos, videos, entre otros.
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Una máquina cliente, como un servidor, se refieren a computadoras que son usadas para diferentes propósitos.  
              p El cliente es un computador pequeño con una estructura igual a la que se tiene en oficinas u hogares, y accede a un servidor o a los servicios que este ofrece a través de Internet o una red interna (LAN). Un claro ejemplo de este caso es la forma en que trabaja una empresa con diferentes computadores, donde cada uno de ellos se conecta a un servidor para poder obtener archivos de una base de datos o servicios, ya sean correos electrónicos o aplicaciones.
              .row
                .col-auto.d-none.d-md-block
                  figure.mt-1
                    img(src='@/assets/curso/tema1/img7.svg', style="width:80px" alt='').m-auto
                .col
                  p.mb-0 El servidor, al igual que el cliente, es una computadora, pero con la diferencia de que tiene una gran capacidad que le permite almacenar gran cantidad de diversos archivos, o correr varias aplicaciones en simultáneo, para así nosotros los clientes podamos acceder los servicios.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img4.png', style="width:490px" alt='').m-auto
          .row.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="width:300px" alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              .row.mb-3
                .col-12
                  .p-3.bg-c6
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema1/img9.svg', style="width:80px" alt='').m-auto
                      .col
                        p.mb-0 En la actualidad existen varios tipos de servidores. Los mismos pueden contener y ejecutar aplicaciones, sitios web, almacenaje de archivos, diversas bases de datos, entre muchos más. Es importante mencionar que un cliente también puede tener una función de servidor, porque él mismo puede almacenar datos en su disco duro para luego ser usados, en lugar de conectarse al servidor continuamente por una acción que quizás sea muy sencilla.
              p.mb-0 Estas son las características que desde lo funcional permiten identificar sus diferencias, pero se debe aclarar que desde su estructura o arquitectura, existen diferencias muy significativas en cuanto al sistema operativo que utilizan tanto el cliente como el servidor, y para hablar de estos aspectos, se debe definir el sistema operativo.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
