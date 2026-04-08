const STORAGE_KEY = "company_admin_web_app_v1";
const SEED_DATA = {"dailyWorks": [{"serial": 1, "workType": "اعمال كهرباء ", "party": "وهب ", "amount": 50000.0}, {"serial": 2, "workType": "اعمال كهرباء ", "party": "المدرسة ", "amount": 200000.0}, {"serial": 3, "workType": "اعمال نعله ", "party": "الحكم ", "amount": 100000.0}, {"serial": 4, "workType": "اعمال صبغ ", "party": "ليث ", "amount": 100000.0}, {"serial": 5, "workType": "اعمال ارضيات ", "party": "ليث ", "amount": 20000.0}, {"serial": 6, "workType": "اعمال تعديل السبيس ", "party": "صمود ", "amount": 0.0}, {"serial": 7, "workType": "", "party": "", "amount": 30000.0}, {"serial": 8, "workType": "", "party": "", "amount": 300000.0}, {"serial": 9, "workType": "اعمال الأبواب ", "party": "الحكم ", "amount": 500000.0}, {"serial": 10, "workType": "اعمال البياض ", "party": "مزهر ", "amount": 0}, {"serial": 11, "workType": "اعمال البياض ", "party": "مصظفى ", "amount": 0}, {"serial": 12, "workType": "اعمال بناء ", "party": "عمار ", "amount": 0}, {"serial": 13, "workType": "اعمال حماية ", "party": "عمار ", "amount": 100000.0}, {"serial": 14, "workType": "مشروع جديد ", "party": "م مصطفى ", "amount": 50000.0}, {"serial": 15, "workType": "حديد / عادل ", "party": "فائز ", "amount": 0}, {"serial": 16, "workType": "", "party": "", "amount": 1450000.0}, {"serial": 17, "workType": "", "party": "", "amount": 0}], "attendance": [{"serial": 1, "name": "كاظم صاحب ", "wage": 20000.0}, {"serial": 2, "name": "محسن صاحب ", "wage": 20000.0}, {"serial": 3, "name": "انعام محمد ", "wage": 17000.0}, {"serial": 4, "name": "احمد محسن ", "wage": 25000.0}, {"serial": 5, "name": "فاطمه هيثم ", "wage": 0}, {"serial": 6, "name": "مصطفى محمد ", "wage": 20000.0}, {"serial": 7, "name": "غانم خنفير ", "wage": 20000.0}, {"serial": 8, "name": "عباس علي ", "wage": 0}, {"serial": 9, "name": "سليم ثامر ", "wage": 25000.0}, {"serial": 10, "name": "وليد  ", "wage": 25000.0}, {"serial": 11, "name": "اديب اليمني ", "wage": 33000.0}, {"serial": 12, "name": "فرغلي المصري ", "wage": 33000.0}, {"serial": 13, "name": "مظهر المصري ", "wage": 40000.0}, {"serial": 14, "name": "علي المصري ", "wage": 30000.0}, {"serial": 15, "name": "علي الصباغ ", "wage": 33000.0}, {"serial": 16, "name": "احمد الصباغ العامل ", "wage": 30000.0}, {"serial": 17, "name": "محمد العامل المصري ", "wage": 30000.0}, {"serial": 18, "name": "أبو عبد الله الطباخ ", "wage": 20000.0}, {"serial": 19, "name": "سجاد حبيب ", "wage": 17000.0}, {"serial": 20, "name": "محمود الأحمد ", "wage": 13000.0}], "fixedExpenses": [{"title": "فوائد السيارات ", "amount": 500000.0}, {"title": "ايجارات مكتب ", "amount": 50000.0}, {"title": "مجموع الرواتب ", "amount": 451000.0}, {"title": "أخرى ", "amount": 0.0}], "workshopCatalog": [{"title": "ورشة اللبخ ", "detail": "بيت كاظم "}, {"title": "اعمال ورشة الكهرباء  ", "detail": "وهب / المدرسه "}, {"title": "اعمال ورشة الارضيات ", "detail": "الحكم"}, {"title": "اعمال ورشة الصبغ ", "detail": "ليث "}, {"title": "اعمال ورشة النقل ", "detail": "متعدده "}, {"title": "اعمال ورشة النجاره والحداده ", "detail": ""}, {"title": "اعمال ورشة اللحام ", "detail": ""}, {"title": "اعمال ورشة السباكة ", "detail": ""}, {"title": "اعمال ورشة المظعم ", "detail": "متعدده "}, {"title": "المضاف / شراء حديد ", "detail": "وهب "}, {"title": " أرباح المخزن  ", "detail": ""}, {"title": "أجور الرش", "detail": ""}, {"title": "الأجور الهندسيه ", "detail": "ليث "}, {"title": "أجور المقاولات ", "detail": ""}, {"title": "عدد يدويه ايجارات ", "detail": ""}, {"title": "أخرى ", "detail": ""}, {"title": "مضاف اخر / اللبخ ", "detail": "الحكم "}, {"title": "مضاف اخر / اعمال النعله   ", "detail": "الحكم "}, {"title": "أجور هندسيه أخرى ", "detail": ""}, {"title": "ديون ميته ", "detail": ""}], "projects": [{"serial": 1, "name": "مشروع مدرسة الخليل ", "detailsRef": ""}, {"serial": 2, "name": "مشروع مدرسة الحجيل  ", "detailsRef": "تفاصيل الاعمال المطلوبه "}, {"serial": 3, "name": "مشروع التسفيرات ", "detailsRef": 1}, {"serial": 4, "name": "مشروع الطب العدلي ", "detailsRef": ""}, {"serial": 5, "name": "بيت مرسال", "detailsRef": 2}, {"serial": 6, "name": "بيت د مرتضى ", "detailsRef": ""}, {"serial": 7, "name": "بناية ليث ", "detailsRef": 3}, {"serial": 8, "name": "بناية فائز ", "detailsRef": ""}, {"serial": 9, "name": "بيت م محمد ", "detailsRef": 4}, {"serial": 10, "name": "بيت حسين علوان 1", "detailsRef": ""}, {"serial": 11, "name": "بيت حسين علوان 2 ", "detailsRef": 5}, {"serial": 12, "name": "بيت وهب ", "detailsRef": ""}, {"serial": 13, "name": "بيت عمار ناصر ", "detailsRef": 6}, {"serial": 14, "name": "بناية مدرسة المستقبل ", "detailsRef": ""}, {"serial": 15, "name": "بيت سيد علي ", "detailsRef": 7}, {"serial": 16, "name": "بيت حجي مزهر ", "detailsRef": ""}, {"serial": 17, "name": "ورشة اللحام ", "detailsRef": 8}, {"serial": 18, "name": "ورشة الصبغ ", "detailsRef": ""}, {"serial": 19, "name": "ورشة المخزن", "detailsRef": 9}, {"serial": 20, "name": "ورشة النقل ", "detailsRef": ""}, {"serial": 21, "name": "ورشة الكهرباء ", "detailsRef": 10}, {"serial": 22, "name": "ورشة السباكة ", "detailsRef": ""}, {"serial": 23, "name": "ورشة المطعم ", "detailsRef": 11}, {"serial": 24, "name": "ورشة النجاره ", "detailsRef": ""}, {"serial": 25, "name": "ورشة الكهرباء ", "detailsRef": 12}, {"serial": 26, "name": "بيت م مصطفى خالد ", "detailsRef": ""}, {"serial": 27, "name": "بيت م مصطفى تسفيرات ", "detailsRef": ""}, {"serial": 28, "name": "بيت خالد الكرامه ", "detailsRef": ""}, {"serial": 29, "name": "بيت راجح الكرامه ", "detailsRef": ""}], "measureLabels": ["الأرضية", "اللبخ", "البورسلين", "اللنتل", "الأبواب", "الشبابيك"]};

const defaultState = {
  projects: SEED_DATA.projects.map((item, index) => ({
    id: crypto.randomUUID(),
    serial: index + 1,
    name: (item.name || "").trim(),
    type: item.name && item.name.includes("ورشة") ? "ورشة" : "مشروع",
    balance: 0,
    status: "فعال",
    notes: item.detailsRef ? "مرجع الفقرة: " + item.detailsRef : ""
  })),
  dailyWorks: SEED_DATA.dailyWorks.map((item, index) => ({
    id: crypto.randomUUID(),
    serial: index + 1,
    date: today(),
    workType: (item.workType || "").trim(),
    party: (item.party || "").trim(),
    project: "",
    amount: Number(item.amount || 0),
    details: ""
  })),
  attendance: SEED_DATA.attendance.map((item, index) => ({
    id: crypto.randomUUID(),
    serial: index + 1,
    date: today(),
    name: (item.name || "").trim(),
    role: "",
    wage: Number(item.wage || 0),
    notes: ""
  })),
  finance: [
    ...SEED_DATA.fixedExpenses.map((item, index) => ({
      id: crypto.randomUUID(),
      serial: index + 1,
      date: today(),
      kind: item.title && item.title.includes("رواتب") ? "راتب" : "ثابت",
      title: (item.title || "").trim(),
      amount: Number(item.amount || 0),
      notes: ""
    })),
    ...SEED_DATA.dailyWorks.filter(item => Number(item.amount || 0) > 0).map((item, idx) => ({
      id: crypto.randomUUID(),
      serial: SEED_DATA.fixedExpenses.length + idx + 1,
      date: today(),
      kind: "وارد",
      title: (item.workType || "وارد يومي").trim() || "وارد يومي",
      amount: Number(item.amount || 0),
      notes: (item.party || "").trim()
    }))
  ],
  materials: [],
  site: [],
  workshops: SEED_DATA.workshopCatalog.map((item, index) => ({
    id: crypto.randomUUID(),
    serial: index + 1,
    name: (item.title || "").trim() || "ورشة",
    date: today(),
    kind: "أعمال اليوم",
    amount: 0,
    details: (item.detail || "").trim()
  })),
  measurements: [],
};

let state = loadState();

function today() {
  return new Date().toISOString().split("T")[0];
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch (error) {
    console.warn("تعذر تحميل البيانات", error);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
  return structuredClone(defaultState);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatNumber(value) {
  return new Intl.NumberFormat("ar-IQ").format(Number(value || 0));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSelectOptions() {
  const projectOptions = `<option value="">بدون تحديد</option>` + state.projects.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}</option>`).join("");
  document.querySelectorAll('select[name="project"]').forEach(select => {
    const current = select.value;
    select.innerHTML = projectOptions;
    if ([...select.options].some(o => o.value === current)) select.value = current;
  });
}

function tableActionButtons(id, key) {
  return `
    <button class="action-btn danger" onclick="removeItem('${id}','${key}')">
      <i class="fa-solid fa-trash"></i>
    </button>
  `;
}

function renderProjects() {
  const search = document.getElementById("projectSearch").value.trim();
  const rows = state.projects
    .filter(item => !search || item.name.includes(search) || item.type.includes(search) || item.status.includes(search))
    .map((item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(item.name)}</td>
        <td>${escapeHtml(item.type)}</td>
        <td>${formatNumber(item.balance)}</td>
        <td>${escapeHtml(item.status)}</td>
        <td>${tableActionButtons(item.id, "projects")}</td>
      </tr>
    `).join("");
  document.getElementById("projectsBody").innerHTML = rows || emptyRow(6);
}

function renderDailyWorks() {
  const rows = state.dailyWorks.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.date || "")}</td>
      <td>${escapeHtml(item.workType)}</td>
      <td>${escapeHtml(item.party || "")}</td>
      <td>${escapeHtml(item.project || "")}</td>
      <td>${formatNumber(item.amount)}</td>
      <td>${tableActionButtons(item.id, "dailyWorks")}</td>
    </tr>
  `).join("");
  document.getElementById("dailyWorksBody").innerHTML = rows || emptyRow(7);

  const latest = [...state.dailyWorks].slice(-6).reverse().map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.workType)}</td>
      <td>${escapeHtml(item.party || item.project || "")}</td>
      <td>${formatNumber(item.amount)}</td>
    </tr>
  `).join("");
  document.getElementById("latestWorksBody").innerHTML = latest || emptyRow(4);
}

function renderAttendance() {
  const rows = state.attendance.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.date || "")}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.role || "")}</td>
      <td>${formatNumber(item.wage)}</td>
      <td>${tableActionButtons(item.id, "attendance")}</td>
    </tr>
  `).join("");
  document.getElementById("attendanceBody").innerHTML = rows || emptyRow(6);
}

function renderFinance() {
  const rows = state.finance.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.date || "")}</td>
      <td>${escapeHtml(item.kind)}</td>
      <td>${escapeHtml(item.title)}</td>
      <td>${formatNumber(item.amount)}</td>
      <td>${tableActionButtons(item.id, "finance")}</td>
    </tr>
  `).join("");
  document.getElementById("financeBody").innerHTML = rows || emptyRow(6);
}

function renderMaterials() {
  const rows = state.materials.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.status)}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.qty || "")}</td>
      <td>${escapeHtml(item.project || "")}</td>
      <td>${escapeHtml(item.priority || "")}</td>
      <td>${tableActionButtons(item.id, "materials")}</td>
    </tr>
  `).join("");
  document.getElementById("materialsBody").innerHTML = rows || emptyRow(7);
}

function renderSite() {
  const rows = state.site.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.project || "")}</td>
      <td>${escapeHtml(item.category)}</td>
      <td>${escapeHtml(item.assignedTo || "")}</td>
      <td>${escapeHtml(item.dueDate || "")}</td>
      <td>${escapeHtml(item.details)}</td>
      <td>${tableActionButtons(item.id, "site")}</td>
    </tr>
  `).join("");
  document.getElementById("siteBody").innerHTML = rows || emptyRow(7);
}

function renderWorkshops() {
  const rows = state.workshops.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.kind)}</td>
      <td>${escapeHtml(item.date || "")}</td>
      <td>${formatNumber(item.amount)}</td>
      <td>${escapeHtml(item.details)}</td>
      <td>${tableActionButtons(item.id, "workshops")}</td>
    </tr>
  `).join("");
  document.getElementById("workshopsBody").innerHTML = rows || emptyRow(7);
}

function renderMeasurements() {
  const rows = state.measurements.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.project || "")}</td>
      <td>${escapeHtml(item.location || "")}</td>
      <td>${escapeHtml(item.length || "")}</td>
      <td>${escapeHtml(item.width || "")}</td>
      <td>${escapeHtml(item.area || "")}</td>
      <td>${escapeHtml(item.workTypes || "")}</td>
      <td>${tableActionButtons(item.id, "measurements")}</td>
    </tr>
  `).join("");
  document.getElementById("measurementsBody").innerHTML = rows || emptyRow(8);
}

function renderDashboard() {
  const income = state.finance.filter(i => i.kind === "وارد").reduce((a,b) => a + Number(b.amount || 0), 0);
  const wages = state.attendance.reduce((a,b) => a + Number(b.wage || 0), 0) + state.finance.filter(i => i.kind === "راتب").reduce((a,b) => a + Number(b.amount || 0), 0);
  const expenses = state.finance.filter(i => i.kind === "مصروف" || i.kind === "ثابت").reduce((a,b) => a + Number(b.amount || 0), 0);
  const balance = income - (expenses + wages);

  document.getElementById("kpiProjects").textContent = formatNumber(state.projects.length);
  document.getElementById("kpiDailyWorks").textContent = formatNumber(state.dailyWorks.length);
  document.getElementById("kpiAttendance").textContent = formatNumber(state.attendance.length);
  document.getElementById("kpiNeededMaterials").textContent = formatNumber(state.materials.filter(i => i.status !== "تم تجهيزها").length);

  document.getElementById("sumIncome").textContent = formatNumber(income);
  document.getElementById("sumWages").textContent = formatNumber(wages);
  document.getElementById("sumExpenses").textContent = formatNumber(expenses);
  document.getElementById("sumBalance").textContent = formatNumber(balance);

  document.getElementById("reportProjects").innerHTML = reportLines([
    ["عدد المشاريع والمواقع", state.projects.length],
    ["المشاريع الفعالة", state.projects.filter(i => i.status === "فعال").length],
    ["المتوقفة", state.projects.filter(i => i.status === "متوقف").length],
    ["المكتملة", state.projects.filter(i => i.status === "مكتمل").length],
  ]);

  document.getElementById("reportDaily").innerHTML = reportLines([
    ["عدد الأعمال اليومية", state.dailyWorks.length],
    ["آخر تاريخ إدخال", state.dailyWorks.at(-1)?.date || "-"],
    ["أعمال مرتبطة بمشاريع", state.dailyWorks.filter(i => i.project).length],
    ["إجمالي مبالغ الأعمال", formatNumber(state.dailyWorks.reduce((a,b) => a + Number(b.amount || 0), 0))]
  ]);

  document.getElementById("reportFinance").innerHTML = reportLines([
    ["إجمالي الواردات", formatNumber(income)],
    ["إجمالي الأجور", formatNumber(wages)],
    ["إجمالي المصروفات", formatNumber(expenses)],
    ["الرصيد التقديري", formatNumber(balance)]
  ]);

  document.getElementById("reportMaterials").innerHTML = reportLines([
    ["عدد المواد المسجلة", state.materials.length],
    ["تم تجهيزها", state.materials.filter(i => i.status === "تم تجهيزها").length],
    ["مطلوبة لاحقًا", state.materials.filter(i => i.status === "مطلوبة لاحقًا").length],
    ["مطلوبة عاجلًا", state.materials.filter(i => i.status === "مطلوبة عاجلًا").length]
  ]);
}

function reportLines(items) {
  return items.map(([label, value]) => `<div class="line"><span>${escapeHtml(String(label))}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("");
}

function emptyRow(colspan) {
  return `<tr><td colspan="${colspan}" class="empty-cell">لا توجد بيانات حالياً</td></tr>`;
}

function removeItem(id, key) {
  state[key] = state[key].filter(item => item.id !== id);
  resequence(key);
  saveState();
  renderAll();
}

function resequence(key) {
  state[key] = state[key].map((item, index) => ({ ...item, serial: index + 1 }));
}

window.removeItem = removeItem;

function setupForms() {
  bindForm("projectForm", "projects", data => ({
    id: crypto.randomUUID(),
    serial: state.projects.length + 1,
    name: data.name?.trim(),
    type: data.type,
    balance: Number(data.balance || 0),
    status: data.status,
    notes: data.notes?.trim() || ""
  }));

  bindForm("dailyWorkForm", "dailyWorks", data => ({
    id: crypto.randomUUID(),
    serial: state.dailyWorks.length + 1,
    date: data.date || today(),
    workType: data.workType?.trim(),
    party: data.party?.trim() || "",
    project: data.project || "",
    amount: Number(data.amount || 0),
    details: data.details?.trim() || ""
  }), () => {
    document.querySelector('#dailyWorkForm input[name="date"]').value = today();
  });

  bindForm("attendanceForm", "attendance", data => ({
    id: crypto.randomUUID(),
    serial: state.attendance.length + 1,
    date: data.date || today(),
    name: data.name?.trim(),
    role: data.role?.trim() || "",
    wage: Number(data.wage || 0),
    notes: data.notes?.trim() || ""
  }), () => {
    document.querySelector('#attendanceForm input[name="date"]').value = today();
  });

  bindForm("financeForm", "finance", data => ({
    id: crypto.randomUUID(),
    serial: state.finance.length + 1,
    date: data.date || today(),
    kind: data.kind,
    title: data.title?.trim(),
    amount: Number(data.amount || 0),
    notes: data.notes?.trim() || ""
  }), () => {
    document.querySelector('#financeForm input[name="date"]').value = today();
  });

  bindForm("materialsForm", "materials", data => ({
    id: crypto.randomUUID(),
    serial: state.materials.length + 1,
    status: data.status,
    name: data.name?.trim(),
    qty: data.qty?.trim() || "",
    project: data.project || "",
    priority: data.priority,
    notes: data.notes?.trim() || ""
  }));

  bindForm("siteForm", "site", data => ({
    id: crypto.randomUUID(),
    serial: state.site.length + 1,
    project: data.project || "",
    category: data.category,
    assignedTo: data.assignedTo?.trim() || "",
    dueDate: data.dueDate || "",
    details: data.details?.trim()
  }));

  bindForm("workshopForm", "workshops", data => ({
    id: crypto.randomUUID(),
    serial: state.workshops.length + 1,
    name: data.name?.trim(),
    date: data.date || today(),
    kind: data.kind,
    amount: Number(data.amount || 0),
    details: data.details?.trim()
  }), () => {
    document.querySelector('#workshopForm input[name="date"]').value = today();
  });

  bindForm("measurementForm", "measurements", data => ({
    id: crypto.randomUUID(),
    serial: state.measurements.length + 1,
    project: data.project || "",
    location: data.location?.trim() || "",
    length: data.length || "",
    width: data.width || "",
    height: data.height || "",
    perimeter: data.perimeter || "",
    area: data.area || "",
    workTypes: data.workTypes?.trim() || "",
    notes: data.notes?.trim() || ""
  }));
}

function bindForm(formId, key, mapper, afterSubmit) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const item = mapper(data);
    state[key].push(item);
    saveState();
    form.reset();
    if (afterSubmit) afterSubmit();
    renderAll();
  });
}

function setupNav() {
  const maintenanceTabs = ["materials", "finance", "attendance", "workshops", "report"];
  const toast = document.getElementById("maintenanceToast");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      
      if (maintenanceTabs.includes(tab)) {
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 3000);
        }
        return;
      }

      document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".tab-page").forEach(page => page.classList.toggle("active", page.id === `tab-${tab}`));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function setupSearch() {
  document.getElementById("projectSearch").addEventListener("input", renderProjects);
}

function setupDataTransfer() {
  document.getElementById("exportDataBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "بيانات-نظام-الشركة.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("importFile").addEventListener("change", async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const imported = JSON.parse(text);
      state = imported;
      saveState();
      renderAll();
      alert("تم استيراد البيانات بنجاح");
    } catch (error) {
      alert("تعذر استيراد الملف");
      console.error(error);
    }
    event.target.value = "";
  });

  document.getElementById("printBtn").addEventListener("click", () => window.print());
}

function initDefaults() {
  document.querySelectorAll('input[type="date"]').forEach(input => input.value = today());
}

function renderAll() {
  renderSelectOptions();
  renderProjects();
  renderDailyWorks();
  renderAttendance();
  renderFinance();
  renderMaterials();
  renderSite();
  renderWorkshops();
  renderMeasurements();
  renderDashboard();
}

setupNav();
setupForms();
setupSearch();
setupDataTransfer();
initDefaults();
renderAll();
