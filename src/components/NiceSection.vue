<script setup>
const props = defineProps({
    border: {
        type: String,
        default: "border-slate-200"
    }
})
</script>

<template>
    <div :class="`rounded-lg border ${border} p-6 my-12 bg-slate-600`">
        <slot/>
    </div>
</template>