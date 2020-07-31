<template>
 <div>
 <form class="login" @submit.prevent>
      <div class="h2">Login</div>
      <div class="form-group">
        
        <label for="username">Username</label> 
        <input type="text" id="username" placeholder="Username" v-model="username">   
      </div>
      <div class="form-group">
        
        <label for="Password">Password</label>
        <input type="password" id="Password" placeholder="Password" v-model="password">    
      </div>
      <div class="checkbox-container">
        <div class="text-checkbox">Remember me <input type="checkbox" id="rememberme" v-model="rememberMe"></div>
      </div>
      <div class="button-area">
        <button class="btn btn-primary pull-right" @click="login()" >Login</button>
      </div>
      
    </form>
  
 </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      rememberMe: false,
      username: "",
      password: "",
      flag: false,
      message: "Incorrect Username or Password"
    };
  },

  methods: {
    isRememberMe() {
      return this.rememberMe === true;
    },
    // toParent(){
    //     this.$emit('childToParent', true)
    // },

    login() {
      try{
          const url = 'http://127.0.0.1:8000/api/token/'
          axios.post(url, {
            username: this.username,
            password: this.password
          })
          .then(response => {
              this.flag = true
              //console.log(response)
              //this.$emit('childToParent', true)
              this.$cookies.set("token", response.data.access)
              location.reload();
           

          })
        }catch(error){
          alert(error)
          
        }
    },
    register() {
      alert("Coming soon ...");
    }
  }
};
</script>
