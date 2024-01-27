<!-- <template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal  theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    <h1>Hello</h1>
    <p>This is slot</p>
    </Modal>
  </div>
  <button @click="toggleModal">Show modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: 'My first app',
      header: 'My first Vue App!',
      text: 'Register now and test it for free!',
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: blueviolet;
}
</style> -->


<template>
  <!-- <SignupForm/> -->
  <div>Hello, testing deployments</div>
  <ContactForm />
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  name: "App",
  components: { SignupForm, ContactForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
