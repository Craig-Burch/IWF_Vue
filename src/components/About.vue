<template>
<div class="About">
  <mdb-container>
    <mdb-row>
      <mdb-col md="6">
        <h3>{{ msg }}</h3>
        <p>Eros in cursus turpis massa tincidunt dui ut ornare.</p>
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5>HEADER 1</h5>
             <p>When working with potential photographers and videographers, the problem is that most are "either or" and by that, meaning they have great quality mixed with poor communication and/or great communication and costumer relationships mixed with poor quality. Here at Inland Weddings we strive for both. 
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5 >HEADER 2</h5>
            <p> When the industry standard art of visual story telling has a baby with great costumer relation and on time delivery, we naturally are the leading wedding photo/video providers on the market. Not to mention at a competitive price. 
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-row class ="header-margins">
           <mdb-col md="2">
             <mdb-icon icon="camera-retro" size="4x" />
           </mdb-col>
           <mdb-col md="10"> <h5>HEADER 3</h5> 
             <p>Don't settle for anything less than being treated as more than just a client, but feeling like your love story has it's own feature film.
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col md="6">
        <mdb-view class ="">
          <img src="https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
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
  text-align: left;
  color: #969696;
  margin-bottom: 0;
  font-size: 17px;
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
