<template>
  <div class="grid grid-cols-5 gap-0">
    <div
      class="col-start-1 col-end-3 bg-green-750 flex flex-row justify-center items-center min-h-screen"
    >
      <div>
        <img src="@/assets/logo.svg" class="" alt="Seoudi Logo" />
        <h3 class="text-3xl text-white font-bold text-center my-10">
          نظام عرض المطبخ
        </h3>
      </div>
    </div>

    <div
      class="col-start-3 col-end-6 flex flex-row justify-center items-center min-h-screen grid grid-cols-4"
    >
      <div class="col-start-2 col-end-4">
        <h2 class="text-3xl m-2">تسجيل الدخول</h2>
        <form>
          <div class="my-6 flex flex-col">
            <label class="p-2" for="branch">إختر الفرع</label>
            <select
              v-model="selectedBranch"
              class="branch-menu py-4 px-2 text-black-primary bg-gray-150 outline-none"
              name="branch"
            >
              <option value="" selected disabled hidden>إختر ...</option>
              <option
                v-for="branch in b"
                :key="branch.id"
                :value="branch.value"
              >
                {{ branch.name }}
              </option>
            </select>
          </div>

          <div class="my-6 flex flex-col">
            <div>
              <label for="password" class="p-2">كلمة السر</label>
              <label for="password" class="float-left text-green-750"
                >نسيت كلمة السر؟</label
              >
            </div>
            <input
              class="password py-3 px-5 rounded bg-gray-150 outline-none"
              type="password"
              name="password"
              v-model="password"
            />
          </div>
          <input
            class="py-3 px-8 my-2 bg-green-750 rounded-md text-white outline-none"
            type="submit"
            value="تسجيل دخول"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { branches } from "@/data";

export default {
  name: "login",
  data: () => {
    return {
      b: branches,
      password: "",
      selectedBranch: "",
    };
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  min-height: 100%;
}
</style>
