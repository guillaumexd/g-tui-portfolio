import{n as e,t}from"./github.C1xd6F1x.js";import{t as n}from"./radioConfig.CvQjB6_S.js";import{r,t as i}from"./themeConfig.C0knjlRi.js";import{a,i as o,o as s,r as c,s as l}from"./sound.XHT6Bwg-.js";var u={enabled:!1,lanyardUserId:`your_discord_id`};async function d(){if(u.lanyardUserId)try{let e=await(await fetch(`https://api.lanyard.rest/v1/users/${u.lanyardUserId}`)).json();if(e.success)if(e.data?.spotify){let t=e.data.spotify,n=Date.now(),r=t.timestamps?.start||n,i=t.timestamps?.end||n+18e4;return{isPlaying:!0,title:t.song,artist:t.artist,album:t.album,albumArt:t.album_art_url,songUrl:`https://open.spotify.com/track/${t.track_id}`,progressMs:Math.max(0,n-r),durationMs:Math.max(1,i-r),timestamps:{start:r,end:i}}}else return{isPlaying:!1,title:`No Active Track`,artist:`Offline`,album:`Spotify Inactive`,progressMs:0,durationMs:18e4}}catch{}return null}document.addEventListener(`DOMContentLoaded`,()=>{let f=document.getElementById(`cli-input`),p=document.getElementById(`cli-output`);if(!f||!p)return;let m=[],h=-1,g=e.commands.map(e=>e.name);document.getElementById(`view-cli`)?.addEventListener(`click`,()=>{f.focus()}),f.addEventListener(`keydown`,e=>{if(e.key!==`Enter`&&e.key!==`Tab`&&e.key!==`ArrowUp`&&e.key!==`ArrowDown`&&a(),e.key===`Tab`){e.preventDefault();let t=f.value.trim().toLowerCase();if(!t)return;let n=g.filter(e=>e.startsWith(t));n.length===1?(f.value=n[0]+` `,c(600,.04)):n.length>1&&(v(`<div class="text-[var(--fg-dim)]">Possible matches: ${n.join(`  `)}</div>`),c(400,.04));return}if(e.key===`ArrowUp`){if(e.preventDefault(),m.length===0)return;h<m.length-1&&(h++,f.value=m[m.length-1-h]);return}if(e.key===`ArrowDown`){e.preventDefault(),h>0?(h--,f.value=m[m.length-1-h]):h===0&&(h=-1,f.value=``);return}if(e.key===`Enter`){let e=f.value.trim();if(!e)return;m.push(e),h=-1,_(e),f.value=``,y(e)}});function _(e){if(!p)return;let t=document.createElement(`div`);t.className=`flex items-center gap-2 font-mono text-xs md:text-sm font-bold mt-3`,t.innerHTML=`
        <span class="text-[var(--accent)]"><span class="text-emerald-400">guest</span>@<span class="text-[var(--fg-bright)]">moustache-lab</span>:<span class="text-cyan-400">~</span>$</span>
        <span class="text-[var(--fg-bright)]">${j(e)}</span>
      `,p.appendChild(t)}function v(e){if(!p)return;let t=document.createElement(`div`);t.className=`mt-1 text-xs md:text-sm font-mono leading-relaxed`,t.innerHTML=e,p.appendChild(t),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}function y(e){let t=e.split(` `).filter(Boolean),n=t[0].toLowerCase(),a=t.slice(1);switch(n){case`help`:case`man`:s(),b();break;case`about`:case`bio`:s(),x();break;case`skills`:s(),S();break;case`collabs`:case`collaborations`:s(),C();break;case`cat`:s();let e=(a[0]||``).toLowerCase();if(e===`bio.txt`||e===`bio`)x();else if(e===`skills.sh`||e===`skills`)S();else if(e===`collabs.md`||e===`collabs`)C();else if(e===`contact.txt`||e===`contact`)T();else if(e===`github.sh`||e===`github.txt`||e===`github`)k();else if(e===`pong.sh`||e===`pong.exe`||e===`pong`){let e=window;e.togglePong&&e.togglePong(!0),v(`<div class="text-[var(--accent)] font-bold">🕹️ Executing pong.sh...</div>`)}else if(e===`snake.sh`||e===`snake.exe`||e===`snake`){let e=window;e.toggleSnake&&e.toggleSnake(!0),v(`<div class="text-emerald-400 font-bold">🐍 Executing snake.sh...</div>`)}else e===`radio.sh`||e===`radio`?O():v(`<div class="text-yellow-400">Usage: cat &lt;bio.txt | skills.sh | collabs.md | github.sh | contact.txt | pong.sh | snake.sh | radio.sh&gt;</div>`);break;case`./pong.sh`:case`./pong`:s();let t=window;t.togglePong&&t.togglePong(!0),v(`<div class="text-[var(--accent)] font-bold">🕹️ Executing ./pong.sh...</div>`);break;case`./snake.sh`:case`./snake`:s();let u=window;u.toggleSnake&&u.toggleSnake(!0),v(`<div class="text-emerald-400 font-bold">🐍 Executing ./snake.sh...</div>`);break;case`./radio.sh`:case`./radio`:s(),O();break;case`ls`:s(),v(`
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-xs font-mono py-1">
              <span class="text-yellow-400 font-bold">📄 bio.txt</span>
              <span class="text-emerald-400 font-bold">⚙️ skills.sh</span>
              <span class="text-purple-400 font-bold">🤝 collabs.md</span>
              <span class="text-sky-400 font-bold cursor-pointer" onclick="document.getElementById('gui-github')?.scrollIntoView()">🐙 github.sh</span>
              <span class="text-red-400 font-bold">✉️ contact.txt</span>
              <span class="text-[var(--accent)] font-bold cursor-pointer" onclick="window.togglePong?.(true)">🕹️ pong.sh*</span>
              <span class="text-emerald-400 font-bold cursor-pointer" onclick="window.toggleSnake?.(true)">🐍 snake.sh*</span>
              <span class="text-pink-400 font-bold cursor-pointer" onclick="window.radioEngine?.toggleModal(true)">📻 radio.sh*</span>
            </div>
          `);break;case`neofetch`:case`fetch`:s(),w();break;case`contact`:case`mail`:s(),T();break;case`links`:case`socials`:case`urls`:s(),E();break;case`theme`:if(a[0]){let e=a[0].toLowerCase(),t=i.find(t=>t.id===e);if(t){r(t.id),localStorage.setItem(`tui_theme`,t.id);let e=document.getElementById(`theme-select`);e&&(e.value=t.id),s(),v(`<div class="text-emerald-400 font-bold">Theme set to ${t.emoji} [${t.name.toUpperCase()}].</div>`)}else o(),v(`<div class="text-red-400">Invalid theme. Available options: ${i.map(e=>e.id).join(` | `)}</div>`)}else v(`<div class="text-yellow-400">Usage: theme &lt;${i.map(e=>e.id).join(` | `)}&gt;</div>`);break;case`spotify`:case`nowplaying`:case`np`:s(),D();break;case`radio`:case`lofi`:case`music`:s(),O(a[0],a[1],a.slice(2).join(` `));break;case`matrix`:s();let d=window;d.toggleMatrix&&d.toggleMatrix(!0),v(`<div class="text-emerald-400 font-bold">Matrix rain canvas enabled. Press [ESC] to exit.</div>`);break;case`pong`:case`game`:case`play`:s();let f=window;f.togglePong&&f.togglePong(!0),v(`<div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 my-2 font-mono text-xs">
              <div class="text-[var(--accent)] font-bold">🕹️ LAUNCHING PONG.EXE...</div>
              <div class="text-[var(--fg-dim)] text-[11px] mt-1">Controls: [W/S] or [↑/↓] to move paddle • [SPACE] to serve/pause • [ESC] to exit</div>
            </div>`);break;case`snake`:case`playsnake`:s();let m=window;m.toggleSnake&&m.toggleSnake(!0),v(`<div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 my-2 font-mono text-xs">
              <div class="text-emerald-400 font-bold">🐍 LAUNCHING SNAKE.EXE...</div>
              <div class="text-[var(--fg-dim)] text-[11px] mt-1">Controls: [W/A/S/D] or Arrow Keys to steer • [SPACE] to pause • [ESC] to exit</div>
            </div>`);break;case`github`:case`gh`:case`stats`:s(),k();break;case`repos`:case`projects`:s(),A();break;case`crt`:document.getElementById(`toggle-crt-btn`)?.click(),v(`<div class="text-cyan-400">Toggled CRT scanlines overlay.</div>`);break;case`sfx`:v(`<div class="text-cyan-400">SFX Sound feedback: ${l()?`ENABLED 🔊`:`MUTED 🔇`}</div>`);break;case`clear`:case`cls`:p&&(p.innerHTML=``),c(800,.03);break;case`gui`:let h=window.switchTuiMode;h&&h(`gui`);break;default:o(),v(`
            <div class="text-red-400">
              zsh: command not found: <span class="font-bold">${j(n)}</span>. 
              Type <span class="text-[var(--fg-bright)] underline cursor-pointer" onclick="document.getElementById('cli-input').value='help'; document.getElementById('cli-input').dispatchEvent(new KeyboardEvent('keydown', {key:'Enter'}));">help</span> for manual.
            </div>
          `)}}function b(){let t=`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 my-2 font-mono">
          <div class="text-[var(--fg-bright)] font-bold border-b border-[var(--border-color)] pb-1 mb-2">AVAILABLE TERMINAL COMMANDS</div>
          <div class="space-y-1.5 text-xs">
      `;e.commands.forEach(e=>{t+=`
          <div class="grid grid-cols-12 gap-2">
            <span class="col-span-3 text-[var(--accent)] font-bold">${e.name}</span>
            <span class="col-span-9 text-[var(--fg-main)]">${e.desc} <span class="text-[var(--fg-dim)] text-[10px]">(${e.usage})</span></span>
          </div>
        `}),t+=`</div></div>`,v(t)}function x(){let{developer:t}=e;v(`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 font-mono text-xs space-y-2">
          <div class="text-[var(--fg-bright)] font-bold text-sm border-b border-[var(--border-color)] pb-1">📄 ABOUT ME // ${t.name}</div>
          <p class="text-[var(--fg-main)] leading-relaxed">${t.bio}</p>
          <div class="text-[var(--fg-dim)] italic">${t.quote}</div>
          <div class="pt-2 flex flex-wrap gap-4 text-xs">
            <span>📍 ${t.location}</span>
            <span>✉️ ${t.email}</span>
          </div>
        </div>
      `)}function S(){let t=`<div class="space-y-3 my-2">`;e.skills.forEach(e=>{t+=`
          <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-xs font-mono">
            <div class="text-[var(--accent)] font-bold mb-2 flex items-center gap-2">
              <span>${e.icon}</span>
              <span>${e.category}</span>
            </div>
            <div class="space-y-1.5">
        `,e.skills.forEach(e=>{let n=Math.round(e.level/10),r=`█`.repeat(n)+`░`.repeat(10-n);t+=`
            <div class="grid grid-cols-12 gap-2 items-center">
              <span class="col-span-4 sm:col-span-3 text-[var(--fg-bright)] font-bold truncate">${e.name}</span>
              <span class="col-span-6 sm:col-span-7 text-[var(--fg-main)] text-[11px] font-mono">[${r}] ${e.level}%</span>
              <span class="col-span-2 text-right text-[var(--fg-dim)] text-[10px]">${e.experience}</span>
            </div>
          `}),t+=`</div></div>`}),t+=`</div>`,v(t)}function C(){let t=`<div class="space-y-3 my-2">`;e.collabs.forEach(e=>{t+=`
          <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-xs font-mono space-y-2 hover:border-[var(--border-active)] transition-colors">
            <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
              <span class="text-[var(--fg-bright)] font-bold text-sm">🤝 ${e.title}</span>
              <span class="px-2 py-0.5 text-[10px] bg-[var(--border-color)] text-[var(--accent)] font-bold uppercase">${e.partnerType}</span>
            </div>
            <div class="text-[var(--accent)] font-bold">Partner: <span class="text-[var(--fg-bright)]">${e.partner}</span> // Role: <span class="text-emerald-400">${e.role}</span></div>
            ${e.asciiLogo?`<pre class="my-2 p-2 bg-[var(--bg-main)] text-[10px] text-[var(--fg-bright)] overflow-x-auto leading-tight select-none border border-[var(--border-color)] font-mono whitespace-pre">${e.asciiLogo}</pre>`:``}
            <p class="text-[var(--fg-main)] leading-relaxed">${e.description}</p>
            <ul class="list-disc list-inside text-[var(--fg-dim)] space-y-0.5">
              ${e.contributions.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
            <div class="flex flex-wrap gap-1 pt-1">
              ${e.techStack.map(e=>`<span class="px-1.5 py-0.5 bg-[var(--bg-main)] text-[var(--fg-dim)] border border-[var(--border-color)] text-[10px]">${e}</span>`).join(``)}
            </div>
          </div>
        `}),t+=`</div>`,v(t)}function w(){let{developer:t}=e,n=``;n=t.palette&&t.palette.length>8?`<span class="text-red-400 font-bold text-[10px] px-2 py-0.5 border border-red-500/50 bg-red-950/40">❌ PALETTE ERROR: Maximum 8 colors allowed (found ${t.palette.length})</span>`:(t.palette||[`#0f0f0f`,`#ef4444`,`#22c55e`,`#eab308`,`#3b82f6`,`#a855f7`,`#06b6d4`,`#f8fafc`]).map(e=>`<span class="w-3.5 h-3.5 inline-block border border-gray-700/60" style="background-color: ${e};"></span>`).join(``),v(`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 my-2 font-mono text-xs space-y-2">
          <div class="text-[var(--fg-bright)] font-bold border-b border-[var(--border-color)] pb-1">${t.alias}</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div><span class="text-[var(--accent)] font-bold">Name:</span> ${t.name}</div>
            <div><span class="text-[var(--accent)] font-bold">Title:</span> ${t.title}</div>
            <div><span class="text-[var(--accent)] font-bold">OS:</span> ${t.specs.OS}</div>
            <div><span class="text-[var(--accent)] font-bold">Shell:</span> ${t.specs.Shell}</div>
            <div><span class="text-[var(--accent)] font-bold">Status:</span> ${t.status}</div>
          </div>
          <div class="pt-1 flex items-center gap-1 flex-wrap">
            <span class="text-[10px] text-[var(--fg-dim)] mr-1">PALETTE:</span>
            ${n}
          </div>
        </div>
      `)}function T(){let{developer:t}=e;v(`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 text-xs font-mono space-y-2">
          <div class="text-[var(--fg-bright)] font-bold text-sm border-b border-[var(--border-color)] pb-1">✉️ CONTACT INFO</div>
          <div><span class="text-[var(--accent)] font-bold">Email:</span> ${t.email}</div>
          <div><span class="text-[var(--accent)] font-bold">GitHub:</span> ${t.github}</div>
          <div><span class="text-[var(--accent)] font-bold">Location:</span> ${t.location}</div>
        </div>
      `)}function E(){let t=e.developer;v(`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 font-mono text-xs space-y-3">
          <div class="text-[var(--accent)] font-bold border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
            <span>🔗 OFFICIAL SOCIAL & MUSIC LINKS</span>
            <span class="text-[10px] text-[var(--fg-dim)]">[INTERACTIVE]</span>
          </div>
          <div class="space-y-2 text-xs">${[[`🐙`,`GitHub`,t.github,`text-purple-400`],[`🟢`,`Spotify`,t.spotify,`text-green-400`],[`🍎`,`Apple Music`,t.appleMusic,`text-red-400`],[`☁️`,`SoundCloud`,t.soundcloud,`text-orange-400`],[`▶️`,`YouTube`,t.youtube,`text-red-400`]].map(([e,t,n,r])=>`
            <div class="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-1.5 flex-wrap gap-1">
              <span class="text-[var(--fg-dim)] font-bold flex items-center gap-2">
                <span class="${r}">${e}</span> ${t}:
              </span>
              <a href="${n}" target="_blank" rel="noopener noreferrer" class="text-sky-400 font-bold hover:underline">
                ${n} ↗
              </a>
            </div>`).join(``)}</div>
          <div class="flex items-center justify-between flex-wrap gap-1">
            <span class="text-[var(--fg-dim)] font-bold flex items-center gap-2">
              <span class="text-emerald-400">✉️</span> Email:
            </span>
            <a href="mailto:${t.email}" target="_blank" rel="noopener noreferrer" class="text-emerald-400 font-bold hover:underline">
              ${t.email} ✉
            </a>
          </div>
        </div>
      `)}async function D(){if(!u.enabled||!u.lanyardUserId||u.lanyardUserId.trim()===``||u.lanyardUserId===`your_discord_id`){v(`
          <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 text-xs font-mono space-y-2">
            <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
              <span class="text-yellow-400 font-bold flex items-center gap-1.5">📻 SPOTIFY WIDGET DISABLED</span>
              <span class="text-[10px] text-[var(--fg-dim)] font-bold">RPC INACTIVE</span>
            </div>
            <div class="text-[var(--fg-main)] leading-relaxed">
              Spotify activity tracking is currently disabled. To activate live Spotify streaming, set your Discord User ID (<span class="text-[var(--accent)] font-bold">lanyardUserId</span>) in <span class="text-sky-400 font-bold">src/config/spotifyConfig.ts</span>.
            </div>
          </div>
        `);return}let e=await d()||{isPlaying:!1,title:`No Track Playing`,artist:`Offline`,album:`Spotify Inactive`,progressMs:0,durationMs:18e4,timestamps:void 0},t=`cli-spotify-${Date.now()}`,n=e=>{let t=Math.floor(e/1e3),n=Math.floor(t/60),r=t%60;return`${n.toString().padStart(2,`0`)}:${r.toString().padStart(2,`0`)}`},r=Date.now(),i=e.timestamps?.start||r-e.progressMs,a=e.timestamps?.end||i+e.durationMs,o=e.isPlaying?Math.max(0,r-i):e.progressMs,s=Math.max(1,a-i),c=Math.min(100,Math.max(0,Math.round(o/s*100))),l=Math.round(c/5),f=`█`.repeat(l)+`░`.repeat(20-l);v(`
        <div id="${t}" class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 text-xs font-mono space-y-2.5">
          <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <span class="text-emerald-400 font-bold flex items-center gap-1.5">
              <span class="relative flex h-2 w-2">
                <span class="${e.isPlaying?`animate-ping opacity-75`:`hidden`} cli-spotify-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 ${e.isPlaying?`bg-emerald-500`:`bg-gray-500`} cli-spotify-dot"></span>
              </span>
              🎵 SPOTIFY NOW PLAYING
            </span>
            <span class="text-[10px] text-[var(--fg-dim)] font-bold">AUDIO RPC v1.0</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div><span class="text-[var(--accent)] font-bold">Track:</span> <a href="${e.songUrl||`#`}" target="_blank" class="text-[var(--fg-bright)] underline cli-spotify-title">${e.title} ↗</a></div>
            <div><span class="text-[var(--accent)] font-bold">Artist:</span> <span class="text-emerald-400 font-bold cli-spotify-artist">${e.artist}</span></div>
            <div><span class="text-[var(--accent)] font-bold">Album:</span> <span class="cli-spotify-album">${e.album}</span></div>
            <div><span class="text-[var(--accent)] font-bold">Status:</span> <span class="cli-spotify-status font-bold ${e.isPlaying?`text-emerald-400`:`text-gray-400`}">${e.isPlaying?`▶ PLAYING`:`⏸ PAUSED`}</span></div>
          </div>
          <div class="pt-1 space-y-1">
            <div class="flex justify-between text-[10px] text-[var(--fg-dim)] font-bold">
              <span class="cli-spotify-cur">${n(o)}</span>
              <span class="text-emerald-400 cli-spotify-pct">[${f}] ${c}%</span>
              <span class="cli-spotify-dur">${n(s)}</span>
            </div>
          </div>
        </div>
      `);let p=setInterval(async()=>{let e=document.getElementById(t);if(!e){clearInterval(p);return}let r=await d()||{isPlaying:!1,title:`No Active Track`,artist:`Offline`,album:`Spotify Inactive`,progressMs:0,durationMs:18e4},i=e.querySelector(`.cli-spotify-cur`),a=e.querySelector(`.cli-spotify-pct`),o=e.querySelector(`.cli-spotify-dur`),s=e.querySelector(`.cli-spotify-status`),c=e.querySelector(`.cli-spotify-title`),l=e.querySelector(`.cli-spotify-artist`),u=e.querySelector(`.cli-spotify-album`),f=e.querySelector(`.cli-spotify-dot`),m=e.querySelector(`.cli-spotify-ping`),h=Date.now(),g=r.timestamps?.start||h-r.progressMs,_=r.timestamps?.end||g+r.durationMs,v=r.isPlaying?Math.max(0,h-g):r.progressMs,y=Math.max(1,_-g),b=Math.min(100,Math.max(0,Math.round(v/y*100))),x=Math.round(b/5),S=`█`.repeat(x)+`░`.repeat(20-x);i&&(i.textContent=n(v)),o&&(o.textContent=n(y)),a&&(a.textContent=`[${S}] ${b}%`),s&&(s.textContent=r.isPlaying?`▶ PLAYING`:`⏸ PAUSED`,s.className=`cli-spotify-status font-bold ${r.isPlaying?`text-emerald-400`:`text-gray-400`}`),f&&(f.className=`relative inline-flex rounded-full h-2 w-2 ${r.isPlaying?`bg-emerald-500`:`bg-gray-500`} cli-spotify-dot`),m&&(m.className=`${r.isPlaying?`animate-ping opacity-75`:`hidden`} cli-spotify-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400`),c&&(c.textContent=`${r.title} ↗`,c.href=r.songUrl||`#`),l&&(l.textContent=r.artist),u&&(u.textContent=r.album)},1e3)}function O(e,t,r){let i=window.radioEngine;if(!i){v(`<div class="text-yellow-400">Radio engine initializing...</div>`);return}let a=(e||``).toLowerCase();if(a===`add`||a===`yt`)if(t){let e=r||void 0;v(`<div class="text-[var(--accent)] font-bold">⏳ Loading YouTube audio stream: ${j(t)}...</div>`),i.addYouTubeTrack(t,e).then(e=>{if(e){let e=i.getStatus();v(`<div class="text-emerald-400 font-bold">✓ Successfully queued & playing: ${e.currentTrack.title} (${e.currentTrack.artist})</div>`)}else v(`<div class="text-red-400">✖ Failed to load YouTube track. Check URL and try again.</div>`)})}else v(`<div class="text-yellow-400">Usage: radio add &lt;youtube_url&gt; [optional_title]</div>`);else if(a===`rm`||a===`remove`||a===`delete`)if(t){let e=parseInt(t,10)-1;i.removeTrack(e),v(`<div class="text-cyan-400 font-bold">✓ Removed custom track #${t} from playlist.</div>`)}else v(`<div class="text-yellow-400">Usage: radio rm &lt;track_number&gt;</div>`);else if(a===`play`){i.play();let e=i.getStatus();v(`<div class="text-emerald-400 font-bold">▶ Radio playing: ${e.currentTrack.title} (${e.currentTrack.artist})</div>`)}else if(a===`pause`||a===`stop`)i.pause(),v(`<div class="text-yellow-400 font-bold">⏸ Radio paused.</div>`);else if(a===`next`){i.next();let e=i.getStatus();v(`<div class="text-cyan-400 font-bold">⏭ Skipped to: ${e.currentTrack.title} (${e.currentTrack.artist})</div>`)}else if(a===`prev`){i.prev();let e=i.getStatus();v(`<div class="text-cyan-400 font-bold">⏮ Playing: ${e.currentTrack.title} (${e.currentTrack.artist})</div>`)}else if(a===`vol`||a===`volume`)if(t){let e=Math.max(0,Math.min(100,parseInt(t,10)||50));i.setVolume(e),v(`<div class="text-[var(--accent)] font-bold">🔊 Radio volume set to ${e}%.</div>`)}else v(`<div class="text-[var(--fg-dim)]">Current volume: ${i.getStatus().volume}%. Usage: radio vol &lt;0-100&gt;</div>`);else if(a===`list`){let e=i.getTracks?i.getTracks():n.tracks,t=`
          <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3 my-2 font-mono text-xs space-y-1.5">
            <div class="text-[var(--accent)] font-bold border-b border-[var(--border-color)] pb-1 mb-2 flex justify-between">
              <span>📻 AVAILABLE RADIO STATIONS & CUSTOM YOUTUBE SONGS</span>
              <span>${e.length} TRACKS</span>
            </div>
        `;e.forEach((e,n)=>{let r=e.genre===`YouTube`?`bg-red-950 text-red-400 border border-red-800`:`bg-[var(--border-color)] text-[var(--accent)]`;t+=`
            <div class="flex justify-between items-center py-0.5 cursor-pointer hover:text-[var(--accent)]" onclick="window.radioEngine?.setTrack(${n}, true)">
              <span class="truncate pr-2">${n+1}. <strong class="text-[var(--fg-bright)]">${e.title}</strong> <span class="text-[var(--fg-dim)]">(${e.artist})</span></span>
              <span class="text-[9px] px-1 py-0.5 ${r} font-bold shrink-0">${e.genre}</span>
            </div>
          `}),t+=`</div>`,v(t)}else{i.toggleModal(!0);let e=i.getStatus();v(`
          <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 my-2 text-xs font-mono space-y-2.5">
            <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
              <span class="text-[var(--accent)] font-bold flex items-center gap-1.5">
                <span>📻</span> RETRO CASSETTE RADIO // LO-FI + YOUTUBE
              </span>
              <span class="text-[10px] ${e.isPlaying?`text-emerald-400 animate-pulse`:`text-[var(--fg-dim)]`} font-bold">
                [${e.isPlaying?`PLAYING`:`STANDBY`}]
              </span>
            </div>

            <div class="bg-[var(--bg-main)] border border-[var(--border-color)] p-3 space-y-2">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div class="min-w-0 flex-1">
                  <div class="text-[var(--fg-bright)] font-bold text-sm truncate">♪ ${j(e.currentTrack.title)}</div>
                  <div class="text-[var(--fg-dim)] text-[11px] mt-0.5">${j(e.currentTrack.artist)} (${e.currentTrack.genre})</div>
                </div>
                <span class="text-[10px] px-2 py-0.5 bg-[var(--border-color)] text-[var(--accent)] font-bold shrink-0 self-start sm:self-center">
                  ${e.currentTrack.genre.toUpperCase()}
                </span>
              </div>

              <div class="flex items-center justify-between text-[11px] pt-2 border-t border-[var(--border-color)]/60 text-[var(--fg-dim)]">
                <span>🔊 VOL: <strong class="text-[var(--accent)]">${e.volume}%</strong></span>
                <span>SPECTRUM: <strong class="text-[var(--accent)] font-mono"> ▂▃▅▆▇</strong></span>
              </div>
            </div>

            <div class="text-[10px] text-[var(--fg-dim)] pt-0.5">
              CLI Controls: <span class="text-[var(--fg-bright)] font-bold">radio play</span> • <span class="text-[var(--fg-bright)] font-bold">radio next</span> • <span class="text-[var(--fg-bright)] font-bold">radio add &lt;yt_url&gt;</span> • <span class="text-[var(--fg-bright)] font-bold">radio vol &lt;0-100&gt;</span>
            </div>
          </div>
        `)}}async function k(){v(`<div class="text-[var(--fg-dim)] text-xs font-mono">Connecting to GitHub REST API...</div>`);let e=await t();if(!e){v(`<div class="text-red-400 font-mono text-xs">Failed to fetch GitHub stats or rate-limited. Try again shortly.</div>`);return}let n=e.topLanguages.map(e=>`<span class="text-[var(--accent)] font-bold">${e.name}</span> <span class="text-[var(--fg-dim)]">(${e.percentage}%)</span>`).join(` • `);v(`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 text-xs font-mono space-y-3">
          <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <span class="text-sky-400 font-bold flex items-center gap-1.5">
              <span>🐙</span> GITHUB PROFILE & ACTIVITY METRICS
            </span>
            <a href="https://github.com/${e.username}" target="_blank" rel="noopener noreferrer" class="text-[10px] text-[var(--accent)] hover:underline font-bold">
              @${e.username} ↗
            </a>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <pre class="text-sky-400 text-xs sm:text-sm leading-tight select-none font-bold shrink-0">
  /\\___/\\
 (  o o  )
 (  =^=  )
  (____)</pre>

            <div class="space-y-2 flex-1 min-w-0">
              <div class="text-sm font-bold text-[var(--fg-bright)] truncate">${e.name} <span class="text-xs text-[var(--fg-dim)] font-normal">(${e.bio||`Software Engineer`})</span></div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
                <div class="bg-[var(--bg-main)] p-2 border border-[var(--border-color)] text-center">
                  <div class="text-[10px] text-[var(--fg-dim)] font-bold">STARS ⭐</div>
                  <div class="text-base font-bold text-yellow-400">${e.totalStars}</div>
                </div>
                <div class="bg-[var(--bg-main)] p-2 border border-[var(--border-color)] text-center">
                  <div class="text-[10px] text-[var(--fg-dim)] font-bold">FORKS 🍴</div>
                  <div class="text-base font-bold text-cyan-400">${e.totalForks}</div>
                </div>
                <div class="bg-[var(--bg-main)] p-2 border border-[var(--border-color)] text-center">
                  <div class="text-[10px] text-[var(--fg-dim)] font-bold">REPOS 📦</div>
                  <div class="text-base font-bold text-emerald-400">${e.publicRepos}</div>
                </div>
                <div class="bg-[var(--bg-main)] p-2 border border-[var(--border-color)] text-center">
                  <div class="text-[10px] text-[var(--fg-dim)] font-bold">FOLLOWERS 👥</div>
                  <div class="text-base font-bold text-purple-400">${e.followers}</div>
                </div>
              </div>
              <div class="text-[11px] pt-1">
                <span class="text-[var(--fg-dim)] font-bold">Top Languages:</span> ${n}
              </div>
            </div>
          </div>
          <div class="text-[10px] text-[var(--fg-dim)] pt-1 border-t border-[var(--border-color)]">
            Tip: Type <span class="text-[var(--fg-bright)] font-bold">repos</span> to explore featured repositories and project source code.
          </div>
        </div>
      `)}async function A(){v(`<div class="text-[var(--fg-dim)] text-xs font-mono">Fetching repository list...</div>`);let e=await t();if(!e||!e.topRepos.length){v(`<div class="text-red-400 font-mono text-xs">No repositories retrieved. Check network connection.</div>`);return}let n=`
        <div class="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 my-2 text-xs font-mono space-y-2.5">
          <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <span class="text-sky-400 font-bold flex items-center gap-1.5">
              <span>📦</span> FEATURED GITHUB REPOSITORIES
            </span>
            <span class="text-[10px] text-[var(--fg-dim)] font-bold">TOTAL: ${e.topRepos.length}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      `;e.topRepos.forEach(e=>{n+=`
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="border border-[var(--border-color)] bg-[var(--bg-main)] p-2.5 hover:border-[var(--accent)] transition-all block group">
            <div class="flex items-center justify-between gap-1 border-b border-[var(--border-color)] pb-1 mb-1">
              <span class="font-bold text-[var(--fg-bright)] group-hover:text-[var(--accent)] truncate">📦 ${e.name}</span>
              <span class="text-[10px] text-[var(--accent)] font-bold shrink-0">⭐ ${e.stars}</span>
            </div>
            <p class="text-[11px] text-[var(--fg-dim)] line-clamp-2 leading-tight">${e.description}</p>
            <div class="flex justify-between items-center text-[10px] text-[var(--fg-dim)] pt-1.5 mt-1.5 border-t border-[var(--border-color)]">
              <span class="text-emerald-400 font-bold">${e.language}</span>
              <span>Updated ${e.updatedAt} ↗</span>
            </div>
          </a>
        `}),n+=`
          </div>
        </div>
      `,v(n)}function j(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}});