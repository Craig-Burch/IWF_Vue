<template>
  <div class="Example">
     <Media 
      class ="media"
      :kind="'video'"
      :isMuted="(true)"
      :src="landingPageVideo"
      :autoplay="true"
      :loop="true"
      @pause="handle()"
      :ref="'fish'"
    >

    <!-- :controls="true" add to videos that require controls-->
    </Media>
    <h3>{{ msg }}</h3>
    <p class="mb-2">The application is configured and ready to import our components. You will find MDB Vue docs <a href="https://mdbootstrap.com/vue/" target="_blank">here</a>.</p>
    <p>Please type <span class="black-text">npm run demo</span> or <span class="black-text">yarn demo</span> to launch our Demonstration Page. The files with the code are placed in the <span class="black-text">demo</span> directory.</p>
    <p>If You want to completely remove our demo from Your App, easily type <span class="black-text">npm run remove-demo</span> or <span class="black-text">yarn remove-demo</span>.</p>
  </div>
</template>

<script>
import Media from '@dongido/vue-viaudio';
export default {
  components: {
   Media,
  },
   name: 'Example', // div class name
  methods: {
    handle() {
      console.log('Video paused!, playing in 2 sec...')

      setTimeout( () => {
        this.$refs.fish.play() 
      }, 2000)
    }
  },
  name: 'Home', //div class name
  data () {
    return {
      msg: 'WE ARE CREATORS AND INNOVATORS. ',    
      landingPageVideo: "../static/filler.MP4"
      // ./assets/video/filler.MP4
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  text-align: center;
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.example {
  margin:auto;
}
 .media {
  width: 1200px;
  height: 390px !important;
  margin-top: 50px !important;
  margin:auto;
}
video {
    object-fit: fill !important;
    border:1px solid black;
}
</style>
