(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const c=document.querySelector("#listaPokemon"),a="https://pokeapi.co/api/v2/pokemon/";async function d(){try{for(let e=1;e<=35;e++){const n=await(await fetch(a+e)).json();l(n)}}catch(e){console.error("Error al obtener datos de la API",e)}}function l(e){const r=document.createElement("div");r.classList.add("pokemon"),r.innerHTML=`
        <div class="pokemon-imagen">
          <img src="${e.sprites.other["official-artwork"].front_default}" alt=${e.name}>
        </div>
        <div class="pokemon-info">
            <h2 class="pokemon-nombre">${e.name}</h2>
            <h2 class="pokemon-id">${e.id}</h2>
        </div>
          `,c.append(r)}async function u(e){c.innerHTML="";try{const r=await fetch(a+e.toLowerCase());if(!r.ok)throw new Error("Pokémon no encontrado");const n=await r.json();l(n)}catch(r){c.innerHTML="<p>Pokémon no encontrado.</p>",console.error("Error en la búsqueda",r)}}document.querySelector("#botonBuscar").addEventListener("click",()=>{const e=document.querySelector("#pokemonBuscar").value;e?u(e):alert("Por favor, ingresa un ID o nombre de Pokémon.")});d();document.querySelector("#app").innerHTML=`

`;
