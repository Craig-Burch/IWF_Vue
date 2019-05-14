<template>
  <div class="Contact"> 
    <h3>{{ msg }}</h3>
    <iframe 
    class="iFrame_style" 
    src="https://widget.honeybook.com/assets_users_production/companies/5c157b4b63cca7112814e193/widgets/5c157b4b63cca7112814e1ab/contact_form.html" frameBorder="0" 
    width="78%" 
    height="900">
    </iframe>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Home', //div class name?
  data () {
    return {
      msg: 'CONTACT US',    
    };
  }
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
  font-size: 14px;
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
</style>
