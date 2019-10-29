<template>
  <div class="films">
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
        <mdb-card  @click.native="modal = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text playButtonLocation">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal" @close="modal = false">
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
        <mdb-card  @click.native="modal2 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2016/03/09/09/32/guitar-1245856_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal2" @close="modal2 = false">
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
        <mdb-card  @click.native="modal3 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal3" @close="modal3 = false">
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
    <!-- 2nd row of weddings section-->
    <mdb-row>
      <mdb-col md="4">
        <mdb-card  @click.native="modal4 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2017/08/01/11/43/black-and-white-2564630_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal4" @close="modal4 = false">
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
        <mdb-card  @click.native="modal5 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2018/03/03/10/34/action-3195378_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal5" @close="modal5 = false">
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
        <mdb-card  @click.native="modal6 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2017/09/02/18/52/musician-2708190_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal6" @close="modal6 = false">
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
        <mdb-card  @click.native="modal21 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2014/07/01/12/34/street-381227_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal21" @close="modal21 = false">
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
        <mdb-card  @click.native="modal22 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2013/09/14/19/53/city-182223_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal22" @close="modal22 = false">
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
        <mdb-card  @click.native="modal23 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2017/01/16/15/28/boxer-1984344_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal23" @close="modal23 = false">
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
        <mdb-card  @click.native="modal24 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal24" @close="modal24 = false">
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
      <mdb-modal size="lg" :show="modal25" @close="modal25 = false">
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
        <mdb-card  @click.native="modal26 = true" class="card-image" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_960_720.jpg')">
          <div class="d-flex align-items-center py-5 px-4">
            <div>
              <h5 class="white-text">
                <mdb-icon icon="play-circle" size="4x"/>
              </h5>
            </div>
          </div>
        </mdb-card>
      <mdb-modal size="lg" :show="modal26" @close="modal26 = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title 26</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <Media 
              class ="media"
              :kind="'video'"
              :isMuted="(true)"
              :controls="true"
              :src="nmvid26"
              :autoplay="false"
              :loop="true"
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
  },
  name: 'Films',
  data () {
    return {
      msg: 'MUSIC VIDEOS',
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
      msg3: 'DOCUMENTARIES',
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
      nmvid26: "../static/filler.mp4",
      modal26: false,
      msg4: 'MUSIC VIDEOS',    
    };
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media {
  width:95%;
  /*height:575px;*/
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
/*play button media queries*/
@media (max-width: 1200px) {
.px-4 {
  padding-left: 6.5rem !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 991px) {
.px-4 {
  padding-left: 4rem !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 767px) {
.px-4 {
  padding-left: 13rem !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 555px) {
.px-4 {
  padding-left: 40% !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 425px) {
.px-4 {
  padding-left: 35.9% !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 375px) {
.px-4 {
  padding-left: 35.8% !important;
  padding-top: 4rem !important;
  }
}
@media (max-width: 325px) {
.px-4 {
  padding-left: 33.4% !important;
  padding-top: 4rem !important;
  }
}
/*video size in modals*/
@media (max-width: 1230px) {
.media {
  width: 85% !important;
  height: 30% !important;
  }
}
@media (max-width: 900px) {
.media {
  margin-top: 5% !important;
  }
}
@media (max-width: 480px) {
.media {
  margin-top: 12% !important;
  }
}
@media (max-width: 480px) {
.media {
  width: 90% !important;
  height: 44% !important;
  }
}
</style>
