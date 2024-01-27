(function(){"use strict";var e={4819:function(e,r,a){var l=a(9242),t=a(3396);const i=(0,t._)("div",null,"Hello, testing deployments",-1);function n(e,r,a,l,n,o){const s=(0,t.up)("ContactForm");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t.Wm)(s)],64)}var o=a(7139);const s=(0,t._)("label",null,"Email",-1),m=(0,t._)("label",null,"Password:",-1),d=(0,t._)("label",null,"Role:",-1),u=(0,t._)("option",{value:"developer"},"Web developer",-1),p=(0,t._)("option",{value:"designer"},"Web designer",-1),f=[u,p],c=(0,t._)("label",null,"Skills:",-1),h=["onClick"],g={class:"terms"},v=(0,t._)("label",null,"Accept terms and conditions",-1),E=(0,t._)("div",{class:"submit"},[(0,t._)("button",null,"Create an account")],-1);function w(e,r,a,i,n,u){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("form",{onSubmited:r[6]||(r[6]=(0,l.iM)(((...e)=>u.handleSubmit&&u.handleSubmit(...e)),["prevent"]))},[s,(0,t.wy)((0,t._)("input",{type:"email:",required:"","onUpdate:modelValue":r[0]||(r[0]=e=>n.email=e)},null,512),[[l.nr,n.email]]),m,(0,t.wy)((0,t._)("input",{type:"password",required:"","onUpdate:modelValue":r[1]||(r[1]=e=>n.password=e)},null,512),[[l.nr,n.password]]),d,(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>n.role=e)},f,512),[[l.bM,n.role]]),c,(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":r[3]||(r[3]=e=>n.tempSkill=e),onKeyup:r[4]||(r[4]=(0,l.iM)(((...e)=>u.addSkill&&u.addSkill(...e)),["alt"]))},null,544),[[l.nr,n.tempSkill]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.skills,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e,class:"pill"},[(0,t._)("span",{onClick:r=>u.removeSkill(e)},(0,o.zw)(e),9,h)])))),128)),(0,t._)("div",g,[(0,t.wy)((0,t._)("input",{type:"checkbox",required:"","onUpdate:modelValue":r[5]||(r[5]=e=>n.terms=e)},null,512),[[l.e8,n.terms]]),v]),E],32),(0,t._)("p",null,"Email: "+(0,o.zw)(n.email),1),(0,t._)("p",null,"Password: "+(0,o.zw)(n.password),1),(0,t._)("p",null,"Role: "+(0,o.zw)(n.role),1),(0,t._)("p",null,"Terms: "+(0,o.zw)(n.terms),1)],64)}a(560);var b={name:"SignupForm",data(){return{email:"",password:"",role:"designer",terms:!1,tempSkill:"",skills:[]}},methods:{addSkill(e){","===e.key&&this.tempSkill&&(this.skills.includes(this.tempSkill),this.skills.push(this.tempSkill),this.tempSkill="")},removeSkill(e){this.skills=this.skills.filter((r=>r!==e))},handleSubmit(){}}},_=a(89);const y=(0,_.Z)(b,[["render",w]]);var k=y;const S=e=>((0,t.dD)("data-v-ee00854a"),e=e(),(0,t.Cn)(),e),D={key:0,class:"loading"},F=S((()=>(0,t._)("h4",null,"sendig",-1))),V=S((()=>(0,t._)("div",null,"loading....",-1))),O=[F,V],x={key:1},z=S((()=>(0,t._)("label",{for:"name"},"Name:",-1))),C={class:"error"},M=S((()=>(0,t._)("label",{for:"email"},"email:",-1))),j={class:"error"},U=S((()=>(0,t._)("label",{for:"message"},"message:",-1))),q={class:"error"},Z=["disabled"];function A(e,r,a,i,n,s){return n.loading?((0,t.wg)(),(0,t.iD)("div",D,O)):n.isEmailSent?((0,t.wg)(),(0,t.iD)("div",x,"Message sent")):((0,t.wg)(),(0,t.iD)("form",{key:2,id:"contactForm",onSubmit:r[6]||(r[6]=(0,l.iM)((e=>s.sendEmail()),["prevent"])),"data-aos":"fade-left","data-aos-duration":"1000","data-aos-delay":"300"},[z,(0,t.wy)((0,t._)("input",{type:"text",id:"name",name:"name",placeholder:"name","onUpdate:modelValue":r[0]||(r[0]=e=>n.formData.name=e),onInput:r[1]||(r[1]=(...e)=>s.validateName&&s.validateName(...e))},null,544),[[l.nr,n.formData.name]]),(0,t._)("p",C,(0,o.zw)(n.fieldErrors.nameError||""),1),M,(0,t.wy)((0,t._)("input",{type:"email",id:"email",name:"email",placeholder:"email","onUpdate:modelValue":r[2]||(r[2]=e=>n.formData.email=e),onInput:r[3]||(r[3]=(...e)=>s.validateEmail&&s.validateEmail(...e))},null,544),[[l.nr,n.formData.email]]),(0,t._)("p",j,(0,o.zw)(n.fieldErrors.emailError||""),1),U,(0,t.wy)((0,t._)("textarea",{id:"message",name:"message",placeholder:"type message",rows:"4","onUpdate:modelValue":r[4]||(r[4]=e=>n.formData.message=e),onInput:r[5]||(r[5]=(...e)=>s.validateMessage&&s.validateMessage(...e))},null,544),[[l.nr,n.formData.message]]),(0,t._)("p",q,(0,o.zw)(n.fieldErrors.messageError||""),1),(0,t._)("button",{type:"submit",value:"Submit",disabled:!n.isFormValid},"Send",8,Z)],32))}var H=a(3079),I={name:"ContactForm",data(){return{formData:{name:"",email:"",message:""},fieldErrors:{nameError:"",emailError:"",messageError:""},isFormValid:!1,loading:!1,isEmailSent:!1}},methods:{sendEmail(){this.loading=!0,H.qm("service_nxfm2wc","template_0pctieq","#contactForm","SWojRF4j4aSoByi3h").then((e=>{this.loading=!1,this.isEmailSent=!0}),(e=>{this.loading=!1}))},updateFormValidity(){this.isFormValid=""===this.fieldErrors.nameError&&""===this.fieldErrors.emailError&&""===this.fieldErrors.messageError&&this.formData.name.length>0&&this.formData.email.length>0&&this.formData.message.length>0},validateName(){const e=/^[A-Za-z]+ [A-Za-z]+$/;this.formData.name.length<=0?this.fieldErrors.nameError="fill the name field":e.test(this.formData.name)?this.fieldErrors.nameError="":this.fieldErrors.nameError="provide surname"},validateEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.formData.email.length<=0?this.fieldErrors.emailError="emil should be filled":e.test(this.formData.email)?this.fieldErrors.emailError="":this.fieldErrors.emailError="invalid email"},validateMessage(){this.formData.message.length<=0?this.fieldErrors.messageError="mess should be filled":this.formData.message.length<20?this.fieldErrors.messageError="invalid mess":this.fieldErrors.messageError=""}},watch:{formData:{handler:"updateFormValidity",deep:!0}}};const N=(0,_.Z)(I,[["render",A],["__scopeId","data-v-ee00854a"]]);var P=N,W={name:"App",components:{SignupForm:k,ContactForm:P}};const R=(0,_.Z)(W,[["render",n]]);var T=R;(0,l.ri)(T).mount("#app")}},r={};function a(l){var t=r[l];if(void 0!==t)return t.exports;var i=r[l]={exports:{}};return e[l].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(r,l,t,i){if(!l){var n=1/0;for(d=0;d<e.length;d++){l=e[d][0],t=e[d][1],i=e[d][2];for(var o=!0,s=0;s<l.length;s++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(o=!1,i<n&&(n=i));if(o){e.splice(d--,1);var m=t();void 0!==m&&(r=m)}}return r}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[l,t,i]}}(),function(){a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,{a:r}),r}}(),function(){a.d=function(e,r){for(var l in r)a.o(r,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};a.O.j=function(r){return 0===e[r]};var r=function(r,l){var t,i,n=l[0],o=l[1],s=l[2],m=0;if(n.some((function(r){return 0!==e[r]}))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(s)var d=s(a)}for(r&&r(l);m<n.length;m++)i=n[m],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},l=self["webpackChunkmywebsite"]=self["webpackChunkmywebsite"]||[];l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(4819)}));l=a.O(l)})();
//# sourceMappingURL=app.1e495e3c.js.map