/* TERRIVA - interacciones del sitio estático. No recopila ni transmite datos automáticamente. */
(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const config = window.TERRIVA_CONFIG || {};
  const allProperties = Array.isArray(window.TERRIVA_PROPERTIES) ? window.TERRIVA_PROPERTIES : [];
  const properties = allProperties.filter(p => !p.demo || config.mostrarDemostracion);
  const labels = { disponible: "Disponible", revision: "En revisión", reservada: "Reservada", vendida: "Vendida", demo: "Demostración" };
  const placeholders = ["assets/demo-exterior.svg"];
  const allowedPhoto = (source) => typeof source === "string" && (/^assets\/[\w./-]+\.(png|jpg|jpeg|webp|svg)$/i.test(source) || /^https:\/\/[\w.-]+\/[\w/%?=&+.,-]+$/i.test(source));
  const photosFor = p => Array.isArray(p.fotos) && p.fotos.filter(allowedPhoto).length ? p.fotos.filter(allowedPhoto) : placeholders;
  const esc = value => String(value ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const money = p => p.precio != null && Number.isFinite(Number(p.precio)) ? new Intl.NumberFormat("es-CR", {style:"currency",currency:p.moneda || "CRC",maximumFractionDigits:0}).format(Number(p.precio)) : "Precio por definir";
  const textOrEmpty = (n,suffix) => n != null && n !== "" ? `${esc(n)} ${suffix}` : "";

  $("#currentYear").textContent = new Date().getFullYear();
  const menu = $("#mainNav"), toggle = $("#menuToggle");
  toggle.addEventListener("click", () => { const opened = menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(opened)); toggle.setAttribute("aria-label",opened ? "Cerrar menú" : "Abrir menú"); });
  $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Abrir menú"); }));

  const provinceFilter = $("#provinceFilter"), statusFilter = $("#statusFilter"), searchInput = $("#searchInput"), sortFilter = $("#sortFilter"), grid = $("#propertyGrid"), empty = $("#emptyState");
  [...new Set(properties.map(p=>p.provincia).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es")).forEach(value => { const option=document.createElement("option");option.value=value;option.textContent=value;provinceFilter.append(option); });

  function renderCard(p) {
    const image = photosFor(p)[0], demo = Boolean(p.demo);
    const details = [textOrEmpty(p.terreno,"m² terreno"),textOrEmpty(p.habitaciones,"hab.")].filter(Boolean).join(" · ");
    return `<article class="property-card">
      <div class="property-image"><img src="${esc(image)}" alt="${demo?'Imagen ilustrativa, no corresponde a un inmueble real':`Fotografía de ${esc(p.titulo)}`} " loading="lazy" decoding="async"><span class="property-tag">${esc(labels[p.estado] || 'Información')}</span></div>
      <div class="property-body"><div class="property-location">${esc(p.ubicacion || p.provincia || 'Ubicación pendiente')}</div>
      <h3>${esc(p.titulo || "Propiedad")}</h3><p>${esc(p.tipo || 'Inmueble residencial')}</p><div class="property-price ${p.precio == null?'is-pending':''}">${esc(money(p))}</div>
      ${details ? `<div class="property-meta">${details}</div>` : ''}
      <button class="property-action" type="button" data-open-property="${esc(p.id)}">${demo?'Ver ficha de ejemplo':'Ver información'} <span aria-hidden="true">↗</span></button></div>
    </article>`;
  }
  function render() {
    const needle = searchInput.value.trim().toLocaleLowerCase("es"), province = provinceFilter.value, status = statusFilter.value;
    let filtered = properties.filter(p => (!province || p.provincia === province) && (!status || p.estado === status) && (!needle || [p.titulo,p.provincia,p.ubicacion,p.tipo,p.referencia].join(' ').toLocaleLowerCase('es').includes(needle)));
    if (sortFilter.value === "price-asc") filtered.sort((a,b) => (a.precio ?? Infinity) - (b.precio ?? Infinity));
    else if (sortFilter.value === "price-desc") filtered.sort((a,b) => (b.precio ?? -Infinity) - (a.precio ?? -Infinity));
    else filtered.sort((a,b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));
    grid.innerHTML = filtered.map(renderCard).join("");
    empty.hidden = filtered.length > 0;
    $("#resultsCount").textContent = `${filtered.length} ${filtered.length === 1 ? 'ficha' : 'fichas'} en el catálogo`;
    const noReal = !properties.some(p=>!p.demo);
    $("#emptyTitle").textContent = noReal && !needle && !province && !status ? "Estamos preparando nuestro portafolio." : "No encontramos coincidencias.";
    $("#emptyText").textContent = noReal && !needle && !province && !status ? "Publicaremos propiedades solo cuando sus características y disponibilidad estén verificadas." : "Prueba con otros filtros o consulta por próximas oportunidades.";
    $(".catalog-disclaimer").hidden = !properties.some(p=>p.demo);
  }
  [provinceFilter,statusFilter,sortFilter].forEach(el => el.addEventListener("change",render));
  searchInput.addEventListener("input",render);
  $("#clearFilters").addEventListener("click", () => {searchInput.value="";provinceFilter.value="";statusFilter.value="";sortFilter.value="recent";render();searchInput.focus();});

  const modal = $("#propertyDialog"), modalContents = $("#modalContents");
  function setGalleryImage(images,index) {
    const main = $("#mainGalleryImage",modal);
    if(!main) return;
    main.src=images[index];
    main.alt=`${modal.dataset.demo==='1'?'Ilustración de ejemplo':'Imagen de la propiedad'} ${index+1} de ${images.length}`;
    $$(".gallery-thumb",modal).forEach((b,i)=>b.setAttribute("aria-pressed",String(index===i)));
  }
  function openProperty(p) {
    const images = photosFor(p), demo = !!p.demo;
    const facts = [["Terreno",p.terreno,"m²"],["Construcción",p.construccion,"m²"],["Habitaciones",p.habitaciones,""],["Baños",p.banos,""]].filter(x=>x[1]!=null && x[1]!=="");
    modal.dataset.demo = demo?'1':'0';
    modalContents.innerHTML = `<div class="dialog-media"><img id="mainGalleryImage" src="${esc(images[0])}" alt="${demo?'Ilustración de ejemplo':'Fotografía de la propiedad'} 1 de ${images.length}"><div class="gallery-controls">${images.map((src,i)=>`<button class="gallery-thumb" type="button" data-gallery-index="${i}" aria-pressed="${i===0}" aria-label="Ver imagen ${i+1}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join('')}</div></div>
      <div class="dialog-main"><span class="property-location">${esc(labels[p.estado]||'Propiedad')} · ${esc(p.ubicacion || p.provincia || 'Ubicación pendiente')}</span><h2 id="modalTitle">${esc(p.titulo)}</h2><p class="property-price">${esc(money(p))}</p><div class="dialog-facts">${facts.length?facts.map(([label,n,suffix])=>`<span><strong>${esc(label)}:</strong> ${esc(n)} ${suffix}</span>`).join(''):'Detalles técnicos por confirmar'}</div><p class="dialog-desc">${esc(p.descripcion || 'Solicita más información sobre esta propiedad.')}</p>${Array.isArray(p.caracteristicas)&&p.caracteristicas.length ? `<ul>${p.caracteristicas.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${demo?'<p class="modal-note">Esta ficha es una demostración del diseño. No corresponde a un inmueble anunciado.</p>':'<p class="modal-note">Información sujeta a confirmación de disponibilidad, documentación y condiciones particulares.</p>'}<a class="button button-dark" href="#contacto" id="modalContact">${demo?'Consultar por futuras propiedades':'Solicitar información'} <span aria-hidden="true">↗</span></a></div>`;
    modal.showModal();document.body.classList.add("dialog-open");
    $$(".gallery-thumb",modal).forEach(btn=>btn.addEventListener('click',()=>setGalleryImage(images,Number(btn.dataset.galleryIndex))));
    $("#modalContact",modal).addEventListener('click',()=> {modal.close();document.body.classList.remove('dialog-open');$("#interestSelect").value='comprar';});
  }
  grid.addEventListener('click', e=> {const btn=e.target.closest('[data-open-property]');if(!btn)return;const p=properties.find(x=>x.id===btn.dataset.openProperty);if(p)openProperty(p);});
  $("#modalClose").addEventListener("click",()=>modal.close());
  modal.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});

  const legal=$("#legalDialog");$("#legalOpen").addEventListener("click",()=>legal.showModal());$("#legalClose").addEventListener("click",()=>legal.close());legal.addEventListener('click',e=>{if(e.target===legal)legal.close();});
  $$("[data-interest]").forEach(el=>el.addEventListener('click',()=>{$("#interestSelect").value=el.dataset.interest;}));
  const form = $("#contactForm");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const feedback=$("#formFeedback"), name=form.elements.name.value.trim(), email=form.elements.email.value.trim(), interest=form.elements.interest.value, message=form.elements.message.value.trim();
    if (!name || !email || !interest || !message || !form.elements.email.checkValidity()) { feedback.textContent='Completa los campos y escribe un correo electrónico válido.';return; }
    const subject='Consulta TERRIVA — '+({comprar:'Compra',vender:'Venta',inversion:'Inversión',otro:'General'}[interest]||'General');
    const body=`Nombre: ${name}\nCorreo: ${email}\nInterés: ${interest}\n\nMensaje:\n${message}`;
    const destination = String(config.contactEmail || "").trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(destination)) {
      feedback.textContent='Se abrirá tu aplicación de correo. Verifica el mensaje y envíalo desde allí; esta web no lo envía automáticamente.';
      window.location.href=`mailto:${encodeURIComponent(destination)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      const prepared=`${subject}\n\n${body}`;
      try { await navigator.clipboard.writeText(prepared);feedback.textContent='Consulta copiada al portapapeles. El propietario del sitio debe configurar un correo de contacto para activar el envío.'; }
      catch { feedback.textContent='El correo de contacto todavía no está configurado. Copia tu mensaje antes de salir y vuelve a consultar cuando esté habilitado.'; }
    }
  });
  render();
})();
