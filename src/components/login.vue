<template>
  <div class="r-green w-2/5 bg-green-800 inline-block">
  
  <img src="../assets/logo.svg" class="my-10 mx-auto" alt="Seoudi Logo">
  <h3 class="text-3xl text-white font-bold text-center my-10">نظام عرض المطبخ</h3>
  
  </div>

  <div class="l-white inline-block border-2 w-3/5">
    <div class="login-form w-1/2 rtl mx-auto">
      <h2 class="text-3xl m-2">تسجيل الدخول</h2>
      <form>
        <div class="my-6">
          <label class="p-2" for="branch">إختر الفرع</label>
          <select
            v-model="selectedBranch"
            class="branch-menu py-4 px-2 w-full text-black-primary outline-none"
            name="branch"
          >
            <option value="" selected disabled hidden class="">... إختر</option>
            <option v-for="branch in b" :key="branch.id" :value="branch.value">
              {{ branch.name }}
            </option>
          </select>
        </div>

        <div class="my-6">
          <label for="password" class="p-2">كلمة السر</label>
          <label for="password" class="float-left text-green-800">نسيت كلمة السر؟</label>
          <input
            class="password py-3 px-5 w-full rounded bg-gray-200 outline-none"
            type="password"
            name="password"
            v-model="password"
          />
        </div>
        <input
          class="py-3 px-8 my-2 bg-green-800 rounded-md text-white outline-none"
          type="submit"
          value="تسجيل دخول"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { branches } from "../data";

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

.r-green {
  height: 100% !important;
}

.branch-menu {
  display: block;
}

input {
  display: block;
}

.l-white {
  width: 60%;
}

.r-green {
  width: 40%;
}
</style>
