<template>
  <div id="app" class="flyout">
    <!-- nav bar -->
    <mdb-navbar id="main-navbar" dark position="top" class="black" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        <img src="./assets/images/placeholderNavBar.png">
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <span><mdb-nav-item exact to="/" waves-fixed>  Home </mdb-nav-item></span>
          <span><mdb-nav-item to="/Films" waves-fixed>  Films </mdb-nav-item></span> 
           <span><mdb-nav-item to="/Services" waves-fixed> Services </mdb-nav-item> </span> 
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
        <mdb-col class ="icons-centered" md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
          </div>
         </mdb-col>
       </mdb-row>
     </mdb-container>
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"> Inland Wedding Videography </a>
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
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
  margin-top: 75px !important;
}
</style>
