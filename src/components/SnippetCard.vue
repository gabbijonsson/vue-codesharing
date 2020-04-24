<template>
  <div class="card--wrapper">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <p>{{ score }}</p>
    <div class="icon--wrapper" @click="deleteSnippet(id)">
      <img src="../assets/delete.svg" alt="Remove" width="26px" />
    </div>
  </div>
</template>

<script>
import AxiosService from '@/services/AxiosService.js'
export default {
  props: {
    snippet: {
      type: Object
    }
  },
  data() {
    return {
      id: this.snippet.id,
      title: this.snippet.title,
      content: this.snippet.content,
      score: this.snippet.score
    }
  },
  methods: {
    deleteSnippet(id) {
      console.log('Clicked image', id)
      AxiosService.removeSnippet(id)
        .then(response => {
          this.$emit('removed-snippet')
        })
        .catch(error => {
          console.log('Back in promise')
          console.log('There was an error: ', error.response)
        })
    }
  }
}
</script>

<style scoped>
.card--wrapper {
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  transition: all 0.56s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1em;
  margin: 50px 1em;
  max-width: 300px;
  min-width: 20vw;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
}

.card--wrapper > * {
  overflow-wrap: anywhere;
}

.icon--wrapper {
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: end;
}
</style>
