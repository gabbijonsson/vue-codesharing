<template>
  <div>
    <h1>Showing AddSnippet.vue</h1>
    <form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <p>
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="Write your title here"
        />
        <label for="content">Snippet:</label>
        <textarea
          id="content"
          v-model="content"
          placeholder="Write your snippet here"
        />
      </p>
      <input type="submit" />
      <input type="reset" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('I SUBMITTERED!')
    },
    onReset() {
      console.log('I RESETERERD!')
    }
  }
}
</script>
