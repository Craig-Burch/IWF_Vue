<template>
  <div class="Home"> <!-- root element -->
     <Media 
      playsinline
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
    <br><br>
    <h3>{{ msg }}</h3>
    <mdb-container>
      <mdb-row>
      <mdb-col>
         Mystery Box Digital is a video production company based in Utah that specializes in the production films, documentaries, TV, commercials, music videos, events, web, and more. We believe all stories matter, so we embrace technology to create experiences that help transcend their medium and deliver quality content.
        <br> <br>
         We didn't adapt to the shift of new technology and online content - we grew up with it. While everyone else is trying to play catch up to meet the challenge of creating content that with the latest and greatest advancement in technology to engages and entertains audiences, we've been doing it for years - with the numbers to prove it. 
      </mdb-col>
      </mdb-row>
    </mdb-container>
    <br>
  <br>
  <hr>
  <br>
  <br>
  <mdb-container>
    <mdb-row>
      <mdb-card-group deck>
        <mdb-card> 
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.pexels.com/photos/1655817/pexels-photo-1655817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Vid 1</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
              card's content.</mdb-card-text>
            <mdb-btn color="black">View Video</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Vid 2</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
              card's content.</mdb-card-text>
            <mdb-btn color="black">View Video</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Vid 3</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
              card's content.</mdb-card-text>
            <mdb-btn color="black">View Video</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
   </mdb-container>
    <br>
    <br>
    <hr>
    <br>
    <br>

   <mdb-container class ="content-margin forDesktop">
      <mdb-row>
        <mdb-col col="4" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 1</h5>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
        </mdb-col>
        <mdb-col col="4" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 2</h5>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
        </mdb-col>
        <mdb-col col="4" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 3</h5>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
        </mdb-col>
    </mdb-row>
  </mdb-container>

    <mdb-container class="forMobile">
      <mdb-row>
      <mdb-col md="6">
        <mdb-view class ="">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(7).jpg" class="img-fluid " alt="placeholder" overlay="white-slight">
        </mdb-view>
      </mdb-col>
      <mdb-col md="6" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 1</h5>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla. 
          <h5 class ="header-margins">HEADER 2</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
          <h5 class ="header-margins">HEADER 3</h5>
          In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </mdb-col>
      </mdb-row>
    </mdb-container>





     <br>
     <br>
     <hr>
     <br>
     <br>
     <mdb-container>
      <mdb-row>
         <mdb-col md="6" class ="forMobile">
         <mdb-view>
           <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
         </mdb-view>
       </mdb-col>
        <mdb-col md="6" class ="left-floating-text"> 
          <h4 class ="header-margins">HEADER </h4>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Tincidunt eget nullam non nisi est sit amet facilisis.
        </mdb-col>
        <mdb-col md="6" class ="forDesktop">
         <mdb-view>
           <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
         </mdb-view>
       </mdb-col>
     </mdb-row>
   </mdb-container>
   <br>
  </div>
</template>

<script>
import Media from '@dongido/vue-viaudio';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
  components: {
    Media,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon
  },
   name: 'Home', // div class name
  methods: {
    handle() {
      console.log('Video paused!, playing in 2 sec...')

      setTimeout( () => {
        this.$refs.fish.play() 
      }, 2000)
    }
  },
  name: 'Home', //div class name?
  data () {
    return {
      msg: 'WE ARE CREATORS AND INNOVATORS. ',    
      landingPageVideo: "../static/filler.mp4"

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
  padding-bottom: 20px;
}
p {
  text-align: center;
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
hr {
  width: 63%;
  margin:auto;
}
/*video container*/
 .media {
  width: 1200px;
  height: 400px !important;
  margin-top: 5% !important;
  margin:auto;
  pointer-events: none;
}
/*gives video the stretch effect*/
video {
    object-fit: fill !important;
    /*border:1px solid black;*/
}
video::-webkit-media-controls {
    display:none !important;
    -webkit-appearance: none;
}
*::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}
/*column container width change and edits*/
.container {
  text-align: center;
}
.left-floating-text {
  text-align: left !important;
  margin-top: 0%;
}
.header-margins {
  margin-top: 2%;
}
/*bottom featured video container change to match rest of body width*/
.card-deck {
width: 1250px;
}

/*body container used for home and films page*/
@media (max-width: 1240px) {
.card-deck {
   width: 1175px;
   margin: auto;
 }
}
@media (max-width: 1240px) {
.container {
    max-width: 1175px;
 }
}
@media (min-width: 1250px) {
.container {
    max-width: 1200px;
 }
}
/*header video media queries*/
@media (max-width: 1230px) {
.media {
  width: 1100px;
  height: 375px !important;
  margin-top: 10% !important;
  }
}
@media (max-width: 1200px) {
.media {
  width: 1000px;
  height: 350px !important;
  }
}
@media (max-width: 1030px) {
.media {
  width: 975px;
  height: 343.75px !important;
  }
}
@media (max-width: 990px) {
.media {
  width: 800px;
  height: 300px !important;
  }
}
@media (max-width: 830px) {
.media {
  width: 750px;
  height: 287.5px !important;
  }
}
@media (max-width: 777px) {
.media {
  width: 725px;
  height: 281.25px !important;
  }
}
@media (max-width: 768px) {
.media {
  width: 700px;
  height: 275px !important;
 }
}
@media (max-width: 720px) {
.media {
  width: 650px;
  height: 263.5px !important;
  margin-top: 13% !important;
  }
}
@media (max-width: 675px) {
.media {
  width: 625px;
  height: 251px !important;
  }
}
@media (max-width: 660px) {
.media {
  width: 625px;
  height: 251px !important;
  }
}
@media (max-width: 600px) {
.media {
  width: 550px;
  height: 232.25px !important;
  }
}
@media (max-width: 577px) {
.media {
  width: 500px;
  height: 220px !important;
  }
}
@media (max-width: 500px) {
.media {
  width: 450px;
  height: 200px !important;
  }
}
@media (max-width: 480px) {
.media {
  width: 420px;
  height: 190px !important;
  margin-top: 17% !important;
  }
}
@media (max-width: 425px) {
.media {
  width: 375px;
  height: 150px !important;
  }
}
@media (max-width: 375px) {
.media {
  width: 325px;
  height: 135px !important;
  margin-top: 20% !important;
  }
}
@media (max-width: 350px) {
.media {
  width: 275px;
  height: 120px !important;
  }
}
@media (max-width: 325px) {
.media {
  width: 245px;
  height: 110px !important;
  }
}
/*breakpoint for column adjustments tablet*/
@media (min-width: 1200px) {

}
/*mobile vs desktop images and video*/

@media (min-width: 768px) {
.forMobile {
  display: none;
  }
}
@media (max-width: 767px) {
.forDesktop {
  display: none;
  }
}
</style>
