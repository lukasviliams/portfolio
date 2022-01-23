<template>
  <div class="contact_form_parrent">
    <div class="content_container">
      <div class="content_container-header">
        <p class="font-h2">
          Contact me
        </p>
      </div>
      <div class="content_container-content">
        <vee-form
          class="content_container-form" 
          :validation-schema="schema"
        >
          <label
            for="name"
          >Name</label>
          <vee-field
            id="name"
            type="name"
            placeholder="Jane Apleseed"
            name="name"
            class="input_text"
          />
          <ErrorMessage
            name="name"
            class="red"
          />
          <label
            for="email"
          >Email address</label>
          <vee-field
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            class="input_email"
          />
          <ErrorMessage
            name="email"
            class="red"
          />
          <label
            for="textarea"
          >Message</label>
          <textarea
            id="textarea"
            name="textarea"
            placeholder="How can I help"
            class="input_textarea"
          />
          <button class="btn-primary">
            Send message
          </button>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ContactForm',
  data(){
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email:'required|min:3|max:100|email',
      }
    }
  }

}
</script>

<style scoped>
.contact_form_parrent {
  margin-bottom: 10vh;
}
.content_container {
  margin: 0 8vw 6vh 8vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content_container-header{
  width: 49%;
  display: flex;
  justify-content: flex-start;
}
.content_container-content {
  width: 51%;
  display: flex;
  justify-content: flex-start;
}
.content_container-form {
  display: flex;
  flex-direction: column;
}
form {
  width: 100%;
}
input {
  height: 4.8rem;
}
textarea {
  height: 9.6rem;
  resize: none;
}
input, textarea {
  position: relative;
  background-color: var(--light-gray);
  border: none;
  margin-bottom: 2.5rem;
  transition: all .3s ease-in-out;
}
input:focus, textarea:focus {
  outline: none;
}
input::placeholder, textarea::placeholder {
position: absolute;
left: 3%;
top: 15%;

font-size: 13px;
font-family: 'Public Sans', sans-serif;
line-height: 30px;
letter-spacing: 0;
}
input:focus::placeholder, textarea:focus::placeholder {
transition: all .3s ease-in-out;
color: transparent;
}
label {
  font-size: 13px;
  font-family: 'Public Sans', sans-serif;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 1rem;
}
.btn-primary{
  width: 15.2rem;
  justify-content: center;
}
.red {
  color: var(--bright-red);
}
/* ***********************Responsive design************************** */
@media only screen and (max-width:768px) {
  .content_container {
    flex-direction: column;
  }
  .content_container-header{
  width: 100%;
  margin-bottom: 3rem;
}
.content_container-content {
  width: 100%;
}
}
</style>