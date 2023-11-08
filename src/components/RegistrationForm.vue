<script>
  export default {
    name: 'RegistrationForm',
  }
</script>

<template>
<div id="app">
   <div class="registraion-page">
      <div class="card">
         <h1 id="registration-header">Register</h1>
         <form class="form-group-container">
         <input data-lpignore="true" v-model="firstName" type="text" class="form-control" placeholder="First Name" required>
         <input data-lpignore="true" v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
         <input data-lpignore="true" v-model="accountNumber" type="text" class="form-control" placeholder="Revolut Account Number" required>
         <input data-lpignore="true" v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
         <input data-lpignore="true" v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
         <button type="submit" class="btn btn-primary form-btn">REGISTER</button>
         </form>
      </div>
   </div>
</div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #registration-header {
      font-family: sans-serif;
      font-weight: 900;
      color: black;
      font-size: 2rem;
      line-height: 1;
      letter-spacing: -0.02rem;
      text-align: center;
      margin-bottom: 35px;


      @media (min-width: 768px){
        font-size: 2.5rem;
      }
  }
.card {
   padding: 20px 20px 35px 20px;
   font-size: 1.2rem;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   border-radius: 8px;
   min-width: 330px;
   height: 395px;

   @media(min-width: 768px) {
      min-width: 700px;
      min-height: 450px;
      padding-bottom: 50px;
   }
}
.form-control {
  padding: 15px;
  margin-bottom: 16px;
  border: none;
  background: rgb(117, 128, 138, 0.1);
  border-radius: 10px;

  @media (min-width: 768px){
    width: 80%;
    margin: 0 auto 16px auto;
  }
}
.registraion-page {
   align-items: center;
   justify-content: center;
   display: flex;
   height: 100vh;
   h1 {
      margin-bottom: 1.5rem;
   }
  }

</style>

