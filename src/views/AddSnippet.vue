<template>
  <div>
    <form class="form--container" @submit.prevent="onSubmit">
      <legend class="form--legend">Add your own snippet</legend>
      <div class="form--input-container">
        <div class="form--input--section">
          <label class="form--input--sectionlabel" for="title">Title:</label>
          <input
            class="form--input--sectioninput"
            type="text"
            id="title"
            v-model="title"
            placeholder="Write your title here"
          />
        </div>
        <div class="form--input--section">
          <label class="form--input--sectionlabel" for="content"
            >Snippet:</label
          >
          <textarea
            class="form--input--sectioninput form--input--textarea"
            id="content"
            v-model="content"
            placeholder="Write your snippet here"
          />
        </div>
      </div>
      <div class="form--button-container">
        <input class="form--btn ghost" type="reset" value="Reset" />
        <input class="form--btn cta" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import AxiosService from '@/services/AxiosService.js'
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    onSubmit() {
      AxiosService.addSnippet(this.title, this.content)
        .then(response => {
          console.log('Submitted successfully')
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
.form--container {
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  transition: all 0.56s cubic-bezier(0.25, 0.8, 0.25, 1);
  max-width: 500px;
  padding: 0;
  margin: 50px auto;
}

.form--input-container {
  display: block;
  padding: 30px;
  margin: 0;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  min-width: 0;
  border: 0;
}

.form--legend {
  display: block;
  width: 100%;
  max-width: 100%;

  padding: 1em 0 0;
  margin: 0 0 -0.5em;
  padding-inline-start: 2px;
  padding-inline-end: 2px;

  font-size: 1.5rem;
  text-align: center;
  line-height: inherit;

  color: inherit;
  white-space: normal;

  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}

.form--input--section {
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  text-align: left;
  display: block;
  border: 1px solid black;
}

.form--input--sectionlabel {
  /* Position, margin, padding */
  display: inline-block;
  padding-left: 0.125rem;
  z-index: 1;
  margin: 0 0 0 0.6rem;

  /* Font and colors */
  font-size: 1rem;
  font-weight: normal;
  text-overflow: ellipsis;
  color: #a6a6a6;
  background-color: white;

  line-height: 1.5rem;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
  transform-origin: left center;
  transition: transform 0.28s ease, color 0.28s linear, opacity 0.28s linear;
}

.form--input--sectioninput {
  display: block;
  /* height: 2rem; */
  width: 100%;
  max-width: 490px;
  overflow: visible;
  outline: none;
  box-shadow: none;

  padding: 0.125rem 0.9rem 1rem;
  margin: 0;

  background: none;
  border: 0 solid transparent;
  font-size: 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  line-height: 1.5;
  color: #333;
  transition: opacity 0.28s ease;
}

.form--input--textarea {
  min-height: 200px;
  font-family: 'Source Code Pro', monospace;
}

.form--button-container {
  width: 500px;
  display: flex;
  align-content: stretch;
}

.form--btn {
  flex-grow: 2;
  max-width: 250px;
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  border: 1px solid #84bbf3;
  cursor: pointer;
  font-family: Verdana;
  font-size: 16px;
  font-weight: bold;
  padding: 9px 50px;
  text-decoration: none;
}

.form--btn:hover {
  background: linear-gradient(to bottom, #6691bb 5%, #a6cff8 100%);
  background-color: #80b5ea;
  color: #ffffff;
}

.form--btn:active {
  position: relative;
  top: 1px;
}

.cta {
  background: linear-gradient(to bottom, #9ac9f8 5%, #67a6e4 100%);
  background-color: #bddbfa;
  color: #ffffff;
}

.ghost {
  background-color: transparent;
  color: #80b5ea;
}
</style>
