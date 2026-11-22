//# allFunctionsCalledOnLoad
var e=`jetgram_accounts`,t=`jetgram_session`,n=[`رنگ مورد علاقه‌ات چیست؟`,`نام اولین حیوان خانگی‌ات چیست؟`,`نام مدرسه ابتدایی‌ات چیست؟`,`در چه شهری به دنیا آمدی؟`,`غذای مورد علاقه‌ات چیست؟`];async function r(e){try{let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}catch{let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return`fallback-`+t}}function i(){try{return JSON.parse(localStorage.getItem(e)||`{}`)}catch{return{}}}function a(t){localStorage.setItem(e,JSON.stringify(t))}var o=`
#jetgram-gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#37aee2,#1e96c8);font-family:Tahoma,sans-serif;padding:16px;box-sizing:border-box}
#jetgram-gate *{box-sizing:border-box}
.jg-card{background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.25);width:100%;max-width:380px;padding:28px 24px 22px;text-align:center}
.jg-logo{width:72px;height:72px;margin:0 auto 10px;border-radius:50%;background:#2aabee;display:flex;align-items:center;justify-content:center}
.jg-title{font-size:26px;font-weight:700;color:#222;margin:0 0 2px}
.jg-sub{font-size:13px;color:#888;margin:0 0 18px}
.jg-tabs{display:flex;background:#f0f2f5;border-radius:10px;padding:4px;margin-bottom:18px}
.jg-tab{flex:1;border:0;background:transparent;padding:10px 0;border-radius:8px;font-family:Tahoma,sans-serif;font-size:15px;color:#666;cursor:pointer}
.jg-tab.active{background:#fff;color:#229ed9;font-weight:700;box-shadow:0 1px 4px rgba(0,0,0,.12)}
.jg-field{width:100%;padding:12px 14px;margin-bottom:12px;border:1px solid #ddd;border-radius:10px;font-family:Tahoma,sans-serif;font-size:15px;direction:rtl;text-align:right;outline:none}
.jg-field:focus{border-color:#2aabee}
.jg-btn{width:100%;padding:13px;border:0;border-radius:10px;background:#2aabee;color:#fff;font-family:Tahoma,sans-serif;font-size:16px;font-weight:700;cursor:pointer;margin-top:4px}
.jg-btn:active{background:#1e96c8}
.jg-link{display:inline-block;margin-top:14px;background:none;border:0;color:#229ed9;font-family:Tahoma,sans-serif;font-size:13px;cursor:pointer;padding:0}
.jg-err{color:#d32f2f;font-size:13px;min-height:18px;margin:2px 0 6px}
.jg-ok{color:#2e7d32;font-size:13px;min-height:18px;margin:2px 0 6px}
.jg-note{font-size:12px;color:#999;line-height:1.8;margin-top:16px;text-align:right}
.jg-q{font-size:14px;color:#333;background:#f0f7ff;border-radius:8px;padding:10px;margin-bottom:12px}
`;async function s(){let e=localStorage.getItem(t);if(e){if(i()[e])return;localStorage.removeItem(t)}return new Promise(e=>{let s=document.createElement(`div`);s.id=`jetgram-gate`,s.dir=`rtl`,s.lang=`fa`,s.innerHTML=`
      <style>${o}</style>
      <div class="jg-card">
        <div class="jg-logo">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="#fff"><path d="M21.9 4.6 18.8 19c-.24 1.06-.87 1.32-1.76.82l-4.9-3.6-2.36 2.27c-.26.26-.48.48-.99.48l.35-4.97L18.2 6.9c.39-.35-.09-.54-.6-.2L6.6 13.7l-4.8-1.5c-1.04-.33-1.07-1.04.22-1.55l18.76-7.23c.87-.32 1.63.2 1.12 1.18z"/></svg>
        </div>
        <h1 class="jg-title">جت‌گرام</h1>
        <p class="jg-sub">نسخه وب تلگرام</p>
        <div class="jg-tabs">
          <button class="jg-tab active" data-tab="login" type="button">ورود</button>
          <button class="jg-tab" data-tab="signup" type="button">ایجاد حساب</button>
        </div>
        <div class="jg-err" id="jg-err"></div>
        <div class="jg-ok" id="jg-ok"></div>
        <div id="jg-body"></div>
        <p class="jg-note">حساب جت‌گرام فقط روی همین مرورگر ذخیره می‌شود (بدون سرور).<br>برای چت‌های تلگرام، بار اول باید با شماره موبایل و کد تلگرام وارد شوید — خود تلگرام فقط با شماره و کد وارد می‌شود؛ نام کاربری و رمز عبور فقط برای باز کردن جت‌گرام وب است.</p>
      </div>
    `,document.body.appendChild(s);let c=s.querySelector(`#jg-err`),l=s.querySelector(`#jg-ok`),u=s.querySelector(`#jg-body`),d=Array.from(s.querySelectorAll(`.jg-tab`));function f(e){c.textContent=e,l.textContent=``}function p(e){l.textContent=e,c.textContent=``}function m(){c.textContent=``,l.textContent=``}function h(n){localStorage.setItem(t,n),s.remove(),e()}function g(){u.innerHTML=`
        <input class="jg-field" id="jg-user" type="text" placeholder="نام کاربری" autocomplete="username">
        <input class="jg-field" id="jg-pass" type="password" placeholder="رمز عبور" autocomplete="current-password">
        <button class="jg-btn" id="jg-submit" type="button">ورود به جت‌گرام</button>
        <button class="jg-link" id="jg-forgot" type="button">رمز عبور را فراموش کرده‌ام؟</button>
      `;let e=u.querySelector(`#jg-user`),t=u.querySelector(`#jg-pass`);u.querySelector(`#jg-submit`).addEventListener(`click`,async()=>{m();let n=e.value.trim(),a=t.value;if(!n||!a)return f(`نام کاربری و رمز عبور را وارد کنید.`);let o=i()[n];if(!o)return f(`چنین حسابی وجود ندارد. اول حساب بسازید.`);if(await r(a)!==o.pass)return f(`رمز عبور اشتباه است.`);h(n)}),u.querySelector(`#jg-forgot`).addEventListener(`click`,()=>v())}function _(){u.innerHTML=`
        <input class="jg-field" id="jg-user" type="text" placeholder="نام کاربری" autocomplete="username">
        <input class="jg-field" id="jg-pass" type="password" placeholder="رمز عبور (حداقل ۴ حرف)" autocomplete="new-password">
        <input class="jg-field" id="jg-pass2" type="password" placeholder="تکرار رمز عبور" autocomplete="new-password">
        <select class="jg-field" id="jg-q">${n.map(e=>`<option value="${e}">${e}</option>`).join(``)}</select>
        <input class="jg-field" id="jg-a" type="text" placeholder="پاسخ سوال امنیتی">
        <button class="jg-btn" id="jg-submit" type="button">ایجاد حساب</button>
      `;let e=u.querySelector(`#jg-user`),t=u.querySelector(`#jg-pass`),o=u.querySelector(`#jg-pass2`),s=u.querySelector(`#jg-q`),c=u.querySelector(`#jg-a`);u.querySelector(`#jg-submit`).addEventListener(`click`,async()=>{m();let n=e.value.trim(),l=t.value,u=c.value.trim();if(!n||!l||!u)return f(`همه فیلدها را پر کنید.`);if(l.length<4)return f(`رمز عبور باید حداقل ۴ حرف باشد.`);if(l!==o.value)return f(`تکرار رمز عبور یکی نیست.`);let d=i();if(d[n])return f(`این نام کاربری قبلا گرفته شده است.`);d[n]={pass:await r(l),question:s.value,answer:await r(u)},a(d),p(`حساب ساخته شد! حالا وارد شوید.`),y(`login`)})}function v(){u.innerHTML=`
        <input class="jg-field" id="jg-user" type="text" placeholder="نام کاربری">
        <button class="jg-btn" id="jg-next" type="button">ادامه</button>
        <button class="jg-link" id="jg-back" type="button">بازگشت به ورود</button>
        <div id="jg-step2"></div>
      `;let e=u.querySelector(`#jg-user`),t=u.querySelector(`#jg-step2`);u.querySelector(`#jg-back`).addEventListener(`click`,()=>g()),u.querySelector(`#jg-next`).addEventListener(`click`,()=>{m();let n=e.value.trim(),o=i(),s=o[n];if(!s)return f(`چنین حسابی وجود ندارد.`);t.innerHTML=`
          <div class="jg-q">سوال امنیتی: ${s.question}</div>
          <input class="jg-field" id="jg-a" type="text" placeholder="پاسخ سوال امنیتی">
          <input class="jg-field" id="jg-pass" type="password" placeholder="رمز عبور جدید (حداقل ۴ حرف)">
          <input class="jg-field" id="jg-pass2" type="password" placeholder="تکرار رمز عبور جدید">
          <button class="jg-btn" id="jg-reset" type="button">تغییر رمز عبور</button>
        `,t.querySelector(`#jg-reset`).addEventListener(`click`,async()=>{m();let e=t.querySelector(`#jg-a`).value.trim(),i=t.querySelector(`#jg-pass`).value,c=t.querySelector(`#jg-pass2`).value;if(await r(e)!==s.answer)return f(`پاسخ سوال امنیتی اشتباه است.`);if(i.length<4)return f(`رمز عبور جدید باید حداقل ۴ حرف باشد.`);if(i!==c)return f(`تکرار رمز عبور یکی نیست.`);o[n].pass=await r(i),a(o),p(`رمز عبور عوض شد! حالا با رمز جدید وارد شوید.`),y(`login`)})})}function y(e){d.forEach(t=>t.classList.toggle(`active`,t.dataset.tab===e)),m(),e===`login`?g():_()}d.forEach(e=>e.addEventListener(`click`,()=>y(e.dataset.tab))),g()})}export{s as requireJetGramLogin};
//# sourceMappingURL=jetgram-auth-B_ZF9V5e.js.map