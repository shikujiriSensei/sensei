<template>
  <div class="list">
    <p class="list">
      これは
      <br />
      皆さんの失敗談を
      <br />
      書くサイトです
    </p>
    <p class="list"><img src="img/sensei.6bb75b98.png" /></p>
  </div>
  <footer id="footer01" class="footer outer-block">
    <ul class="nav">
      <router-link to="/list" class="footer">投稿一覧</router-link>
      <router-link to="/post" class="footer">投稿</router-link>
    </ul>
    <p class="copyright">ばりばりきゃりーん All rights Reserved.</p>
  </footer>
</template>

<style scoped>
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#footer01 {
  position: relative;
  background: #222;
}

#footer01 .logo {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #111;
}

#footer01 .logo a {
  display: inline-block;
}

#footer01 .logo img {
  width: 120px;
}

#footer01 .nav a {
  display: block;
  padding: 0 10px;
  color: #ccc;
}

@media only screen and (min-width: 641px) {
  #footer01 .nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 0;
  }
  #footer01 .nav a:hover {
    color: #ca353b;
  }
}
.copyright {
  color: white;
}
</style>
