<template>
  <div class="relative flex min-h-screen">
    <div class="r-green w-2/5 bg-green-800 inline-block min-h-screen pt-10">
      <img
        src="@/assets/logo.svg"
        class="my-10 mx-auto pt-10"
        alt="Seoudi Logo"
      />
      <h3 class="text-3xl text-white font-bold text-center my-10">
        نظام عرض المطبخ
      </h3>
    </div>

    <div class="l-white inline-block w-3/5 pt-10 mt-10">
      <div class="login-form w-1/2 rtl mx-auto mt-10">
        <h2 class="text-3xl m-2">تسجيل الدخول</h2>
        <form>
          <div class="my-6">
            <label class="p-2" for="branch">إختر الفرع</label>
            <select
              v-model="selectedBranch"
              class="branch-menu py-4 px-2 w-full text-black-primary outline-none"
              name="branch"
            >
              <option value="" selected disabled hidden class=""
                >... إختر</option
              >
              <option
                v-for="branch in b"
                :key="branch.id"
                :value="branch.value"
              >
                {{ branch.name }}
              </option>
            </select>
          </div>

          <div class="my-6">
            <label for="password" class="p-2">كلمة السر</label>
            <label for="password" class="float-left text-green-800"
              >نسيت كلمة السر؟</label
            >
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
