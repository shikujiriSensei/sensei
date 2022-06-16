<template>
  <div class="main">
    <div class="header">
      <h1>みんなの失敗談</h1>
    </div>
    <div class="containerBox">
      <div class="leftContainer">
        <div
          v-for="episode in episodes.slice(0, 3)"
          :key="episode.id"
          class="listItemLeft"
        >
          {{ episode.text }}
        </div>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
      <div class="centerContainer">
        <div>
          <img src="../assets/sensei.png" class="sensei" alt="" />
          <h3>しくじり先生</h3>
        </div>
      </div>
      <div class="rightContainer">
        <div
          v-for="episode in episodes.slice(3, 6)"
          :key="episode.id"
          class="listItemRight"
        >
          {{ episode.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
// import InfiniteLoading from "vue-infinite-loading"

export default {
  // components: {
  //   InfiniteLoading,
  // },
  data() {
    return {
      episodes: [],
      episodesData: [],
      start: 0,
      end: 3,
    }
  },
  created() {
    getDocs(collection(db, "shikujiri")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.episodesData.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
  methods: {
    infiniteHandler($state) {
      if (this.end > this.episodesData.length) {
        // 表示するデータが無くなった場合
        $state.complete()
      } else {
        // 表示するデータがある場合
        this.getEpisodes()
        $state.loaded()
      }
    },
    getEpisodes() {
      this.episodes = this.episodes.concat(
        this.episodesData.slice(this.start, this.end)
      )
      this.start = this.start + 3
      this.end = this.end + 3
    },
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
.listItemLeft {
  position: relative;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  font-size: 16px;
  background-color: #eee;
  border-radius: 15px;
}

.listItemLeft:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 15px solid #eee;
}

.listItemLeft p {
  margin: 0;
  padding: 0;
}
.listItemRight {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  font-size: 16px;
  background: #eee;
  border-radius: 15px;
}

.listItemRight:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #eee;
}

.listItemRight p {
  margin: 0;
  padding: 0;
}
</style>
