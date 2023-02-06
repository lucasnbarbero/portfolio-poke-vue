<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.body.classList.add(
    "app-blank",
    "bgi-size-cover",
    "bgi-position-center",
    "bgi-no-repeat"
  );
  document.body.style.backgroundImage =
    "url('media/img/bg6-dark.jpg')";
});

onUnmounted(() => {
  document.body.classList.remove(
    "app-blank",
    "bgi-size-cover",
    "bgi-position-center",
    "bgi-no-repeat"
  );
  document.body.style.backgroundImage = "";
});
</script>

<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <div class="d-flex flex-column flex-column-fluid flex-lg-row vh-100">
      <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
        <div class="d-flex flex-center flex-lg-start flex-column">
          <h2 class="text-white fw-normal m-0">
            Iniciá sesión para ver la informacion de tu usuario
          </h2>
        </div>
      </div>
      <div class="d-flex flex-center w-lg-50 p-10">
        <div class="card rounded-3 w-md-550px">
          <div class="card-body p-10 p-lg-20">
            <RouterView v-slot="{ Component, route }">
              <Transition
                enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster"
                mode="out-in"
              >
                <div :key="route.fullPath">
                  <component :is="Component"></component>
                </div>
              </Transition>
            </RouterView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
