<template>
  <div>
    <v-container>
        <v-layout>
          <v-flex xs-12 pl-2>
            <input type="file" ref="fileInput" id="file" @change="processFile($event)">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs-12 pl-2>  
            <v-btn color="primary"  @click="uploadFile">Enviar</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>

//import { firestore } from '@/main'
import { storage } from '@/main'

export default {

  data: () => ({

  }),
  methods: {
    processFile: function(event) {
      this.file = event.target.files[0]
    },
    uploadFile: function() {
      let name = (+new Date()) + '-' + this.file.name
      let metadata = {contentType: this.file.type}
      storage.child(name).put(this.file, metadata)
      .then(snapshot => snapshot.ref.getDownloadURL())
    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
