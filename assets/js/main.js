
Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    disks: [],
    infoIndex: '',
    info: false,
  },
  mounted() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      let result = response.data.response;
      this.disks = result;
    });
  },
  methods: {
    getInfo: function(i){
      console.log(i);
      this.infoIndex = i;
      this.info = true;
    },
    closeInfo: function(){
      this.infoIndex = '';
      this.info = false;

    }
  }
})

// METODO VUE PER LA RICHIESTA DI API
// axios
// .get('https://flynn.boolean.careers/exercises/api/random/boolean')
// .then(function (response) {
//   const result = response.data;
// })
// .catch((error) => {
//   console.log(error);
// });
