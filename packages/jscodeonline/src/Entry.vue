<template>
    <div>
        <table>
            <tr>
                <td>
                    <Editor/>
                </td>
                <td>
                    <Output/>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import Editor from "./Editor.vue";
import Output from "./Output.vue";
export default {
    components: {Editor, Output}
}
</script>
<style lang="sass" scoped>
    td {
        vertical-align: top;
    }
</style>

