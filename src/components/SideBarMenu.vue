<template>
  <div class="z-40 opened-menu bg-white min-h-screen">
    <div>
      <img
        @click="emitCloseMenuEvent()"
        src="@/assets/sprite/svg/close.svg"
        class="menu cursor-pointer"
        alt="Close icon"
      />
      <img
        src="@/assets/sprite/svg/menu-logo.svg"
        class="menu logo mt-5 ml-5 "
        alt="Logo"
      />
    </div>

    <div>
      <h3 class="mt-5">الأقسام</h3>
      <ul>
        <li @click="notifyCategortySelection(0)"><a> قسم اللحوم</a></li>
        <li @click="notifyCategortySelection(1)"><a> قسم الجبن</a></li>
        <li @click="notifyCategortySelection(2)"><a> قسم الأسماك</a></li>
        <li @click="notifyCategortySelection(3)"><a> قسم الدواجن</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mt-10">الإعدادات</h3>
      <ul>
        <li><a>تغيير كلمة السر</a></li>
        <li @click="logout"><a class="logout">تسجيل الخروج</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },

  methods: {
    emitCloseMenuEvent() {
      this.$emit("closeMenuClick");
    },

    notifyCategortySelection(num) {
      this.$emit("categorySelection", { categoryIndex: num });
    },

    logout(){
      this.$emit("logoutClick")
    }
  },
};
</script>

<style scoped>
ul {
  margin: 15px 0px;
}

ul li {
  padding: 10px 50px;
  font-size: 22px;
}

ul li:hover {
  border-right: 7px solid theme("colors.green.750");
  padding: 10px 43px;
  font-weight: bold;
  cursor: pointer;
}

h3 {
  padding: 10px 50px;
  font-size: 20px;
}

.menu {
  display: inline-block;
  padding: 10px 40px 20px 30px;
}

.logout {
  color: theme("colors.red.650");
}

div:last-of-type > ul > li:last-of-type:hover {
  border-right: 7px solid theme("colors.red.650");
}
</style>
