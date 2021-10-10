import{j as u,r as c,R as l,a as p}from"./vendor.6c507065.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};y();const s=u.exports.jsx,m=u.exports.jsxs,f=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];function g(){const[t,o]=c.exports.useState(1),[n,a]=c.exports.useState("");return s("div",{className:"container",children:m("div",{id:"drum-machine",children:[s("h2",{children:"Drum Kit"}),s("div",{className:"sound-name",id:"display",children:s("p",{children:n})}),m("div",{className:"text-center",id:"display",children:[f.map(e=>s(h,{className:"drum-pad",clip:e,volume:t,setDisplay:a},e.id)),s("br",{}),s("h4",{children:"Volume"}),s("input",{type:"range",step:"0.01",value:t,max:"1",min:"0",className:"w-50",onChange:e=>o(e.target.value)})]})]})})}function h({clip:t,volume:o,setDisplay:n}){const[a,e]=c.exports.useState(!1);c.exports.useEffect(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[]);const r=i=>{i.keyCode===t.keyCode&&d()},d=()=>{const i=document.getElementById(t.keyTrigger);e(!0),setTimeout(()=>e(!1),200),i.currentTime=0,i.volume=o,i.play(),n(t.id)};return m("div",{className:`btn drum-pad ${a&&"btn-warning"}`,id:t.keyCode,onClick:d,children:[s("audio",{className:"clip",id:t.keyTrigger,src:t.url}),t.keyTrigger]})}l.render(s(p.StrictMode,{children:s(g,{})}),document.getElementById("root"));