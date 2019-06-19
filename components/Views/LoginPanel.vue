<template>
  <div class="bg-white shadow p-8 max-w-md">
    <div class="row">
      <div class="login__panel form-container small-12 medium-9 large-6 small-centered columns">
        <div class="small-12 text-center">
          <h4 class="text-2xl py-4">
            <slot name="title" />
          </h4>
          <section class="container">
            <div>
              <slot />
            </div>
          </section>
          <section class="footer">
            <slot name="footer" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
