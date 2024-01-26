<template>
 <form @submited.prevent="handleSubmit">
    <label>Email</label>
    <input type="email:" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">

    <label>Role:</label>
        <select v-model="role">
        <option value="developer">Web developer</option>
        <option value="designer">Web designer</option>    
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">

    <div v-for="skill in skills" :key="skill" class="pill" >
       <span @click="removeSkill(skill)"> {{ skill }} </span>
    </div>
    
    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
        <button>Create an account</button>
    </div>

    <!-- <div>
        <input type="checkbox" value="shaun" v-model="names">
        <label>Shaun</label>
    </div>
    <div>
        <input type="checkbox" value="yoshi" v-model="names">
        <label>Yoshi</label>
    </div>
    <div>
        <input type="checkbox" value="mario" v-model="names">
        <label>Mario</label>
    </div> -->

 </form>
 <p>Email: {{ email }}</p>
 <p>Password: {{ password }}</p>
 <p>Role: {{ role }}</p>
 <p>Terms: {{ terms }}</p>
 <!-- <p>Names: {{ names }}</p> -->

</template>

<script>

export default {
  name: 'SignupForm',
  data() {
    return{
        email: '',
        password: '',
        role: 'designer',
        terms: false,
        // names: []
        tempSkill: '',
        skills: []
    }
  },
  methods: {
    addSkill(e){
        if (e.key === ',' && this.tempSkill){
            if (!this.skills.includes(this.tempSkill)){

            }
            this.skills.push(this.tempSkill)
            this.tempSkill = ''
        }
    },
    removeSkill(skill){
        this.skills = this.skills.filter(item => item !== skill)
    },
    handleSubmit(){
        // validate passwordd
        
    }
  }
  
}
</script>

<style>
body{
    background-color: rgb(235, 235, 235);
}
form{
    max-width: 420px;
    margin: 30px auto;
    padding: 40px;
    background: white;
    text-align: left;
}
input, select{
    display: block;
    margin: 20px 0 30px;
    width: 90%;
    padding: 1em;
    border: 0;
    border-bottom: 1px solid rgb(192, 192, 192);
}
label{
    font-weight: bold;
    text-transform: uppercase;
    color: grey;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top:2px;
    border: 1px solid grey;
    margin-top: 20px;
}
.pill{
    display: inline-block;
    margin: 0px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    color: #777;
    cursor: pointer;
}
.submit{
    margin: 0 auto;
    width: 100%;
}
.submit button{
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: rgb(22, 148, 226);
    color: white;
    cursor: pointer;
}
</style>