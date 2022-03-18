<template>
  <div class="wrapper">
    <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};

</script>

<style>
@font-face {
  font-family: Winston;
  src: url("./assets/css/fonts/Winston-Regular.ttf");
}

@font-face {
  font-family: Winston;
  src: url("./assets/css/fonts/Winston-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: Winston;
  src: url("./assets/css/fonts/Winston-Italic.ttf");
  font-style: italic;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  font-family: Winston, serif;
  user-select: none;
}

.wrapper {
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

a {
  color: #fff;
  text-decoration: none;
}

button{
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #005fb6;
  color: white;
  font-size: 20px;
}

input, select{
  border-radius: 15px;
  border: 2px #A8A8A8CC solid;
  padding: 10px;
}

.approve_button {
  background: rgba(108, 201, 15, 0.8);
}

.cancel_button {
  background: #ad0d0d;
}
</style>
