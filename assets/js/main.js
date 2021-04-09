
Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    disks: [],
    infoIndex: '',
    info: false,
    genres: [],
    genreChosen: '',
  },
  mounted() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      let result = response.data.response;
      this.disks = result;

      for (var i = 0; i < response.data.response.length; i++) {
        let genre = response.data.response[i].genre;
        if (!(this.genres.includes(genre))) {
          this.genres.push(genre);
        }
      }
    });




  },
  methods: {
    getInfo: function(i){
      this.infoIndex = i;
      this.info = true;
    },
    closeInfo: function(){
      this.infoIndex = '';
      this.info = false;
    },
    // chooseGenre: function(genre){
    //   this.genreChosen = genre;
    // }

  },
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
