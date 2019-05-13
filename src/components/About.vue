<template>
  <div class="About"> <!-- root element -->


   <mdb-container class ="content-margin">
     <mdb-row>
      <mdb-col md="6">
        <mdb-row>
           <mdb-col md="12" class ="left-floating-text"> 
             <h3>{{ msg }}</h3>
             Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare.
           </mdb-col>
           <mdb-col md="2" class= "about-icons">
              <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10">
              <h5 class ="header-margins">HEADER 1</h5>
              Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla.
          </mdb-col>
          <mdb-col md="2" class= "about-icons">
              <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10">
              <h5 class ="header-margins">HEADER 1</h5>
              Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla.
          </mdb-col>
          <mdb-col md="2" class= "about-icons">
              <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10">
              <h5 class ="header-margins">HEADER 1</h5>
              Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla.
          </mdb-col>
        </mdb-row>
      </mdb-col>
        <mdb-col md="6">
           <mdb-view>
             <img src="https://images.pexels.com/photos/2253640/pexels-photo-2253640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
           </mdb-view>
         </mdb-col>
       </mdb-row>
       <!--  <mdb-row>
        <mdb-col col="1" class= "about-icons">
           <mdb-icon icon="camera-retro" size="5x" />
        </mdb-col>
        <mdb-col col="5">
          <h5 class ="header-margins">HEADER 1</h5>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla.
        </mdb-col>
      
      </mdb-row> -->

     </mdb-container>
    <br><br>
  </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
  components: {
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
  name: 'About', //div class name?
  data () {
    return {
      msg: 'ABOUT US',    
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 5% !important; 
  text-align: left;
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
/*column container width change and edits*/
.content-margin {
  margin-top: 5% !important;
}
.left-floating-text {
  text-align: left !important;
  margin-top: 0%;
}
.about-icons {
  margin-top: 2%;
}
.header-margins {
  margin-top: 2%;
}
/*bottom featured video container change to match rest of body width*/
.card-deck {
width: 1250px;
}
/*body container used for home and films page*/
@media (min-width: 1200px) {
.container {
    max-width: 1200px;
 }
}
</style>
