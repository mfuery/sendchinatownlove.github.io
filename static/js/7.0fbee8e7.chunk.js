(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[7],{110:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return g})),n.d(t,"h",(function(){return b})),n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return x}));var a=n(107),r=n.n(a),i=n(108),o=n(122),c=n.n(o),u=(n(123),"https://api.sendchinatownlove.com/"),s=u+"sellers/",l=u+"charges",m=u+"gift_cards/",d=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(s,{params:{locale:h(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(s+t,{params:{locale:h(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,o,u){var s,m,d,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.email,m=o.name,d=o.idempotency_key,p=o.is_subscribed,e.next=5,c.a.post(l,{is_square:!0,nonce:t,line_items:a,email:s,name:m,seller_id:n,idempotency_key:d,is_subscribed:p,is_distribution:u},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r,i){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(m+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.put(m+t,{amount:n}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(s+t+"/gift_cards/"+n).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function h(e){switch(e){case"cn":return"zh-CN";case"en":default:return"en"}}var v=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api.sendchinatownlove.com/campaigns/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api.sendchinatownlove.com/distributors/"+t).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},112:function(e,t,n){"use strict";var a=n(114);n.o(a,"getCampaigns")&&n.d(t,"getCampaigns",(function(){return a.getCampaigns})),n.o(a,"getDistributor")&&n.d(t,"getDistributor",(function(){return a.getDistributor})),n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers})),n.o(a,"makeSquarePayment")&&n.d(t,"makeSquarePayment",(function(){return a.makeSquarePayment}));var r=n(110);n.d(t,"getCampaigns",(function(){return r.a})),n.d(t,"getDistributor",(function(){return r.b})),n.d(t,"getSeller",(function(){return r.d})),n.d(t,"getSellers",(function(){return r.e})),n.d(t,"makeSquarePayment",(function(){return r.g}))},113:function(e,t,n){"use strict";var a=n(112);n.o(a,"getCampaigns")&&n.d(t,"getCampaigns",(function(){return a.getCampaigns})),n.o(a,"getDistributor")&&n.d(t,"getDistributor",(function(){return a.getDistributor})),n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers}));n(118)},114:function(e,t){},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="max-width: 599px",r="max-width: 899px"},118:function(e,t,n){"use strict";n(12),n(0)},121:function(e,t,n){e.exports={"button--filled":"styles_button--filled__1Q_a1","button--red-filled":"styles_button--red-filled__30C9L","button--outlined":"styles_button--outlined__T1S4e","button--redfilled":"styles_button--redfilled__1aPRb","modalButton--back":"styles_modalButton--back__SqQbc","modalButton--outlined":"styles_modalButton--outlined__2rGur","modalButton--filled":"styles_modalButton--filled__1u791","modalButton--nonfunctional":"styles_modalButton--nonfunctional__3b7y_","modalButton--selected":"styles_modalButton--selected__120By","modalButton--outline":"styles_modalButton--outline__1nxQS","closeButton--close":"styles_closeButton--close__2-Gq4","modalForm--form":"styles_modalForm--form__1r_3v","modalInput--input":"styles_modalInput--input__1yGue","filterable-table-container":"styles_filterable-table-container__3yuTM","header-row":"styles_header-row__13pcb","filter-container":"styles_filter-container__3R7V3","filter-input":"styles_filter-input__2pKZl","clear-filter":"styles_clear-filter__2DOt6","record-count":"styles_record-count__3tJgl",fa:"styles_fa__1dVUs",active:"styles_active__ZQhyR",disabled:"styles_disabled__yy9aR",bold:"styles_bold__2INhr",uppercase:"styles_uppercase__HZ5Zd",container:"styles_container__3QdrG",header:"styles_header__2e_gf",headerText:"styles_headerText__2GMED",hero:"styles_hero__30ZVS",backButton:"styles_backButton__1XAdF",campaignHeader:"styles_campaignHeader__trEYV",videoContainer:"styles_videoContainer__2lfjR",videoDescription:"styles_videoDescription__4o5jP",background:"styles_background__2nP1I",instructionsGrid:"styles_instructionsGrid__13657",stepGrid:"styles_stepGrid__3ygF3",stepText:"styles_stepText__sSzBp",modalBackground:"styles_modalBackground__3ypio",modalInstructionsGrid:"styles_modalInstructionsGrid__2C4x6",modalStepGrid:"styles_modalStepGrid__1ezhA",modalStepText:"styles_modalStepText__KwkiA"}},129:function(e,t,n){"use strict";var a=n(12),r=n(0),i=n.n(r),o=n(121),c=n.n(o),u=n(104),s=n(130),l=n.n(s),m=n(131),d=n.n(m),p=n(132),f=n.n(p),g=n(133),b=n.n(g);t.a=function(e){var t=Object(u.a)().t;return i.a.createElement("div",{className:e.isModal?c.a.modalBackground:c.a.background},i.a.createElement("div",{className:e.isModal?c.a.modalInstructionsGrid:c.a.instructionsGrid},[["".concat(t("gamHome.subheading.step1")),"".concat(t("gamHome.subheading.step1Text")),l.a],["".concat(t("gamHome.subheading.step2")),"".concat(t("gamHome.subheading.step2Text")),d.a],["".concat(t("gamHome.subheading.step3")),"".concat(t("gamHome.subheading.step3Text")),f.a],["".concat(t("gamHome.subheading.step4")),"".concat(t("gamHome.subheading.step4Text")),b.a]].map((function(t,n){var r=Object(a.a)(t,3),i=r[0],o=r[1],c=r[2];return _(i,o,c,e.isModal,n)}))))};var _=function(e,t,n,a,r){return i.a.createElement("div",{className:a?c.a.modalStepGrid:c.a.stepGrid,key:r},i.a.createElement("img",{src:n,alt:"icon"}),i.a.createElement("div",{className:a?c.a.modalStepText:c.a.stepText},i.a.createElement("p",{className:c.a.uppercase},e),i.a.createElement("p",{className:c.a.bold},t)))}},130:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step1.c58f05a4.svg"},131:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step2.9a0ca5e8.svg"},132:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step3.ad0c5291.svg"},133:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step4.b9832c02.svg"},213:function(e,t,n){e.exports=n.p+"static/media/illustrated_flatlay_hero.050015e1.png"},214:function(e,t,n){e.exports=n.p+"static/media/campaign_default.9ad02a20.png"},260:function(e,t,n){"use strict";n.r(t);var a=n(107),r=n.n(a),i=n(108),o=n(12),c=n(0),u=n.n(c),s=n(121),l=n.n(s),m=n(113),d=n(213),p=n.n(d),f=n(129),g=n(4),b=n(117),_=n(5),h=n(104);function v(){var e=Object(g.a)(["\n  text-align: center;\n  letter-spacing: 0.15em;\n  cursor: pointer;\n  margin-bottom: 18px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n\n  @media (",") {\n    font-size: 14px;\n    padding-right: 0;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(g.a)(["\n  font-size: 15px;\n\n  @media (",") {\n    font-size: 12px;\n  }\n"]);return x=function(){return e},e}function y(){var e=Object(g.a)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n\n  @media (",") {\n    font-size: 14px;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(g.a)(["\n  @media (",") {\n    margin-bottom: 20px;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(g.a)(["\n  align-items: center;\n  border: 1px solid #e5e5e5;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  padding: 30px;\n  margin-bottom: 25px;\n\n  @media (",") {\n    grid-template-columns: 1fr;\n    margin-bottom: 15px;\n  }\n"]);return O=function(){return e},e}var E=function(){var e=Object(h.a)().t;return u.a.createElement(j,null,u.a.createElement(S,null,u.a.createElement(k,null,e("gamHome.noCampaignsBox.CTA")),u.a.createElement(B,null,e("gamHome.noCampaignsBox.description"))),u.a.createElement(C,{className:"button--filled"},e("gamHome.giftButton")))},j=_.a.div(O(),b.b),S=_.a.div(w(),b.b),k=_.a.p(y(),b.a),B=_.a.p(x(),b.a),C=_.a.button(v(),b.a);function M(){var e=Object(g.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  color: #9e9e9e;\n  margin-bottom: 10px;\n"]);return M=function(){return e},e}function H(){var e=Object(g.a)(["\n  background-color: #dd678a;\n  height: 12px;\n"]);return H=function(){return e},e}function N(){var e=Object(g.a)(["\n  background-color: #dedede;\n  height: 12px;\n  margin-bottom: 15px;\n"]);return N=function(){return e},e}function z(){var e=Object(g.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: ",";\n"]);return z=function(){return e},e}function D(){var e=Object(g.a)(["\n  width: 100%;\n  padding: 15px 0;\n"]);return D=function(){return e},e}var T=function(e){var t,n,a=e.isActive,r=e.numContributions,i=e.targetAmount,o=e.progressBarColor,u=e.lastContributionTime,s=e.endDate,l=Object(h.a)().t,m=Math.floor(r/i*100),d=s.getTime()-Date.now(),p=d>0?d/864e5:0,f=Date.now()-u.getTime();return c.createElement(G,null,c.createElement(F,null,function(e){var t=e/6e4;if(t<60)return"".concat(l("buyMeal.lastContributionMade")," ").concat(Math.floor(t),"m ").concat(l("buyMeal.ago"));var n=t/60;if(n<24)return"".concat(l("buyMeal.lastContributionMade")," ").concat(Math.floor(n),"h ").concat(l("buyMeal.ago"));var a=n/24;return"".concat(l("buyMeal.lastContributionMade")," ").concat(Math.floor(a),"d ").concat(l("buyMeal.ago"))}(f)),c.createElement(A,{className:"progress-bar"},c.createElement(q,{style:{width:"".concat((t=r,n=i,t<n?t/n*100:100),"%"),backgroundColor:o}})),c.createElement("div",null,c.createElement(I,{color:o},m,"% ",l("buyMeal.toTarget"))," ","(",r," ",l("buyMeal.outOf")," ",i," ",l("buyMeal.meals"),")"),a&&c.createElement("div",null,l("buyMeal.endsIn")," ",c.createElement(I,{color:o},Math.ceil(p))," ",l("buyMeal.days")))},G=_.a.div(D()),I=_.a.span(z(),(function(e){return e.color})),A=_.a.div(N()),q=_.a.div(H()),F=_.a.div(M()),P=n(214),R=n.n(P);function Q(){var e=Object(g.a)(["\n  max-height: 70px;\n  max-width: 70px;\n  vertical-align: middle;\n"]);return Q=function(){return e},e}function V(){var e=Object(g.a)(["\n  max-height: 70px;\n  max-width: 120px;\n  margin-right: 15px;\n  vertical-align: middle;\n"]);return V=function(){return e},e}function Z(){var e=Object(g.a)(["\n  height: 240px;\n  width: 240px;\n\n  @media (",") {\n    max-height: 100px;\n    width: 100%;\n  }\n"]);return Z=function(){return e},e}function J(){var e=Object(g.a)(["\n  align-self: right;\n  margin-bottom: 60px;\n  align-self: flex-end;\n\n  @media (",") {\n    position: absolute;\n    top: 132px;\n    margin-bottom: 30px;\n\n    img {\n      height: 25px;\n    }\n  }\n"]);return J=function(){return e},e}function L(){var e=Object(g.a)(["\n  text-align: center;\n  width: 240px;\n  letter-spacing: 0.15em;\n  cursor: pointer;\n  margin-bottom: 18px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n\n  @media (max-width: 550px) {\n    font-size: 14px;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"]);return L=function(){return e},e}function Y(){var e=Object(g.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n  color: #1e1e1e;\n  margin-bottom: 20px;\n\n  @media (",") {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n"]);return Y=function(){return e},e}function K(){var e=Object(g.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  margin-bottom: 18px;\n\n  @media (",") {\n    margin-bottom: 10px;\n    width: 70%;\n  }\n"]);return K=function(){return e},e}function U(){var e=Object(g.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n  color: #1e7c9a;\n  margin-bottom: 15px;\n\n  @media (",") {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n"]);return U=function(){return e},e}function W(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2rem 1.5rem;\n\n  @media (",") {\n    padding: 0.5rem 1rem 0.75rem;\n\n    > span {\n      margin: 2.5px 0;\n    }\n\n    > button {\n      width: 100%;\n    }\n\n    > img {\n      height: 103px;\n      object-fit: cover;\n      object-position: 0 25%;\n    }\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(g.a)(["\n  border-bottom: 1px solid #e5e5e5;\n  display: flex;\n  max-height: 350px;\n  margin: 35px 0 55px;\n  justify-content: space-between;\n\n  @media (",") {\n    max-height: 600px;\n    flex-direction: column;\n    margin: 0 17px;\n    position: relative;\n    padding-top: 15px;\n  }\n"]);return X=function(){return e},e}var $=function(e){var t,n=Object(h.a)().t,a=Object(c.useState)(),s=Object(o.a)(a,2),l=s[0],d=s[1],p=Object(c.useState)(),f=Object(o.a)(p,2),g=f[0],b=f[1],_=e.campaign,v=function(){var e=Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.getDistributor)(_.distributor_id);case 2:return t=e.sent,e.next=5,Object(m.getSeller)(_.seller_id);case 5:n=e.sent,d(t.data),b(n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[]);var x=Math.floor(_.amount_raised/_.price_per_meal),y=Math.floor(_.target_amount/_.price_per_meal),w=_.gallery_image_urls;return u.a.createElement(ee,null,u.a.createElement(te,null,w&&w.length&&u.a.createElement(ce,{src:null!==(t=w[0])&&void 0!==t?t:R.a,alt:"campaign_image"})),u.a.createElement(te,null,g&&g.locations&&g.locations.length&&u.a.createElement(ne,null,g.locations[0].city),l&&g&&u.a.createElement(ae,null,g.name," x ",l.name),u.a.createElement(re,null,_.description,u.a.createElement("br",null),l&&u.a.createElement("a",{href:l.website_url},l.name)),u.a.createElement(T,{isActive:_.active,numContributions:x,targetAmount:y,progressBarColor:"#CF6E8A",lastContributionTime:new Date(_.last_contribution),endDate:new Date(_.end_date)})),u.a.createElement(te,null,u.a.createElement(oe,null,l&&u.a.createElement("a",{href:l.website_url},u.a.createElement(ue,{src:l.image_url,alt:"distributor_logo"})),g&&u.a.createElement(se,{src:g.logo_image_url,alt:"merchant_logo"})),g&&u.a.createElement(ie,{className:"button--filled",onClick:function(e){e.preventDefault(),window.location.href="/"+g.seller_id}},n("gamHome.listItem.viewButton")),_.active&&u.a.createElement(ie,{className:"button--outlined"},n("gamHome.listItem.giftButton"))))},ee=_.a.div(X(),b.b),te=_.a.div(W(),b.b),ne=_.a.div(U(),b.b),ae=_.a.div(K(),b.b),re=_.a.div(Y(),b.b),ie=_.a.div(L()),oe=_.a.span(J(),b.b),ce=_.a.img(Z(),b.b),ue=_.a.img(V()),se=_.a.img(Q()),le=n(215),me=function(e){var t=e.videoId,n=function(){var e=Object(c.useState)({width:0,height:0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),a=Math.min(.8*n.width,1200),r={height:(a/2).toString(),width:a.toString(),playerVars:{autoplay:0}};return u.a.createElement(le.a,{videoId:t,opts:r})};t.default=function(e){var t=Object(h.a)().t,n=Object(c.useState)([]),a=Object(o.a)(n,2),s=a[0],d=a[1],g=Object(c.useState)([]),b=Object(o.a)(g,2),_=b[0],v=b[1],x=function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.getCampaigns)();case 2:t=e.sent,n=t.data.filter((function(e){return e.active&&e.valid})),d(n),a=t.data.filter((function(e){return!e.active})),v(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),u.a.createElement("div",{className:l.a.container,style:{display:e.menuOpen?"none":"inherit"}},u.a.createElement("div",{className:l.a.header},u.a.createElement("img",{src:p.a,className:l.a.hero,alt:"meal overlay illustration"}),u.a.createElement("div",{className:l.a.headerText},u.a.createElement("h3",{style:{fontWeight:"bolder"}},t("gamHome.header")),u.a.createElement("p",null,t("gamHome.description"))),u.a.createElement(f.a,{isModal:!1})),u.a.createElement("br",null),u.a.createElement("button",{className:l.a.backButton,onClick:function(e){e.preventDefault(),window.location.href="/all"}},t("gamHome.backButton")),s.length?u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",{className:l.a.campaignHeader},t("gamHome.activeSection")),s.map((function(e){return u.a.createElement($,{campaign:e})}))):u.a.createElement(E,null),u.a.createElement("div",{className:l.a.videoContainer},u.a.createElement(me,{videoId:"FYlUOhzYlRM"}),u.a.createElement("h5",{className:l.a.videoDescription},t("gamHome.videoBox.caption"))),u.a.createElement("h5",{className:l.a.campaignHeader},t("gamHome.pastSection")),_.map((function(e){return u.a.createElement($,{campaign:e})})))}}}]);
//# sourceMappingURL=7.0fbee8e7.chunk.js.map