<template>
  <div v-if="loading" class="loading">
    <h4>sendig</h4>
    <div>loading....</div>
  </div>
  <div v-else-if="isEmailSent">Message sent</div>

  <form
    v-else
    id="contactForm"
    @submit.prevent="sendEmail()"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    <label for="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="name"
      v-model="formData.name"
      @input="validateName"
    />
    <p class="error">
      {{ fieldErrors.nameError || "" }}
    </p>

    <label for="email">email:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="email"
      v-model="formData.email"
      @input="validateEmail"
    />
    <p class="error">
      {{ fieldErrors.emailError || "" }}
    </p>

    <label for="message">message:</label>
    <textarea
      id="message"
      name="message"
      placeholder="type message"
      rows="4"
      v-model="formData.message"
      @input="validateMessage"
    ></textarea>
    <p class="error">
      {{ fieldErrors.messageError || "" }}
    </p>

    <button type="submit" value="Submit" :disabled="!isFormValid">Send</button>
  </form>
</template>
          
  <script>
import * as emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      fieldErrors: {
        nameError: "",
        emailError: "",
        messageError: "",
      },
      isFormValid: false,
      loading: false,
      isEmailSent: false,
    };
  },
  methods: {
    sendEmail() {
      this.loading = true;

      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_SERVICEID,
          process.env.VUE_APP_EMAIL_TEMPLATEID,
          "#contactForm",
          process.env.VUE_APP_EMAIL_PUBLICKEY
        )
        .then(
          (response) => {
            this.loading = false;
            this.isEmailSent = true;
            // this.$emit("emailSentSuccess", true);
          },
          (error) => {
            this.loading = false;
            // this.$emit("emailSentError", true);
          }
        );
    },

    updateFormValidity() {
      this.isFormValid =
        this.fieldErrors.nameError === "" &&
        this.fieldErrors.emailError === "" &&
        this.fieldErrors.messageError === "" &&
        this.formData.name.length > 0 &&
        this.formData.email.length > 0 &&
        this.formData.message.length > 0;
    },

    validateName() {
      const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;

      if (this.formData.name.length <= 0) {
        this.fieldErrors.nameError = "fill the name field";
      } else if (!nameRegex.test(this.formData.name)) {
        this.fieldErrors.nameError = "provide surname";
      } else {
        this.fieldErrors.nameError = "";
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.formData.email.length <= 0) {
        this.fieldErrors.emailError = "emil should be filled";
      } else if (!emailRegex.test(this.formData.email)) {
        this.fieldErrors.emailError = "invalid email";
      } else {
        this.fieldErrors.emailError = "";
      }
    },
    validateMessage() {
      if (this.formData.message.length <= 0) {
        this.fieldErrors.messageError = "mess should be filled";
      } else if (this.formData.message.length < 20) {
        this.fieldErrors.messageError = "invalid mess";
      } else {
        this.fieldErrors.messageError = "";
      }
    },
  },
  watch: {
    formData: {
      handler: "updateFormValidity",
      deep: true,
    },
  },
};
</script>
      
  <style scoped>
form {
  grid-area: form;
  width: 100%;
  max-width: 650px;
  margin-top: 1em;
  background: rgb(250, 186, 226);
}

label {
  margin-top: 1em;
  font-weight: bold;
  font-size: 1rem;
}

input,
textarea {
  display: block;
  width: 100%;
  margin: 0.3em 0 0;
  padding: 0.5em 0.7em;
  border: 2px solid transparent;
  border-radius: 0.8em;
  color: darkblue;
  font-size: 0.8rem;
  transition: 0.5s;
}

input::placeholder,
textarea::placeholder {
  color: grey;
}

input:focus,
textarea:focus {
  outline: none;
  border: 2px solid darkblue;
}

textarea {
  resize: none;
}

button {
  margin-top: 0.2em;
}

.error {
  display: block;
  min-height: 1.4rem;
  padding: 0.2em 0.4em;
  margin-bottom: 0.2em;
  font-size: 0.7rem;
  color: darkred;
}

.loading {
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  height: 100%;
  text-align: center;
}
</style>
      