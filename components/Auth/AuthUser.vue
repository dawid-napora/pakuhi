<script setup lang="ts">
const { data, signOut } = useAuth();
</script>

<template>
  <div v-if="data?.user" class="auth-user border-y py-4">
    <div class="auth-user__wrapper flex gap-4 items-center justify-between">
      <div class="auth-user__data flex gap-4 items-center">
        <div
          v-if="data.user.image"
          class="auth-user__image w-16 h-16 rounded-full border overflow-hidden relative"
        >
          <img
            class="absolute inset-0 block w-full h-full object-cover"
            :src="data.user.image"
            :alt="data.user.name || data.user.email || 'User'"
          />
        </div>
        <div class="auth-user__details flex flex-col items-start">
          <div class="auth-user__name font-medium">{{ data.user.name }}</div>
          <div class="auth-user__email text-xs font-medium text-neutral-500">
            {{ data.user.email }}
          </div>
        </div>
      </div>
      <div class="auth-user__actions flex gap-2 items-center">
        <button
          @click="signOut()"
          class="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
