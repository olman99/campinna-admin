<script setup lang="ts">
import { ref } from "vue";
import {
  PencilIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/solid";

const products = [
  {
    id: "1",
    code: "EM0001",
    description: "Description 1",
    category: "Envases",
    unit_measure: "KG",
    stock_minimum: "100",
  },
  // More people...
];
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4">
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Buscar"
          class="
            mt-4
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            shadow-sm
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </div>
      <div class="col-span-1"></div>
      <div class="mt-4 col-span-1">
        <button
          type="button"
          class="
            inline-flex
            items-center
            justify-center
            rounded-md
            border border-transparent
            bg-indigo-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-sm
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            sm:w-auto
          "
        >
          Agregar
        </button>
      </div>
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              shadow
              ring-1 ring-black ring-opacity-5
              md:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-green-200">
                <tr>
                  <th
                    scope="col"
                    class="
                      py-3.5
                      pl-4
                      pr-3
                      text-left text-sm
                      font-semibold
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    Código
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-sm
                      font-semibold
                      text-gray-900
                    "
                  >
                    Descripción
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-sm
                      font-semibold
                      text-gray-900
                    "
                  >
                    Categoría
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-sm
                      font-semibold
                      text-gray-900
                    "
                  >
                    UM
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-sm
                      font-semibold
                      text-gray-900
                    "
                  >
                    Stock mínimo
                  </th>
                  <th
                    scope="col"
                    class="
                      relative
                      py-3
                      pl-3.5
                      pr-4
                      sm:pr-6
                      text-rigth text-sm
                      font-semibold
                    "
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="product in products" :key="product.id">
                  <td
                    class="
                      whitespace-nowrap
                      py-4
                      pl-4
                      pr-3
                      text-sm
                      font-medium
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    {{ product.code }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ product.description }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ product.category }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ product.unit_measure }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ product.stock_minimum }}
                  </td>
                  <td
                    class="
                      relative
                      whitespace-nowrap
                      py-4
                      pl-3
                      pr-4
                      text-right text-sm
                      font-medium
                      sm:pr-6
                    "
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >                    <PencilIcon
                        class="ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    /></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav
            class="
              border-t border-gray-200
              px-4
              flex
              items-center
              justify-between
              sm:px-0
            "
          >
            <div class="-mt-px w-0 flex-1 flex">
              <a
                href="#"
                class="
                  border-t-2 border-transparent
                  pt-4
                  pr-1
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                "
              >
                <ArrowNarrowLeftIcon
                  class="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Previous
              </a>
            </div>
            <div class="hidden md:-mt-px md:flex">
              <a
                href="#"
                class="
                  border-transparent
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                1
              </a>
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
              <a
                href="#"
                class="
                  border-indigo-500
                  text-indigo-600
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                class="
                  border-transparent
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                3
              </a>
              <span
                class="
                  border-transparent
                  text-gray-500
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                ...
              </span>
              <a
                href="#"
                class="
                  border-transparent
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                8
              </a>
              <a
                href="#"
                class="
                  border-transparent
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                9
              </a>
              <a
                href="#"
                class="
                  border-transparent
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                  border-t-2
                  pt-4
                  px-4
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                10
              </a>
            </div>
            <div class="-mt-px w-0 flex-1 flex justify-end">
              <a
                href="#"
                class="
                  border-t-2 border-transparent
                  pt-4
                  pl-1
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700 hover:border-gray-300
                "
              >
                Next
                <ArrowNarrowRightIcon
                  class="ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>