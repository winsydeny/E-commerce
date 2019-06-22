export default [{
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home"),
    children: [{
        path: "/home/popular",
        name: "popular",
        component: () => import("@/views/home/homeViews/Popular")
      },
      {
        path: "/home/women_clothe",
        name: "computer",
        component: () => import("@/views/home/homeViews/Computer")
      },
      {
        path: "/home/days",
        name: "days",
        component: () => import("@/views/home/homeViews/Days")
      },

      {
        path: "/home/furniture",
        name: "furniture",
        component: () => import("@/views/home/homeViews/Furniture")
      },
      {
        path: "/home/foods",
        name: "foods",
        component: () => import("@/views/home/homeViews/Food")
      },
      {
        path: "/home/categroies",
        name: "categroies",
        component: () => import("@/views/home/homeViews/Categroies")
      },
      {
        path: "/home/child",
        name: "child",
        component: () => import("@/views/home/homeViews/Child")
      },
      {
        path: "/home/phones",
        name: "phones",
        component: () => import("@/views/home/homeViews/Phones")
      },
      {
        path: "/home/shoes",
        name: "shoes",
        component: () => import("@/views/home/homeViews/Shoes")
      },
      {
        path: "/home/computers",
        name: "computers",
        component: () => import("@/views/home/homeViews/Shoes")
      }
    ]
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("@/views/recommend/Recommend")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search/Search")
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/chat/Chat")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/Mine"),
    children: []
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login")
  },
  {
    path: "/mine/setting",
    name: "setting",
    component: () => import("@/views/mine/secondFunc/Setting")
  },
  {
    path: "/",
    redirect: "/home"
  }
];