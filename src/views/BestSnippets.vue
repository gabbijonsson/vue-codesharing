<template>
  <div>
    <h1>Top-voted snippets</h1>
    <div class="card--container">
      <SnippetCard
        v-for="snippet in snippetList"
        :key="snippet.id"
        v-bind:snippet="snippet"
        @removed-snippet="getSnippets"
      />
    </div>
  </div>
</template>
<script>
import AxiosService from '@/services/AxiosService.js'
import SnippetCard from '@/components/SnippetCard.vue'

export default {
  name: 'BestSnippets',
  data() {
    return {
      snippetList: []
    }
  },
  components: {
    SnippetCard
  },
  created() {
    this.getSnippets()
  },
  methods: {
    getSnippets() {
      AxiosService.bestSnippets()
        .then(response => {
          this.snippetList = []
          response.data.forEach(data =>
            this.snippetList.push({
              id: data.id,
              title: data.title,
              content: data.content,
              tags: data.tags,
              score: data.score,
              reported: data.is_reported,
              created: data.upload_dt
            })
          )
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    }
  }
}
</script>
<style scoped>
h1 {
  text-transform: uppercase;
}

.card--container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
