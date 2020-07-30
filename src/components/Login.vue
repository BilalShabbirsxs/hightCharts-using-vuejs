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
      password: ""
    };
  },

  methods: {
    isRememberMe() {
      return this.rememberMe === true;
    },
    toParent(){
        this.$emit('childToParent', true)
    },
    login() {
      const url = 'https://api.jsonbin.io/b/5f228e0a250d377b5dc6c3d9'
      axios
        .get(url, {
          headers:{
              'secret-key': '$2b$10$FKh4sUigY15yRqFs1RwXNeumUc/lK0dJiE59sTv0OnfggitiKRbpK'
          }
        })
        .then(response => {
            //console.log(response)
            if(response.data.username===this.username && response.data.password===this.password){
                //this.$emit('childToParent', true)
                this.$cookies.set("user", "2h")
                location.reload();
            }else{
                alert("Incorrect email or password");
            }
        })
        .catch(err => {
          alert(err);
        });
    },
    register() {
      alert("Coming soon ...");
    }
  }
};
</script>
