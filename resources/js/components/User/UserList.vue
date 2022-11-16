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
                                    <i
                                        :class='isIcon == true ? "fa fa-solid fa-arrow-up" : "fa fa-solid fa-arrow-down"'></i>
                                </th>
                                <th @click="sortedArray"
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Last Name
                                    <i
                                        :class='isIcon == true ? "fa fa-solid fa-arrow-up" : "fa fa-solid fa-arrow-down"'></i>
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Email
                                    <i
                                        :class='isIcon == true ? "fa fa-solid fa-arrow-up" : "fa fa-solid fa-arrow-down"'></i>
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Registration Date
                                    <i
                                        :class='isIcon == true ? "fa fa-solid fa-arrow-up" : "fa fa-solid fa-arrow-down"'></i>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td @click="userDetailInfo(user)"
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    <!-- isIcon -->
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

        <div :class='isModel == true ? "main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" : "main-modal fixed w-full inset-0 z-50 overflow-hidden hidden justify-center items-center animated fadeIn faster"'
            style="   top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px; background: rgba(0,0,0,.7);">
            <div
                class="border border-blue-500 shadow-lg modal-container bg-white  w-30 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold text-gray-500">User Detail</p>
                        <div class="modal-close cursor-pointer z-50" @click="closeModel()">
                            <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18"
                                height="18" viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <!--Body-->
                    <div class="my-5 mr-5 ml-5 flex justify-center">
                        <form method="POST" id="add_caretaker_form" class="w-full">
                            <div class="">
                                <div class="">
                                    <label for="names" class="text-md text-gray-600">First Names</label>
                                </div>
                                <div class="">
                                    <input type="text" id="names" autocomplete="off" v-model="userDetail.firstname"
                                        name="names" class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        placeholder="Example. John Doe">
                                </div>
                                <div class="">
                                    <label for="phone" class="text-md text-gray-600">Last Name</label>
                                </div>
                                <div class="">
                                    <input type="text" id="phone" autocomplete="off" v-model="userDetail.lastname"
                                        name="phone" class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        placeholder="Example. 0729400426">
                                </div>
                                <div class="">
                                    <label for="id_number" class="text-md text-gray-600">Email</label>
                                </div>
                                <div class="">
                                    <input type="text" autocomplete="off" v-model="userDetail.email" name="id_number"
                                        class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        placeholder="Caretaker's ID number">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--Footer-->
                    <div class="flex justify-end pt-2 space-x-14">
                        <button class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                            @click="closeModel()">Cancel</button>
                        <button class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                            onclick="">Confirm</button>
                    </div>
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
            isModel: false,
            isIcon: false,
            userDetail: {
                firstname: '',
                lastname: '',
                email: ''
            }

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
                    this.users = response.data.sort((a, b) => a.firstname - b.firstname);;
                });
        },

        /**
         * Show user details on Popup 
         */
        userDetailInfo(user) {
            this.isModel = true;
            this.userDetail.firstname = user.firstname;
            this.userDetail.lastname = user.lastname;
            this.userDetail.email = user.email;
        },

        /**
         * Close Popup 
         */
        closeModel() {
            this.isModel = false;
        },

        /**
         * Sort user by name 
         */
        sortedArray() {
            this.isIcon = !this.isIcon;
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

<style>
.w-30 {
    width: 30%;
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>