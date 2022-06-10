<template>
  <div class="main">
    <div class="header">
      <h1>みんなの失敗談</h1>
    </div>
    <div class="containerBox">
      <div class="leftContainer">
        <div class="container">
          <span class="leftFukidashi"></span>
          <div class="listItem">
            JavaScriptは、初心者にもおすすめできる言語であり、基本的なプログラミング言語の1つです。Androidのアプリケーション、銀行の基幹システム、WebサイトやWebサービス等、名前を挙げるときりがない程のシステムに使用されています。
          </div>
        </div>
        <div class="container">
          <span class="leftFukidashi"></span>
          <div class="listItem">
            Javaは、WebアプリケーションやAndroidアプリ、組み込み系システムなど様々な分野で使用されているプログラミング言語です。プログラミング言語の祖とも言えるC++やC言語を元として開発された言語です。
          </div>
        </div>
        <div class="container">
          <span class="leftFukidashi"></span>
          <div class="listItem">
            PHP（ピーエイチピー）は、Webアプリケーションの開発に用いられている歴史のあるプログラミング言語です。世界的に数多く使用されている言語なので、インターネット上に情報が多く、日本語での書籍もたくさん出版されています。
          </div>
        </div>
      </div>
      <div class="centerContainer">
        <div>
          <img src="../assets/sensei.png" class="sensei" alt="" />
          <h3>しくじり先生</h3>
        </div>
      </div>
      <div class="rightContainer">
        <div class="container">
          <span class="rightFukidashi"></span>
          <div class="listItem">
            C言語は様々なアプリを作成することができるプログラミング言語です。プログラミング言語の祖と呼ばれており、1972年にブライアン・カーニハンとデニス・リッチーによって開発されました。
          </div>
        </div>
        <div class="container">
          <span class="rightFukidashi"></span>
          <div class="listItem">
            Perl（パール）は、ラリー・ウォールによって開発された約29年の歴史を持つ高性能かつ機能豊富なプログラミング言語です。C言語やBASIC、Pythonなどの利点を継承し、CGIのほか、グラフィックスや文書処理、データベースおよびネットワーク管理、大量のデータの分析・変換など、様々な開発で汎用的に利用されています。
          </div>
        </div>
        <div class="container">
          <span class="rightFukidashi"></span>
          <div class="listItem">
            Swift（スウィフト）は、Apple社が開発したプログラミング言語で、iOSおよびmacOS等で利用できます。iOSやmacOSで利用できる、iPhoneアプリやARアプリを作りたい人におすすめのプログラミング言語です。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.header {
  padding-top: 20px;
  text-align: center;
}
.containerBox {
  display: flex;
  justify-content: space-evenly;
}
.leftContainer {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.centerContainer {
  padding-top: 100px;
  display: flex;
  align-items: center;
  /* background-color: aqua; */
}
.centerContainer h3 {
  text-align: center;
}
.sensei {
  padding: 0 100px;
  height: 200px;
}
.rightContainer {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.container {
  position: relative;
  margin: 1em 0 1em 20px;
  border-radius: 10px;
  background: #eee;
  font-size: 100%;
  padding: 20px;
}
.leftFukidashi {
  position: absolute;
  top: 50%;
  right: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 20px solid #eee;
  width: 0;
  height: 0;
}
.rightFukidashi {
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 20px solid #eee;
  width: 0;
  height: 0;
}
.listItem {
  padding: 20px 0;
}
</style>
