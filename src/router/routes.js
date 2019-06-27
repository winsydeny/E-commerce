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
        name: "women",
        component: () => import("@/views/home/homeViews/Women")
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
    children: [{
        path: "/mine/setting",
        name: "setting",
        component: () => import("@/views/mine/secondFunc/Setting")
      },
      {
        path: "/mine/address",
        name: "consignee",
        component: () => import("@/views/mine/secondFunc/ConsigneeAddress")
      },
      {
        path: "/mine/myorder",
        name: "myorder",
        component: () => import("@/views/mine/main/MyOrder")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login")
  },

  {
    path: "/goods_detail/:goods_id",
    name: 'goodsDetail',
    component: () => import("@/views/goods/goodsDetail")

  },
  {
    path: "/",
    redirect: "/home"
  }
];