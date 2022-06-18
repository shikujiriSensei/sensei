<template>
  <div class="main">
    <div class="header">
      <h2>みんなの失敗談</h2>
    </div>
    <div class="containerBox">
      <div class="leftContainer">
        <div
          v-for="episode in episodes.slice(0, 7)"
          :key="episode.id"
          class="listItemLeft"
        >
          <h4 class="name">{{ episode.penName }} さんの失敗談</h4>
          <br />
          {{ episode.text }}
        </div>
      </div>
      <div class="centerContainer">
        <img src="../assets/sensei.png" class="sensei" alt="" />
        <h3>しくじり先生</h3>
      </div>
      <div class="rightContainer">
        <div
          v-for="episode in episodes.slice(7, 14)"
          :key="episode.id"
          class="listItemRight"
        >
          <h4 class="name">{{ episode.penName }} さんの失敗談</h4>
          <br />
          {{ episode.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      episodes: [],
    }
  },
  created() {
    getDocs(collection(db, "shikujiri")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.episodes.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 170px;
  z-index: 1;
}
.header {
  position: fixed;
  width: 300px;
  top: 150px;
  padding-top: 20px;
  text-align: center;
  border-bottom: 1.5px solid black;
}
.containerBox {
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  width: 70vw;
}
.leftContainer {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-right: 150px;
}
.centerContainer {
  position: fixed;
  top: 60%;
}
.centerContainer h3 {
  text-align: center;
}
.sensei {
  display: fixed;
  top: 1000px;
  max-height: 200px;
  animation: fadeIn 2s ease 0.3s 1 normal;
}
.rightContainer {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: 150px;
}
.listItemLeft {
  position: relative;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: black;
  font-size: 16px;
  background: white;
  border: solid 3px black;
  box-sizing: border-box;
  border-radius: 15px;
}

.listItemLeft:before {
  content: "";
  position: absolute;
  top: 50%;
  right: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-left: 12px solid #fff;
  z-index: 2;
}
.listItemLeft:after {
  content: "";
  position: absolute;
  top: 50%;
  right: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-left: 14px solid black;
  z-index: 1;
}

.listItemLeft p {
  margin: 0;
  padding: 0;
}
.name {
  text-align: center;
}
.listItemRight {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  font-size: 16px;
  background: #fff;
  border: solid 3px black;
  box-sizing: border-box;
  border-radius: 15px;
}

.listItemRight:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-right: 12px solid #fff;
  z-index: 2;
}
.listItemRight:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-right: 14px solid black;
  z-index: 1;
}
.listItemRight p {
  margin: 0;
  padding: 0;
}
</style>
