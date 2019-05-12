<template>
  <div class="films">
    <mdb-container class="mt-5">
      <br>
      <br>
      <mdb-row class="mdb-lightbox">
        <mdb-col md="4" >
          <h3>{{ msg }}</h3>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mdb-lightbox">
        <mdb-col md="4">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container>
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal = true" class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
          <div class="d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="5x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal" @close="modal = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="media"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="nmvid1"
              :autoplay="false"
              :loop="true"
              @pause="handle()"
              :ref="'fish'"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Card title</strong></h3>
          <p class="card-text py-2">test 1 quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
      <mdb-col md="4">
        <mdb-card  @click.native="modal2 = true" class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
          <div class="d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="5x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal2" @close="modal2 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="media"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="nmvid1"
              :autoplay="false"
              :loop="true"
              @pause="handle()"
              :ref="'fish'"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Card title</strong></h3>
          <p class="card-text py-2">Some testing example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal2 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
       <mdb-col md="4">
        <mdb-card  @click.native="modal3 = true" class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
          <div class="d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="5x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal3" @close="modal3 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="media"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="nmvid1"
              :autoplay="false"
              :loop="true"
              @pause="handle()"
              :ref="'fish'"
              > 
          </Media> 
          <h3 class="card-title h3 my-4"><strong>Card title</strong></h3>
          <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal3 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
    </mdb-row>
  </mdb-container>
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
    mdbModalFooter,
  },
   methods: {
    handle() {
      console.log('Video paused!, playing in 2 sec...')
      // deer god get rid of this once you dont need the reference
      setTimeout( () => {
        this.$refs.fish.play() 
      }, 2000)
    }
  },
  name: 'Films',
  data () {
    return {
      msg: 'NEW MEDIA',
      nmvid1: "../static/filler.mp4",
      msg2: 'DOCUMENTARIES',
      msg3: 'COMMERCIALS',
      msg4: 'MUSIC VIDEOS',
      modal: false,
      modal2: false,
      modal3: false,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media {
  width:1100px;
  height:600px;
  margin: auto;
}
video {
  object-fit: fill !important;
  border:0px solid black;
}
/*play icons padding inside container */
 .px-4 {
  padding-left: 8rem!important;
}
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
p {
  margin-bottom: 0;
  font-size: 16px;
  text-align: center;
}
</style>
