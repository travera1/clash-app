<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    let ascript = document.createElement('script')
      ascript.setAttribute('src', '../app.js')
      document.head.appendChild(ascript)

  },
  methods: {

  }
}
</script>
