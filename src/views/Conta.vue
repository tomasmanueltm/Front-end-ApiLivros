<template>
   <div class="painel-user">
    <header>
      <h2>Bilioteca </h2>
      <p @click="abrirModal">Cadastrar Livro</p>
      <span class="btn" v-on:click="sair">termina sessão</span>
    </header>

    <section class="registros">
      <div class="flex flex-row justify-lg-space-between">
        <h3>Lista de livros</h3>
        <input type="search" name="" id="" placeholder="buscar livros" class="search">
      </div>
      <table class="registro-tabela">
        <tr>
          <th>Livro</th>
          <th>Categoria</th>
          <th>Autor</th>
          <th>Codigo</th>
          <th>Tipo</th>
          <th>Opção</th>
        </tr>
        <tr v-for="livro in livros" v-bind:key="livro.id">
          <td>{{ livro.nome }}</td>
          <td>{{ livro.categoria }}</td>
          <td>{{ livro.autor }}</td>
          <td>#{{ livro.codigo }}</td>
          <td>{{ (livro.ebook == true) ? "Livro": 'Outro' }}</td>
          <td><button v-on:click="editar(livro.id)">editar</button> - <button v-on:click="remover(livro.id)">remover</button> </td>
        </tr>
      </table>
    </section>

<div class="modal flex-modal" v-if="form_cadastrar_none != true">
  <form action="" v-on:submit.prevent="validateBeforeSubmit" ref="formLivro">
    <h1>Novo Livro <i class="fecha" v-on:click="exitModal">x</i></h1>
    <div class="grid-input">
      <label for="">
        <span>Livro</span>
        <input type="text" name="nome" required placeholder="Nome do Livro">
      </label>
      <label for="">
        <span>Categoria</span>
        <select name="categoria" id="" required>
          <option value="" disabled selected>Escolher Categoria</option>
          <option value="Artes">Artes</option>
          <option value="Comedia">Comedia</option>
          <option value="Outros">Outros</option>
        </select>
      </label>
    </div>

    <div class="grid-input-last">
      <label for="">
        <span>Autor</span>
        <input type="text" placeholder="Autor do Livro" name="autor" required>
        </label>
      <label for="">
        <span>Codigo</span>
        <input type="text" placeholder="Referencia" name="codigo" required>
      </label>
      <label for="">
        <span>Ebook</span>
        <select name="ebook" id="">
          <option value="" disabled selected>Este é um livro?</option>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>
      </label>
      <button>Registar</button>
    </div>
  </form>
</div>


  </div>
</template>


    


<script>
// import { required, minLength, email } from "vuelidate/lib/validators";
import api from "../api";


export default {

// name: "User",

   data() {
     return {
       livros: [],
       usuario: '',
       form_cadastrar_none: true,
       
     };
   },
   components: {
   },
   created() {
    //  if(this.refreshSession() != false) 
     this.getLivros();
     this.refreshSession();
   },

  validations: {

  },

  methods: {
    getLivros() {
        api.get("/livros")
        .then((res) => {
         this.livros = res.data;
        }).catch((error) => {
            console.log(error);
        });
    },
    getUsuario(){},

    refreshSession(){
        if(!window.localStorage.getItem("auth") == true) this.$router.push('/'); return false;
    },

    sair(){
        window.localStorage.clear();
        window.location.reload();
    },
    // form
    editar: function(id){
       api.get("/livros/"+id)
        .then((res) => {
         console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    },
    remover: function(id){
        api.get("/livros/"+id)
        .then((res) => {
         window.location.reload();
        }).catch((error) => {
            console.log(error);
        });
    },
    abrirModal(){
        this.form_cadastrar_none = false;
    },

    exitModal(){
        this.form_cadastrar_none = true;
    },
    validateBeforeSubmit() {
        // const dados = ;
        api.post("/livros/", {
            "nome": this.$refs.formLivro.nome.value,
            "categoria": this.$refs.formLivro.categoria.value,
            "autor": this.$refs.formLivro.autor.value,
            "codigo": this.$refs.formLivro.codigo.value,
            "ebook": this.$refs.formLivro.ebook.value
        })
        .then((res) => {
         window.location.reload();
        }).catch((error) => {
            console.log(error);
        });
    }

   
  },

}
</script>

<!--  -->
<style>

/* usuario logado */
.painel-user
{
  width: 100%;
  padding: 1rem 2rem 2rem;
}
.painel-user header
{
  float: left;
  width: 100%;
  display: block;
  padding: 2rem;
  margin: 0 0 2rem;
  position: relative;
  border-radius: 8px;
  background: #ccc;
}
.painel-user header span
{
  float: right;
  cursor: pointer;
  padding: 0 0 5px;
}
.painel-user header p
{
    color: #fff;
    width: 180px;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    text-align: center;
    background: #5a6268;
}
.painel-user section.registros
{
  width: 100%;
  clear: both;
  display: block;
}
.painel-user section.registros div h3
{
    padding: 0 0 1rem;
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
  padding: 2rem 0 1rem;
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
.flex
{
    display: flex;
}







/*  */
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
</style>

