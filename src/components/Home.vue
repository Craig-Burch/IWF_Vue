<template>
  <div class="Home"> <!-- root element -->
     <Media 
      playsinline
      class ="media"
      :kind="'video'"
      :isMuted="(true)"
      :src="desktopVideo"
      :autoplay="true"
      :loop="true"
    >
    <!-- :controls="true" add to videos that require controls-->
    </Media>
    <Media 
      playsinline
      class ="mediaMobile"
      :kind="'video'"
      :isMuted="(true)"
      :src="mobileVideo"
      :autoplay="true"
      :loop="true"
    >
    <!-- :controls="true" add to videos that require controls-->
    </Media>
    <br><br>
    <h3>{{ msg }}</h3>
    <mdb-container>
      <mdb-row>
      <mdb-col>
        <h4>
         "Your Company's Name Here" 
        <br><br>
        This theme is for sale! Created by Craig @ <span><a style="color:black" href="http://ilovecode.tech/" target="_blank">iLoveCode.tech</a></span>. Thank you for viewing! <br>
        </h4>
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
          <mdb-view class="cursorOnHover" hover>
              <mdb-card-image src="https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_960_720.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask @click.native="modal = true" flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Vid 1</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn @click.native="modal = true" color="black">View Video</mdb-btn>
          </mdb-card-body>
       <!-- featured Modal 1 -->
       <mdb-modal size="lg" :show="modal" @close="modal = false">
         <mdb-modal-header>
            <mdb-modal-title>Featured Video 1</mdb-modal-title>
         </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="mediaModal"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="featured1"
              :autoplay="false"
              :loop="true"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Video 1</strong></h3>
          <p class="card-text py-2">"Customer Review"</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal = false">Close</mdb-btn>      
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-card>
        



        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://cdn.pixabay.com/photo/2016/02/19/10/53/skateboarding-1209472_960_720.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask @click.native="modal2 = true" flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Video 2</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
              card's content.</mdb-card-text>
            <mdb-btn color="black" @click.native="modal2 = true">View Video</mdb-btn>
          </mdb-card-body>
          <!-- featured Modal 2 -->
       <mdb-modal size="lg" :show="modal2" @close="modal2 = false">
         <mdb-modal-header>
            <mdb-modal-title>Featured Video 2</mdb-modal-title>
         </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="mediaModal"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="featured2"
              :autoplay="false"
              :loop="true"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Video 2</strong></h3>
          <p class="card-text py-2">"Customer Review"</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal2 = false">Close</mdb-btn>      
        </mdb-modal-footer>
      </mdb-modal>
      <!-- featured Modal 3 -->
       <mdb-modal size="lg" :show="modal3" @close="modal3 = false">
         <mdb-modal-header>
            <mdb-modal-title>Featured Video 3</mdb-modal-title>
         </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="mediaModal"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="featured3"
              :autoplay="false"
              :loop="true"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Video 3</strong></h3>
          <p class="card-text py-2">"Customer Review"</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal3 = false">Close</mdb-btn>      
        </mdb-modal-footer>
      </mdb-modal>
     </mdb-card>




        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask @click.native="modal3 = true" flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Featured Vid 3</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
              card's content.</mdb-card-text>
            <mdb-btn color="black" @click.native="modal3 = true">View Video</mdb-btn>
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
          <p>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
         </p>
        </mdb-col>
        <mdb-col col="4" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 2</h5>
          <p>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
          </p>
        </mdb-col>
        <mdb-col col="4" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 3</h5>
          <p>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
          </p>
        </mdb-col>
    </mdb-row>
  </mdb-container>

    <mdb-container class="forMobile">
      <mdb-row>
      <mdb-col md="6" class ="moblile-image-width">
        <mdb-view>
          <img src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
        </mdb-view>
      </mdb-col>
      <mdb-col md="6" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER 1</h5>
          <p>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla. 
          </p>
          <h5 class ="header-margins">HEADER 2</h5>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
          </p>
          <h5 class ="header-margins">HEADER 3</h5>
          <p>
          In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
        <mdb-col md="6" class ="forMobile moblile-image-width">
         <mdb-view>
           <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
         </mdb-view>
       </mdb-col>
        <mdb-col md="6" class ="left-floating-text"> 
          <h5 class ="header-margins">HEADER </h5>
          <p>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Tincidunt eget nullam non nisi est sit amet facilisis.
          </p>
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
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
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
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  name: 'Home', 
  data () {
    return {
      msg: 'Videographer Theme',    
      desktopVideo: "../static/filler.mp4",
      mobileVideo: "../static/filler.mp4",
      modal: false,
      modal2: false,
      modal3: false,
      featured1: "../static/filler.mp4",
      featured2: "../static/filler.mp4",
      featured3: "../static/filler.mp4"
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
h4 {
  color: #969696;
}
p {
  text-align: left;
  color: #969696;
  margin-bottom: 0;
  font-size: 17px;
}
.card-body p {
  text-align: center !important;
}
.modal-body p {
  text-align: center !important;
}
hr {
  width: 63%;
  margin:auto;
}
/*video container*/
 .media {
  width: 1200px;
  height: 475px !important;
  margin-top: 5% !important;
  margin:auto;
  pointer-events: none;
  overflow: hidden;
}
video.mediaMobile {
  width: 100%;
  height: 30%;
  margin-top: 15% !important;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  pointer-events: none;
}
/*gives video the stretch effect*/
video {
    object-fit: fill !important;
    /*border:1px solid black;*/
}
/*handling video controls*/
video.mediaMobile::-webkit-media-controls {
    display:none !important;
    -webkit-appearance: none;
}
video.media::-webkit-media-controls {
    display:none !important;
    -webkit-appearance: none;
}
video.mediaModal::-webkit-media-controls {
    display:all !important;
    -webkit-appearance: all;
}
video.mediaMobile::-webkit-media-controls-panel {
    display:none !important;
    -webkit-appearance: none;
}
video.media::-webkit-media-controls-panel {
    display:none !important;
    -webkit-appearance: none;
}
video.mediaModal::-webkit-media-controls-panel {
    display:all !important;
    -webkit-appearance: all;
}
/*working to get rid of iphone video controls but also gets rid of modal cotrols..
above few classes seperate the two but use this as a reference point*/
/*  *::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}*/

/*once more featured videos are added you can delete these 'div.card' edits*/
div.card {
  /*height: 700px !important;*/
  cursor: pointer;
}
.cursorOnHover{
  cursor: pointer;
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
/* featured video container change to match rest of body width*/
.card-deck {
width: 1250px;
}
/*modal festured vid / same css as 'media' class on films page */
.mediaModal {
  width:95%;
  /*height:575px;*/
  margin: auto;
}
@media (max-width: 1400px) {
div.card {
  /*height: 550px !important;*/
 }
}
@media (max-width: 560px) {
div.card {
  height: 20% !important;
 }
}
/*video size in modals*/
@media (max-width: 1230px) {
.mediaModal {
  width: 85% !important;
  height: 30% !important;
  }
}
@media (max-width: 900px) {
.mediaModal {
  margin-top: 5% !important;
  }
}
@media (max-width: 480px) {
.mediaModal {
  margin-top: 12% !important;
  }
}
@media (max-width: 480px) {
.mediaModal {
  width: 90% !important;
  height: 44% !important;
  }
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
  height: 420px !important;
  margin-top: 10% !important;
  }
}
@media (max-width: 1200px) {
.media {
  width: 1150px;
  height: 430px !important;
  }
}
@media (max-width: 1175px) {
.media {
  width: 1030px;
  height: 410px !important;
  }
}
@media (max-width: 1050px) {
.media {
  width: 975px;
  height: 375px !important;
  }
}
@media (max-width: 990px) {
.media {
  width: 800px;
  height: 330px !important;
  }
}
@media (max-width: 830px) {
.media {
  width: 750px;
  height: 315px !important;
  margin-top: 12% !important;
  }
}
@media (max-width: 777px) {
.media {
  width: 725px;
  height: 300px !important;
  }
}
@media (max-width: 768px) {
.media {
  width: 700px;
  height: 290px !important;
 }
}
@media (max-width: 720px) {
.media {
  width: 650px;
  height: 270px !important;
  margin-top: 15% !important;
  }
}
@media (max-width: 675px) {
.media {
  width: 625px;
  height: 260px !important;
  }
}
@media (max-width: 650px) {
.media {
  width: 555px;
  height: 240px !important;
  }
}
@media (max-width: 600px) {
.media{
  display: none;
  }
}
@media (min-width: 601px) {
.mediaMobile{
  display: none;
  }
}
@media (max-width: 600px) {
.mediaMobile {
  
  }
}
@media (max-width: 577px) {
.mediaMobile {
  height: 220px !important;
  }
}
@media (max-width: 500px) {
.mediaMobile {
  height: 200px !important;
  }
}
@media (max-width: 480px) {
video.mediaMobile {
  height: 190px !important;
  margin-top: 7% !important;
  }
}
@media (max-width: 425px) {
.mediaMobile {
  height: 160px !important;
  }
}
@media (max-width: 375px) {
video.mediaMobile {
  margin-top: 8% !important;
  }
}
@media (max-width: 350px) {
video.mediaMobile {
  height: 145px !important;
  margin-top: 10% !important;
  }
}
@media (max-width: 325px) {
video.mediaMobile {
  height: 120px !important;
  }
}
/*breakpoint for column adjustments tablet*/
@media (max-width: 575px) {
.moblile-image-width {
  padding: 0 !important;
 }
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
