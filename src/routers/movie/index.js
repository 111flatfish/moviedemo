export default {
    path:"/movie",
    component:()=>import("../../views/movie"),
    children:[
        {
            path:"city",
            component:()=>import("../../components/City")
        },
        {
            path:"Nowplaying",
            component:()=>import("../../components/Nowplaying")
        },
        {
            path:"ComingSoon",
            component:()=>import("../../components/ComingSoon")
        },
        {
            path:"Search",
            component:()=>import("../../components/Search")
        }
    ]

}