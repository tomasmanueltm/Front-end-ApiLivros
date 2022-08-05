<template>
  <v-container class="header">
      <h1>Login</h1>
        <form action="#" class="form flex column">
          <label for="">
            <span>Email</span>
            <input 
                id="email"
                type="email"
                placeholder="joaosilva@email.com">
          </label>
          
          <label for="">
            <span>Senha</span>
            <input
                id="password"
                type="password"
                placeholder="Digite sua senha">
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
</template>

<!--  -->
<script>
export default {
  name: "login",

  data() { return {}},
  
}
</script>

<!--  -->
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
  text-align: center;
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
  margin: 0 .6rem 0 0;
  text-decoration: none;
}
.link a::after
{
  content: " |";
  margin: 0 0 0 .1rem;
}
.link a:last-child::after
{
  content: "";
  margin: 0px;
}
</style>