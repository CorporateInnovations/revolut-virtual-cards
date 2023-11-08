<script>
export default {
  name: "LogIn",
  methods: {
    navigateToRegistration() {
      this.$router.push("/registration");
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="log-in-cards login">
      <h1 class="card-header">Login</h1>
      <form class="form-group-container">
         <div class="form-input-icons">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <input data-lpignore="true" v-model="emailLogin" type="email" class="form-control" placeholder="Email" required/>
         </div>
         <div class="form-input-icons">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            <input data-lpignore="true" v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required/>
         </div>
        <button type="submit" class="btn btn-primary form-btn">LOGIN</button>
      </form>
      <button id="create-account-btn" @click="navigateToRegistration">Create account</button>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

   #create-account-btn {
      font: 500 1.3rem sans-serif;
      margin: 10px;
      color: rgb(79, 85, 241);
      background: inherit;
      border: none;
      cursor: pointer;
   }

   
   .form-control {
      padding: 15px;
      border: none;
      background: rgba(117, 128, 138, 0.1);
      border-radius: 10px;
      width: 80%;
      margin-left: 7px;

         @media (min-width: 768px) {
            width: 80%;
         }
   }
   .form-input-icons{
      display: flex;
      align-items: center;
      margin: 0 15px 15px 15px;

      @media(min-width: 768px){
         margin: 10px auto;
         min-width: 600px;
         padding-left: 65px;
      }
   }
   .login-page {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;

         h1 {
            margin-bottom: 1.5rem;
         }
      }
</style>
