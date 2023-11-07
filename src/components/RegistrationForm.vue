<script>
  export default {
    name: 'RegistrationForm',
  }
</script>

<template>
 <div id="app">
  <div class="registraion-page">
   <div class="container">
      <div class="row">
         <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card register">
               <h1 id="registration-header">Register</h1>
               <form class="form-group-container">
                  <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required>
                  <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
                  <input v-model="accountNumber" type="text" class="form-control" placeholder="Revolut Account Number" required>
                  <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                  <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                  <button type="submit" class="btn btn-primary" id="register-btn">REGISTER</button>
               </form>
            </div>
         </div>
      </div>
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
  }

  p {
   line-height: 1rem;
}
.card {
   padding: 20px 20px 35px 20px;
   font-size: 1.2rem;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   border-radius: 8px;
   min-width: 330px;
   height: 395px;
}
.form-group-container {
  display: flex;
  flex-direction: column;
   input {
      margin: 20px;
   }
}

#register-btn {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.01rem;
    width: 300px;
    border-radius: 20px;
    color: white;
    background-color: black;
    padding: 11px 0;
    font-weight: 900;
    margin: 15px auto 10px auto;

    cursor: pointer;
    text-align: center;
    border: none;
}

#sign-up-btn {
  font-family: sans-serif;
  margin: 10px;
  color: rgb(79, 85, 241);
  font-weight: 500;
}
.form-control {
  padding: 15px;
  margin-bottom: 15px;
  border: none;
  background: rgb(117, 128, 138, 0.1);
  border-radius: 10px;
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

