<template>
    <div>
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-blueGray-700">Users List</h3>
                        </div>
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">See all</button>
                        </div>
                    </div>
                </div>

                <div class="block w-full overflow-x-auto">
                    <table class="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr>
                                <th @click="sortedArray"
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    First Name
                                </th>
                                <th @click="sortedArray"
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Last Name
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Email
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Registration Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td @click="userDetailInfo(user)"
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {{ user.firstname }}
                                </td>
                                <td @click="userDetailInfo(user)"
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {{ user.lastname }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ user.email }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ user.created_at }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            users: [],
            sortKey: 'name',
            sortDirection: 'ASC',
        }
    },
    created() {
        this.getAllUsers();
    },
    methods: {
        /**
         * Get all users 
         */
        getAllUsers() {
            this.axios
                .get('/api/users')
                .then(response => {
                    this.users = response.data.sort((a, b) => a.name - b.name);;
                });
        },
        userDetailInfo(user){
            console.log(user);
        },
        /**
         * Sort user by name 
         */
        sortedArray() {
            this.sortDirection = (this.sortDirection == 'ASC') ? 'DESC' : 'ASC';
            this.users.sort(function (a, b) {
                if (this.sortDirection == 'ASC') {
                    return ((a.firstname == b.firstname) ? 0 : ((a.firstname > b.firstname) ? 1 : -1));
                }

                if (this.sortDirection == 'DESC') {
                    return ((a.firstname == b.firstname) ? 0 : ((a.firstname < b.firstname) ? 1 : -1));
                }
            }.bind(this));
        }
    }
}
</script>