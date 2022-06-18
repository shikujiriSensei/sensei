<template>
  <div class="list">
    <h1>しくじり先生</h1>
    <p class="list">
      これは
      <br />
      皆さんの失敗談を
      <br />
      書くサイトです
    </p>
    <p class="list"><img src="img/sensei.6bb75b98.png" /></p>
  </div>
  <div>
    <router-link to="/list" class="footer">投稿一覧</router-link>
    <router-link to="/post" class="footer">投稿</router-link>
  </div>
</template>

<style scoped>
h1 {
  max-width: 800px;
  padding-top: 50px;
  text-align: center;
  font-size: 60px;
  border-bottom: solid;
}
p {
  margin: 0;
  padding: 30px 0;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
}
p img {
  margin: auto;
}
footer {
  position: fixed;
  text-align: center;
  background-color: black;
}
</style>
