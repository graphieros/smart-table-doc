<script setup>
import {ref, computed} from "vue";
import { AlertTriangleIcon } from "vue-tabler-icons";

import Header from "./components/Header.vue";
import NiceSection from "./components/NiceSection.vue";
import SectionTitle from "./components/SectionTitle.vue";

const head = ref([
  {
              name: "touchpoint",
              type: "text",
              average: false,
              decimals: undefined,
              sum: false,
              isSort: true,
              isSearch: true,
              isMultiselect: true,
              isPercentage: false,
              percentageTo: undefined,
              suffix: "",
              prefix: "",
              rangeFilter: false,
          },
          {
              name: "category",
              type: "text",
              average: false,
              decimals: undefined,
              sum: false,
              isSort: false,
              isSearch: false,
              isMultiselect: true,
              isPercentage: false,
              percentageTo: undefined,
              suffix:"",
              prefix: "",
              rangeFilter: false,
          },
          {
              name: "date",
              type: "date",
              average: false,
              decimals: undefined,
              sum: false,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: undefined,
              suffix:"",
              prefix:"",
              rangeFilter: false,
          },
          {
              name: "base",
              type: "numeric",
              average: true,
              decimals: 0,
              sum: true,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: undefined,
              suffix:"",
              prefix:"",
              rangeFilter: false,
          },
          {
              name: "rating",
              type: "numeric",
              decimals: 1,
              average: true,
              sum: false,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: undefined,
              suffix:"",
              prefix:"",
              rangeFilter: true,
          },
          {
              name: "spend",
              type: "numeric",
              decimals: 1,
              average: true,
              sum: true,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: undefined,
              suffix:"€",
              prefix:"",
              rangeFilter: true,
          },
          {
              name: "percentage",
              type: "numeric",
              decimals: 1,
              average: false,
              sum: false,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: true, // requires an empty slot in the body td arrays!
              percentageTo: "base",
              suffix:"",
              prefix:"",
              rangeFilter: false,
          },
          {
              name: "happy",
              type: "numeric",
              decimals: 0,
              average: true,
              sum: true,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: "base",
              suffix:"",
              prefix:"",
              rangeFilter: false,
          },
          {
              name: "sad",
              type: "numeric",
              decimals: 0,
              average: true,
              sum: true,
              isSort: true,
              isSearch: false,
              isMultiselect: false,
              isPercentage: false,
              percentageTo: "base",
              suffix:"",
              prefix:"",
              rangeFilter: false
          },
]);

const body = computed(() => {
  const categories = ["Reception", "Shop", "Check-out", "Post-sale"];
      const itemNames = [
        "Quality of service",
        "Delivery speed",
        "Personnel efficacy",
        "Products variety",
        "Cleanliness",
        "Support reactivity",
        "Competitive prices",
        "User experience",
        "Reliable material"
      ];

      function generateRandomData() {
        const items = [];

        for (let i = 0; i < 1000; i += 1) {
          const itemName = getRandomItemName();
          const category = getRandomCategory();
          let accueil = Math.random() * 100;
          const date = getRandomDate();
          const data = [
            itemName,
            category,
            date,
            accueil,
            Number((Math.random() * 5).toFixed(1)),
            Math.random() * 200, 
            '',
            Math.random() * 150, 
            Math.random() * 350 
          ];
          items.push({td: data});
        }

        return items;
      }

      function getRandomItemName() {
          const randomIndex = Math.floor(Math.random() * itemNames.length);
        return itemNames[randomIndex];
      }

      function getRandomCategory() {
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
      }

      function getRandomDate() {
      const start = new Date(2023, 0, 1).getTime(); 
      const end = new Date(2023, 11, 31).getTime(); 
      const randomTime = Math.random() * (end - start) + start; 
      const randomDate = new Date(randomTime);
      const formattedDate = randomDate.toISOString().split('T')[0]; 
      return formattedDate;
    }
      return generateRandomData();
});

</script>

<template>
  <Header/>
  <div class="flex place-content-center bg-slate-700 text-slate-200 font-satoshi">
    <div class="w-5/6 py-12">
      <article class="w-5/6 m-auto pt-10 pb-20">
            <h1 class="flex place-content-center text-bold text-[28px] sm:text-[48px] text-center sm:leading-[52px] pb-16">
              Stop forcing users to want to export your dashboards to Excel.
            </h1>
            <p class="text-center text-[16px] sm:text-[24px] text-slate-400">
              <span>wc-smart-table</span> is a web component that provides sums, averages, sorting and filtering, quick chart generation (it can also export to Excel, because your users will always ask for that even if they don't need it anymore).
            </p>
      </article>

      <div class="w-full flex place-items-center place-content-center pb-16">
        <div class="py-2 px-6 bg-slate-600 rounded-lg border border-slate-500 shadow-lg text-[24px]">
          <code>npm i wc-smart-table</code>
        </div>
      </div>

      <div class="w-full flex flex-wrap gap-6 place-content-center place-items-center">
        <a href="#setup" type="button" class="bg-slate-600 hover:bg-slate-800 hover:shadow-xl py-2 px-6 rounded-md transition-all ease-in-out">
          SETUP
        </a>
        <a href="#props" type="button" class="bg-slate-600 hover:bg-slate-800 hover:shadow-xl py-2 px-6 rounded-md transition-all ease-in-out">
          PROPS
        </a>
        <a href="#example" type="button" class="bg-slate-600 hover:bg-slate-800 hover:shadow-xl py-2 px-6 rounded-md transition-all ease-in-out">
          EXAMPLE
        </a>
        <a href="https://github.com/graphieros/wc-smart-table" target="_blank" type="button" class="bg-slate-600 hover:bg-slate-800 hover:shadow-xl py-2 px-6 rounded-md transition-all ease-in-out">
          GITHUB REPO
        </a>
      </div>

      <SectionTitle uid="setup">
        Setup
      </SectionTitle>

      <p class="pt-6">
        If you have access to your index.html, include a script tag in its head:
      </p>
      <NiceSection>
        <code>
    <pre>

    &lt;html&gt;
      &lt;head&gt;
        &lt;script defer src="your-path-to/wc-smart-table.js" type="module"&gt;&lt;/script&gt;
      &lt;/head&gt;
    &lt;/html&gt;
    </pre>
        </code>
      </NiceSection>

      <p class="pt-6">
        You can then add the component anywhere in your app, provided you feed it some props.
      </p>
      <NiceSection>
        <code>
    <pre>

    &lt;html&gt;
      &lt;body&gt;
        &lt;wc-smart-table&gt;&lt;/wc-smart-table&gt;
      &lt;/body&gt;
    &lt;/body&gt;
    </pre>
        </code>
      </NiceSection>


      <SectionTitle uid="props">
        Props
      </SectionTitle>
      
      <article class="py-6 relative">
        <h3 class="mb-3 text-[24px]"><code>header</code> : configuration of your columns</h3>
          <div class="flex flex-row rounded-md place-items-center place-content-center gap-6 px-6 py-3 bg-slate-800 text-red-200 mb-3"><AlertTriangleIcon/> Requires data to be passed in JSON format</div>
          <p>
            Provide an array of objects (in JSON format), one object for each column of your table. Here is the type of a column header configuration object:
          </p>
          <NiceSection>
  <pre class="sticky">
    {
      name: string;
      type: string;
      average: boolean;
      decimals: number | undefined;
      sum: boolean;
      isSort: boolean;
      isSearch: boolean;
      isMultiselect: boolean;
      isPercentage: boolean;
      percentageTo: string | undefined;
      prefix: string;
      suffix: string;
      rangeFilter: boolean;
    }
  </pre>
          </NiceSection>
          <p>
            Check out the <a class="text-teal-200 underline" href="#example">example</a> section for an example of a full header configuration<br><br>
            Let's go through each attribute of the column header configuration object:
            <NiceSection border="border-red-300">
              <div class="flex gap-3 place-items-center">
                <AlertTriangleIcon/>  This attribute is mandatory.
              </div>
              <code class="text-teal-200">name: string;</code>
              <p>
                The name of the column, that will be displayed in the table header.
              </p>
              <p>Default: <code class="text-teal-200">""</code></p>
            </NiceSection>
            <NiceSection border="border-red-300">
              <div class="flex gap-3 place-items-center">
                <AlertTriangleIcon/>  This attribute is mandatory.
              </div>
              <code class="text-teal-200">type: string;</code>
              <p>
                The type of data that the column will be fed with.
              </p>
              <p>
                Options: <code class="text-teal-200">"text", "numeric", "date"</code>
              </p>
              <p>Default: <code class="text-teal-200">""</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">average: boolean;</code>
              <p>
                Set to true will calculate the average of the column data. Use obviously for numeric column types.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">decimals: number | undefined;</code>
              <p>
                Will apply toFixed() with the number you provide, to all numbers in this column.
              </p>
              <p>Default: <code class="text-teal-200">undefined</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">sum: boolean;</code>
              <p>
                Set to true will calculate the sum of the column data. Use obviously for numeric column types.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">isSort: boolean;</code>
              <p>
                Set to true will add a button in the table head to sort data. Works with all column types.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">isSearch: boolean;</code>
              <p>
                Set to true will add an input field to filter the column with text search. Use obviously for text column types.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">isMultiselect: boolean;</code>
              <p>
                Set to true will create a dropdown menu in the table head to select/unselect column data based on categories derived from your dataset. Obviously apply if one column is dedicated to categories. The presence of multiselects will also unlock the possibilty to create donut charts.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">isPercentage: boolean;</code>
              <p>
                This one is tricky. It works alongside the "percentageTo" prop. Let's say you have a column with "spend" values, and you want another column to show percentages of spend to total spending.
                Set to true, the calculations will be computed by the component. You will need to provide an empty string in this index inside the <code>td</code> attribute of the data passed in the <code>body</code> prop. More details about that in the <code>body</code> prop explaination.
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">percentageTo: string | undefined;</code>
              <p>
                There are 2 usecases for this prop:
                <ul>
                  <li>
                    1. you want to display values, and also their percentage to another column. An example of the resulting format would be: | <code>142 (12%)</code> |
                  </li>
                  <li>
                    2. you already have a numeric column with absolute values, and you need another column to show percentages to its total.
                  </li>
                </ul>
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">prefix: string;</code>
              <p>
                Prepend any text to all values displayed in this column. (monetary symbol, unicode symbol...)
              </p>
              <p>Default: <code class="text-teal-200">""</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">suffix: string;</code>
              <p>
                Append any text to all values displayed in this column. (monetary symbol, unicode symbol...). If you want to provide your own data for percentages, because it is already computed, you can just use this prop and pass in "%"
              </p>
              <p>Default: <code class="text-teal-200">""</code></p>
            </NiceSection>
            <NiceSection>
              <code class="text-teal-200">rangeFilter: boolean;</code>
              <p>
                Set to true will add 2 number inputs to the table head, to filter data based on its minimum and maximum values. Obviously use for columns of type "numeric".
              </p>
              <p>Default: <code class="text-teal-200">false</code></p>
            </NiceSection>
          </p>
      </article>

      <article class="py-6">
        <h3 class="mb-3 text-[24px]"><code>body</code> : the actual data of your table</h3>
          <div class="flex flex-row rounded-md place-items-center place-content-center gap-6 px-6 py-3 bg-slate-800 text-red-200 mb-3"><AlertTriangleIcon/> Requires data to be passed in JSON format</div>
      </article>

      <SectionTitle uid="example">
        Example
      </SectionTitle>
      <div class="bg-white text-black p-3 rounded-md mt-6 pb-10">
        <wc-smart-table
          :header="JSON.stringify(head)"
          :body="JSON.stringify(body)"
        />
    </div>
    </div>
    

    
  </div>
</template>