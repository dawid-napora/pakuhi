<script setup lang="ts">
const { signIn } = useAuth();
</script>

<template>
  <div class="auth-login">
    <div class="auth-login__wrapper flex items-center justify-center">
      <button
        @click="signIn('github')"
        class="px-8 py-4 bg-neutral-900 text-white rounded hover:bg-neutral-800"
      >
        Login with Github
      </button>
    </div>
  </div>
</template>
