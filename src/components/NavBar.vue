<template>
  <header class="header">
    <div class="title">
      <h1>しくじり先生</h1>
    </div>
    <div class="nav__bar">
      <div class="left-items">
        <router-link to="/" class="nav__logo nav__link">Home</router-link>
      </div>
      <div class="nav__items">
        <router-link to="/list" class="nav__item nav__link"
          >失敗談一覧</router-link
        >
        <router-link to="/post" class="nav__item nav__link">投稿</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 3;
}
.title {
  position: fixed;
  width: 100%;
  top: 0;
}
.title h1 {
  font-size: 40px;
  background-color: white;
  padding: 30px 0;
  margin: 0;
  text-align: center;
}
.div {
  position: fixed;
  width: 100%;
}
.left-items {
  display: flex;
}
.nav__bar {
  position: fixed;
  width: 100%;
  top: 120px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: black;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}
.nav__link:visited {
  color: #eee;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.nav__logo {
  width: auto;
  padding-left: 10px;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 100px;
  border-left: 1px solid #eee;
}
</style>
