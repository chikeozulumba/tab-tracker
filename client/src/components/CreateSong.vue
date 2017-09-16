<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field label="Title"  required :rules="[required]"  v-model="song.title" ></v-text-field>

        <v-text-field label="Artist"  required :rules="[required]"  v-model="song.artist"></v-text-field>

        <v-text-field label="Genre"  required :rules="[required]"  v-model="song.genre"></v-text-field>

        <v-text-field label="Album"  required :rules="[required]"  v-model="song.album"></v-text-field>

        <v-text-field label="Album Image"  required :rules="[required]"  v-model="song.albumImage"></v-text-field>

        <v-text-field label="Youtube ID"  required :rules="[required]"  v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field label="Lyrics" multi-line  required :rules="[required]"  v-model="song.lyrics"></v-text-field>
        <v-text-field label="Tab" multi-line  required :rules="[required]"  v-model="song.tab"></v-text-field>
      </panel>

      <div class="danger-alert mr-1 ml-1 mt-1 mb-1" v-if="error">
        {{error}}
      </div>
      <v-btn light dark large @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>


