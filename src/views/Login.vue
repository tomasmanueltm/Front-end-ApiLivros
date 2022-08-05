<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col sm="7" class="d-flex justify-content-center align-items-center left-login">
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
                name="email"
                placeholder="usuario@dominio.com"
                autocomplete="off"
                v-model.trim="$v.form.email.$model"
                :state="getValidation('email')"
              ></b-form-input>
            </b-form-group>

            <b-form-group
                label="Senha"
                label-for="password">
                            
              <b-form-input
                id="password"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                v-model.trim="$v.form.password.$model"
                :state="getValidation('password')"></b-form-input>
                </b-form-group>
            

            <b-button
              type="button"
              variant="primary"
              block
              @click="validarLogin">
              <i class="fas fa-sign-in-alt"></i> Entrar
            </b-button>
            <br/>
           <b-form-group>
                <label class="d-flex justify-content-between">
                    <small><a href="#">Esqueceu sua senha?</a></small>
                </label>
            </b-form-group>

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
      <!-- <img src="" class="img-login" /> -->
    </b-col>
  </b-row>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import api from "../api";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
    
    }
  }, 
 created() {
     this.refreshSession();
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
    validarLogin() {
      this.$v.$touch();
      if(this.$v.$error) {
        return;
      }
      if(!this.$v.$error)
      {
        this.login(this.$v.form.$model.email, this.$v.form.$model.password);
      }
    },

    login(emailInput, senhaInput)
    {
        api.post("/auth/login/", { email: emailInput, password:senhaInput})
        .then((res) => {
          this.authToken(res.data.access_token);
        }).catch((error) => {
            console.log(error);
        });

    },

    authToken(token)
    {
        window.localStorage.setItem("auth", token);
        window.location.reload();
    },

    register() {},
    refreshSession(){
        if(localStorage.getItem("auth").lenght != 0 )
        {
            this.$router.push('/user');
        }
    },


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

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #F2F2F2;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}

</style>
