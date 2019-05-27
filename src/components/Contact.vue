<template>
  <div class="Contact"> 
    <div class="vld-parent ">
        <loading 
         :active.sync="isLoading" 
         :is-full-page="fullPage"
        >
         <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
         </div>
       </loading>
    </div>
    <h3>{{ msg }}</h3>
     <p>Wedding Planning is a pain, trust us, we know. 
     That's why we try to streamline the process as much as possible! 
     <br>
     Start by simply sending us the details of your special day, and we will take it from there! 
     We're excited to meet you and get to work with you! </p>
    <iframe 
    v-model="fullPage"
    class="iFrame_style" 
    src="https://widget.honeybook.com/assets_users_production/companies/5c157b4b63cca7112814e193/widgets/5c157b4b63cca7112814e1ab/contact_form.html" frameBorder="0" 
    width="78%" 
    height="900">
    </iframe>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  components: {
    Loading
  },
  name: 'Home', //div class name?
  data () {
    return {
      msg: 'CONTACT US',  
      isLoading: false,
      fullPage: true  
    };
  },
  methods: {
    doAjax() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false
        },1500)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    }   
  },
  beforeMount(){
      this.doAjax()
 },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Contact {
  margin-top: 5% !important;
}
h3 {
  text-align: center;
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
}
p {
  text-align: center;
  color: #969696;
  margin-bottom: 0;
  font-size: 17px;
  margin-bottom: 10px;
}
hr {
  width: 63%;
  margin:auto;
}
.iFrame_style {
  margin-left: 12.5%;
}
/*column container width change and edits*/
.left-floating-text {
  text-align: left !important;
  margin-top: 0%;
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
@media (max-width: 375px) {
.container {
    margin-left: -10px !important;
 }
}
</style>
