<template>
<div class="About">
  <mdb-container>
    <mdb-row>
      <mdb-col md="6">
        <h3>{{ msg }}</h3>
        Eros in cursus turpis massa tincidunt dui ut ornare.
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5>HEADER 1</h5>
             Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
          </mdb-col>
        </mdb-row>
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5 >HEADER 2</h5>
             Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
          </mdb-col>
        </mdb-row>
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5>HEADER 3</h5>
             Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Amet dictum sit amet justo. Eros in cursus turpis massa tincidunt dui ut ornare. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col md="6">
        <mdb-view class ="">
          <img src="https://images.pexels.com/photos/2268728/pexels-photo-2268728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
        </mdb-view>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</div>
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol, mdbIcon, mdbView } from 'mdbvue';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbView
    },
     name: 'About',
  data () {
    return {
      msg: 'ABOUT US',
        
    };
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.About {
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
.header-margins {
  margin-top: 4%;
}
/*body container used for home / films / services pages*/
@media (min-width: 1200px) {
.container {
    max-width: 1200px;
 }
}
</style>