<template>
  <div
    style="
      padding: 120px;
      margin-bottom: 100px;
      border: 5px solid #333333;
      border-radius: 10px;
      margin: 12%;
    "
  >
    <div>
      <h1 class="display-1">投稿フォーム</h1>
      <p1 class="display-2"
        >しくじった経験、お気軽にご投稿ください。<br />どんな思いも、しくじり先生が受け止めてくれます。</p1
      >
    </div>

    <div class="naiyou">しくじり内容</div>
    <div class="naiyourei">(例)朝、電車に乗り遅れて、授業に遅刻した。</div>
    <div class="naiyounonakami">
      <textarea name="comment" rows="15" cols="100" v-model="naiyou"></textarea>
    </div>

    <div class="name">ペンネーム</div>
    <div class="namerei">(例)しくじり先生</div>
    <div class="namenonakami">
      <input type="text" name="name" v-model="penName" />
    </div>

    <div class="toukou">
      <button class="btn_hover3" v-on:click="toukou">投稿</button>
    </div>

    <div class="sensei">
      <img src="../assets/sensei.png" alt="" width="100" height="200" />
    </div>
  </div>
  <div>
    <h1 class="display-3">しくじり先生</h1>
  </div>
</template>

<script>
// JS の領域
import { collection, addDoc } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "@/firebase"
export default {
  data() {
    return {
      naiyou: "",
      penName: "",
    }
  },
  methods: {
    toukou() {
      addDoc(collection(db, "shikujiri"), {
        text: this.naiyou,
        penName: this.penName,
      })
      this.naiyou = ""
      this.penName = ""
    },
  },
}
</script>

<style>
/* CSS の領域 */

.display-1 {
  color: rgb(10, 10, 10);
  height: 80px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  font-family: "Ludica Sans Unicode";
}
.display-1 div {
  display: table-cell;
  vertical-align: middle;
}
.display-2 {
  height: 130px;
  display: flex;
  font-size: 17px;
  justify-content: center;
  line-height: 1.7;
  font-family: "Ludica Sans Unicode";
  align-items: center;
}

.naiyou {
  color: rgb(10, 10, 10);
  font-size: 17px;
  display: flex;
  justify-content: center;
  font-weight: 900;
}

.naiyou div {
  display: table-cell;
  vertical-align: middle;
}
.naiyourei {
  color: gray;
  font-size: 13px;
  display: flex;
  justify-content: center;
}
.naiyounonakami {
  display: flex;
  justify-content: center;
}

.name {
  color: rgb(10, 10, 10);
  display: flex;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
}
.name div {
  display: table-cell;
  vertical-align: middle;
}
.namerei {
  color: gray;
  font-size: 13px;
  display: flex;
  justify-content: center;
}
.namenonakami {
  display: flex;
  justify-content: center;
}

.toukou {
  display: flex;
  justify-content: center;
  padding: 60px 30px;
}
.btn_hover3 {
  color: #fff;
  padding: 30px 100px;
  border: black;
  background: black;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.btn_hover3:hover {
  background-color: gray;
}
.sensei {
  text-align: right;
}

.display-3 {
  display: flex;
  justify-content: center;
}
</style>
