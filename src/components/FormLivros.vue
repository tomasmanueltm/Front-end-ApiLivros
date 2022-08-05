<template>
<div class="modal flex-modal">
  <form action="">
    <h1>Novo Livro <i class="fecha" @click="sair_model">x</i></h1>
    <div class="grid-input">
      <label for="">
        <span>Livro</span>
        <input type="text" placeholder="Nome do Livro">
      </label>
      <label for="">
        <span>Categoria</span>
        <select name="" id="">
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
        <input type="text" placeholder="Autor do Livro">
        </label>
      <label for="">
        <span>Codigo</span>
        <input type="text" placeholder="Referencia">
      </label>
      <label for="">
        <span>Ebook</span>
        <select name="" id="">
          <option value="" disabled selected>Este é um livro?</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </label>
      <button>Registar</button>
    </div>
  </form>
</div>
</template>

<script>

export default {
  name: 'FormLivros',

  data: () => ({
    //
  }),
};
</script>

<style>

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