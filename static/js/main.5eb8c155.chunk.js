(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(6),n=c.n(a),l=(c(11),c(2)),r=c(0);var j=function(e){var t=e.setNavActiveSelected,c=e.navActiveSelected;return Object(r.jsxs)("header",{className:"flex-row px-1",children:[Object(r.jsx)("h2",{children:Object(r.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(r.jsxs)("span",{role:"img","aria-label":"fire",children:[" ","\ud83d\udd25"]})," ","Spencer Pichette"]})}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"flex-row",children:[Object(r.jsx)("li",{className:"mx-2 ".concat("about"===c&&"navActive"),children:Object(r.jsx)("a",{"data-testid":"about",href:"#about",className:" ".concat("about"===c&&"navActive"),onClick:function(){t("about")},children:"About me"})}),Object(r.jsx)("li",{className:"mx-2 ".concat("portfolio"===c&&"navActive"),children:Object(r.jsx)("span",{onClick:function(){t("portfolio")},children:"Portfolio"})}),Object(r.jsx)("li",{className:"mx-2 ".concat("contact"===c&&"navActive"),children:Object(r.jsx)("span",{onClick:function(){t("contact")},children:"Contact"})}),Object(r.jsx)("li",{className:"mx-2 ".concat("resume"===c&&"navActive"),children:Object(r.jsx)("span",{onClick:function(){t("resume")},children:"Resume"})})]})})]})},o=c.p+"static/media/hero.3275f6f8.jpg";var A=function(){return Object(r.jsxs)("section",{className:"my-5",children:[Object(r.jsx)("h1",{id:"about",children:"Who am I?"}),Object(r.jsx)("img",{src:o,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(r.jsx)("div",{className:"my-2",children:Object(r.jsx)("p",{children:"I am a full-stack developer who is never afraid of hard work, strives for excellence and knows the importance of research & experimentation. I'm excited to help clear roadblocks and solve problems. I'm passionate about this work because I love being challenged and get a sense of satisfaction after solving a problem."})})]})},b=c(3),d=c(5);var h=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(""),n=Object(l.a)(a,2),j=n[0],o=n[1],A=c.name,h=c.email,p=c.message,O=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));j||(i(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(r.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),j||console.log("Submit Form",c)},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(r.jsx)("input",{type:"text",name:"name",defaultValue:A,onBlur:O})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(r.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:O})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(r.jsx)("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:O})]}),j&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:j})}),Object(r.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var p=function(){return Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{"data-testid":"h1tag",children:"Resume"}),Object(r.jsx)("a",{href:"https://docs.google.com/document/d/1MSIDTBRGGElT6Hv-lMKpcsp5W8TMpgydDDYpGsPJ-Bs/edit?usp=sharing",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,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"})})]}),Object(r.jsx)("h2",{children:"Technolodgies:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"React"}),Object(r.jsx)("li",{children:"Javascript"}),Object(r.jsx)("li",{children:"CSS"}),Object(r.jsx)("li",{children:"Handlebars"}),Object(r.jsx)("li",{children:"HTML"}),Object(r.jsx)("li",{children:"Node"}),Object(r.jsx)("li",{children:"Express"}),Object(r.jsx)("li",{children:"Sequelize"}),Object(r.jsx)("li",{children:"MySQL"}),Object(r.jsx)("li",{children:"MongoDB"}),Object(r.jsx)("li",{children:"Git"}),Object(r.jsx)("li",{children:"Github"}),Object(r.jsx)("li",{children:"NPM"}),Object(r.jsx)("li",{children:"Yarn"}),Object(r.jsx)("li",{children:"Jest"}),Object(r.jsx)("li",{children:"OOP"}),Object(r.jsx)("li",{children:"ORM"}),Object(r.jsx)("li",{children:"MVC"})]})]})};var O=function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{"data-testid":"h1tag",children:"Portfolio"}),Object(r.jsxs)("div",{class:"web-apps-section content",children:[Object(r.jsx)("a",{href:"https://sspspencer.github.io/run-buddy/",target:"_blank",class:"web-app-container Run-buddy",children:Object(r.jsx)("div",{class:"web-app-title",children:Object(r.jsx)("h4",{children:"Run-buddy"})})}),Object(r.jsx)("a",{href:"https://sspspencer.github.io/ShowGo/",target:"_blank",class:"web-app-container ShowGo",children:Object(r.jsxs)("div",{class:"web-app-title",children:[Object(r.jsx)("h4",{children:"Show Go"}),Object(r.jsx)("p",{})]})}),Object(r.jsx)("a",{href:"https://fathomless-scrubland-35301.herokuapp.com/",target:"_blank",class:"web-app-container upGrad",children:Object(r.jsxs)("div",{class:"web-app-title",children:[Object(r.jsx)("h4",{children:"upGrad"}),Object(r.jsx)("p",{})]})}),Object(r.jsx)("a",{href:"https://note-taker-ssp.herokuapp.com/",target:"_blank",class:"web-app-container note-taker",children:Object(r.jsx)("div",{class:"web-app-title",children:Object(r.jsx)("h4",{children:"Note taker"})})}),Object(r.jsx)("a",{href:"https://sspspencer.github.io/work-day-scheduler/",target:"_blank",class:"web-app-container work-day-scheduler",children:Object(r.jsx)("div",{class:"web-app-title",children:Object(r.jsx)("h4",{children:"Work Day"})})}),Object(r.jsx)("a",{href:"https://sspspencer.github.io/code-quiz/",target:"_blank",class:"web-app-container code-quiz",children:Object(r.jsx)("div",{class:"web-app-title",children:Object(r.jsx)("h4",{children:"Code-Quiz"})})})]})]})};var x=function(){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("a",{href:"https://github.com/sspspencer",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,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"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/spencer-pichette-42265423a/",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,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"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/spencer.pichette/",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFYklEQVR4nO2dXWjXVRjHP7mtbeXSYlGRlaYpFZgpFL0RLCnoxt4sKhWi9ygyQrqsi4LAqwwhgi666cIoSIMgbyxK7WKWK6nErEQlZ2tbmVO3/39dPP/JGvu757z//r+dDxx2seec8/y+Hs/bc84ZZDKZTCaTyWQymUxBOSu1A5PQBCwFFgOLgIXAlcC5wPm1nwD/Av21n/uBn4G9wG7gW6AS1esGYQ6wFtgCDAKjjmkA2Ay8CFwa8TsKSTuwGtiKtD5XceulEeBzYBXQFuXLCsJMpKUdIpy49VIv8BowK/hXJqQFWAf0EV/giakPeLnmU6m4Dfie9AJPTD8BywN+dzTagI1AlfSi1ktVYAPQGkiD4MwFdpJeSG3qBhYEUSIgy/EzTYudBoCuAHoE4V5giPSi2aaTwEPeVfHMU4SdE8dKFeBJz9p44x5kcZBaJJ9iP+hVIQ90ASdIL47vdBK406NOTlxFYw582jQAzHcVyXX3rg3YDlzv6ogHhoG/auk4MANZajcDHciu39mWZXcDtyAtPAkbSdfSKsCnwAvAdYiwU3Ex8IRlfRsMtfHG7aRZ8VWB94GrLf3ucqj3Vss6rWkBfrB02CX1A3c5+m4r9CjQg3RF0Vjn4KxtGsTPWOAi9CjwkgcfVHSQZqtzhSf/XYU+iuypG6EZQCbyLHCBRT4XNgGfRK6zHp3A06EraQf+IG5LriBBWl+4tuhR4DCGYTHTFr0SuMgwjyvbkAh3kbgEuM8kg+kIutrQ3gdbDO2bgbuBa4DZk/z+CmePhDXAB57K+h9zSLMzd6OBjwuAHyP5NYK0bO+sjfQB49MQ+mVzK/Hn9s8rfTPqo+8wsPXFPuCU0vYR4NqAvkyGd02akFVZ7Bb9hYGPnyXwr7+mzZRoW/RSJh9YQjNoYJtiB3E2sERjqBV6sb0vTgwo7ZqQhUQKVNpohfa5YDBhWGnXifK/cABU2hRdaC3nJKx7ocZIK/RcB0fKzjyNkVboUp++dESljVboDgdHyo5KG63Qxvuv0wiV0FHDMhPYytRHr7RR59/R75E/DqxX2mpQnSTQCn0c+1B9PYaRlZUPqgZlXeapzjH+0Rhpu45jDo4UDd9TVZU2WqF9tbwi4Fto1epVK/R+B0eKRDtwuecyf9EYaYVWFdYALMIuIH0m9mmMtJXudXCkSKiWy4Z4FfobB0eKhO0xsjOh0kYrdA9me8NFxfdAOAjs0Rhq59FV5IaV67m38cwHXpnCpgeJnEzFLOAZhd1NChsTvibA5f7niB8qek/p27wEvo2i+8cFzEbgj8hPM4ynAnysNTYR+gjwlbE75eVL5BK/CtM55buG9mXGSAtToT8EDhrmKSOHkK5UjanQw8A7hnnKyNvoA8fWzCTe0d0izjqOAOcp/TqNzbr/GPC6Rb6y8Crwd6zKWohzarNoLXoPllEp252sYeAxpte8uopcqRixyeyyZbgTeMshf6OxnoTriHbk+m7Zu45uHJ9yc90EH0IeQjnqWE6R6QMeQF5vsMZHtOEA8q5FsgvpATkF3A/86lqQr7DONuSMhtVAUVAqyIUgk8Pw0ViF31doUvXRI8DDNgLEZAXyAm6jCn2CBni8aoybgT9pPKF78R+FAfyH3sfYDiwDdgQqPwQ7gBtoLJ9P0wy8iX2/HaNFV4A3SHvg0xtLkJZSNKF3EairSEkTEsw8SHqhDyP7FqG6zkLQilztPUB8oX9DovnT6mX0GchjsZuQFVgooUeQQ+8rKeHD3KZ0Ao8izzKMnxbaCt1bK2sNcKFvZ20o4p8HAflzIMuQ/ZPNCvtO5PWF3cB3yOnXajDvMplMJpPJZDKZTKZM/AeVgBDEEtUBawAAAABJRU5ErkJggg=="})})]})};var u=function(){var e=Object(s.useState)("about"),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{navActiveSelected:c,setNavActiveSelected:i}),Object(r.jsxs)("main",{children:["about"===c&&Object(r.jsx)(A,{}),"portfolio"===c&&Object(r.jsx)(O,{}),"contact"===c&&Object(r.jsx)(h,{}),"resume"===c&&Object(r.jsx)(p,{})]}),Object(r.jsx)(x,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.5eb8c155.chunk.js.map