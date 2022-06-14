<script setup lang="ts">
import { defineComponent } from 'vue'

const onSubmit = () => {
  console.log('Form submitted!')
}

</script>

<template>
<br>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="onSubmit" autocomplete="off">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Descripción</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="
                      mt-1
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

                <div class="col-span-6">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Categoría</label
                  >
                  <select
                    id="country"
                    name="country"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option>Envases</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >Unidad de medida</label
                  >
                  <select
                    id="country"
                    name="country"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option>Kg</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="region"
                    class="block text-sm font-medium text-gray-700"
                    >Stock mínimo</label
                  >
                  <input
                    type="text"
                    name="region"
                    id="region"
                    class="
                      mt-1
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
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>