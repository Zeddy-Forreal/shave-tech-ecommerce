/* header scroll */
window.addEventListener('scroll',()=>{
  document.getElementById('mainHeader').classList.toggle('scrolled',scrollY>40);
});
 
/* reveal */
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 
/* chips */
document.querySelectorAll('.chip').forEach(c=>{
  c.addEventListener('click',()=>{
    document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
  });
});
 
/* year */
document.getElementById('year').textContent = new Date().getFullYear();