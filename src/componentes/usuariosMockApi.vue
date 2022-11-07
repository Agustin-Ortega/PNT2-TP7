<template >
  <section class="src-componentes-usuarios-mock-api">
    <div class="jumbotron">

      <div align="center" id="jb4" class="jumbtron">
      <button class="btn btn-success my-3 mr-2" @click="getAxios()">GET Promise</button>
      <button class="btn btn-danger my-3 mr-2" @click="getAxios()">GET Then/Catch</button>
    </div><br>

      <div v-if="posts.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>
          <tr v-for="post in this.posts" :key="post.id">
            <td>{{ post.nombre }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.edad }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">No hay usuarios en la lista</h4>
      
    </div>
    <!-- <formulario @getDatosForm="posts=$event"/> -->
  </section>

</template>

<script >
//import formulario from './formulario.vue';
export default {
  name: 'src-componentes-usuarios-mock-api',
  components: {
    //formulario,
  },
  props: [],
  mounted() {

  },
  data() {
    return {
      urlMock: 'https://6353835fe64783fa827433c7.mockapi.io/mock/usuarios',
      met: [],
      posts: this.getLista()
      
    }
  },
  methods: {

  //  CON PROMISE
    async getAxios() {
      try {
        let respuesta = await this.axios(this.urlMock)
        this.posts = respuesta.data;
        this.met = 'AXIOS'

      } catch (error) {
        console.error(error)
      }
    },


     //  CON THEN/ CATCH
     async getAxiosThenCatch() {
     this.axios(this.urlMock)
     .then(respuesta => {this.posts = respuesta.data})
     .catch(error => console.error(error.message))
    },


    async getLista() {
      try {
        let respuesta = await this.axios(this.urlMock)
        return respuesta.data;
        

      } catch (error) {
        console.error(error)
      }
    },

    // getMock(){
    //   return this.$emit('getMock', this.urlMock)
    // }



  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-componentes-usuarios-mock-api {}

table {
  text-align: center;
}

td {
  color: rgb(1, 49, 77);
  background-color: antiquewhite;
  font-size: medium;
}

th {
  background-color:rgb(1, 49, 77);
  color: antiquewhite;
}

.fun {
  font-size: x-large;
  background-color: rgba(0, 0, 0, 0.651);
  color: antiquewhite;

}
#jb4{
  background-color: rgb(1, 49, 77);
  border-radius: 5px;
}
</style>
