<template>
  <!-- login -->
  <v-container class="header">
      <h1>Login</h1>
        <form action="#" class="form flex column">
          <label for="">
            <span>Email</span>
            <input 
                id="email"
                type="email"
                placeholder="joaosilva@email.com"
                autocomplete="off"
                v-model.trim="$v.form.email.$model"
                :state="getValidation('email')">
          </label>
          
          <label for="">
            <span>Senha</span>
            <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                v-model.trim="$v.form.password.$model"
                :state="getValidation('password')">
          </label>
          
           <b-button
              type="button"
              variant="primary"
              block
              class="btn"
              @click="login">
              <i class="fas fa-sign-in-alt"></i> Entrar
            </b-button>

            <div class="link">
              <a href="">Esquece senha</a>
              <a href="">Nova Conta</a>
            </div>
          <div class="errors">
            <span></span>
          </div>
          </form>
</v-container>
  <!-- listar -->
  <!--  -->

<!-- 
 -->








<!-- <b-row class="vh-100 vw-100 row-login">
    <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <b-form>
          <b-form-group
            label="E-mail"
            label-for="email"
            >
              <b-form-input
                id="email"
                type="email"
                placeholder="joaosilva@email.com"
                autocomplete="off"
                v-model.trim="$v.form.email.$model"
                :state="getValidation('email')"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-for="password"
            >
              <label class="d-flex justify-content-between">
                Senha
                <small><a href="#">Esqueceu sua senha?</a></small>
              </label>

              <b-form-input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                v-model.trim="$v.form.password.$model"
                :state="getValidation('password')"
              ></b-form-input>
            </b-form-group>

            <b-button
              type="button"
              variant="primary"
              block
              @click="login">
              <i class="fas fa-sign-in-alt"></i> Entrar
            </b-button>

            <hr>

            <b-button
              type="button"
              variant="outline-secondary"
              block
              @click="register">
              <i class="fas fa-user-plus"></i> Não tenho conta
            </b-button>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="" class="img-login" />
    </b-col>
  </b-row> -->




</template>





<script>
	
  import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "login",

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },

  validations: {
    form: {
      email: {
        required,
        email
      },

      password: {
        required,
        minLength: minLength(6)
      },
    }
  },

  methods: {
    login() {
      this.$v.$touch();
      if(this.$v.$error) {
        return;
      }
    },

    register() {},

    getValidation(field) {
      if(this.$v.form.$dirty === false) {
        return null;
      }

      return !this.$v.form[field].$error;
    }
  }
}
</script>
<style>

.header
{
  width: 45%!important;
  padding: 1rem;
  margin: 0 auto;

  /* background: red; */
}
.header h1
{
  text-align: left;
  padding: 1rem 0 .5rem;
}

.flex
{
  display: flex;
}
.column
{
  flex-direction: column;
}
.row
{
  flex-direction: row;
}
.flex-center
{
  justify-content: center;
}
.flex-space
{
  justify-content: space-between;
}

.form label
{
  display: block;
  padding: 1rem 0px 5px;
}
.align-center
{
  align-items: center;
}
.align-normal
{
  align-items: normal;
}
.form label input
{
  width: 100%;
  padding: 8px;
  display: block;
  border-radius: 4px;
  border: 1px solid #666;
}
.form label span
{
  padding: 15px 0px;
}

.btn
{
  clear: both;
  width: 30%;
  /* float: left; */
  margin: 1rem 0;
  padding: .6rem 1rem;
  border-radius: 4px;
  outline: 1px solid #444;
}
.btn:hover
{
  color: #fff;
  background: #333;
}
/* button.btn, .link
{
  margin: 0 auto;
} */

.link a
{
  margin: 0 2rem 0 0;
  text-decoration: none;
}
.link a::after
{
  content: " |";
  margin: 0 0 0 1rem;
}
.link a:last-child::after
{
  content: "";
  margin: 0px;
}




.modal
{
  top: 0px;
  left: 0px;
  z-index: 4;
  width: 100%;
  display: none;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, .5)
}
.flex-modal
{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; 
}

.modal.flex-modal form
{
  /* height: 400px; */
  width: 600px;
  padding: 2rem;
  position: relative;
  grid-gap: 1rem!important;
  background: #fff;
}
.modal.flex-modal form div
{
  margin: 1rem 0 1.3rem;

}
.modal.flex-modal form h1
{
  position: relative;
}
.modal.flex-modal form h1 i
{
  top: -1rem;
  right: 0px;
  cursor: pointer;
  font-size: 12pt;
  font-style: normal;
  position: absolute;
}

.modal.flex-modal form div label
{
  width: 100%;
}
.grid-input
{
  display: grid;
  grid-template-columns: 1fr .5fr;
  grid-gap: 1rem;
}

.grid-input-last
{
  display: grid;
  grid-template-columns: 1fr .4fr .5fr;
  grid-gap: 1rem;
}

.modal.flex-modal form div label span
{
  padding: 0 0 .7rem;
}
.modal.flex-modal form div label input, .modal.flex-modal form div label select
{
  width: 100%;
  border-radius: 5px;
  padding: .5rem .3rem;
  border: 1px solid #ccc;
}

.modal.flex-modal form button
{
  clear: both;
  float: left;
  margin: 1rem 0 0;
  border-radius: 4px;
  padding: .6rem 1rem;
  border: 1px solid #444;
}
.modal.flex-modal form div button:hover
{
  color: #fff;
  background: #333;
}

/* usuario logado */
.painel-user
{
  width: 100%;
  padding: 1rem;
}
.painel-user header
{
  width: 100%;
  padding: 2rem;
  margin: 0 0 2rem;
  border-radius: 8px;
  background: #ccc;
}
.painel-user header span
{
  float: right;
  cursor: pointer;
  padding: 0 0 5px;
}
.painel-user section.registros
{
  width: 100%;
}
.painel-user section.registros div input
{
  outline: none;
  border: none;
  padding: 5px 0 0;
  border-bottom: 1px solid #333;
}

.registro-tabela
{
  width: 100%;
  padding: 1rem 0;
}
.registro-tabela tr
{
  width: 100%;
}
.registro-tabela tr th
{
  padding: 0 0 10px;
  text-align: left;
}

.registro-tabela tr td
{
  padding: 0 0 .4px;
  border-bottom: 1px solid #ccc;
}


/* model cadastro */
/* modal registrar livros */















</style>