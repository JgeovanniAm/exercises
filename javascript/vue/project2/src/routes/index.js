import Home from '../pages/Home.vue';
import CardInfo from '../pages/CardInfo.vue';
export default [ 
    {
        path:'/',
        component: Home
    },
    {
        path:'/card/:id',
        component: CardInfo
    }
]