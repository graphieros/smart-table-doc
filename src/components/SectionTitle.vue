<script setup>
const props = defineProps({
    uid: {
        type: String,
        default: ""
    },
    border: {
        type: String,
        default: "border-slate-200"
    }
})
</script>

<template>
    <div :class="`pt-[100px] border-b ${props.border} pb-6 text-[24px]`" :id="uid">
        <h3>
            <slot/>
        </h3>
    </div>
</template>