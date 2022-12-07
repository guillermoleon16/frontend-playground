<template>
    <div id="rips-form" v-cloak>
        <input type="file" ref="myFile" @change="selectedFile"><br/>
        <textarea v-model="text"></textarea>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            text : "lel",
        }
    },
    methods : {
        selectedFile(e : Event) {
            this.text = (e?.target as HTMLInputElement)?.files[0]?.name;
        }
    }
}
</script>

<style>

</style>