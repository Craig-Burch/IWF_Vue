<template>
  <div id="app" class="flyout">
    <!-- nav bar -->
    <mdb-navbar id="main-navbar" dark position="top" class="black" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;" class ="pl-2">
        <img src="./assets/images/placeholderNavBar.png">
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <span><mdb-nav-item exact to="/" waves-fixed>  Home </mdb-nav-item></span>
          <span><mdb-nav-item to="/Films" waves-fixed>  Films </mdb-nav-item></span> 
           <span><mdb-nav-item to="/Services" waves-fixed> Services </mdb-nav-item> </span> 
           <span><mdb-nav-item to="/About" waves-fixed> About </mdb-nav-item> </span> 
           <mdb-nav-item to="/Contact" waves-fixed> Contact </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{marginTop: '60px'}">
      <!-- body will be injected -->
      <router-view></router-view>
    </main>
    <!-- footer -->
    <mdb-footer color="black">
      <mdb-container>
       <mdb-row>
        <mdb-col class ="icons-centered mt-2 mb-5" md="12">
          <div class=" flex-center">
            <a class="fb-ic" href="">
              <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-3x"> 
              </i>
            </a>
            <a class="tw-ic" href="">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-3x"> 
              </i>
            </a> 
            <a class="ins-ic" href="">
              <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-3x"> 
              </i>
            </a>
          </div>
         </mdb-col>
       </mdb-row>
     </mdb-container>
     <!--  <p class="footer-copyright py-3 text-center">
      &copy; {{new Date().getFullYear()}} Copyright: <a href=""> Your Company Name Here</a>
      </p> -->
    </mdb-footer>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter, mdbIcon } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbContainer, 
    mdbRow, 
    mdbCol,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    mdbIcon
  },
  methods: { 

  }
};

</script>

<style>
.flyout {
  display:flex;
  flex-direction: column;
  min-height:100vh;
  justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
/*navbar edits*/
span {
  border-right: 1px solid white !important;
}
li {
  margin-left: 10px;
  margin-right: 10px;
}
/*footer edits*/
.icons-centered a {
  margin-top: 45px !important;
  /*margin:auto !important;*/
  padding-left: 45px !important;
}
@media (max-width: 767px) {
.icons-centered a {
  padding-left: 10px !important;
  }
}
@media (max-width: 480px) {
.icons-centered a {
  margin-top: 40px !important;
  }
}
@media (max-width: 375px) {
.icons-centered a {
  padding-left: 20px !important;
  }
}
.icons-centered a:hover {
  opacity: .5;
  transition: .4s ease;
}
/*icon vertical posistioning*/
.mb-5 {
    margin-bottom: 3rem!important;
}
.footer-copyright a:hover {
  opacity: .5;
  transition: .4s ease;
}
/*footer text in relation to icons*/
.py-3 {
  margin-top: 10px !important;
  padding-top: 1rem!important;
}
.mb-0 {
    margin-bottom: 15px!important;
}
/*mobile nav bar edit*/
@media (max-width: 991px) {
span {
  border-right: none !important;
 }
}
</style>
