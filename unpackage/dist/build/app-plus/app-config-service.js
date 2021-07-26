
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/cart/cart","pages/category/category","pages/profile/profile","components/content/webPage/webPage","pages/detail/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#ff8198","list":[{"pagePath":"pages/index/index","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/home_active.png","text":"首页"},{"pagePath":"pages/category/category","iconPath":"static/img/tabbar/category.png","selectedIconPath":"static/img/tabbar/category_active.png","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"static/img/tabbar/cart.png","selectedIconPath":"static/img/tabbar/cart_active.png","text":"购物车"},{"pagePath":"pages/profile/profile","iconPath":"static/img/tabbar/profile.png","selectedIconPath":"static/img/tabbar/profile_active.png","text":"地图"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"supermall","compilerVersion":"3.1.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8198","enablePullDownRefresh":false,"onReachBottomDistance":50}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8198","enablePullDownRefresh":false}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8198","enablePullDownRefresh":false}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"地图","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8198","enablePullDownRefresh":false}},{"path":"/components/content/webPage/webPage","meta":{},"window":{"navigationBarTitleText":"外部链接","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8198","enablePullDownRefresh":false,"onReachBottomDistance":50}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
