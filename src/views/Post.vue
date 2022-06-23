<template>
  <img class="background" src="../assets/postit.jpg" alt="" />
  <div class="sensei">
    <img src="../assets/senseiUp.png" class="senseiImg" alt="" />
  </div>
  <div class="main">
    <div>
      <h1 class="display-1">投稿フォーム</h1>
      <div class="display-2">
        <p class="display-7">しくじった経験、お気軽にご投稿ください。</p>
        <p class="display-7">
          どんな思いも、しくじり先生が受け止めてくれます。
        </p>
      </div>
    </div>
    <div class="dainaiyou">
      <div class="naiyou">しくじり内容：</div>
      <div class="naiyourei"></div>
    </div>
    <div class="naiyounonakami">
      <textarea
        placeholder="ここには自由にしくじりを記入してください。(例)朝、電車に乗り遅れて、授業に遅刻した。"
        name="comment"
        rows="12"
        cols="100"
        v-model="naiyou"
      ></textarea>
    </div>

    <div class="name">ペンネーム：</div>
    <div class="namerei"></div>
    <div class="namenonakami">
      <input
        type="text"
        size="73"
        name="penname"
        v-model="penName"
        placeholder="(例)しくじり先生"
      />
    </div>

    <div class="toukou">
      <button class="btn_hover3" v-on:click="toukou">送信</button>
    </div>
  </div>
  <div>
    <h1 class="display-3"></h1>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
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

<style scoped>
.main {
  position: relative;
  width: auto;
  padding: 10vh 5vw;
  margin-bottom: 100px;
  border: 5px solid #333333;
  border-radius: 10px;
  margin: 25vh 15vw;
  background-color: #fff;
  z-index: 2;
}
.background {
  position: fixed;
  width: 100vw;
  opacity: 0.1;
  z-index: 1;
}
.display-1 {
  color: rgb(10, 10, 10);
  height: 80px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  margin-bottom: 85px;
  padding: 1rem 2rem;
  border-left: 5px solid #000;
  background: #f4f4f4;
}
.display-1 div {
  display: table-cell;
  vertical-align: middle;
}
.sensei {
  position: relative;
  top: 25vh;
  left: 20vw;
  display: flex;
  justify-content: center;
  animation-name: fadeDownAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes fadeDownAnime {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 2;
    transform: translateY(0);
  }
}
.senseiImg {
  width: 20vw;
}
.display-2 p {
  height: 4px;
  display: flex;
  font-size: 17px;
  justify-content: center;
  line-height: 1.7;
  align-items: center;
  margin-bottom: 100px;
}

.display-7 {
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}

.dainaiyou {
  white-space: nowrap;
}

.naiyou {
  color: rgb(10, 10, 10);
  font-size: 17px;
  display: flex;
  font-weight: 900;
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
textarea {
  font-size: 20px;
  margin-bottom: 85px;
  padding: 25px;
}
input {
  font-size: 20px;
  margin-bottom: 100px;
  padding: 20px;
}

.name {
  color: rgb(10, 10, 10);
  display: flex;
  font-size: 17px;
  font-weight: 900;
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
  width: 100%;
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
textarea {
  width: 100%;
}
input {
  width: 100%;
}
@media screen and (max-width: 640px) {
  .display-1 {
    font-size: 20px;
  }
  .btn_hover3 {
    padding: 20px 60px;
  }
}
</style>
