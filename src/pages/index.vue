<template>
  <div>
    <pSlider/>
    <pAbout/>
    <pWorks/>
    <pWord/>
    <pBlog/>
  </div>
</template>

<script>
  import pSlider from "./_slide"
  import pAbout from "./_about"
  import pWorks from "./_works"
  import pWord from "./_word"
  import pBlog from "./_blog"

export default {
  name: 'top',
  components: {
    pSlider,
    pAbout,
    pWorks,
    pWord,
    pBlog,
  },
}
</script>
<style>
  h1 {
    text-shadow: 2px 2px 3px darkgray;
  }
</style>
