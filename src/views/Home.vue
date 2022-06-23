<template>
  <div>
    <img class="background" src="../assets/newspaper.jpg" alt="" />
    <h1>しくじり先生</h1>
    <p>
      これは
      <br />
      皆さんの失敗談を
      <br />
      書くサイトです
    </p>
    <p><img src="img/sensei.6bb75b98.png" /></p>
  </div>
</template>

<style scoped>
div {
  min-height: 100vh;
}
.background {
  position: fixed;
  width: auto;
  opacity: 0.2;
}
h1 {
  max-width: 800px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 60px;
  border-bottom: solid;
  position: relative;
  top: 100px;
}
p {
  padding: 50px 0;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  position: relative;
  top: 50px;
}
img {
  margin: auto;
  position: relative;
  top: -50px;
}
</style>
