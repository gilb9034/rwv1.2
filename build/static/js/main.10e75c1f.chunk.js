(this.webpackJsonpmernapp=this.webpackJsonpmernapp||[]).push([[0],{320:function(e,t,n){},332:function(e,t){},340:function(e,t){},357:function(e,t){},359:function(e,t){},378:function(e,t){},379:function(e,t){},438:function(e,t){},440:function(e,t){},472:function(e,t){},474:function(e,t){},475:function(e,t){},480:function(e,t){},482:function(e,t){},488:function(e,t){},490:function(e,t){},503:function(e,t){},515:function(e,t){},518:function(e,t){},523:function(e,t){},531:function(e,t){},602:function(e,t){},635:function(e,t){},707:function(e,t){},713:function(e,t){},726:function(e,t){},732:function(e,t,n){"use strict";n.r(t);var a=n(30),i=n.n(a),s=n(300),u=n.n(s),r=n(0),p=n.n(r),o=n(3),l=n(49),d=(n(319),n(320),n(112)),c=n.n(d),y=n.p+"static/media/riotrewards_ico.18616671.png",m=n.p+"static/media/riotrewards.020704de.png",b="0x0a4D0a1731dB8d0aCa14CDf5B6caa71d56F64724",f=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeMultipleAccountsFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"newValue",type:"uint256"},{indexed:!0,internalType:"uint256",name:"oldValue",type:"uint256"}],name:"GasForProcessingUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newLiquidityWallet",type:"address"},{indexed:!0,internalType:"address",name:"oldLiquidityWallet",type:"address"}],name:"LiquidityWalletUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"iterations",type:"uint256"},{indexed:!1,internalType:"uint256",name:"claims",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lastProcessedIndex",type:"uint256"},{indexed:!0,internalType:"bool",name:"automatic",type:"bool"},{indexed:!1,internalType:"uint256",name:"gas",type:"uint256"},{indexed:!0,internalType:"address",name:"processor",type:"address"}],name:"ProcessedDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"SendDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"pair",type:"address"},{indexed:!0,internalType:"bool",name:"value",type:"bool"}],name:"SetAutomatedMarketMakerPair",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateUniswapV2Router",type:"event"},{inputs:[],name:"BNBRewardsFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_gamesRewardsWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_marketingWalletAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"automatedMarketMakerPairs",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"blacklistAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"dividendTokenBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dividendTracker",outputs:[{internalType:"contract RIOTSDividendTracker",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"excludeFromDividends",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeMultipleAccountsFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"extraSellFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"gamesFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"gasForProcessing",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountDividendsInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountDividendsInfoAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getClaimWait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNumberOfDividendTokenHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalDividendsDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromDividends",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFees",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketingFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxWalletBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"processDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"setAutomatedMarketMakerPair",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"setBNBRewardsFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"setExtraSellFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"setGamesFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newWallet",type:"address"}],name:"setLiqudiityWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"setLiquiditFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"wallet",type:"address"},{internalType:"address payable",name:"gamesRewardsWallet",type:"address"}],name:"setMarketingAndGamesRewardsWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"setMarketingFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"setMaxWalletBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_enabled",type:"bool"}],name:"setSwapEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"setSwapTokensAtAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"swapTokensAtAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"claimWait",type:"uint256"}],name:"updateClaimWait",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newValue",type:"uint256"}],name:"updateGasForProcessing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateUniswapV2Router",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],w=n(311),T=n(14);var v=function(){var e,t=Object(a.useState)("Metamask"),n=Object(l.a)(t,2),i=n[0],s=n[1],u=Object(a.useState)("WalletConnect"),r=Object(l.a)(u,2),d=r[0],v=r[1],x=Object(a.useState)("0"),h=Object(l.a)(x,2),j=h[0],M=h[1],g=Object(a.useState)("0"),O=Object(l.a)(g,2),k=O[0],F=O[1],N=Object(a.useState)("0"),A=Object(l.a)(N,2),S=A[0],W=A[1],C=Object(a.useState)(),D=Object(l.a)(C,2),E=D[0],R=D[1],B=Object(a.useState)(!0),L=Object(l.a)(B,2),I=L[0],P=L[1],V=Object(a.useState)(!0),q=Object(l.a)(V,2),U=q[0],_=q[1],G=function(){var t=Object(o.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_(!1),n=!1,t.prev=2,!window.ethereum){t.next=10;break}return window.web3=new c.a(window.ethereum),t.next=7,window.ethereum.enable();case 7:n=!0,t.next=11;break;case 10:window.web3?(window.web3=new c.a(window.web3.currentProvider),n=!0):(n=!1,console.log("Metamask is not installed, please install it on your browser to connect."));case 11:if(!0!==n){t.next=20;break}return t.next=14,J();case 14:a=t.sent,e=a[0],s(e),null,window.ethereum.on("accountsChanged",(function(t){e=t[0],s(e)})),H();case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(2),console.log("Error while connecting metamask",t.t0);case 25:case"end":return t.stop()}}),t,null,[[2,22]])})));return function(){return t.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var t=Object(o.a)(p.a.mark((function t(){var n,a,s,u,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=window.web3,a=new n.eth.Contract(f,b),console.log("blanaceof",i,e),t.next=6,a.methods.balanceOf(e).call();case 6:return s=t.sent,console.log("blanaceof",s),W(s/Math.pow(10,9)),t.next=11,a.methods.dividendTokenBalanceOf(e).call();case 11:return u=t.sent,M(n.utils.fromWei(u)),t.next=15,a.methods.withdrawableDividendOf(e).call();case 15:r=t.sent,F(n.utils.fromWei(r)),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log("data",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(){return t.apply(this,arguments)}}();function Y(){return(Y=Object(o.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=window.web3,a=new n.eth.Contract(f,b),console.log("response",e,i),t.next=6,a.methods.claim().send({from:i}).then(function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("response",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("response",e)}));case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Error while fetching acounts: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var z=function(){var t=Object(o.a)(p.a.mark((function t(){var n,a,u,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(!1),n=!1,t.prev=2,console.log("This is   setErrorState(false);"),a=new w.a({chainId:56,rpc:{56:"https://bsc-dataseed.binance.org"}}),t.next=7,a.enable();case 7:if(console.log("walletConnectProvider",a),a.connected&&console.log("walletConnectProvider",a.accounts[0]),a?(window.web3=new c.a(a),n=!0):(n=!1,console.log("This is setErrorState(true)")),!0!==n){t.next=17;break}return u=window.web3,t.next=14,u.eth.getAccounts();case 14:r=t.sent,u.eth.net.getId().then((function(t){switch(console.log("(accounts[0], 2)",r,t),s(r[0]),v(r[0]),e=r[0],console.log("blanaceof",i,e),t){case 1:console.log("(accounts[0], 2)",(r[0],2));break;case 2:console.log("This is the deprecated Morden test network.");break;case 3:console.log("This is the ropsten test network.");break;default:console.log("(accounts[0], 2)",(r[0],1)),console.log("This is an unknown network.")}H()})),window.ethereum.on("accountsChanged",(function(e){u.eth.net.getId().then((function(e){switch(e){case 1:console.log("This is mainnet");break;case 2:console.log("This is the deprecated Morden test network.");break;case 3:console.log("This is the ropsten test network.");break;default:console.log("This is an unknown network.")}}))}));case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),console.log(t.t0);case 22:console.log("setErrorState(true)");case 23:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){setInterval((function(){}),1e3)}),[]),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:"Main_div",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{className:"text-center pt-3 logoMaindiv d-flex justify-content-between",children:[Object(T.jsx)("img",{className:" ",src:m,alt:"logo"}),E?Object(T.jsxs)("div",{children:[I&&Object(T.jsx)("button",{onClick:G,className:"btn mt-3  mt-md-0 text-truncate mar border border-left-4 btn-light fw-bolder btnWidth   p-2 fs-5",children:i}),U&&Object(T.jsx)("button",{onClick:z,className:"btn  mt-3  mt-md-0 marginLeft1  text-truncate btn-light fw-bolder btnWidth   p-2 fs-5",children:d})]}):Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){return R(!0)},className:"btn text-truncate btn-light fw-bolder btnWidth   p-2 fs-5",children:"Connect"})})]}),Object(T.jsx)("div",{className:"row d-flex justify-content-center pt-5",children:Object(T.jsx)("div",{className:"col-12 col-lg-6",children:Object(T.jsx)("div",{className:"card  mt-4 mt-md-4",children:Object(T.jsxs)("div",{className:"card-body text-center",children:[Object(T.jsxs)("div",{className:"d-flex flex-column justify-content-center mt-4",children:[Object(T.jsx)("h1",{className:" fw-bolder",children:"Your Riot Balance"}),Object(T.jsx)("h2",{className:"text-truncate marginLeft fw-bold",children:S})]}),Object(T.jsxs)("div",{className:"d-flex flex-column justify-content-center mt-4",children:[Object(T.jsx)("h1",{className:" fw-bolder",children:"Claimable BNB Rewards"}),Object(T.jsx)("h2",{className:"text-truncate marginLeft fw-bold",children:j})]}),Object(T.jsxs)("div",{className:"d-flex flex-column justify-content-center mt-4",children:[Object(T.jsx)("h1",{className:" fw-bolder",children:"Show rewards"}),Object(T.jsx)("h2",{className:"text-truncate marginLeft fw-bold",children:k})]}),Object(T.jsx)("div",{className:"d-flex flex-column justify-content-center mt-4",children:Object(T.jsx)("button",{className:" fw-bolder btn btn-light p-2 fs-4",onClick:function(){return Y.apply(this,arguments)},children:"Claim rewards"})})]})})})}),Object(T.jsxs)("div",{className:" mt-5 logoMaindiv2 pb-2 d-flex justify-content-center align-items-center",children:[Object(T.jsx)("img",{src:y,alt:"logo"}),Object(T.jsx)("a",{href:"https://t.me/RiotRewards",children:Object(T.jsx)("i",{className:"fab fs-3 marginLeft fa-telegram-plane"})}),Object(T.jsx)("a",{href:"https://twitter.com/riotrewardsbsc?s=21",children:Object(T.jsx)("i",{className:"fab fs-3 marginLeft fa-twitter"})})]})]})})})};u.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(v,{})}),document.getElementById("root"))}},[[732,1,2]]]);
//# sourceMappingURL=main.10e75c1f.chunk.js.map