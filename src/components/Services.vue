<template>
  <div class="Services">
    
    <mdb-container class ="content-margin">
      <mdb-row>
        <mdb-col class ="left-floating-text"> 
          <h3>{{ msg }}</h3>
          Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in nulla. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Tincidunt eget nullam non nisi est sit amet facilisis.
        </mdb-col>
        <mdb-col>
        <mdb-view>
          <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
        </mdb-view>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <mdb-container class ="content-margin">
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
  name: 'Services',
  data () {
    return {
      msg: 'SERVICES'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-margin {
  margin-top: 5% !important;
}
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
/*body container used for home / films / services pages*/
@media (min-width: 1200px) {
.container {
    max-width: 1200px;
 }
}
</style>
