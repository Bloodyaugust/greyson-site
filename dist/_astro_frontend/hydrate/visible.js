async function n(n,e){var o,t;const r=document.querySelectorAll(`astro-root[uid="${n}"]`),c=null!=(t=null==(o=r[0].querySelector("astro-fragment"))?void 0:o.innerHTML)?t:null,l=new IntersectionObserver((([n])=>{n.isIntersecting&&(l.disconnect(),(async()=>{const n=await e();for(const e of r)n(e,c)})())}));for(const n of r)for(let e=0;e<n.children.length;e++){const o=n.children[e];l.observe(o)}}export default n;