(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`studypro_ia_v4`,t=[`Matemática`,`Comunicación`,`Ciencia y Tecnología`,`Historia`,`Inglés`],n={quiz:`Quiz escolar`,math:`Desafío matemático`,science:`Laboratorio científico`,memory:`Memoria`,word:`Palabra secreta`,quick:`Reto rápido`,mixed:`Reto mixto`},r={xp:0,coins:100,level:1,streak:0,lastActivity:null,tareas:[],notas:[],animo:null,diario:[],avatar:{skin:`#f1c29b`,hair:`#3b2418`,shirt:`#6d4aff`,pants:`#25324a`,hairType:`spiky`,shirtType:`hoodie`,accessory:`none`,accessory2:`none`,background:`#eee7ff`},settings:{dark:!1,sound:!0,language:`Español`,animations:!0,compact:!1},records:{quiz:0,math:0,science:0,memory:0,word:0,quick:0,mixed:0}},i=c(),a=`inicio`,o=new Date;function s(){return JSON.parse(JSON.stringify(r))}function c(){try{let t=JSON.parse(localStorage.getItem(e)||`null`);return t?{...s(),...t,avatar:{...r.avatar,...t.avatar||{}},settings:{...r.settings,...t.settings||{}},records:{...r.records,...t.records||{}},tareas:Array.isArray(t.tareas)?t.tareas:[],notas:Array.isArray(t.notas)?t.notas:[],diario:Array.isArray(t.diario)?t.diario:[]}:s()}catch(e){return console.warn(`No se pudo cargar el progreso:`,e),s()}}function l(){localStorage.setItem(e,JSON.stringify(i))}function u(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function d(e=new Date){return e.toLocaleDateString(`es-PE`,{day:`2-digit`,month:`2-digit`,year:`numeric`})}function f(e=new Date){return e.toLocaleTimeString(`es-PE`,{hour:`2-digit`,minute:`2-digit`})}function p(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function m(){return p(new Date)}function h(){let e=new Date().getHours();return e<12?`¡Buenos días! ☀️`:e<19?`¡Buenas tardes! 🌤️`:`¡Buenas noches! 🌙`}function g(e){document.querySelector(`.toast`)?.remove();let t=document.createElement(`div`);t.className=`toast`,t.textContent=e,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`show`)}),setTimeout(()=>{t.classList.remove(`show`),setTimeout(()=>{t.remove()},300)},2600)}function _(e=`success`){if(i.settings.sound)try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createOscillator(),i=n.createGain();r.frequency.value=e===`success`?620:e===`error`?180:420,r.type=`sine`,i.gain.setValueAtTime(.04,n.currentTime),i.gain.exponentialRampToValueAtTime(.001,n.currentTime+.15),r.connect(i),i.connect(n.destination),r.start(),r.stop(n.currentTime+.15)}catch{}}function v(){return 100+(i.level-1)*50}function y(e){if(!Number.isFinite(e)||e<=0)return;i.xp+=e;let t=v();for(;i.xp>=t;)i.xp-=t,i.level+=1,i.coins+=25,g(`🎉 ¡Nivel ${i.level}! +25 monedas`),t=v();l()}function b(e){i.coins=Math.max(0,i.coins+e),l()}function x(){let e=m();if(i.lastActivity!==e){if(!i.lastActivity)i.streak=1;else{let t=new Date(`${i.lastActivity}T00:00:00`),n=new Date(`${e}T00:00:00`),r=Math.round((n-t)/864e5);r===1?i.streak+=1:r>1&&(i.streak=1)}i.lastActivity=e,l()}}function S(e=160){let t=i.avatar,n=C(t),r=w(t),a=`
    <path
      d="M65 165 L78 130 L100 140 L122 130 L135 165
      L123 190 L100 165 L77 190Z"
      fill="${t.pants}"
      stroke="#202536"
      stroke-width="4"
    />
  `,o=``;switch(t.accessory){case`glasses`:o+=`
        <circle cx="77" cy="82" r="14"
          fill="none"
          stroke="#202536"
          stroke-width="4"/>

        <circle cx="123" cy="82" r="14"
          fill="none"
          stroke="#202536"
          stroke-width="4"/>

        <path d="M91 82 L109 82"
          stroke="#202536"
          stroke-width="4"/>
      `;break;case`cap`:o+=`
        <path
          d="M54 58 Q100 25 146 58
          L146 72 L54 72Z"
          fill="${t.shirt}"
          stroke="#202536"
          stroke-width="4"
        />

        <path
          d="M135 67 L166 73"
          stroke="#202536"
          stroke-width="8"
          stroke-linecap="round"
        />
      `;break;case`headphones`:o+=`
        <path
          d="M55 82 Q55 34 100 34
          Q145 34 145 82"
          fill="none"
          stroke="#202536"
          stroke-width="8"
        />

        <rect x="46" y="74"
          width="20"
          height="34"
          rx="9"
          fill="${t.shirt}"/>

        <rect x="134" y="74"
          width="20"
          height="34"
          rx="9"
          fill="${t.shirt}"/>
      `;break;case`crown`:o+=`
        <path
          d="M62 51 L72 29 L88 47
          L100 24 L112 47
          L128 29 L138 51Z"
          fill="#f5c542"
          stroke="#202536"
          stroke-width="3"
        />
      `;break;case`headband`:o+=`
        <path
          d="M49 65 Q100 31 151 65"
          fill="none"
          stroke="${t.shirt}"
          stroke-width="9"
        />
      `;break;case`visor`:o+=`
        <path
          d="M55 58 Q100 38 145 58
          L145 67 L55 67Z"
          fill="${t.shirt}"
          stroke="#202536"
          stroke-width="3"
        />
      `}switch(t.accessory2){case`backpack`:o+=`
        <path
          d="M37 130 Q22 130 25 174
          L53 174 L58 130Z"
          fill="#4f46e5"
          stroke="#202536"
          stroke-width="4"
        />
      `;break;case`star`:o+=`
        <path
          d="M100 8
          L105 19
          L117 20
          L108 28
          L111 40
          L100 34
          L89 40
          L92 28
          L83 20
          L95 19Z"
          fill="#f5c542"
        />
      `;break;case`badge`:o+=`
        <circle cx="138" cy="142" r="12"
          fill="#f5c542"
          stroke="#202536"
          stroke-width="3"/>

        <text x="138" y="147"
          text-anchor="middle"
          font-size="12"
          font-weight="bold">
          ★
        </text>
      `;break;case`tie`:o+=`
        <path
          d="M93 125 L107 125
          L112 158 L100 171
          L88 158Z"
          fill="#ef4444"
          stroke="#202536"
          stroke-width="3"
        />
      `;break;case`scarf`:o+=`
        <path
          d="M65 115 Q100 135 135 115
          L130 137 Q100 153 70 137Z"
          fill="${t.shirt}"
          stroke="#202536"
          stroke-width="3"
        />
      `}return`
    <svg
      viewBox="0 0 200 210"
      width="${e}"
      height="${e*1.05}"
      class="avatar-svg"
      role="img"
      aria-label="Avatar personalizado de StudyPro"
    >

      <ellipse
        cx="100"
        cy="199"
        rx="65"
        ry="8"
        fill="#000"
        opacity=".12"
      />

      ${a}

      ${r}

      <rect
        x="77"
        y="103"
        width="46"
        height="32"
        rx="16"
        fill="${t.skin}"
      />

      <circle
        cx="100"
        cy="80"
        r="55"
        fill="${t.skin}"
        stroke="#202536"
        stroke-width="4"
      />

      ${n}

      <circle cx="78" cy="83" r="5" fill="#202536"/>
      <circle cx="122" cy="83" r="5" fill="#202536"/>

      <path
        d="M91 104 Q100 111 109 104"
        fill="none"
        stroke="#202536"
        stroke-width="3"
        stroke-linecap="round"
      />

      ${o}

    </svg>
  `}function C(e){return e.hairType===`short`?`
      <path
        d="M48 73 Q48 27 100 27
        Q152 27 152 73
        Q135 52 118 56
        Q100 38 82 56
        Q65 52 48 73Z"
        fill="${e.hair}"
      />
    `:e.hairType===`curly`?`
      <circle cx="65" cy="56" r="24" fill="${e.hair}"/>
      <circle cx="88" cy="39" r="25" fill="${e.hair}"/>
      <circle cx="115" cy="39" r="25" fill="${e.hair}"/>
      <circle cx="138" cy="56" r="24" fill="${e.hair}"/>
    `:e.hairType===`long`?`
      <path
        d="M47 92 Q35 20 100 25
        Q165 20 153 92
        L135 115 L130 63
        Q100 45 70 63
        L65 115Z"
        fill="${e.hair}"
      />
    `:`
    <path
      d="M45 80 Q45 20 100 25
      Q155 20 155 80
      L140 60 L128 78
      L115 55 L100 76
      L82 53 L65 78Z"
      fill="${e.hair}"
    />
  `}function w(e){return e.shirtType===`sports`?`
      <path
        d="M43 170 L59 120
        Q100 105 141 120
        L157 170Z"
        fill="${e.shirt}"
        stroke="#202536"
        stroke-width="4"
      />

      <path
        d="M84 122 L100 150 L116 122"
        fill="none"
        stroke="#fff"
        stroke-width="5"
      />
    `:e.shirtType===`jacket`?`
      <path
        d="M42 170 L60 120
        L140 120 L158 170Z"
        fill="${e.shirt}"
        stroke="#202536"
        stroke-width="4"
      />

      <path
        d="M100 120 L100 170"
        stroke="#fff"
        stroke-width="4"
      />
    `:e.shirtType===`uniform`?`
      <path
        d="M42 170 L60 120
        Q100 108 140 120
        L158 170Z"
        fill="${e.shirt}"
        stroke="#202536"
        stroke-width="4"
      />

      <rect
        x="83"
        y="134"
        width="34"
        height="22"
        rx="4"
        fill="#fff"
        opacity=".9"
      />

      <text
        x="100"
        y="150"
        text-anchor="middle"
        font-size="9"
        font-weight="bold">
        SP
      </text>
    `:`
    <path
      d="M42 170 L58 120
      Q100 105 142 120
      L158 170Z"
      fill="${e.shirt}"
      stroke="#202536"
      stroke-width="4"
    />

    <path
      d="M78 123 Q100 145 122 123"
      fill="none"
      stroke="#202536"
      stroke-width="4"
    />
  `}function T(e,t,n){return`
    <button
      class="nav-item ${a===e?`active`:``}"
      onclick="navigate('${e}')"
    >
      <span>${t}</span>
      <b>${n}</b>
    </button>
  `}function E(){document.body.classList.toggle(`dark-mode`,!!i.settings.dark),document.body.classList.toggle(`compact-mode`,!!i.settings.compact);let e=document.querySelector(`#app`);e&&(e.innerHTML=`
    <div class="app-shell">

      <aside class="sidebar" id="sidebar">

        <div class="brand">

          <div class="brand-logo">
            <span>SP</span>
          </div>

          <div>
            <strong>StudyPro IA</strong>
            <small>Tu espacio escolar</small>
          </div>

        </div>

        <button
          class="close-menu"
          onclick="toggleMenu()"
          aria-label="Cerrar menú"
        >
          ×
        </button>

        <nav>

          ${T(`inicio`,`🏠`,`Inicio`)}
          ${T(`tutor`,`🧠`,`Tutor IA`)}
          ${T(`tareas`,`📚`,`Tareas`)}
          ${T(`juegos`,`🎮`,`Juegos`)}
          ${T(`avatar`,`👤`,`Mi avatar`)}
          ${T(`libreta`,`📖`,`Mi libreta`)}
          ${T(`bienestar`,`💙`,`Bienestar`)}
          ${T(`calendario`,`📅`,`Calendario`)}
          ${T(`progreso`,`🏆`,`Mi progreso`)}
          ${T(`config`,`⚙️`,`Configuración`)}

        </nav>

        <div class="sidebar-progress">

          <small>NIVEL ${i.level}</small>

          <strong>
            ${i.xp} / ${v()} XP
          </strong>

          <div class="progress-bar">
            <span
              style="
                width:${Math.min(100,i.xp/v()*100)}%
              "
            ></span>
          </div>

          <div class="currency">
            🪙 ${i.coins}
          </div>

        </div>

      </aside>

      <div
        class="mobile-overlay"
        onclick="toggleMenu()"
      ></div>

      <main class="main-content">

        <header class="topbar">

          <button
            class="menu-button"
            onclick="toggleMenu()"
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <div>
            <p class="top-greeting">
              ${h()}
            </p>

            <h1>StudyPro IA</h1>
          </div>

          <div class="top-stats">

            <div class="stat-pill">
              ⭐ ${i.xp} XP
            </div>

            <div class="stat-pill">
              🔥 ${i.streak}
            </div>

            <div class="stat-pill">
              🪙 ${i.coins}
            </div>

            <button
              class="mini-avatar"
              onclick="navigate('avatar')"
              aria-label="Abrir avatar"
            >
              ${S(50)}
            </button>

          </div>

        </header>

        <section class="page-container">
          ${D()}
        </section>

      </main>

    </div>
  `,a===`tareas`&&F(),a===`tutor`&&N(),a===`libreta`&&K(),a===`config`&&re())}function D(){switch(a){case`inicio`:return O();case`tutor`:return A();case`tareas`:return P();case`juegos`:return R();case`avatar`:return U();case`libreta`:return G();case`bienestar`:return J();case`calendario`:return Q();case`progreso`:return te();case`config`:return ne();default:return O()}}function O(){let e=i.tareas.filter(e=>!e.completed);return`
    <div class="home-grid">

      <section class="hero-card">

        <div class="hero-text">

          <span class="eyebrow">
            TU ESPACIO ESCOLAR ✨
          </span>

          <h2>
            Organiza,
            <span>aprende</span>
            y diviértete.
          </h2>

          <p>
            StudyPro IA reúne tus estudios,
            tareas, juegos, apuntes y bienestar
            en un solo lugar.
          </p>

          <div class="hero-actions">

            <button
              class="primary-btn"
              onclick="navigate('tutor')"
            >
              🧠 Estudiar
            </button>

            <button
              class="secondary-btn"
              onclick="navigate('juegos')"
            >
              🎮 Jugar
            </button>

          </div>

        </div>

        <div class="hero-art">

          <div class="floating-book">
            📚
          </div>

          <div class="floating-star">
            ✦
          </div>

          <div class="desk">
            <span>📖</span>
            <span>✏️</span>
            <span>📝</span>
          </div>

          <div class="student-illustration">
            ${S(210)}
          </div>

        </div>

      </section>

      <section class="welcome-card">

        <div class="welcome-avatar">
          ${S(150)}
        </div>

        <h3>
          Mi avatar
        </h3>

        <p>
          Nivel ${i.level}
          · ${i.xp} XP
        </p>

        <button
          onclick="navigate('avatar')"
        >
          🎨 Personalizar
        </button>

      </section>

      <section class="dashboard-card tasks-preview">

        <div class="card-heading">

          <h3>
            📋 Próximas tareas
          </h3>

          <button onclick="navigate('tareas')">
            Ver todas →
          </button>

        </div>

        ${e.length===0?`
              <div class="empty-art">
                🎉
                <p>
                  ¡No tienes tareas pendientes!
                </p>
              </div>
            `:e.slice(0,4).map(e=>`
                  <div class="mini-task">

                    <span class="task-dot"></span>

                    <div>
                      <strong>
                        ${u(e.name)}
                      </strong>

                      <small>
                        ${u(e.subject)}
                        · ${u(e.date||`Sin fecha`)}
                      </small>
                    </div>

                  </div>
                `).join(``)}

      </section>

      <section class="dashboard-card games-preview">

        <div class="card-heading">

          <h3>
            🎮 Practica
          </h3>

          <button onclick="navigate('juegos')">
            Ver todos →
          </button>

        </div>

        <div class="game-mini-grid">

          <button onclick="startGame('quiz')">
            🧠 Quiz
          </button>

          <button onclick="startGame('math')">
            🔢 Matemática
          </button>

          <button onclick="startGame('science')">
            🔬 Ciencia
          </button>

          <button onclick="startGame('memory')">
            🧩 Memoria
          </button>

        </div>

      </section>

      <section class="dashboard-card mood-preview">

        <div class="card-heading">
          <h3>💙 ¿Cómo estás hoy?</h3>
        </div>

        <p>
          Registrar tu estado puede ayudarte a
          reconocer cómo ha sido tu día.
        </p>

        <div class="mood-row">

          ${[[`😊`,`Muy bien`],[`🙂`,`Bien`],[`😐`,`Normal`],[`😕`,`Algo difícil`],[`😣`,`Necesito una pausa`]].map(([e,t])=>`
              <button
                onclick="quickMood('${e}')"
                class="${i.animo===e?`selected`:``}"
                title="${t}"
              >
                ${e}
              </button>
            `).join(``)}

        </div>

      </section>

      <section class="dashboard-card notebook-preview">

        <div class="card-heading">

          <h3>
            📖 Mi libreta
          </h3>

          <button onclick="navigate('libreta')">
            Abrir →
          </button>

        </div>

        ${i.notas.length?i.notas.slice(0,3).map(e=>`
                  <div class="note-mini">

                    <span>📝</span>

                    <div>
                      <strong>
                        ${u(e.title)}
                      </strong>

                      <small>
                        ${e.date} · ${e.time}
                      </small>
                    </div>

                  </div>
                `).join(``):`
              <div class="empty-art">
                📓
                <p>
                  Aún no tienes apuntes.
                </p>
              </div>
            `}

      </section>

      <section class="tip-card">

        <div class="tip-icon">
          💡
        </div>

        <div>
          <small>
            CONSEJO DEL DÍA
          </small>

          <h3>
            ${k()}
          </h3>
        </div>

      </section>

    </div>
  `}function k(){let e=[`Divide una tarea grande en pasos pequeños.`,`Estudiar un poco cada día suele ser más manejable que hacerlo todo al final.`,`Si no entiendes algo, intenta explicarlo con tus propias palabras.`,`Haz pausas breves cuando notes que tu concentración está bajando.`,`Dormir bien también forma parte de aprender.`,`Organizar tus pendientes puede reducir el estrés escolar.`,`Equivocarte en una pregunta también puede enseñarte algo.`,`Antes de un examen, practica recordando sin mirar tus apuntes.`,`Mantén cerca solamente lo que necesitas para estudiar.`,`Celebra los pequeños avances.`];return e[new Date().getDate()%e.length]}function A(){return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          APRENDE PASO A PASO
        </span>

        <h2>
          🧠 Tutor IA
        </h2>

        <p>
          Pregunta sobre una materia y recibe
          una explicación orientativa.
        </p>

      </div>

    </div>

    <div class="tutor-layout">

      <section class="tutor-card-large">

        <div class="ai-character">
          <div class="ai-head">
            <span>• •</span>
            <strong>AI</strong>
          </div>
        </div>

        <h3>
          ¿Qué quieres aprender?
        </h3>

        <select id="tutorSubject">
          ${t.map(e=>`<option>${e}</option>`).join(``)}
        </select>

        <textarea
          id="tutorQuestion"
          placeholder="Ejemplo: ¿Cómo se resuelve una ecuación de primer grado?"
        ></textarea>

        <button
          class="primary-btn"
          id="askTutor"
        >
          🚀 Preguntar
        </button>

        <div
          id="tutorResponse"
          class="ai-response"
        >
          <strong>
            🤖 StudyPro:
          </strong>

          <p>
            Escribe una pregunta para comenzar.
          </p>
        </div>

      </section>

      <aside class="study-help">

        <h3>
          📚 Accesos rápidos
        </h3>

        <button
          onclick="tutorExample('Explícame las fracciones de forma sencilla')"
        >
          ➗ Fracciones
        </button>

        <button
          onclick="tutorExample('Explícame la fotosíntesis')"
        >
          🌱 Fotosíntesis
        </button>

        <button
          onclick="tutorExample('¿Qué es un sustantivo?')"
        >
          ✍️ Comunicación
        </button>

        <button
          onclick="tutorExample('Ayúdame con vocabulario básico en inglés')"
        >
          🇬🇧 Inglés
        </button>

        <button
          onclick="tutorExample('¿Qué es una ecuación de primer grado?')"
        >
          🔢 Ecuaciones
        </button>

        <div class="info-box">
          💡 Actualmente StudyPro funciona
          sin una API externa. Cuando conectes
          una IA real, este mismo tutor podrá
          generar respuestas mucho más amplias.
        </div>

      </aside>

    </div>
  `}function j(e){let t=document.querySelector(`#tutorQuestion`);t&&(t.value=e,t.focus())}function M(e,t){let n=e.toLowerCase();return t===`Matemática`&&(n.includes(`ecuación`)||n.includes(`ecuacion`))?`
      <h4>🔢 Ecuación de primer grado</h4>

      <p>
        Una ecuación es una igualdad que contiene
        una cantidad desconocida.
      </p>

      <p>
        Por ejemplo:
        <strong>x + 5 = 12</strong>
      </p>

      <p>
        Para encontrar x, restamos 5 a ambos lados:
        <strong>x = 7</strong>.
      </p>

      <div class="search-help">
        📌 Consejo: comprueba la respuesta
        reemplazando x en la ecuación original.
      </div>
    `:t===`Matemática`&&(n.includes(`fracción`)||n.includes(`fraccion`))?`
      <h4>➗ Fracciones</h4>

      <p>
        Una fracción representa una parte de un todo.
      </p>

      <p>
        En <strong>3/4</strong>, el 3 es el numerador
        y el 4 es el denominador.
      </p>

      <div class="search-help">
        💡 Para sumar fracciones con el mismo
        denominador, suma los numeradores y
        conserva el denominador.
      </div>
    `:t===`Ciencia y Tecnología`&&n.includes(`fotosíntesis`)?`
      <h4>🌱 Fotosíntesis</h4>

      <p>
        Es el proceso mediante el cual las plantas
        producen alimento utilizando principalmente
        luz, agua y dióxido de carbono.
      </p>

      <p>
        Como resultado se produce glucosa y se libera
        oxígeno.
      </p>
    `:t===`Comunicación`&&(n.includes(`sustantivo`)||n.includes(`verbo`)||n.includes(`adjetivo`))?`
      <h4>✍️ Comunicación</h4>

      <p>
        Los sustantivos nombran personas, animales,
        lugares, objetos o ideas.
      </p>

      <p>
        Los verbos expresan acciones o estados.
      </p>

      <p>
        Los adjetivos describen características.
      </p>
    `:t===`Inglés`&&(n.includes(`book`)||n.includes(`vocabulario`)||n.includes(`hello`))?`
      <h4>🇬🇧 Inglés</h4>

      <p>
        <strong>Book</strong> significa libro.
      </p>

      <p>
        Algunas palabras básicas:
        <br>
        Hello = Hola
        <br>
        School = Escuela
        <br>
        Teacher = Profesor/a
        <br>
        Friend = Amigo/a
      </p>
    `:n.includes(`hola`)||n.includes(`buenos días`)||n.includes(`buenas tardes`)||n.includes(`buenas noches`)?`
      <h4>👋 ¡Hola!</h4>

      <p>
        ${h()}
      </p>

      <p>
        Soy el asistente de estudio de StudyPro.
        Puedes preguntarme sobre tus materias,
        organización o técnicas de estudio.
      </p>
    `:`
    <h4>📚 Buena pregunta</h4>

    <p>
      Tu pregunta está relacionada con
      <strong>${u(t)}</strong>.
    </p>

    <p>
      En esta versión todavía no estoy conectado
      a una IA externa, así que no quiero inventarte
      una respuesta.
    </p>

    <div class="search-help">

      🔎 Puedes buscar la pregunta exacta en:

      <ul>
        <li>Tu libro o material escolar.</li>
        <li>La biblioteca de tu colegio.</li>
        <li>Una plataforma educativa confiable.</li>
        <li>Preguntando a tu profesor.</li>
      </ul>

      <strong>
        Pregunta:
      </strong>

      ${u(e)}

    </div>
  `}function N(){let e=document.querySelector(`#askTutor`);e&&e.addEventListener(`click`,()=>{let e=document.querySelector(`#tutorQuestion`)?.value.trim(),t=document.querySelector(`#tutorSubject`)?.value,n=document.querySelector(`#tutorResponse`);!e||!n||(n.innerHTML=`
      <strong>
        🤖 StudyPro · ${u(t)}
      </strong>

      <div class="tutor-answer">
        ${M(e,t)}
      </div>
    `,y(2),x(),_(`success`))})}function P(){return`
    <div class="section-header">

      <div>
        <span class="eyebrow">
          ORGANIZACIÓN
        </span>

        <h2>
          📚 Mis tareas
        </h2>

        <p>
          Organiza trabajos, exámenes y pendientes.
        </p>
      </div>

      <div class="header-counter">
        ${i.tareas.filter(e=>!e.completed).length} pendientes
      </div>

    </div>

    <div class="tasks-layout">

      <section class="form-card">

        <h3>
          ➕ Nueva tarea
        </h3>

        <input
          id="taskName"
          placeholder="Ej: Exposición de Historia"
        >

        <select id="taskSubject">
          ${t.map(e=>`<option>${e}</option>`).join(``)}
        </select>

        <input
          id="taskDate"
          type="date"
        >

        <select id="taskPriority">

          <option value="Alta">
            Alta
          </option>

          <option
            value="Media"
            selected
          >
            Media
          </option>

          <option value="Baja">
            Baja
          </option>

        </select>

        <button
          class="primary-btn"
          id="addTask"
        >
          ➕ Agregar tarea
        </button>

      </section>

      <section class="tasks-list-card">

        <h3>
          📌 Mis pendientes
        </h3>

        ${i.tareas.length===0?`
              <div class="big-empty">
                <div>🎒</div>
                <h3>
                  Todo despejado
                </h3>
                <p>
                  Agrega tu primera tarea.
                </p>
              </div>
            `:i.tareas.map((e,t)=>`
                    <div
                      class="
                        task-item
                        ${e.completed?`completed`:``}
                      "
                    >

                      <button
                        class="check-task"
                        onclick="toggleTask(${t})"
                      >
                        ${e.completed?`✓`:``}
                      </button>

                      <div class="task-content">

                        <strong>
                          ${u(e.name)}
                        </strong>

                        <small>
                          ${u(e.subject)}
                          ·
                          ${u(e.date||`Sin fecha`)}
                        </small>

                      </div>

                      <span
                        class="
                          priority
                          ${String(e.priority||`Media`).toLowerCase()}
                        "
                      >
                        ${u(e.priority||`Media`)}
                      </span>

                      <button
                        class="delete-btn"
                        onclick="deleteTask(${t})"
                        title="Eliminar tarea"
                      >
                        🗑️
                      </button>

                    </div>
                  `).join(``)}

      </section>

    </div>
  `}function F(){document.querySelector(`#addTask`)?.addEventListener(`click`,()=>{let e=document.querySelector(`#taskName`)?.value.trim(),t=document.querySelector(`#taskSubject`)?.value,n=document.querySelector(`#taskDate`)?.value,r=document.querySelector(`#taskPriority`)?.value;if(!e){g(`✏️ Escribe el nombre de la tarea`);return}i.tareas.unshift({id:Date.now(),name:e,subject:t,date:n||`Sin fecha`,priority:r,completed:!1,createdAt:new Date().toISOString()}),l(),y(5),x(),g(`📚 Tarea agregada`),_(`success`),E()})}function I(e){let t=i.tareas[e];t&&(t.completed=!t.completed,t.completed&&(y(15),b(5),x(),g(`🎉 ¡Tarea completada! +15 XP`),_(`success`)),l(),E())}function L(e){i.tareas[e]&&confirm(`¿Quieres eliminar esta tarea?`)&&(i.tareas.splice(e,1),l(),g(`🗑️ Tarea eliminada`),E())}function R(){return`
    <div class="section-header">

      <div>
        <span class="eyebrow">
          APRENDE JUGANDO
        </span>

        <h2>
          🎮 Zona de juegos
        </h2>

        <p>
          Practica, gana XP y supera tus récords.
        </p>
      </div>

    </div>

    <div class="games-grid">

      ${[[`quiz`,`🧠`,`Quiz escolar`,`Preguntas por materias`],[`math`,`🔢`,`Desafío matemático`,`Practica cálculos`],[`science`,`🔬`,`Laboratorio científico`,`Descubre ciencia`],[`memory`,`🧩`,`Memoria`,`Encuentra parejas`],[`word`,`🔤`,`Palabra secreta`,`Conceptos y vocabulario`],[`quick`,`⚡`,`Reto rápido`,`Responde rápidamente`],[`mixed`,`🏆`,`Reto mixto`,`Un poco de todo`]].map(e=>`
            <article class="game-card">

              <div class="game-art-big">
                ${e[1]}
              </div>

              <div>

                <span class="game-record">
                  🏆 Récord:
                  ${i.records[e[0]]||0}
                </span>

                <h3>
                  ${e[2]}
                </h3>

                <p>
                  ${e[3]}
                </p>

                <button
                  class="primary-btn"
                  onclick="startGame('${e[0]}')"
                >
                  Jugar
                </button>

              </div>

            </article>
          `).join(``)}

    </div>

    <div id="gameArea"></div>
  `}function z(e){if(!n[e])return;document.querySelector(`#gameArea`)||(a=`juegos`,E());let t=document.querySelector(`#gameArea`);if(!t)return;if(e===`memory`){ee(t);return}let r=B(e),i=0,o=0;function s(){let n=r[i];if(!n)return;t.innerHTML=`
      <div class="active-game">

        <div class="game-top">

          <span>
            Pregunta
            ${i+1}/${r.length}
          </span>

          <span>
            ⭐ ${o}
          </span>

        </div>

        <div class="question-category">
          ${u(n.subject)}
        </div>

        <h2>
          ${u(n.question)}
        </h2>

        <div class="answers">

          ${n.answers.map((e,t)=>`
                <button
                  data-answer="${t}"
                  class="game-answer"
                >
                  ${u(e)}
                </button>
              `).join(``)}

        </div>

      </div>
    `;let a=t.querySelectorAll(`.game-answer`);a.forEach(t=>{t.addEventListener(`click`,()=>{let c=Number(t.dataset.answer);a.forEach(e=>e.disabled=!0),c===n.correct?(o++,t.classList.add(`correct`),g(`✅ ¡Correcto! +10 XP`),_(`success`)):(t.classList.add(`wrong`),a[n.correct]?.classList.add(`correct`),g(`💡 Casi. ¡Mira la respuesta correcta!`),_(`error`)),i++,i>=r.length?setTimeout(()=>{H(e,o,r.length)},650):setTimeout(s,650)})})}s()}function B(e){let t={math:[{subject:`Matemática`,question:`¿Cuánto es 8 × 7?`,answers:[`54`,`56`,`64`,`48`],correct:1},{subject:`Matemática`,question:`Si x + 5 = 12, ¿cuánto vale x?`,answers:[`5`,`6`,`7`,`8`],correct:2},{subject:`Matemática`,question:`¿Cuánto es 25% de 100?`,answers:[`10`,`20`,`25`,`50`],correct:2},{subject:`Matemática`,question:`¿Cuál es el resultado de 9²?`,answers:[`18`,`72`,`81`,`90`],correct:2},{subject:`Matemática`,question:`¿Cuánto es 144 ÷ 12?`,answers:[`10`,`12`,`14`,`16`],correct:1},{subject:`Matemática`,question:`¿Cuál es un número primo?`,answers:[`9`,`15`,`17`,`21`],correct:2}],science:[{subject:`Ciencia y Tecnología`,question:`¿Qué necesitan las plantas para realizar fotosíntesis?`,answers:[`Luz`,`Plástico`,`Metal`,`Vidrio`],correct:0},{subject:`Ciencia y Tecnología`,question:`¿Qué órgano bombea la sangre?`,answers:[`Pulmón`,`Corazón`,`Riñón`,`Estómago`],correct:1},{subject:`Ciencia y Tecnología`,question:`¿En qué estado está el agua cuando se convierte en hielo?`,answers:[`Líquido`,`Gaseoso`,`Sólido`,`Plasma`],correct:2},{subject:`Ciencia y Tecnología`,question:`¿Qué planeta es conocido como el planeta rojo?`,answers:[`Venus`,`Marte`,`Júpiter`,`Mercurio`],correct:1}],communication:[{subject:`Comunicación`,question:`¿Cuál es un sinónimo de rápido?`,answers:[`Lento`,`Veloz`,`Débil`,`Pequeño`],correct:1},{subject:`Comunicación`,question:`¿Qué palabra es un sustantivo?`,answers:[`Correr`,`Hermoso`,`Escuela`,`Rápidamente`],correct:2},{subject:`Comunicación`,question:`¿Cuál es un antónimo de grande?`,answers:[`Enorme`,`Gigante`,`Pequeño`,`Amplio`],correct:2}],history:[{subject:`Historia`,question:`¿En qué continente se encuentra Perú?`,answers:[`Europa`,`Asia`,`América`,`África`],correct:2},{subject:`Historia`,question:`¿Cuál fue una gran civilización del antiguo Perú?`,answers:[`Inca`,`Romana`,`Egipcia`,`Griega`],correct:0}],english:[{subject:`Inglés`,question:`¿Qué significa "book"?`,answers:[`Casa`,`Libro`,`Mesa`,`Escuela`],correct:1},{subject:`Inglés`,question:`¿Qué significa "school"?`,answers:[`Escuela`,`Amigo`,`Libro`,`Familia`],correct:0},{subject:`Inglés`,question:`¿Qué significa "friend"?`,answers:[`Profesor`,`Amigo`,`Alumno`,`Hermano`],correct:1}]};return e===`math`?V(t.math).slice(0,5):e===`science`?V(t.science).slice(0,5):e===`word`?V([...t.communication,...t.english]).slice(0,5):e===`quiz`?V([...t.math,...t.science,...t.communication,...t.history,...t.english]).slice(0,6):V([...t.math,...t.science,...t.communication,...t.history,...t.english]).slice(0,5)}function V(e){return[...e].sort(()=>Math.random()-.5)}function H(e,t,n){let r=t*10,a=t*3;i.records[e]=Math.max(i.records[e]||0,t),i.coins+=a,x(),y(r),l();let o=document.querySelector(`#gameArea`);o&&(o.innerHTML=`
    <div class="game-result">

      <div class="result-trophy">
        🏆
      </div>

      <h2>
        ¡Reto terminado!
      </h2>

      <p>
        Conseguido:
        <strong>
          ${t}/${n}
        </strong>
      </p>

      <div class="result-rewards">

        ⭐ +${r} XP

        <span>
          🪙 +${a}
        </span>

      </div>

      <button
        class="primary-btn"
        onclick="navigate('juegos')"
      >
        🎮 Volver a juegos
      </button>

    </div>
  `)}function ee(e){let t=[`📚`,`✏️`,`🧠`,`🎓`,`🔬`,`🏆`],n=V([...t,...t]),r=null,i=!1,a=0;e.innerHTML=`
    <div class="active-game">

      <div class="game-top">

        <span>
          🧩 Memoria
        </span>

        <span id="memoryCounter">
          Parejas: 0/${t.length}
        </span>

      </div>

      <div class="memory-grid">

        ${n.map((e,t)=>`
              <button
                class="memory-card"
                data-index="${t}"
              >
                ?
              </button>
            `).join(``)}

      </div>

    </div>
  `;let o=[...e.querySelectorAll(`.memory-card`)];o.forEach((e,s)=>{e.addEventListener(`click`,()=>{if(!(i||e.classList.contains(`matched`))){if(e.textContent=n[s],r===null){r=s;return}if(n[r]===n[s]){o[r].classList.add(`matched`),e.classList.add(`matched`),a++,r=null,y(10);let n=document.querySelector(`#memoryCounter`);n&&(n.textContent=`Parejas: ${a}/${t.length}`),a===t.length&&(b(15),g(`🎉 ¡Memoria completada! +15 monedas`),_(`success`))}else i=!0,setTimeout(()=>{o[r].textContent=`?`,e.textContent=`?`,r=null,i=!1},750)}})})}function U(){let e=[`#f1c29b`,`#e8b28d`,`#d99a72`,`#c77d52`,`#a95c35`,`#8d5524`,`#6d4c41`],t=[`#21140e`,`#3b2418`,`#6d4c41`,`#8b5a2b`,`#d4a017`,`#c45c3c`,`#7b1fa2`,`#2563eb`],n=[`#6d4aff`,`#3478f6`,`#1fa774`,`#f59e0b`,`#ef4444`,`#ec4899`,`#111827`,`#ffffff`,`#0ea5e9`,`#14b8a6`];return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          PERSONALIZACIÓN
        </span>

        <h2>
          👤 Mi avatar
        </h2>

        <p>
          Diseña un personaje único para tu espacio escolar.
        </p>

      </div>

    </div>

    <div class="avatar-editor">

      <section
        class="avatar-preview"
        style="
          background:${u(i.avatar.background)}
        "
      >

        <div class="avatar-stars">
          ✦ ✧ ✦
        </div>

        ${S(280)}

        <h3>
          Mi personaje
        </h3>

        <p>
          Nivel ${i.level}
        </p>

      </section>

      <section class="avatar-controls">

        <div class="custom-section">

          <h3>
            🎨 Color de piel
          </h3>

          <div class="color-grid">

            ${e.map(e=>`
                  <button
                    class="color-choice"
                    style="
                      background:${e}
                    "
                    title="${e}"
                    onclick="setAvatar(
                      'skin',
                      '${e}'
                    )"
                  ></button>
                `).join(``)}

          </div>

        </div>

        <div class="custom-section">

          <h3>
            💇 Estilo de cabello
          </h3>

          <div class="option-grid">

            <button
              onclick="setAvatar(
                'hairType',
                'spiky'
              )"
            >
              ⚡ Puntiagudo
            </button>

            <button
              onclick="setAvatar(
                'hairType',
                'short'
              )"
            >
              ✂️ Corto
            </button>

            <button
              onclick="setAvatar(
                'hairType',
                'curly'
              )"
            >
              🌀 Rizado
            </button>

            <button
              onclick="setAvatar(
                'hairType',
                'long'
              )"
            >
              💇 Largo
            </button>

          </div>

        </div>

        <div class="custom-section">

          <h3>
            🎨 Color del cabello
          </h3>

          <div class="color-grid">

            ${t.map(e=>`
                  <button
                    class="color-choice"
                    style="
                      background:${e}
                    "
                    onclick="setAvatar(
                      'hair',
                      '${e}'
                    )"
                  ></button>
                `).join(``)}

          </div>

        </div>

        <div class="custom-section">

          <h3>
            👕 Ropa
          </h3>

          <div class="option-grid">

            <button
              onclick="setAvatar(
                'shirtType',
                'hoodie'
              )"
            >
              🧥 Sudadera
            </button>

            <button
              onclick="setAvatar(
                'shirtType',
                'sports'
              )"
            >
              ⚽ Deportiva
            </button>

            <button
              onclick="setAvatar(
                'shirtType',
                'jacket'
              )"
            >
              🧢 Chaqueta
            </button>

            <button
              onclick="setAvatar(
                'shirtType',
                'uniform'
              )"
            >
              🎒 Uniforme
            </button>

          </div>

        </div>

        <div class="custom-section">

          <h3>
            👖 Color del pantalón
          </h3>

          <div class="color-grid">

            ${n.map(e=>`
                  <button
                    class="color-choice"
                    style="
                      background:${e}
                    "
                    onclick="setAvatar(
                      'pants',
                      '${e}'
                    )"
                  ></button>
                `).join(``)}

          </div>

        </div>

        <div class="custom-section">

          <h3>
            🎨 Color de ropa
          </h3>

          <div class="color-grid">

            ${n.map(e=>`
                  <button
                    class="color-choice"
                    style="
                      background:${e}
                    "
                    onclick="setAvatar(
                      'shirt',
                      '${e}'
                    )"
                  ></button>
                `).join(``)}

          </div>

        </div>

        <div class="custom-section">

          <h3>
            ✨ Accesorio principal
          </h3>

          <div class="option-grid">

            <button
              onclick="setAvatar(
                'accessory',
                'none'
              )"
            >
              🚫 Ninguno
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'glasses'
              )"
            >
              👓 Gafas
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'cap'
              )"
            >
              🧢 Gorra
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'headphones'
              )"
            >
              🎧 Audífonos
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'crown'
              )"
            >
              👑 Corona
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'headband'
              )"
            >
              🎀 Banda
            </button>

            <button
              onclick="setAvatar(
                'accessory',
                'visor'
              )"
            >
              🧢 Visera
            </button>

          </div>

        </div>

        <div class="custom-section">

          <h3>
            🎒 Accesorio adicional
          </h3>

          <div class="option-grid">

            <button
              onclick="setAvatar(
                'accessory2',
                'none'
              )"
            >
              🚫 Ninguno
            </button>

            <button
              onclick="setAvatar(
                'accessory2',
                'backpack'
              )"
            >
              🎒 Mochila
            </button>

            <button
              onclick="setAvatar(
                'accessory2',
                'star'
              )"
            >
              ⭐ Estrella
            </button>

            <button
              onclick="setAvatar(
                'accessory2',
                'badge'
              )"
            >
              🏅 Insignia
            </button>

            <button
              onclick="setAvatar(
                'accessory2',
                'tie'
              )"
            >
              👔 Corbata
            </button>

            <button
              onclick="setAvatar(
                'accessory2',
                'scarf'
              )"
            >
              🧣 Bufanda
            </button>

          </div>

        </div>

        <div class="custom-section">

          <h3>
            🌈 Fondo
          </h3>

          <div class="color-grid">

            ${[`#eee7ff`,`#e0f2fe`,`#dcfce7`,`#fef3c7`,`#ffe4e6`,`#e5e7eb`].map(e=>`
                  <button
                    class="color-choice"
                    style="
                      background:${e}
                    "
                    onclick="setAvatar(
                      'background',
                      '${e}'
                    )"
                  ></button>
                `).join(``)}

          </div>

        </div>

      </section>

    </div>
  `}function W(e,t){i.avatar[e]=t,l(),_(`click`),E()}function G(){return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          TU ESPACIO PERSONAL
        </span>

        <h2>
          📖 Mi libreta
        </h2>

        <p>
          Guarda apuntes, ideas, fórmulas y recordatorios.
        </p>

      </div>

    </div>

    <div class="notes-layout">

      <section class="form-card">

        <h3>
          📝 Nuevo apunte
        </h3>

        <input
          id="noteTitle"
          placeholder="Título del apunte"
        >

        <select id="noteSubject">

          <option>
            General
          </option>

          ${t.map(e=>`<option>${e}</option>`).join(``)}

        </select>

        <textarea
          id="noteContent"
          placeholder="Escribe aquí tus apuntes..."
        ></textarea>

        <button
          class="primary-btn"
          id="addNote"
        >
          💾 Guardar apunte
        </button>

      </section>

      <section class="notes-grid">

        ${i.notas.length===0?`
              <div class="big-empty">

                <div>
                  📓
                </div>

                <h3>
                  Tu libreta está vacía
                </h3>

                <p>
                  Aquí aparecerán tus apuntes.
                </p>

              </div>
            `:i.notas.map((e,t)=>`
                    <article class="note-card">

                      <div class="note-icon">
                        📝
                      </div>

                      <div class="note-date">
                        ${u(e.date)}
                        ·
                        ${u(e.time)}
                      </div>

                      <small>
                        ${u(e.subject||`General`)}
                      </small>

                      <h3>
                        ${u(e.title)}
                      </h3>

                      <p>
                        ${u(e.content)}
                      </p>

                      <button
                        class="delete-btn"
                        onclick="deleteNote(${t})"
                      >
                        🗑️ Eliminar
                      </button>

                    </article>
                  `).join(``)}

      </section>

    </div>
  `}function K(){document.querySelector(`#addNote`)?.addEventListener(`click`,()=>{let e=document.querySelector(`#noteTitle`)?.value.trim(),t=document.querySelector(`#noteSubject`)?.value,n=document.querySelector(`#noteContent`)?.value.trim();if(!e||!n){g(`📝 Completa el título y contenido`);return}let r=new Date;i.notas.unshift({id:Date.now(),title:e,subject:t,content:n,date:d(r),time:f(r)}),l(),y(5),x(),g(`📖 Apunte guardado`),E()})}function q(e){i.notas[e]&&confirm(`¿Quieres eliminar este apunte?`)&&(i.notas.splice(e,1),l(),g(`🗑️ Apunte eliminado`),E())}function J(){return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          BIENESTAR
        </span>

        <h2>
          💙 ¿Cómo estás?
        </h2>

        <p>
          Este espacio es para hacer una pausa
          y reconocer cómo te sientes.
        </p>

      </div>

    </div>

    <div class="wellness-layout">

      <section class="wellness-card">

        <div class="wellness-scene">
          ☁️
          <span>☀️</span>
          <strong>🌱</strong>
          <div>🧑‍🎓</div>
        </div>

        <h3>
          ¿Cómo te sientes hoy?
        </h3>

        <div class="mood-large">

          ${[[`😊`,`Muy bien`],[`🙂`,`Bien`],[`😐`,`Normal`],[`😕`,`Algo preocupado`],[`😣`,`Día difícil`]].map(e=>`
                <button
                  class="
                    ${i.animo===e[0]?`selected`:``}
                  "
                  onclick="selectMood('${e[0]}')"
                >

                  <span>
                    ${e[0]}
                  </span>

                  <small>
                    ${e[1]}
                  </small>

                </button>
              `).join(``)}

        </div>

      </section>

      <section class="wellness-card">

        <h3>
          📔 Registro del día
        </h3>

        <p>
          Puedes escribir qué pasó hoy,
          qué te gustó o qué te gustaría mejorar.
        </p>

        <textarea
          id="dailyJournal"
          placeholder="¿Cómo fue tu día?"
        ></textarea>

        <button
          class="primary-btn"
          onclick="saveJournal()"
        >
          💾 Guardar registro
        </button>

        <div class="journal-history">

          ${i.diario.slice(0,5).map(e=>`
                <div>

                  <strong>
                    ${u(e.date)}
                  </strong>

                  <p>
                    ${u(e.text)}
                  </p>

                </div>
              `).join(``)}

        </div>

      </section>

    </div>

    <div class="support-card">

      💙 Si un problema te está afectando mucho,
      hablar con una persona adulta de confianza,
      un familiar, docente u orientador puede ayudarte.
      Pedir apoyo es una forma válida de cuidarte.

    </div>
  `}function Y(e){i.animo=e,l(),x(),y(2),g(`💙 Estado registrado: ${e}`),E()}function X(e){i.animo=e,l(),x(),y(2),g(`💙 Estado registrado: ${e}`),E()}function Z(){let e=document.querySelector(`#dailyJournal`);if(!e)return;let t=e.value.trim();if(!t){g(`📔 Escribe algo sobre tu día`);return}let n=new Date;i.diario.unshift({id:Date.now(),date:`${d(n)} · ${f(n)}`,text:t}),l(),x(),y(5),g(`📔 Registro guardado`),E()}function Q(){let e=o.getFullYear(),t=o.getMonth(),n=o.toLocaleDateString(`es-PE`,{month:`long`,year:`numeric`}),r=new Date(e,t,1).getDay(),a=r===0?6:r-1,s=new Date(e,t+1,0).getDate(),c=[];for(let e=0;e<a;e++)c.push(`<div class="calendar-day empty"></div>`);for(let n=1;n<=s;n++){let r=`${e}-${String(t+1).padStart(2,`0`)}-${String(n).padStart(2,`0`)}`,a=i.tareas.some(e=>e.date===r),o=r===m();c.push(`
      <div
        class="
          calendar-day
          ${o?`today`:``}
          ${a?`has-task`:``}
        "
        title="${a?`Tienes una tarea este día`:``}"
      >
        ${n}
        ${a?`<span></span>`:``}
      </div>
    `)}return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          PLANIFICACIÓN
        </span>

        <h2>
          📅 Calendario
        </h2>

        <p>
          Revisa tus fechas importantes.
        </p>

      </div>

    </div>

    <section class="calendar-card">

      <div class="calendar-title">

        <button onclick="changeMonth(-1)">
          ‹
        </button>

        <h2>
          ${n}
        </h2>

        <button onclick="changeMonth(1)">
          ›
        </button>

      </div>

      <div class="calendar-week">

        <b>L</b>
        <b>M</b>
        <b>M</b>
        <b>J</b>
        <b>V</b>
        <b>S</b>
        <b>D</b>

      </div>

      <div class="calendar-days">
        ${c.join(``)}
      </div>

    </section>
  `}function $(e){o.setMonth(o.getMonth()+e),E()}function te(){let e=i.tareas.length,t=i.tareas.filter(e=>e.completed).length,n=e===0?0:Math.round(t/e*100),r=Object.values(i.records).reduce((e,t)=>e+Number(t||0),0);return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          TU PROGRESO
        </span>

        <h2>
          🏆 Mi progreso
        </h2>

        <p>
          Cada pequeño avance cuenta.
        </p>

      </div>

    </div>

    <div class="progress-grid">

      <div class="progress-big-card">
        <span>⭐</span>
        <strong>${i.xp}</strong>
        <small>XP actual</small>
      </div>

      <div class="progress-big-card">
        <span>🔥</span>
        <strong>${i.streak}</strong>
        <small>Racha</small>
      </div>

      <div class="progress-big-card">
        <span>🪙</span>
        <strong>${i.coins}</strong>
        <small>Monedas</small>
      </div>

      <div class="progress-big-card">
        <span>🎮</span>
        <strong>${r}</strong>
        <small>Mejoras registradas</small>
      </div>

    </div>

    <section class="progress-detail">

      <h3>
        📈 Nivel ${i.level}
      </h3>

      <div class="big-progress">
        <span
          style="
            width:${Math.min(100,i.xp/v()*100)}%
          "
        ></span>
      </div>

      <p>
        ${i.xp} / ${v()} XP
      </p>

      <h3>
        📚 Tareas completadas
      </h3>

      <div class="big-progress">
        <span
          style="
            width:${n}%
          "
        ></span>
      </div>

      <p>
        ${n}%
      </p>

    </section>
  `}function ne(){return`
    <div class="section-header">

      <div>

        <span class="eyebrow">
          PERSONALIZACIÓN
        </span>

        <h2>
          ⚙️ Configuración
        </h2>

        <p>
          Ajusta StudyPro a tu manera.
        </p>

      </div>

    </div>

    <div class="settings-list">

      <div class="setting-row">

        <div>
          <strong>
            🌙 Modo oscuro
          </strong>

          <small>
            Cambia la apariencia de StudyPro.
          </small>
        </div>

        <label class="switch">

          <input
            type="checkbox"
            id="darkMode"
            ${i.settings.dark?`checked`:``}
          >

          <span></span>

        </label>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            🔊 Sonidos
          </strong>

          <small>
            Sonidos de interacción.
          </small>
        </div>

        <label class="switch">

          <input
            type="checkbox"
            id="soundMode"
            ${i.settings.sound?`checked`:``}
          >

          <span></span>

        </label>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            ✨ Animaciones
          </strong>

          <small>
            Efectos visuales de la aplicación.
          </small>
        </div>

        <label class="switch">

          <input
            type="checkbox"
            id="animationMode"
            ${i.settings.animations?`checked`:``}
          >

          <span></span>

        </label>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            📐 Vista compacta
          </strong>

          <small>
            Reduce algunos espacios de la interfaz.
          </small>
        </div>

        <label class="switch">

          <input
            type="checkbox"
            id="compactMode"
            ${i.settings.compact?`checked`:``}
          >

          <span></span>

        </label>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            🌎 Idioma
          </strong>

          <small>
            Idioma de la interfaz.
          </small>
        </div>

        <select id="languageSelect">

          <option
            ${i.settings.language===`Español`?`selected`:``}
          >
            Español
          </option>

          <option
            ${i.settings.language===`English`?`selected`:``}
          >
            English
          </option>

        </select>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            💾 Datos locales
          </strong>

          <small>
            Tus datos se guardan en este navegador.
          </small>
        </div>

        <span class="status-badge">
          ACTIVO
        </span>

      </div>

      <div class="setting-row">

        <div>
          <strong>
            🏫 StudyPro IA
          </strong>

          <small>
            Plataforma de estudio y organización escolar.
          </small>
        </div>

        <span>
          v4.0
        </span>

      </div>

      <div class="danger-zone">

        <h3>
          ⚠️ Zona de datos
        </h3>

        <p>
          Puedes borrar todo el progreso local
          de StudyPro y comenzar nuevamente.
        </p>

        <button
          class="danger-btn"
          onclick="resetApp()"
        >
          🗑️ Restablecer StudyPro
        </button>

      </div>

    </div>
  `}function re(){document.querySelector(`#darkMode`)?.addEventListener(`change`,e=>{i.settings.dark=e.target.checked,l(),E()}),document.querySelector(`#soundMode`)?.addEventListener(`change`,e=>{i.settings.sound=e.target.checked,l(),g(e.target.checked?`🔊 Sonidos activados`:`🔇 Sonidos desactivados`)}),document.querySelector(`#animationMode`)?.addEventListener(`change`,e=>{i.settings.animations=e.target.checked,l(),g(`✨ Animaciones actualizadas`),E()}),document.querySelector(`#compactMode`)?.addEventListener(`change`,e=>{i.settings.compact=e.target.checked,l(),E()}),document.querySelector(`#languageSelect`)?.addEventListener(`change`,e=>{i.settings.language=e.target.value,l(),g(`🌎 Idioma actualizado`)})}function ie(){confirm(`¿Seguro que quieres borrar todos tus datos de StudyPro IA?`)&&(localStorage.removeItem(e),i=s(),a=`inicio`,g(`🗑️ StudyPro se ha restablecido`),E())}function ae(){document.querySelector(`.sidebar`)?.classList.toggle(`open`),document.querySelector(`.mobile-overlay`)?.classList.toggle(`show`)}function oe(e){a=e,document.querySelector(`.sidebar`)?.classList.remove(`open`),document.querySelector(`.mobile-overlay`)?.classList.remove(`show`),E(),window.scrollTo({top:0,behavior:`smooth`})}window.navigate=oe,window.toggleMenu=ae,window.startGame=z,window.toggleTask=I,window.deleteTask=L,window.deleteNote=q,window.setAvatar=W,window.selectMood=Y,window.quickMood=X,window.saveJournal=Z,window.tutorExample=j,window.resetApp=ie,window.changeMonth=$,x(),E();