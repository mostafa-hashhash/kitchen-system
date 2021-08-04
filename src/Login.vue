<template>
  <div class="grid grid-cols-5 gap-0">
    <div
      class="col-start-1 col-end-3 bg-green-750 flex flex-row justify-center items-center min-h-screen"
    >
      <div>
        <img
          src="@/assets/sprite/svg/logo.svg"
          class="w-6/7 mx-auto"
          alt="Seoudi Logo"
        />
        <h3 class="text-4xl text-white font-bold text-center mt-10">
          نظام عرض المطبخ
        </h3>
      </div>
    </div>

    <div
      class="col-start-3 col-end-6 flex flex-row justify-center items-center min-h-screen grid grid-cols-4"
    >
      <div class="col-start-2 col-end-4">
        <h2 class="text-3xl">تسجيل الدخول</h2>
        <form @submit.prevent="getAuth()">
          <div class="my-6 flex flex-col">
            <label class="p-2" for="branch">اختر الفرع</label>
            <select
              v-model="selectedBranch"
              class="branch-menu py-4 px-2 rounded-lg text-black-primary bg-gray-150 outline-none"
              name="branch"
              required
            >
              <option value="" selected disabled hidden>إختر ...</option>
              <option
                v-for="branch in branchesList"
                :key="branch.id"
                :value="branch.id"
              >
                {{ branch.name }}
              </option>
            </select>
          </div>

          <div class="my-6 flex flex-col">
            <div class="p-2">
              <label for="password">كلمة السر</label>
              <label for="password" class="float-left text-green-750"
                >نسيت كلمة السر؟</label
              >
            </div>
            <input
              class="py-3 px-2 rounded-lg bg-gray-150 outline-none"
              type="password"
              name="password"
              required
              v-model="password"
            />
          </div>
          <input
            class="py-3 px-8 my-2 bg-green-750 rounded-lg text-white outline-none shadow-xl cursor-pointer"
            type="submit"
            value="تسجيل دخول"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { instance } from "@/api";

export default {
  name: "login",
  data: () => {
    return {
      branchesList: "",
      password: "",
      selectedBranch: "",
    };
  },

  mounted: function() {
    this.getLocationDetails();
  },

  methods: {
    getAuth() {
      return instance({
        method: "post",
        url: "/oauth/token",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          grant_type: "password",
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_CLIENT_SECRET,
          username: this.selectedBranch,
          password: this.password,
          scope: "",
        },
      }).then((response) => {
        this.$emit("setAuthentication", response.data);
      });
    },

    getLocationDetails() {
      instance.get("/api/locations").then((response) => {
        this.branchesList = response.data;
      });
    },
  },
};
</script>

<style scoped>
input[type="submit"]:active {
  box-shadow: none;
}
</style>
