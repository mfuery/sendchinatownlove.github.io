(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[4],{14:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l}));var a="SET_MODAL_VIEW",r="SET_AMOUNT",o="CLOSE_MODAL",i="CLEAR_FORMS",c="SET_SELLER_DATA",l="UPDATE_SELLER_DATA",u=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/},18:function(e,t,n){"use strict";n.r(t),n.d(t,"SET_VIEW",(function(){return a})),n.d(t,"SET_AMOUNT",(function(){return r})),n.d(t,"SET_VOUCHER_INFO",(function(){return o}));var a="SET_VIEW",r="SET_AMOUNT",o="SET_VOUCHER_INFO"},23:function(e,t,n){"use strict";var a;!function(e){e[e.Track=0]="Track",e[e.Redemption=1]="Redemption",e[e.Dashboard=2]="Dashboard",e[e.Claim=3]="Claim"}(a||(a={})),t.a=a},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(4),r=n(0),o=n(91),i=n(5);function c(){var e=Object(a.a)(["\n  width: 100%;\n  height: 74vh;\n"]);return c=function(){return e},e}function l(){var e=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  div {\n    color: #ab192e;\n    ",";\n  }\n"]);return l=function(){return e},e}t.b=function(e){var t=e.isPage,n=e.size;return r.createElement(u,{isPage:t,size:n},r.createElement(o.a,null))};var u=i.a.div(l(),(function(e){return e.isPage?"100vh":"100%"}),(function(e){return e.size&&"\n      width: ".concat(e.size,"!important;\n      height: ").concat(e.size,"!important;\n    ")})),s=i.a.div(c())},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h}));var a=n(12),r=n(0),o=n.n(r),i={amount:"5",customInput:!1,modalView:-1,sellerData:{id:0,seller_id:"",cuisine_name:"",name:"",target_amount:0,amount_raised:0,num_contributions:0,num_donations:0,num_gift_cards:0,donation_amount:0,gift_card_amount:0,progress_bar_color:"",summary:"",story:"",accept_donations:!0,sell_gift_cards:!0,owner_name:"",owner_image_url:"",hero_image_url:"",business_type:"",num_employees:0,founded_year:0,website_url:"",menu_url:"",cost_per_meal:0,gallery_image_urls:[],non_profit_location_id:"",logo_image_url:""}},c=n(11),l=n(14),u=function(e,t){var n=t.type,a=t.payload;switch(n){case l.e:return Object(c.a)({},e,{modalView:a});case l.d:return Object(c.a)({},e,{amount:a});case l.f:return Object(c.a)({},e,{sellerData:a});case l.g:return Object(c.a)({},e,{sellerData:Object(c.a)({},e.sellerData,{amount_raised:a})});case l.b:return Object(c.a)({},e,{modalView:-1,customInput:!1,amount:i.amount});case l.a:return i;default:return e}},s=o.a.createContext(i),m=o.a.createContext((function(){return null})),d=function(e){var t=o.a.useReducer(u,i),n=Object(a.a)(t,2),r=n[0],c=n[1];return o.a.createElement(s.Provider,{value:r},o.a.createElement(m.Provider,{value:c},e.children))};function h(){var e=o.a.useContext(s);if(void 0===e)throw new Error("useModalPaymentState must be used within a CountProvider");return e}function p(){var e=o.a.useContext(m);if(void 0===e)throw new Error("useModalPaymentDispatch must be used within a CountProvider");return e}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return r}));var a=n(12),r=n(18),o=n(0),i=n.n(o);var c=n(11),l=function(e,t){var n=i.a.createContext(t),r=i.a.createContext((function(){return null}));return[function(o){var c=o.children,l=i.a.useReducer(e,t),u=Object(a.a)(l,2),s=u[0],m=u[1];return i.a.createElement(r.Provider,{value:m},i.a.createElement(n.Provider,{value:s},c))},function(){var e=i.a.useContext(n);if(void 0===e)throw new Error("useVoucherState must be used within a CountProvider");return e},function(){var e=i.a.useContext(r);if(void 0===e)throw new Error("useVoucherDispatch must be used within a CountProvider");return e}]}((function(e,t){var n=t.type,a=t.payload;switch(n){case r.SET_VIEW:return Object(c.a)({},e,{view:a});case r.SET_AMOUNT:return Object(c.a)({},e,{amount:a});case r.SET_VOUCHER_INFO:return Object(c.a)({},e,{voucher:a});default:return e}}),{amount:0,view:0,voucher:{amount:0,created_at:"",expiration:"",gift_card_id:"",id:-1,item_id:-1,receipt_id:"",recipient_id:-1,seller_gift_card_id:"",updated_at:"",storeImage:"",storeName:"",sellerID:"",single_use:!1,location:{line1:"",line2:""}}}),u=Object(a.a)(l,3),s=u[0],m=u[1],d=u[2]},46:function(e,t,n){"use strict";var a=n(34);n.d(t,"b",(function(){return a.b})),n.d(t,"a",(function(){return a.a}))},51:function(e,t,n){},52:function(e,t,n){e.exports=n.p+"static/media/logo.909f1479.svg"},55:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"DONATE"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to a community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: ","endsIn":"Ends in","ended":"Ended","days":"days","lastContributionMade":"Last contribution made","ago":"ago","toTarget":"to target","outOf":"out of","meals":"meals"},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"Our Chinatown","platformInfoDescription":"We are providing an online platform to low-tech, cash-only, Asian-owned small businesses that have been disproportionately impacted by COVID-19.","platformInfoAction":"Support local merchants by making a donation or purchasing a voucher from them.","flyerAsk":"Know of any business owners that fit our target merchant?","flyerDownload":"Download our flyer to share with them."},"merchantNavBar":{"all":"All","brooklyn":"Brooklyn","manhattan":"Manhattan","queens":"Queens"},"donationPool":{"header":"Checked out our merchants but not sure who to donate to first?","description1":"You can support by donating to our donation pool!","description2":"All donations will be distributed evenly to our merchants.","button":"SUPPORT CHINATOWN!"},"contributionBar":{"header":"Total Raised","vouchers":"VOUCHERS","donations":"DONATIONS","footer":"100% of all proceeds go to the businesses, and we cover the credit card processing fees."},"descriptionBox":{"header":"Our Target Merchant","bullet1":"Asian immigrant-owned small businesses","bullet2":"Not fluent in English, run cash-only establishments, and not tech-savvy","bullet3":"Currently struggling to pay rent, utility bills and employee wages","bullet4":"Do not have websites, online delivery services, or vouchers available","bullet5":"Located in NYC Manhattan Chinatown, Flushing, or Bensonhurst"},"storeDetails":{"storyHeader":"Story"},"ownerPanel":{"donation":"Donation","voucher":"Voucher","giftmeal":"Gift a meal","extraInfo":{"Type":"Type","Employees":"Employees","Founded":"Founded","Website":"Website","Menu":"Menu"}},"donationBox":{"header":"Not sure who to donate to?","description":"To support every merchant on this page, contribute to our donation pool. We distribute funds evenly across all businesses.","button":"DONATE"},"gamBox":{"header":"Learn about Gift-a-Meal","description":"Double the impact of your donation by gifting meals from our merchants to local organizations that will distribute your gifted meals to our community in need.","button":"GIFT MEAL"},"gamHome":{"header":"Gift-a-Meal","description":"Double the impact of your donation by gifting meals from our merchants to local organizations that will distribute your gifted meals to our community in need.","subheading":{"step1":"Step 1: ","step1Text":"Donate to Gift-a-Meal","step2":"Step 2: ","step2Text":"100% of donations still go directly to our merchants","step3":"Step 3: ","step3Text":"Vouchers are donated to our community partners","step4":"Step 4: ","step4Text":"Partners distribute to individuals in need"},"backButton":"Back to Merchants","giftButton":"Gift Meal","activeSection":"Active Gift-a-Meal","pastSection":"Past Gift-a-Meal","noCampaignsBox":{"CTA":"No active campaigns? You can still donate!","description":"Meal donations here will automatically be applied to our next campaign."},"videoBox":{"caption":"Watch how we bring impact to our communities through Gift-a-Meal."},"listItem":{"viewButton":"Visit Merchant","giftButton":"Gift Meal"}},"buyMealPool":{"header":"Gift-a-Meal","description":{"weAre":"We are partnering with","andRestaurants":"and restaurants who have been impacted by COVID-19 to gift meals to communities in need.","allItTakes":"All it takes is"},"prompt":"Please enter how many meals to gift","totalLabel":"Total: ","next":"Next"}}')},56:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"\u8bf7\u9009\u62e9\u6216\u8f93\u5165\u91d1\u989d","label1":"\u9009\u62e9\u91d1\u989d","label2":"\u6216\u8f93\u5165\u91d1\u989d","minimum":"\u6700\u4f4e","maximum":"\u6700\u9ad8","amount":"\u91d1\u989d","submit":"\u4e0b\u4e00\u6b65"}},"navBar":{"header":{"home":"HOME","merchants":"DONATE"},"languages":{"english":"ENG","chinese":"\u7b80\u4f53\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to our community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: ","endsIn":"Ends in","ended":"Ended","days":"days","lastContributionMade":"Last contribution made","ago":"ago","toTarget":"to target","outOf":"out of","meals":"meals"},"purchase":{"donation":"\u6350\u6b3e\u7ed9 ","voucher":"\u8d2d\u4e70\u793c\u54c1\u5238 - "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"\u6211\u4eec\u7684\u534e\u57e0","platformInfoDescription":"\u6211\u4eec\u63d0\u4f9b\u7dda\u4e0a\u5e73\u53f0\u4f86\u5e2e\u52a9\u53d7\u5230\u75ab\u60c5\u5f71\u54cd\uff0c\u4e0d\u4f1a\u4f7f\u7528\u79d1\u6280\uff0c\u53ea\u6536\u73b0\u91d1\u7684\u4e9a\u88d4\u4f20\u7edf\u5546\u5bb6","platformInfoAction":"\u6211\u4eec\u900f\u8fc7\u52df\u6b3e\u4ee5\u53ca\u8d29\u552e\u793c\u54c1\u5238\u6765\u5e2e\u52a9\u8fd9\u4e9b\u5546\u5bb6\u3002","flyerAsk":"\u8ba4\u8bc6\u9700\u8981\u534f\u52a9\u7684\u5c0f\u578b\u5546\u5bb6\u4e1a\u8005\uff1f","flyerDownload":"\u4e0b\u8f7d\u4f20\u5355\u5206\u4eab\u7ed9\u4ed6\u4eec\u3002"},"merchantNavBar":{"all":"\u6240\u6709\u7684\u5546\u5bb6","brooklyn":"\u5e03\u9c81\u514b\u6797","manhattan":"\u66fc\u54c8\u987f","queens":"\u7687\u540e\u533a"},"donationPool":{"header":"\u5982\u679c\u4f60\u4e0d\u592a\u786e\u5b9a\u6350\u6b3e\u7ed9\u54ea\u4e2a\u5546\u5bb6\uff1f","description1":"\u6350\u732e\u5230\u7231\u5fc3\u6c60\u6765\u652f\u6301\u6211\u4eec\u7684\u6bcf\u95f4\u5546\u5bb6\uff01\u6211\u4eec\u4f1a\u628a\u4f60\u7684\u6350\u6b3e\u5e73\u5747\u5206\u914d\u7ed9\u5404\u5546\u5bb6\u3002\u3002","description2":"","button":"\u8bf7\u652f\u6301\u534e\u57e0!"},"contributionBar":{"header":"\u7b79\u6b3e\u603b\u989d","vouchers":"\u793c\u54c1\u5238","donations":"\u6350\u6b3e","footer":"\u6240\u6709\u7684\u6536\u76ca\u5c06\u4f1a\u5230\u6240\u9700\u7684\u5546\u5bb6\u624b\u91cc\uff0c\u514d\u4fe1\u7528\u5361\u624b\u7eed\u8d39\u3002"},"descriptionBox":{"header":"\u6211\u4eec\u5728\u627e\u7684\u5c0f\u578b\u5546\u5bb6\u4e1a\u8005","bullet1":"\u4e9a\u88d4\u79fb\u6c11\u7ecf\u8425\u7684\u5c0f\u578b\u5546\u5bb6","bullet2":"\u82f1\u8bed\u4e0a\u4e0d\u6d41\u7545\uff0c\u4ee5\u73b0\u91d1\u6536\u5165\u4e3a\u4e3b\uff0c\u6216\u8005\u4e0d\u592a\u61c2\u7f51\u4e0a\u65b0\u79d1\u6280","bullet3":"\u73b0\u5728\u8d22\u52a1\u53d7\u56f0\uff0c\u5f71\u54cd\u5230\u4ed8\u623f\u79df\uff0c\u4ed8\u6c34\u7535\u8d39\uff0c\u53ca\u53d1\u5de5\u8d44\u7ed9\u5458\u5de5\u7684\u80fd\u529b","bullet4":"\u6c92\u6709\u7f51\u7ad9\uff0c\u7f51\u4e0a\u5916\u5356\uff0c\u6216\u63a5\u53d7\u793c\u54c1\u5238\u7684\u670d\u52a1","bullet5":"\u5728\u7ebd\u7ea6\u66fc\u54c8\u987f\uff0c\u6cd5\u62c9\u76db\uff0c\u6216\u5bbe\u81e3\u589f"},"storeDetails":{"storyHeader":"\u80cc\u666f\u7b80\u4ecb"},"ownerPanel":{"donation":"\u6350\u6b3e","voucher":"\u8d2d\u4e70\u793c\u54c1\u5238","giftmeal":"\u6350\u7231\u5fc3\u9910","extraInfo":{"Type":"\u4f01\u4e1a\u7c7b\u578b","Employees":"\u5458\u5de5\u4eba\u6570","Founded":"\u5275\u7acb\u4e8e","Website":"\u7f51\u7ad9","Menu":"\u83dc\u5355"}},"donationBox":{"header":"\u5982\u679c\u4f60\u4e0d\u592a\u786e\u5b9a\u6350\u6b3e\u7ed9\u54ea\u4e2a\u5546\u5bb6\uff1f","description":"\u6350\u732e\u5230\u7231\u5fc3\u6c60\u6765\u652f\u6301\u6211\u4eec\u7684\u6bcf\u95f4\u5546\u5bb6\uff01\u6211\u4eec\u4f1a\u628a\u4f60\u7684\u6350\u6b3e\u5e73\u5747\u5206\u914d\u7ed9\u5404\u5546\u5bb6\u3002","button":"\u6350\u6b3e"},"gamBox":{"header":"\u4e86\u89e3\u5173\u4e8e\u7231\u5fc3\u9910","description":"\u8ba9\u4f60\u7684\u7231\u5fc3\u6709\u66f4\u5927\u7684\u5f71\u54cd\u529b\uff0c\u6350\u732e\u7ed9\u6211\u4eec\u7684\u5546\u5bb6\u4ee5\u63d0\u4f9b\u7231\u5fc3\u9910\u7ed9\u793e\u533a\u516c\u76ca\u56e2\u4f53\uff0c\u53d1\u9001\u7ed9\u9700\u8981\u7684\u4eba\u3002","button":"\u6350\u7231\u5fc3\u9910"},"gamHome":{"header":"\u7231\u5fc3\u9910","description":"\u8ba9\u4f60\u7684\u7231\u5fc3\u6709\u66f4\u5927\u7684\u5f71\u54cd\u529b\uff0c\u6350\u732e\u7ed9\u6211\u4eec\u7684\u5546\u5bb6\u4ee5\u63d0\u4f9b\u7231\u5fc3\u9910\u7ed9\u793e\u533a\u516c\u76ca\u56e2\u4f53\uff0c\u53d1\u9001\u7ed9\u9700\u8981\u7684\u4eba\u3002","subheading":{"step1":"\u7b2c\u4e00\u6b65\uff1a","step1Text":"\u6350\u6b3e\u7ed9\u7231\u5fc3\u9910\u6d3b\u52a8","step2":"\u7b2c\u4e8c\u6b65\uff1a","step2Text":"\u6350\u6b3e\u6536\u76ca\u5168\u6570\u5f52\u7ed9\u6211\u4eec\u7684\u5546\u5bb6","step3":"\u7b2c\u4e09\u6b65\uff1a","step3Text":"\u6211\u4eec\u5c06\u9910\u5238\u6350\u7ed9\u793e\u533a\u516c\u76ca\u56e2\u4f53","step4":"\u7b2c\u56db\u6b65\uff1a","step4Text":"\u793e\u533a\u516c\u76ca\u56e2\u4f53\u53d1\u9001\u9910\u70b9\u7ed9\u9700\u8981\u7684\u4eba"},"backButton":"\u56de\u5230\u5546\u5bb6\u9875\u9762","giftButton":"\u6350\u7231\u5fc3\u9910","activeSection":"\u8fdb\u884c\u4e2d\u7684\u6d3b\u52a8","pastSection":"\u5df2\u7ed3\u675f\u7684\u6d3b\u52a8","noCampaignsBox":{"CTA":"\u6ca1\u6709\u8fdb\u884c\u4e2d\u7684\u6d3b\u52a8\uff1f\u4f60\u4ecd\u7136\u53ef\u4ee5\u6350\u732e\uff01","description":"\u6350\u51fa\u7684\u7231\u5fc3\u9910\u5c06\u4f1a\u81ea\u52a8\u52a0\u5165\u4e0b\u4e00\u6b21\u7684\u6d3b\u52a8\u3002"},"videoBox":{"caption":"\u73b0\u5728\u89c2\u770b\u7231\u5fc3\u9910\u6d3b\u52a8\u5982\u4f55\u4e3a\u6211\u4eec\u7684\u793e\u533a\u5e26\u6765\u6b63\u9762\u7684\u5f71\u54cd\u3002"},"listItem":{"viewButton":"\u67e5\u770b\u5546\u5bb6","giftButton":"\u6350\u7231\u5fc3\u9910"}},"buyMealPool":{"header":"\u7231\u5fc3\u9910","description":{"weAre":"\u6211\u4eec\u4e0e ","andRestaurants":" \u4ee5\u53ca\u53d7\u5230 COVID-19 \u75ab\u60c5\u5f71\u54cd\u7684\u9910\u5385\u5408\u4f5c\uff0c\u6350\u7231\u5fc3\u9910\u7ed9\u9700\u8981\u7684\u56e2\u4f53\u3002","allItTakes":"\u4ec5\u9700"},"prompt":"Please enter how many meals to gift","totalLabel":"Total: ","next":"Next"}}')},74:function(e,t,n){e.exports=n(90)},79:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(44),i=n.n(o),c=(n(79),n(40)),l=n(25),u=n(55),s=n(56);c.a.use(l.e).init({initImmediate:!1,preload:["en","cn"],fallbackLng:"en",lng:"en",ns:["translation"],defaultNS:"translation",interpolation:{escapeValue:!1},resources:{en:{translation:u},cn:{translation:s}}});c.a;var m=n(12),d=n(8),h=n(3),p=n(33),f=n(46),b=n(4),g=n(5),w=n(26),v=n(66),E=n.n(v),x=n(67),O=n.n(x);n(51);function y(){var e=Object(b.a)(["\n  width: 150px;\n  height: 70px;\n\n  @media (max-width: 599px) {\n    width: 100px;\n    height: 40px;\n    margin-left: -6px;\n    margin-top: 10px;\n  }\n"]);return y=function(){return e},e}var S=function(e){e.theme;return r.a.createElement(T,{src:n(52),alt:"send chinatown love"})},T=g.a.img(y()),_=n(105);function C(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return C=function(){return e},e}function j(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  ","\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(b.a)(["\n  margin-left: 6px;\n  margin-right: 8px;\n"]);return k=function(){return e},e}function P(){var e=Object(b.a)(["\n  margin: 0;\n  transition: 0.1s;\n  color: #9e9e9e;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 200;\n  :hover {\n    color: #a7182d;\n  }\n  width: 35px;\n"]);return P=function(){return e},e}function M(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  width: 78px;\n  margin-left: 20px;\n  margin-top: -4px;\n  ","\n"]);return M=function(){return e},e}function D(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return D=function(){return e},e}function R(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return R=function(){return e},e}function A(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  ","\n"]);return A=function(){return e},e}function N(){var e=Object(b.a)(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  max-width: 1280px;\n  margin: 15px auto;\n  align-items: center;\n  font-size: 14px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding-right: 5px;\n  ","\n"]);return N=function(){return e},e}var B=function(e){var t=Object(_.a)(),n=t.t,o=t.i18n,i=Object(a.useState)(!1),c=Object(m.a)(i,2),l=c[0],u=c[1],s=function(e,t){e.preventDefault(),o.changeLanguage(t)},d=function(){window.innerWidth<1025&&!e.menuOpen?u(!0):(u(!1),e.setMenuOpen(!1))},h="all"===e.pageName;Object(a.useEffect)((function(){return window.innerWidth<1025?u(!0):u(!1),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]);return r.a.createElement(I,{compact:l.toString()},r.a.createElement(S,null),l?e.menuOpen?r.a.createElement(L,{compact:l.toString()},r.a.createElement(I,{compact:l.toString()},r.a.createElement(S,null),r.a.createElement(Y,{onClick:function(t){return e.setMenuOpen(!1)}})),r.a.createElement(W,{compact:l.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(F,{to:"/merchants",compact:l.toString(),onClick:function(t){return e.setMenuOpen(!1)}},n("navBar.header.merchants")),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/food-crawl.html",i18nText:"SCL FOOD CRAWL",altText:"SCL FOOD CRAWL"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/about.html",i18nText:"OUR STORY",altText:"OUR STORY"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"})):r.a.createElement(z,null,r.a.createElement(G,{compact:l.toString()},r.a.createElement(V,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement(U,null,"|"),r.a.createElement(V,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587")),r.a.createElement(E.a,{onClick:function(t){return e.setMenuOpen(!0)}})):r.a.createElement(L,{compact:l.toString()},r.a.createElement(W,{compact:l.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(F,{to:"/merchants",compact:l.toString(),active:h.toString()},n("navBar.header.merchants")),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/food-crawl.html",i18nText:"SCL FOOD CRAWL",altText:"SCL FOOD CRAWL"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/about.html",i18nText:"OUR STORY",altText:"OUR STORY"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(W,{compact:l.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"}),r.a.createElement(G,{compact:l.toString()},r.a.createElement(V,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement(U,null,"|"),r.a.createElement(V,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587"))))},I=g.a.header(N(),(function(e){return"true"!==e.compact&&"\n    margin-top: 40px;\n  "})),L=g.a.div(A(),(function(e){return"true"===e.compact?"column":"row"}),(function(e){return"true"===e.compact?"\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    background-color: white;\n    z-index: 10;\n  ":"\n    max-width: 760px;\n    justify-content: flex-end;\n  "})),z=g.a.div(R()),H=g.a.a(D(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "})),W=function(e){var t=Object(_.a)().t,n=e.i18nText&&!t(e.i18nText).includes("navBar")?t(e.i18nText):e.altText;return r.a.createElement(H,Object.assign({},e,{compact:e.compact}),n)},G=g.a.div(M(),(function(e){return"true"===e.compact&&"margin-right: 20px;\n  "})),V=g.a.div(P()),U=g.a.div(k()),F=Object(g.a)(w.a)(j(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "}),(function(e){return"true"===e.active&&"\n    border-bottom: 1px #9e9e9e solid;\n    padding: 0 5px 3px;\n  "})),Y=Object(g.a)(O.a)(C());function J(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n"]);return J=function(){return e},e}function q(){var e=Object(b.a)(["\n  padding: 0;\n  display: flex;\n"]);return q=function(){return e},e}function $(){var e=Object(b.a)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  @media (min-width: 600px) {\n    order: 2;\n  }\n  @media (max-width: 599px) {\n    flex-direction: row;\n  }\n"]);return $=function(){return e},e}function K(){var e=Object(b.a)(["\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: ",";\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ",";\n\n  span {\n    margin-left: 24px;\n    color: #a8192e;\n  }\n  @media (min-width: 600px) {\n    justify-content: space-between;\n    height: 120px;\n  }\n  @media (max-width: 599px) {\n    padding: 0 16px 0 16px;\n    height: 80px;\n  }\n"]);return K=function(){return e},e}var Q=function(e){var t=e.theme,n=void 0===t?"none":t;return r.a.createElement(X,{theme:n},r.a.createElement("a",{href:"https://sendchinatownlove.com/"},r.a.createElement(S,{theme:n})),r.a.createElement(Z,null,r.a.createElement(ee,null,r.a.createElement(te,{href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},r.a.createElement("span",{className:"fa fa-facebook"}))),r.a.createElement(ee,null,r.a.createElement(te,{href:"https://instagram.com/sendchinatownlove"},r.a.createElement("span",{className:"fa fa-instagram"}))),r.a.createElement(ee,null,r.a.createElement(te,{href:"mailto:hello@sendchinatownlove.com"},r.a.createElement("span",{className:"fa fa-envelope"})))))},X=g.a.footer(K(),(function(e){return e.menuOpen?"none":"flex"}),(function(e){return"dark"===e.theme?"#f7f7f7":"#ffffff"})),Z=g.a.div($()),ee=g.a.div(q()),te=g.a.a(J());function ne(){var e=Object(h.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ae=n(43),re=n(42),oe=n.n(re),ie=n(45),ce=n(23);p.a.initialize("UA-164362374-2");var le=Object(d.a)();le.listen((function(e){p.a.set({page:e.pathname}),p.a.pageview(e.pathname)}));var ue=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(7)]).then(n.bind(null,265))})),se=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,266))})),me=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(3),n.e(14)]).then(n.bind(null,269))})),de=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,135))})),he=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,267))})),pe=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(17),n.e(11)]).then(n.bind(null,271))})),fe=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,262))})),be=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(10)]).then(n.bind(null,264))}));oe.a.init("2757464141030019",void 0,{autoConfig:!0,debug:!0});var ge=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],o=t[1],i=function(e){var t;switch(e){case"all":t=r.a.createElement(se,{menuOpen:n});break;case"merchants":t=r.a.createElement(h.a,{to:"/all"});break;case"seller":t=r.a.createElement(ue,{menuOpen:n});break;case"giftameal":t=r.a.createElement(me,{menuOpen:n});break;default:t=r.a.createElement(de,{menuOpen:n})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement(ne,null),r.a.createElement(B,{menuOpen:n,setMenuOpen:o,pageName:e}),t,r.a.createElement(Q,{menuOpen:n})))};return r.a.createElement(h.c,{history:le},r.a.createElement(a.Suspense,{fallback:r.a.createElement(f.b,{isPage:!0})},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/all"},i("all")),r.a.createElement(h.b,{path:"/voucher/:id"},r.a.createElement(ie.b,null,r.a.createElement(he,null))),r.a.createElement(h.b,{exact:!0,path:"/passport"},r.a.createElement(be,{screen:ce.a.Track})),r.a.createElement(h.b,{exact:!0,path:"/passport/:id/tickets"},r.a.createElement(be,{screen:ce.a.Dashboard})),r.a.createElement(h.b,{exact:!0,path:"/passport/:id/redeem/:access_token"},r.a.createElement(be,{screen:ce.a.Redemption})),r.a.createElement(h.b,{exact:!0,path:"/passport/:id/redeem/:access_token/sponsor/:sponsor_seller_id"},r.a.createElement(be,{screen:ce.a.Claim})),r.a.createElement(h.b,{path:"/:seller_id/dashboard/:secret_id"},r.a.createElement(pe,null)),r.a.createElement(h.b,{path:"/print-passport-voucher/:id/tickets/:tickets_secret"},r.a.createElement(fe,null)),r.a.createElement(h.b,{path:"/gift-a-meal",component:function(){return window.location.href="https://www.gofundme.com/f/gift-a-meal",null}}),r.a.createElement(h.b,{path:"/gift-a-meal-home"},i("giftameal")),r.a.createElement(h.b,{path:"/merchants"},i("merchants")),r.a.createElement(h.b,{path:"/:id"},i("seller")),r.a.createElement(h.b,{path:"/:id#story"},i("seller")),r.a.createElement(h.b,null,i("error")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,5,6]]]);
//# sourceMappingURL=main.144ecb4c.chunk.js.map