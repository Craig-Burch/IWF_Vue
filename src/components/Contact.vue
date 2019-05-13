<template>
  <div class="Contact"> <!-- root element -->
     <!-- <script type="text/javascript" 
  src="//d25purrcgqtc5w.cloudfront.net/assets/widgetiframe/iframeResizer.min.js">
  </script> -->
  <mdb-container>
    <mdb-row>
     <mdb-col>
      <h3>{{ msg }}</h3>
     </mdb-col>
    </mdb-row>
  </mdb-container>
  <iframe class="honeyBook"src="https://widget.honeybook.com/assets_users_production/companies/5c157b4b63cca7112814e193/widgets/5c157b4b63cca7112814e1ab/contact_form.html" frameBorder="0" width="78%" height="900">
  </iframe>
  <!-- <script type="text/javascript">
    iFrameResize({checkOrigin: false});
 </script> -->
  <br>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
   name: 'Contact', // div class name?
  methods: {
    handle() {
      
    }
  },
  name: 'Contact', //div class name?
  data () {
    return {
      msg: 'CONTACT US',    

    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.honeyBook {
  margin-left: 12.5%;
}
h3 {
  margin-top: 5% !important; 
  text-align: center;
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
