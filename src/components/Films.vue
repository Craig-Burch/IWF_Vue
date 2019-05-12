<template>
  <div class="films">
    <!-- <mdb-container class="mt-5">
      <br>
      <br>
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
    </mdb-container> -->
    <mdb-container>
      <br>
      <br>
      <mdb-row>
        <mdb-col md="4" >
          <h3 class ="left-floating-text">{{ msg }}</h3>
        </mdb-col>
      </mdb-row>
      <!-- row 1 -->
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1573007/pexels-photo-1573007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal" @close="modal = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 1</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 1</strong></h3>
          <p class="card-text py-2">test 1 quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
      <mdb-col md="4">
        <mdb-card  @click.native="modal2 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal2" @close="modal2 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 2</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 2</strong></h3>
          <p class="card-text py-2">Some testing example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal2 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
       <mdb-col md="4">
        <mdb-card  @click.native="modal3 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1804684/pexels-photo-1804684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal3" @close="modal3 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 3</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 3</strong></h3>
          <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal3 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
    </mdb-row>
    <!-- row 2 -->
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal4 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal4" @close="modal4 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 4</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 4</strong></h3>
          <p class="card-text py-2">test 1 quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal4 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
      <mdb-col md="4">
        <mdb-card  @click.native="modal5 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal5" @close="modal5 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 5</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 5</strong></h3>
          <p class="card-text py-2">Some testing example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal5 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
       <mdb-col md="4">
        <mdb-card  @click.native="modal6 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal6" @close="modal6 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 6</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 6</strong></h3>
          <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal6 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
    </mdb-row>
    <!-- next category-------------------------- -->



















     <br>
     <mdb-row>
        <mdb-col md="4" >
          <h3 class ="left-floating-text">{{ msg3 }}</h3>
        </mdb-col>
      </mdb-row>
      <!-- row 1 -->
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal21 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/2072899/pexels-photo-2072899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal21" @close="modal21 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 21</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 21</strong></h3>
          <p class="card-text py-2">test 1 quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal21 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
      <mdb-col md="4">
        <mdb-card  @click.native="modal22 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1688253/pexels-photo-1688253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal22" @close="modal22 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 22</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 22</strong></h3>
          <p class="card-text py-2">Some testing example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal22 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
       <mdb-col md="4">
        <mdb-card  @click.native="modal23 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal23" @close="modal23 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 23</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 23</strong></h3>
          <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal23 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
    </mdb-row>
    <!-- row 2 -->
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal24 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal24" @close="modal24 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 24</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 24</strong></h3>
          <p class="card-text py-2">test 1 quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal24 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
      <mdb-col md="4">
        <mdb-card  @click.native="modal25 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/2127033/pexels-photo-2127033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal25" @close="modal25 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 25</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 25</strong></h3>
          <p class="card-text py-2">Some testing example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal25 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
       <mdb-col md="4">
        <mdb-card  @click.native="modal26 = true" class="card-image" style="background-image: url('https://images.pexels.com/photos/2076622/pexels-photo-2076622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="fluid" :show="modal26" @close="modal26 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 26</mdb-modal-title>
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
          <h3 class="card-title h3 my-4"><strong>Card title 26</strong></h3>
          <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="black" size="lg" @click.native="modal26 = false">Close</mdb-btn>      
        </mdb-modal-footer>
     </mdb-modal>
    </mdb-col>
    </mdb-row>
  </mdb-container>
  <br><br>
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
      msg: 'WEDDINGS',
      modal: false,
      nmvid1: "../static/filler.mp4",
      modal2: false,
      nmvid2: "",
      modal3: false,
      nmvid3: "",
      modal4: false,
      nmvid4: "",
      modal5: false,
      nmvid5: "",
      modal6: false,
      nmvid6: "",
      msg2: 'ELOPEMENTS',
      msg3: 'ENGAGEMENTS',
      nmvid21: "../static/filler.mp4",
      modal21: false,
      nmvid22: "",
      modal22: false,
      nmvid23: "",
      modal23: false,
      nmvid24: "",
      modal24: false,
      nmvid25: "",
      modal25: false,
      nmvid26: "",
      modal26: false,
      msg4: 'MUSIC VIDEOS',    
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media {
  width:1000px;
  height:500px;
  margin: auto;
}
video {
  object-fit: fill !important;
  border:0px solid black;
}
.left-floating-text {
  text-align: left !important;
  margin-top: 1%;
}
h3 {
  font-weight: normal;
  padding-top: 30px;
  padding-bottom: 0px;
  text-align: center;
}
p {
  margin-bottom: 0;
  font-size: 16px;
  text-align: center;
}
/*play icons padding inside container */
 .px-4 {
  padding-left: 9rem !important;
  padding-top: 4rem !important;
}
/*background image containers*/
.card-image.card {
 background-size: cover;
 background-repeat: no-repeat;
 margin-top: 20px;
}
.card-image.card:hover {
  opacity: .75;
  transition: .7s ease;
  cursor: pointer;
}
/*body container used for home and films page*/
@media (min-width: 1200px) {
.container {
    max-width: 1230px;
 }
}
</style>
