<template>
    <div>
        <pBlog/>
        <link-button prev = "word" next = "about"/>
    </div>
</template>

<script>
    import pBlog from "@/pages/_blog"
    import LinkButton from "@/components/link-button"
    export default {
        name: "index",
        components: {
            pBlog,
            LinkButton
        }
    }
</script>

<style scoped>

</style>
