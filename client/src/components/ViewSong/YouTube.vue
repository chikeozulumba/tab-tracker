<template>
  <panel title="Youtube Video">
    <youtube :video-id="youtubeId"
                    :player-width="600"
                    :player-height="232"></youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style scoped>

</style>
