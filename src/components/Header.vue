<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);

function useMenu() {
    isOpen.value = !isOpen.value;
}

onMounted(() => {
    document.addEventListener("click", (e) => {
        const target = e.target;
        const isMenu = target.closest("#mainDropdown");
        const isButton = target.closest("#mainDropdownButton");
        if(isButton) return;
        if(isOpen.value === true && isMenu === null) {
            isOpen.value = false;
        }
    });
});

</script>

<template>
    <header class="w-full sticky top-0 py-6 bg-slate-800 text-slate-200 flex place-content-center font-satoshi">
        <div class="w-5/6 flex place-content-center place-items-center justify-between">
            <div class="flex flex-col">
                <span class="font-bold">wc-smart-table</span>
                <span class="text-[10px]">Documentation</span>
            </div>
            <div class="relative">
                <button id="mainDropdownButton" @click="useMenu" type="button" class="p-1 bg-slate-800 h-[40px] w-[40px] flex place-content-center place-items-center rounded-lg hover:outline hover:outline-slate-600 hover-shadow-xl">
                    <img src="../assets/logo.png"/>
                </button>
                <div id="mainDropdown" class="absolute top-full mt-2 right-0 bg-slate-600 rounded-lg border border-slate-500 shadow-xl px-2 py-3 w-[140px] text-right" v-show="isOpen">
                    <ul>
                        <a @click="isOpen=false" href="#setup" class="block w-full py-1 pr-4 rounded-md cursor-pointer hover:bg-slate-700 hover:shadow-xl">Setup</a>
                        <a @click="isOpen=false" href="#props" class="block w-full py-1 pr-4 rounded-md cursor-pointer hover:bg-slate-700 hover:shadow-xl">Props</a>
                        <a @click="isOpen=false" href="#example" class="block w-full py-1 pr-4 rounded-md cursor-pointer hover:bg-slate-700 hover:shadow-xl">Example</a>
                        <a @click="isOpen=false" href="https://github.com/graphieros/wc-smart-table" target="_blank" class="block w-full py-1 pr-4 rounded-md cursor-pointer hover:bg-slate-700 hover:shadow-xl">Github repo</a>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>