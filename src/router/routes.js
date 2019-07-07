import NavBar from "@/components/NavBar";
export default [{
    path: "/home",
    name: "home",
    components: {
      default: () => import("@/views/home/Home"),
      navbar: NavBar
    },
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
    components: {
      default: () => import("@/views/recommend/Recommend"),
      navbar: NavBar
    },
  },
  {
    path: "/search",
    name: "search",
    components: {
      default: () => import("@/views/search/Search"),
      navbar: NavBar
    },

  },
  {
    path: "/chat",
    name: "chat",
    components: {
      default: () => import("@/views/chat/Chat"),
      navbar: NavBar
    },
  },
  {
    path: "/mine",
    name: "mine",
    components: {
      default: () => import("@/views/mine/Mine"),
      navbar: NavBar
    },
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
        component: () => import("@/views/mine/main/MyOrder"),
        // children: [{
        //   path: "/mine/myorder/:order_list",
        //   name: 'myorder_list',
        //   component: () => import("@/views/mine/main/MyOrderList")
        // }]
      },
      {
        path: "/mine/collection",
        name: "collection",
        component: () => import("@/views/mine/secondFunc/Collection")
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
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import("@/views/shoppingcart/ShoppingCart")
  },
  {
    path: "/",
    redirect: "/home"
  }
];