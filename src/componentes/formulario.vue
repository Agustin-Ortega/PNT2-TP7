<template >

  <section class="src-componentes-formulario">
    <div class="jumbotron">

      <div id="jumbotron2" class="jumbotron">
        <h1 align="center">Ingreso de Usuarios en Mock Api</h1>
        <hr><br>
        <div id="jumbotron3" class="jumbotron">

          <vue-form :state="formState" @submit.prevent="enviar()">

            <validate tag="div">

              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" class="form-control" autocomplete="off" v-model.trim="Datos.nombre"
                name="nombre" required :minlength="nombreMinLength" :maxlength="nombreMaxLength" no-espacios>

             
              <field-messages name="nombre" show="$dirty">
                <div lass="font">Bienvenido/a {{ Datos.nombre }}</div>
                <div slot="required" class="alert alert-danger mt-1">Campo Nombre requerido</div>
                <div slot="minlength" class="alert alert-warning mt-1">Este campo debe poseer al menos {{
                    nombreMinLength
                }}
                  caracteres.</div>
               
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>

            </validate><br>
            <hr>


            <validate tag="div">

              <label for="edad">Edad</label>
              <input type="number" id="edad" class="form-control" autocomplete="off" v-model.number="Datos.edad"
                name="edad" required :min="edadMin" :max="edadMax">
             
              <field-messages name="edad" show="$dirty">
                <div class="font">Edad confirmada</div>
                <div slot="required" class="alert alert-danger mt-1">Campo edad requerido</div>
                <div slot="min" class="alert alert-warning mt-1">La edad minima debe ser {{ edadMin }} años.</div>
                <div slot="max" class="alert alert-warning mt-1">La edad maxima debe ser {{ edadMax }} años.</div>
              </field-messages>

            </validate><br>
            <hr>


            <validate tag="div">

              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="Datos.email"
                name="email" required>
             
              <field-messages name="email" show="$dirty">
                <div class="font">Acceso concedido</div>
                <div slot="required" class="alert alert-danger mt-1">Campo email requerido</div>
                <div slot="email" class="alert alert-danger mt-1">Email no valido</div>
              </field-messages>

            </validate><br>

            <button class="btn btn-info my-3" :disabled="formState.$invalid">Enviar</button>
          </vue-form>
        </div>
      </div>


      <usuariosMockApi />

    </div>
  </section>

</template>
<script >
import usuariosMockApi from './usuariosMockApi.vue'
export default {
  components: { usuariosMockApi },
  name: 'src-componentes-formulario',
  props: [],
  mounted() {

  },
  data() {
    return {
      hayDatos: this.datos.nombre,
      formState: {},
      Datos: this.datos(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      urlMock: 'https://6353835fe64783fa827433c7.mockapi.io/mock/usuarios',
      usurios: [],
    }
  },
  methods: {
    datos() {
      return {
        nombre: null,
        edad: null,
        email: null,
      }
    },

    async enviar() {
      await this.postUsuarios(this.Datos)
      this.Datos = this.datos()
      this.formState._reset();
    },

    async postUsuarios(posts) {
      let personaNew = posts

      try {
        let { data: usuario } = await this.axios.post(this.urlMock, personaNew, { 'content-type': 'application/json' })
        this.usurios.push(usuario)
      } catch (error) {
        console.error('Error en el postUsuarios ' + error.message);
      }
    },

    analizarSaldo(usuario) {
      let dif = usuario.pagoRealizado - usuario.montoAPagar
      let color = '#080'
      if (dif > 0) color = '#00F'
      if (dif < 0) color = '#F00'
      return {
        valor: dif,
        color: color
      }
    }

  },
  computed: {
    getNombre() {
      return this.datos.nombre;
    },
    getEdad() {
      return this.datos.edad;
    },
    getEmail() {
      return this.datos.email;
    }
  }
}


</script>

<style scoped lang="css">
#jumbotron3 {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3rem;
  color: rgb(1, 49, 77);
  background-color: rgb(236, 217, 200);
  border-radius: 5px;
}

hr {
  color: antiquewhite;
}

#jumbotron2 {
  color: antiquewhite;
  background-color: rgb(1, 49, 77);
}

td {
  color: antiquewhite;
  font-size: large;
  text-align: center;
  background-color: rgb(68, 6, 6);
  padding-bottom: 1.8rem;
}

th {
  text-align: center;
}
</style>
