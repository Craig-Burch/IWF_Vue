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
          <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress.pricing-tablecs=tinysrgb.pricing-tabledpr=2.pricing-tableh=750.pricing-tablew=1260" class="img-fluid " alt="placeholder" overlay="white-slight">
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

  <div class="price-table-wrapper">
  <div class="pricing-table">
    <h2 class="pricing-table__header">- BASIC -</h2>
    <h3 class="pricing-table__price">$50</h3>
    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
      Let's Talk!
    </a>
    <ul class="pricing-table__list">
      <li>30 day free trial</li>
      <li>50gb storage space</li>
      <li>20% discount</li>
      <li>24 hour support</li>
    </ul>
  </div>
  <div class="pricing-table featured-table">
    <h2 class="pricing-table__header">- BUSINESS -</h2>
    <h3 class="pricing-table__price">$80</h3>
    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
      Let's Talk!
    </a>
    <ul class="pricing-table__list">
      <li>40 day free trial</li>
      <li>100gb storage space</li>
      <li>25% discount</li>
      <li>24 hour support</li>
    </ul>
  </div>
  <div class="pricing-table">
    <h2 class="pricing-table__header">- PREMIUM -</h2>
    <h3 class="pricing-table__price">$130</h3>
    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
      Let's Talk!
    </a>
    <ul class="pricing-table__list">
      <li>50 day free trial</li>
      <li>200gb storage space</li>
      <li>40% discount</li>
      <li>24 hour support</li>
    </ul>
  </div>
</div>



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
/*pricing table css*/
h1 {
  text-align: center;
  font-size: 25px;
  line-height: 32px;
  padding-top: 70px;
}
a {
 color: #66CCCC;
 text-decoration: none;
}
.price-table-wrapper {
  text-align: center;
  margin-top: 30px;
} 
.pricing-table {
  display: inline-block;
  width: 375px;
  border: 1px solid #C8C8C8 !important;
  border-radius: 10px;
  background: white;
  margin: 20px;
  transition: all 0.3s ease-in-out;
}  
.pricing-table__header{
  padding: 20px;
  font-size: 20px;
  border-top-left-radius: 9px; 
  border-top-right-radius: 9px; 
  color: black;
  background: #E0E0E0;
}
.pricing-table__price {
  color: #66CCCC;
  padding: 20px;
  margin: auto;
  font-size: 40px;
  font-weight: 500;
}
.pricing-table__button {
   display: block;
   background: #66CCCC;
   text-decoration: none;
   padding: 20px;
   color: white;
   position: relative;
   overflow: hidden;
   transition: all 0.3s ease-in-out;
}
.pricing-table__button:hover {
   display: block;
   background: black;
   text-decoration: none;
   padding: 20px;
   color: white;
   position: relative;
   overflow: hidden;
   transition: all 0.3s ease-in-out;
}
.pricing-table:after {
    position: absolute;
    content: '>';
    top: 0;
    right: 0;
    font-size: 25px;
    padding: 15px;
    padding-right: 40px;
    color: white;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}
.pricing-table:hover {
   /*background: #E0E0E0;*/
}
.pricing-table__list {
  padding: 20px;
  color: black;
}
ul {
 list-style-type: none;
}
li {
  padding: 15px;
  border-bottom: 1px solid #C8C8C8 ;
}
.pricing-table:last-child {
  border: none;
} 
.pricing-table:hover { 
   box-shadow: 0px 0px 19px -3px rgba(0,0,0,0.36);
}  
.pricing-table__button {
   padding-left: 0;
   padding-right: 35px;
}
.pricing-table:before {
   top: -80%;
   transform: rotate(0deg);
   width: 100%;
 }
.pricing-table:after {
   opacity: 1;
   padding-right: 15px;
}

/*body container used for home / films / services pages*/
@media (min-width: 1200px) {
.container {
    max-width: 1200px;
 }
}
</style>
