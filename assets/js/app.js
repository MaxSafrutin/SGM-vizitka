(() => {
  const ICONS = {
    search: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m20 20-3.5-3.5"></path>
      </svg>
    `,
    building: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 21h18"></path>
        <path d="M5 21V7l7-4 7 4v14"></path>
        <path d="M9 9h.01"></path>
        <path d="M15 9h.01"></path>
        <path d="M9 13h.01"></path>
        <path d="M15 13h.01"></path>
        <path d="M10 21v-4h4v4"></path>
      </svg>
    `,
    file: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M9 15h6"></path>
        <path d="M9 11h2"></path>
      </svg>
    `,
    filePdf: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M7 16h1.6a1.4 1.4 0 0 0 0-2.8H7v4.8"></path>
        <path d="M12 13.2V18h1.1a2.4 2.4 0 0 0 0-4.8H12Z"></path>
        <path d="M17 18v-4.8h3"></path>
        <path d="M17 15.4h2.4"></path>
      </svg>
    `,
    download: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12"></path>
        <path d="m7 10 5 5 5-5"></path>
        <path d="M5 21h14"></path>
      </svg>
    `,
    presentation: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 5h16v10H4z"></path>
        <path d="M12 15v4"></path>
        <path d="M9 19h6"></path>
        <path d="M8 9h8"></path>
      </svg>
    `,
    image: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
        <circle cx="9" cy="10" r="1.5"></circle>
        <path d="m21 16-5-5-4 4-2-2-5 5"></path>
      </svg>
    `,
    link: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10 14a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 14"></path>
        <path d="M14 10a5 5 0 0 1 0 7L12.5 18.5a5 5 0 0 1-7-7L7 10"></path>
      </svg>
    `,
    plusUser: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M15 19a6 6 0 0 0-12 0"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M19 8v6"></path>
        <path d="M16 11h6"></path>
      </svg>
    `,
    share: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12"></path>
        <path d="m7 8 5-5 5 5"></path>
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
      </svg>
    `,
    alert: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10.29 3.86 2.93 16.6A2 2 0 0 0 4.66 19h14.68a2 2 0 0 0 1.73-2.4L13.71 3.86a2 2 0 0 0-3.42 0Z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
    `
  };

  const DATA = window.SGM_MANAGERS || {};
  const CONFIG = window.SGM_CONFIG || {};
  const MANAGERS = DATA.managers || {};
  const MANAGER_ORDER = Array.isArray(DATA.order) ? DATA.order : Object.keys(MANAGERS);
  const DEFAULT_SLUG = DATA.defaultSlug || Object.keys(MANAGERS)[0] || "";
  const COMPANY = {
    name: 'ООО "СГМ АВТО ГРУПП"',
    inn: "6312208990",
    site: "https://sgmautogroup.ru/",
    ...DATA.company
  };
  const HOTLINE_METHOD = {
    label: "Горячая линия",
    value: "8 (800) 222-00-32",
    href: "tel:88002220032",
    actions: [
      { label: "Позвонить", href: "tel:88002220032", iconAsset: "site/phone-logo.svg" }
    ]
  };
  const REVENUE_BASE_YEAR = 2026;
  const REVENUE_BASE_VALUE = 6.5;

  const HOME_VIEWS = {
    verify: {
      title: "Выберите удобный источник",
      note: "Обязательно проверьте своего контрагента",
      noteStyle: "caption",
      actions: [
        {
          label: "Проверить компанию",
          view: "publicSource",
          icon: "search"
        },
        {
          label: "Презентация о компании",
          view: "companyPresentationPdf",
          icon: "presentation"
        },
        {
          label: "Карта партнёра и другие документы",
          view: "documents",
          icon: "file",
          breakBefore: true
        },
        {
          label: "Наши работы",
          view: "projects",
          icon: "image"
        },
        {
          label: "Наши каналы",
          view: "social",
          icon: "link",
          breakBefore: true
        }
      ]
    },
    publicSource: {
      title: "Выберите удобный публичный источник",
      actions: [
        {
          label: "Руспрофайл",
          href: "https://www.rusprofile.ru/id/1216300039339",
          external: true,
          icon: "building"
        },
        {
          label: "Чекко",
          href: "https://checko.ru/company/sgm-avto-grupp-1216300039339",
          external: true,
          icon: "search"
        }
      ]
    },
    companyPresentationPdf: {
      title: "Презентация о компании",
      actions: [
        {
          label: "Интерактивная",
          view: "interactiveInDevelopment",
          icon: "presentation",
          accent: true
        },
        {
          label: "Традиционная",
          asset: "downloads/Prezentatciia SGM Avto Grupp.pdf",
          downloadAsset: "downloads/Prezentatciia SGM Avto Grupp.pdf",
          external: true,
          icon: "filePdf",
          breakBefore: true
        }
      ]
    },
    interactiveInDevelopment: {
      title: "Интерактивная презентация",
      text: "Этот интерактивный раздел пока в разработке. PDF-материалы рядом остаются доступными для просмотра, скачивания и пересылки.",
      note: "Для быстрой проверки компании используйте публичные источники и документы из этого раздела.",
      noteIcon: "alert",
      noteAccent: true
    },
    documents: {
      title: "Документы",
      actions: [
        {
          label: "Типовой шаблон ДКП",
          asset: "downloads/DKP FORMA.pdf",
          external: true,
          icon: "filePdf"
        },
        {
          label: "Карта партнёра",
          asset: "downloads/Karta SGM Avto Group.pdf",
          external: true,
          icon: "filePdf"
        },
        {
          label: "Лист записи ЕГРЮЛ",
          asset: "downloads/Leest zapisi ot 28.05.2025 (gen.direktor Umov S.V.).pdf",
          external: true,
          icon: "filePdf"
        },
        {
          label: "Официальный представитель федеральной таможенной службы с рег. №1904",
          asset: "downloads/Pismo_o_vnesenii_v_reestr_tamozhennykh_predstavitelei.pdf",
          external: true,
          icon: "filePdf"
        }
      ]
    },
    projects: {
      title: "Наши работы",
      actions: [
        {
          label: "Что привезли",
          href: "https://disk.yandex.ru/d/f5Wamw0J5cX0GA",
          external: true,
          icon: "image"
        },
        {
          label: "Кому передали",
          href: "https://disk.yandex.ru/d/JTC7wdOgOFyNTA",
          external: true,
          icon: "image"
        }
      ]
    },
    social: {
      title: "Наши каналы",
      text: "Подписывайтесь на обновления: в каналах показываем новости, поставки и живые движения склада. Auto.ru и Avito — витрина автомобилей, сайт — главная точка входа.",
      actions: [
        {
          label: "MAX канал",
          href: "https://max.ru/id6312208990_biz",
          external: true,
          iconAsset: "site/logo_max.svg"
        },
        {
          label: "Telegram канал",
          href: "https://t.me/SGM_auto_group",
          external: true,
          iconAsset: "site/telegram-logo.svg"
        },
        {
          label: "Магазин на Auto.ru",
          href: "https://auto.ru/diler/cars/all/sgm_avto_grupp_samara/",
          external: true,
          iconAsset: "site/autoru.svg"
        },
        {
          label: "Магазин на Avito",
          href: "https://www.avito.ru/brands/sgm-auto-group-avtosalon-samara/all/avtomobili?sellerId=c8016100bea4127dda1cd276f3c0fb87",
          external: true,
          iconAsset: "site/avito.svg"
        },
        {
          label: "Канал Rutube",
          href: "https://rutube.ru/channel/38241441/",
          external: true,
          iconAsset: "site/rutube.svg"
        },
        {
          label: "Наш официальный сайт",
          href: COMPANY.site,
          external: true,
          iconAsset: "site/icon.svg",
          breakBefore: true
        }
      ]
    }
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderIcon(name) {
    return ICONS[name] || "";
  }

  function isAbsoluteUrl(value) {
    return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(String(value || "")) || /^(tel|mailto):/i.test(String(value || ""));
  }

  function cleanRelativePath(path) {
    return String(path || "").replace(/^\.?\//, "");
  }

  function joinPath(base, path) {
    const target = String(path || "");
    if (!target || isAbsoluteUrl(target) || target.startsWith("#")) return target;
    const cleanBase = String(base || "./").replace(/\/?$/, "/");
    return `${cleanBase}${cleanRelativePath(target)}`;
  }

  function normalizeHref(href) {
    return encodeURI(String(href || "#"));
  }

  function assetHref(path) {
    return normalizeHref(joinPath(CONFIG.assetBase || "./assets/", path));
  }

  function publicUrl(path = "") {
    const base = CONFIG.publicBase || new URL(CONFIG.siteBase || "./", window.location.href).href;
    return new URL(cleanRelativePath(path), base).href;
  }

  function managerPublicUrl(manager) {
    return publicUrl(`${manager.slug}/`);
  }

  function getSlugFromPath() {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    return pathParts.find((part) => MANAGERS[part]) || "";
  }

  function getStoredManagerSlug() {
    try {
      return sessionStorage.getItem("sgmManagerSlug");
    } catch {
      return "";
    }
  }

  function storeManagerSlug(slug) {
    try {
      sessionStorage.setItem("sgmManagerSlug", slug);
    } catch {
      /* Storage can be unavailable in strict privacy modes. */
    }
  }

  function getCurrentManager() {
    const params = new URLSearchParams(window.location.search);
    const candidates = [
      CONFIG.managerSlug,
      document.body?.dataset.managerSlug,
      params.get("m"),
      params.get("manager"),
      getSlugFromPath(),
      getStoredManagerSlug(),
      DEFAULT_SLUG
    ].filter(Boolean);

    const slug = candidates.find((item) => MANAGERS[item]) || DEFAULT_SLUG;
    const manager = MANAGERS[slug] || MANAGERS[DEFAULT_SLUG] || Object.values(MANAGERS)[0];
    if (manager?.slug) storeManagerSlug(manager.slug);
    return manager;
  }

  function formatPhoneForText(value) {
    return String(value || "");
  }

  function getRevenue() {
    const year = Math.max(REVENUE_BASE_YEAR, new Date().getFullYear());
    const value = REVENUE_BASE_VALUE + (year - REVENUE_BASE_YEAR);
    return {
      year,
      valueText: `>${String(value).replace(".", ",")} млрд ₽`
    };
  }

  function renderContactAction(action) {
    const icon = action.iconAsset
      ? `<img src="${assetHref(action.iconAsset)}" alt="" />`
      : renderIcon(action.icon || "link");

    return `
      <a class="contactQuick" href="${normalizeHref(action.href)}" ${action.external ? 'target="_blank" rel="noreferrer noopener"' : ""} aria-label="${escapeHtml(action.label)}" title="${escapeHtml(action.label)}" data-tooltip="${escapeHtml(action.label)}">
        ${icon}
      </a>
    `;
  }

  function renderContactMethod(method) {
    const actions = Array.isArray(method.actions) ? method.actions : [];

    return `
      <div class="contactMethod${method.primary ? " contactMethod--primary" : ""}">
        <div class="contactMethod__main">
          <a class="contactMethod__number" href="${normalizeHref(method.href)}">${escapeHtml(formatPhoneForText(method.value))}</a>
          <span class="contactMethod__label">${escapeHtml(method.label)}</span>
        </div>
        ${actions.length ? `<div class="contactMethod__actions">${actions.map(renderContactAction).join("")}</div>` : ""}
      </div>
    `;
  }

  function getContactMethods(manager) {
    const methods = Array.isArray(manager?.contacts) ? [...manager.contacts] : [];
    const hasHotline = methods.some((method) => String(method.href || "").replace(/\D/g, "") === "88002220032");
    if (!hasHotline) methods.push(HOTLINE_METHOD);
    return methods;
  }

  function getPrimaryContact(manager) {
    const methods = getContactMethods(manager);
    return methods.find((item) => item.primary) || methods.find((item) => /^tel:/i.test(item.href || "")) || methods[0] || null;
  }

  function getEmailContact(manager) {
    return getContactMethods(manager).find((item) => /^mailto:/i.test(item.href || ""));
  }

  function renderRevenueFact() {
    const revenue = getRevenue();
    return `
      <div class="fact contactRevenue" aria-label="Общая выручка компании">
        <span class="fact__label">Общая выручка к <span data-revenue-year>${revenue.year}</span> г.</span>
        <span class="fact__value" data-revenue-value>${escapeHtml(revenue.valueText)}</span>
      </div>
    `;
  }

  function renderContactSheet(manager) {
    const methods = getContactMethods(manager);
    const primaryMethods = methods.filter((item) => item.primary);
    const secondaryMethods = methods.filter((item) => !item.primary);
    const hasEmail = secondaryMethods.some((item) => /^mailto:/i.test(item.href || ""));
    const accordionTitle = hasEmail ? "Рабочая почта и ещё контакты" : "Ещё контакты";
    const role = manager.role || "Менеджер отдела продаж";

    return `
      <div class="card__body">
        <div class="contactSheet">
          <div class="contactHead">
            <div class="contactHero">
              <img class="contactAvatar" src="${assetHref(manager.avatar)}" alt="${escapeHtml(manager.fullName)}" />
              <div class="contactHero__content">
                <h1 class="contactName">${escapeHtml(manager.fullName)}</h1>
                <p class="contactRole">${escapeHtml(role)}</p>
                <a class="contactCompany contactCompanyLink" href="${escapeHtml(COMPANY.site)}" target="_blank" rel="noreferrer noopener">${escapeHtml(COMPANY.name)}</a>
              </div>
            </div>
            <a class="contactBrandLogo" href="${escapeHtml(COMPANY.site)}" target="_blank" rel="noreferrer noopener" aria-label="SGM Auto Group">
              <img src="${assetHref("site/logo.svg")}" alt="SGM Auto Group" />
            </a>
          </div>

          <div class="contactTopActions">
            <a class="modalAction modalAction--accent modalAction--no-shine" href="${assetHref(manager.vcard)}" download>
              <span class="modalAction__icon" aria-hidden="true">${renderIcon("plusUser")}</span>
              <span>Сохранить в контакты</span>
            </a>
            <button class="modalAction modalAction--shareAction" type="button" data-contact-share aria-label="Поделиться карточкой">
              <span class="modalAction__icon" aria-hidden="true">${renderIcon("share")}</span>
              <span>Поделиться</span>
            </button>
          </div>

          ${primaryMethods.map(renderContactMethod).join("")}

          ${secondaryMethods.length ? `
            <details class="contactAccordion">
              <summary>
                <span>${escapeHtml(accordionTitle)}</span>
                <span class="contactAccordion__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div class="contactAccordion__body">
                ${secondaryMethods.map(renderContactMethod).join("")}
              </div>
            </details>
          ` : ""}

          <div class="modalActions contactMaterials">
            <button class="modalAction modalAction--accent modalAction--presentation" type="button" data-open-materials>
              <span class="modalAction__icon" aria-hidden="true">${renderIcon("presentation")}</span>
              <span class="modalAction__text">
                <strong>Материалы о компании</strong>
              </span>
            </button>
          </div>

          ${renderRevenueFact()}
        </div>
      </div>
    `;
  }

  function actionHref(action) {
    if (action.asset) return assetHref(action.asset);
    return normalizeHref(action.href || "#");
  }

  function actionDownloadHref(action) {
    if (action.downloadAsset) return assetHref(action.downloadAsset);
    return action.downloadHref ? normalizeHref(action.downloadHref) : "";
  }

  function renderAction(action) {
    const actionClass = action.breakBefore ? "modalActionWrap modalActionWrap--spaced" : "modalActionWrap";
    const modifiers = `${action.accent ? " modalAction--accent" : ""}${action.presentation ? " modalAction--presentation" : ""}`;
    const icon = action.iconAsset
      ? `<span class="modalAction__icon modalAction__icon--image"><img src="${assetHref(action.iconAsset)}" alt="" /></span>`
      : action.icon
      ? `<span class="modalAction__icon">${renderIcon(action.icon)}</span>`
      : "";
    const label = action.subtitle
      ? `<span class="modalAction__text"><strong>${escapeHtml(action.label)}</strong><small>${escapeHtml(action.subtitle)}</small></span>`
      : `<span>${escapeHtml(action.label)}</span>`;

    if (action.view) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-view="${escapeHtml(action.view)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    const href = actionHref(action);
    const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
    const downloadHref = actionDownloadHref(action);

    if (downloadHref) {
      return `
        <div class="${actionClass} modalActionWrap--pdf">
          <a class="modalAction${modifiers}" href="${href}"${target}>
            ${icon}
            ${label}
          </a>
          <a class="modalIconAction" href="${downloadHref}" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      `;
    }

    return `
      <div class="${actionClass}">
        <a class="modalAction${modifiers}" href="${href}"${target}${action.download ? " download" : ""}>
          ${icon}
          ${label}
        </a>
      </div>
    `;
  }

  function renderModal(root, stack) {
    const current = stack[stack.length - 1];

    if (!current) {
      root.hidden = true;
      root.innerHTML = "";
      document.body.classList.remove("modal-open");
      return;
    }

    const hasBack = stack.length > 1;
    const titleHtml = current.hideTitle ? "" : `<h2 class="modalTitle" id="homeModalTitle">${escapeHtml(current.title || "")}</h2>`;
    const textHtml = current.text ? `<p class="modalText">${escapeHtml(current.text)}</p>` : "";
    const noteIcon = current.noteIcon ? renderIcon(current.noteIcon) : "◆";
    const noteHtml = current.note
      ? `
        <div class="modalNote${current.noteAccent ? " modalNote--accent" : ""}${current.noteStyle === "caption" ? " modalNote--caption" : ""}">
          ${current.noteStyle === "caption" ? "" : `<span class="modalNote__pin" aria-hidden="true">${noteIcon}</span>`}
          <span>${escapeHtml(current.note)}</span>
        </div>
      `
      : "";

    root.hidden = false;
    document.body.classList.add("modal-open");
    root.innerHTML = `
      <div class="modalShell" role="presentation">
        <button class="modalOverlay" type="button" data-close="true" aria-label="Закрыть"></button>
        <section class="modalCard ${escapeHtml(current.className || "")}" role="dialog" aria-modal="true"${current.hideTitle ? "" : ' aria-labelledby="homeModalTitle"'}>
          <div class="modalHead">
            <div class="modalHead__start">
              ${hasBack ? '<button class="modalBack" type="button" data-back="true">Назад</button>' : ""}
            </div>
            <button class="modalClose" type="button" data-close="true" aria-label="Закрыть">✕</button>
          </div>
          ${titleHtml}
          ${textHtml}
          ${noteHtml}
          ${current.html ? `<div class="modalBody">${current.html}</div>` : ""}
          <div class="modalActions">
            ${(current.actions || []).map(renderAction).join("")}
          </div>
        </section>
      </div>
    `;
  }

  function setupMaterialsModal() {
    const modalRoot = document.getElementById("homeModalRoot");
    if (!modalRoot) return;

    const stack = [];
    const openView = (view) => {
      stack.push(view);
      renderModal(modalRoot, stack);
    };
    const closeModal = () => {
      stack.length = 0;
      renderModal(modalRoot, stack);
    };
    const goBack = () => {
      if (stack.length > 1) {
        stack.pop();
        renderModal(modalRoot, stack);
      } else {
        closeModal();
      }
    };

    document.addEventListener("click", (event) => {
      const opener = event.target.closest("[data-open-materials]");
      if (!opener) return;
      event.preventDefault();
      openView(HOME_VIEWS.verify);
    });

    modalRoot.addEventListener("click", (event) => {
      if (event.target.closest("[data-close]")) {
        closeModal();
        return;
      }

      if (event.target.closest("[data-back]")) {
        goBack();
        return;
      }

      const viewBtn = event.target.closest("[data-view]");
      if (viewBtn) {
        const nextView = HOME_VIEWS[viewBtn.getAttribute("data-view")];
        if (nextView) openView(nextView);
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && stack.length > 0) closeModal();
    });
  }

  let toastTimer = 0;

  function showToast(message) {
    const text = String(message || "").trim();
    if (!text) return;

    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "toast";
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = text;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  async function copyPlainText(text) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      return false;
    }
    return false;
  }

  function getSharePayload() {
    const manager = getCurrentManager();
    return {
      url: managerPublicUrl(manager),
      title: manager.fullName,
      text: `${COMPANY.name}, ${manager.role || "менеджер отдела продаж"}`
    };
  }

  async function shareContactCard() {
    const payload = getSharePayload();

    if (navigator.share) {
      try {
        await navigator.share(payload);
        showToast("Ссылка готова к отправке");
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    const copied = await copyPlainText(payload.url);
    showToast(copied ? "Ссылка скопирована" : "Не удалось скопировать ссылку");
  }

  function initContactSharing() {
    document.addEventListener("click", async (event) => {
      if (!event.target.closest("[data-contact-share]")) return;
      event.preventDefault();
      await shareContactCard();
    });
  }

  function updateRevenueNodes() {
    const revenue = getRevenue();
    document.querySelectorAll("[data-revenue-year]").forEach((node) => {
      node.textContent = String(revenue.year);
    });
    document.querySelectorAll("[data-revenue-value]").forEach((node) => {
      node.textContent = revenue.valueText;
    });
  }

  function initContactPage() {
    const card = document.querySelector("[data-contact-card]");
    if (!card) return;

    const manager = getCurrentManager();
    card.setAttribute("aria-label", `Контакты ${manager.fullName}`);
    card.innerHTML = renderContactSheet(manager);
    updateRevenueNodes();
  }

  function renderCatalogCard(manager) {
    const primary = getPrimaryContact(manager);
    const email = getEmailContact(manager);
    const href = `${manager.slug}/`;

    return `
      <article class="managerTile">
        <img class="managerTile__avatar" src="${assetHref(manager.avatar)}" alt="${escapeHtml(manager.fullName)}" />
        <div class="managerTile__main">
          <h2>${escapeHtml(manager.fullName)}</h2>
          <p>${escapeHtml(manager.role || "Менеджер отдела продаж")}</p>
          <div class="managerTile__meta">
            ${primary ? `<span>${escapeHtml(primary.value)}</span>` : ""}
            ${email ? `<span>${escapeHtml(email.value)}</span>` : ""}
          </div>
        </div>
        <a class="managerTile__link" href="${escapeHtml(href)}">Открыть</a>
      </article>
    `;
  }

  function initManagerCatalog() {
    const root = document.querySelector("[data-manager-catalog]");
    if (!root) return;

    const managers = MANAGER_ORDER.map((slug) => MANAGERS[slug]).filter(Boolean);
    const max = DATA.maxManagers || 20;

    root.innerHTML = `
      <div class="card__body">
        <div class="catalogHead">
          <div>
            <p class="catalogEyebrow">Служебная страница</p>
            <h1>Визитки менеджеров</h1>
          </div>
          <a class="contactBrandLogo" href="${escapeHtml(COMPANY.site)}" target="_blank" rel="noreferrer noopener" aria-label="SGM Auto Group">
            <img src="${assetHref("site/logo.svg")}" alt="SGM Auto Group" />
          </a>
        </div>
        <p class="catalogLead">Данные карточек редактируются в одном файле: assets/js/managers.js.</p>
        <div class="catalogStats">
          <span>${managers.length} из ${max}</span>
          <span>Лимит: ${max} человек</span>
        </div>
        <div class="managerGrid">
          ${managers.map(renderCatalogCard).join("")}
        </div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initContactPage();
    initManagerCatalog();
    initContactSharing();
    setupMaterialsModal();
    updateRevenueNodes();
  });
})();
