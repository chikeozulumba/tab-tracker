<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <router-link slot="action" :to="{name: 'songs-create'}">
          <v-btn fab class="white accent-2" dark absolute medium right middle>
            <v-icon>
              add
            </v-icon>
          </v-btn>
        </router-link>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>

              <v-btn class="btn-view blue-grey darken-2" @click="navigateTo({
                name: 'song-view',
                 params: {songId: song.id
              }})">View Song</v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImage" class="album-image">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // Do request
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;;
}
  .album-image {
    width: 70%;
    margin: 0 auto;
  }

.song-title {
  font-size: 30px
}

.song-artist {
  font-size: 24px
}

.song-genre {
font-size: 18px
}

.btn-view {
  color: #fff
}
</style>
