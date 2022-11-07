<template >

  <section class="src-componentes-inicio">
    <div class="jumbotron">
    <H4>Proyecto TP 7 </H4><hr>
    <P>1) Un formulario basado en vue-form que contenga 3 campos: nombre, edad y
mail. Este debe tener validaciones mediante carteles de: campos requeridos,
nombre entre 3 y 15 caracteres, edad entre 18 y 120 años e email válido. Los datos
deben ser enviados a un recurso creado en mockapi.io
    </P>
    <p>
      2) Realizar un componente que muestre los usuarios agregados a mockapi.io. En
el caso de no haber ninguno, represente un cartel tipo alert avisando que no hay
usuarios disponibles.
    </p><br>
   <p>Agustin Ortega</p>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-inicio',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-inicio {

  }
</style>
