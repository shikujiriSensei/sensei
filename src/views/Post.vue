<template>
  <div>
    <h1 class="display-1">Post</h1>
  </div>

  <div class="naiyou">内容</div>
  <textarea name="comment" v-model="naiyou"></textarea>

  <div class="name">ペンネーム</div>
  <input type="text" name="name" size="15" v-model="penName" />
  <button v-on:click="toukou">投稿</button>
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
  height: 100px;
  display: flex;
  justify-content: center;
}
.display-1 div {
  display: table-cell;
  vertical-align: middle;
}
.naiyou {
  color: rgb(10, 10, 10);
  height: 100px;
  display: table;
  text-align: center;
}

.toukoubotton {
  color: rgb(10, 10, 10);
  height: 100px;
  display: table;
  text-align: center;
}
</style>
