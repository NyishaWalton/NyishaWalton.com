const reveal = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show') }), {threshold:.12});
document.querySelectorAll('section,.dashboard,.projectcard,.flow-step').forEach(el => reveal.observe(el));

const leadBtn = document.querySelector('[data-demo]');
const demo = document.querySelector('.lead-demo');
if (leadBtn && demo) leadBtn.addEventListener('click', () => {
  demo.classList.remove('running'); void demo.offsetWidth; demo.classList.add('running');
});

const openers = document.querySelectorAll('[data-open-intake]');
const modal = document.querySelector('#intake');
const close = document.querySelector('[data-close]');
openers.forEach(b => b.addEventListener('click', e => {e.preventDefault(); modal.showModal();}));
if(close) close.addEventListener('click',()=>modal.close());
const form=document.querySelector('#project-form');
if(form) form.addEventListener('submit', e=>{e.preventDefault(); document.querySelector('.form-step').innerHTML='<p class="eyebrow">INQUIRY READY</p><h3>Thank you. Your project details are ready for the next step.</h3><p>This prototype keeps your information on this device. When we connect the production backend, submissions will flow directly into your CRM.</p><button class="button" type="button" data-finish>Close</button>'; document.querySelector('[data-finish]').onclick=()=>modal.close();});
