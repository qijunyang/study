<template>
    <button>{{title}}</button>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'OK'
        }
    }
}
</script>

