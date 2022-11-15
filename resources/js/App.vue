<template>
    <main class="py-1 bg-blueGray-50">
        <nav
            class="font-sans flex flex-row sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <router-link exact-active-class="active" to="/"
                class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</router-link>
            <router-link exact-active-class="active" to="/category"
                class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Category</router-link>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
export default {}
</script>