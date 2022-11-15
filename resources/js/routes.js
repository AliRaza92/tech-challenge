import AllUsers from './components/User/UserList.vue';
import ExampleCom from './components/ExampleComponent.vue';

export const routes = [
    {
        name: 'users',
        path: '/',
        component: AllUsers
    },
    {
        name: 'example',
        path: '/test-example',
        component: ExampleCom
    }
];