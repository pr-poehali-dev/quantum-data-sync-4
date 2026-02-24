import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Проблемы", href: "#problems" },
  { label: "Решение", href: "#solution" },
  { label: "Кейс", href: "#case" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const PROBLEMS = [
  {
    icon: "EyeOff",
    title: "Воронка-невидимка",
    text: "Вы не знаете, на каком этапе зависло КП, пока клиент сам не откажется.",
  },
  {
    icon: "MessageSquareX",
    title: "Испорченный телефон",
    text: "Менеджер пообещал, архитектор не понял, ГИП разбирается — сроки сорваны.",
  },
  {
    icon: "Users",
    title: "Золотые руки простаивают",
    text: "Один перерабатывает, второй сидит в Telegram, а вы платите обоим.",
  },
  {
    icon: "FolderX",
    title: "Адский коллаж из версий",
    text: "Где актуальный чертёж фасада? Почему строители взяли старую версию?",
  },
  {
    icon: "TrendingDown",
    title: "Прибыль есть, денег нет",
    text: "Непонятно, какой проект реально убыточный и съедает весь ФОТ.",
  },
];

const CONTOURS = [
  {
    num: "01",
    icon: "TrendingUp",
    title: "Контур продаж",
    desc: "Прозрачная воронка с контролем каждого КП. Никаких чёрных ящиков.",
    details: [
      "Все звонки и письма автоматически прикрепляются к сделке",
      "Робот напомнит, если клиент не открыл КП 2 дня",
      "Формирование сметы и КП в один клик из карточки сделки",
      "Конверсия из «КП» в «Оплату» по каждому менеджеру",
    ],
    cta: "Хочу видеть реальную воронку",
  },
  {
    num: "02",
    icon: "GitBranch",
    title: "Контур запуска",
    desc: "Автоматическая передача проекта из продажи в работу без потери данных.",
    details: [
      "Оплата → автоматически создаётся проект, задача ГИПу и папка с исходниками",
      "Диаграмма Ганта с реальной загрузкой каждого сотрудника",
      "Связи задач не дают сдвинуть дедлайн, не передвинув всё остальное",
      "Все файлы и обсуждения внутри проекта, а не в мессенджерах",
    ],
    cta: "Наладить передачу проектов",
  },
  {
    num: "03",
    icon: "FileCheck",
    title: "Контур согласования",
    desc: "Единый источник правды для всех чертежей. Никакой путаницы с файлами.",
    details: [
      "Автоматическая история версий каждого DWG и PDF файла",
      "Вы точно знаете, кто и когда утвердил финальную версию",
      "Замечания ГИПа прилетают архитектору прямо в задачу",
      "Строители больше не получат старую версию документа",
    ],
    cta: "Хочу порядок в чертежах",
  },
  {
    num: "04",
    icon: "BarChart3",
    title: "Контур финансов",
    desc: "Рентабельность каждого проекта в реальном времени.",
    details: [
      "Система считает, сколько часов ФОТа потрачено на каждый объект",
      "Видите: «Проект А» принёс 1 млн, но съел 800 тыс. зарплаты",
      "Понимаете, от каких заказов отказываться, на какие — поднимать цены",
      "Прозрачная экономика для инвесторов и партнёров",
    ],
    cta: "Рассчитать маржинальность",
  },
  {
    num: "05",
    icon: "BookOpen",
    title: "Контур знаний",
    desc: "Опыт ведущих инженеров остаётся в компании, даже если они уходят.",
    details: [
      "Новый архитектор за 2 дня входит в курс по готовым чек-листам",
      "Типовые замечания экспертизы собраны — больше никаких повторных ошибок",
      "Уволился ведущий инженер? Его узлы и наработки остались в базе",
      "Единые стандарты оформления — профессионально и узнаваемо",
    ],
    cta: "Сохранить знания компании",
  },
];

const METRICS = [
  { value: "−40%", label: "время согласования чертежей" },
  { value: "+8ч", label: "освободили ГИПу в неделю" },
  { value: "+20%", label: "рост выручки за 3 месяца" },
  { value: "×0", label: "убыточных проектов после анализа" },
];

const HOW_WE_WORK = [
  { num: "01", title: "Диагностика", desc: "30-минутный аудит ваших процессов. Находим узкие места и точки роста.", icon: "Search" },
  { num: "02", title: "Проектирование", desc: "Разрабатываем план внедрения под специфику вашего бюро.", icon: "PenTool" },
  { num: "03", title: "Внедрение", desc: "Настраиваем Битрикс24, обучаем команду, запускаем контуры.", icon: "Settings" },
  { num: "04", title: "Сопровождение", desc: "Поддержка после запуска. Вы не остаётесь один на один с системой.", icon: "Shield" },
];

const PRICING = [
  {
    name: "Порядок",
    subtitle: "Контуры 1–2",
    contours: ["Контур продаж", "Контур запуска проектов"],
    cta: "Узнать стоимость",
    highlight: false,
  },
  {
    name: "Профессионал",
    subtitle: "Контуры 1–4",
    contours: ["Контур продаж", "Контур запуска", "Контур ресурсов", "Контур согласования"],
    cta: "Получить КП",
    highlight: true,
    badge: "Популярный",
  },
  {
    name: "Система",
    subtitle: "Все 6 контуров",
    contours: ["Все контуры управления", "Дашборд руководителя", "Обучение команды", "3 месяца поддержки"],
    cta: "Обсудить проект",
    highlight: false,
  },
];

const WHY_US = [
  { icon: "Award", title: "Сертифицированные партнёры", desc: "Официальный партнёр Битрикс24 с сертификацией по проектному управлению." },
  { icon: "Briefcase", title: "Опыт в проектной сфере", desc: "Знаем специфику архитектурного бизнеса изнутри. Говорим с ГИПами на одном языке." },
  { icon: "Sliders", title: "Индивидуальный подход", desc: "Никаких коробочных решений. Каждое внедрение — под задачи конкретного бюро." },
  { icon: "HeartHandshake", title: "Пост-поддержка включена", desc: "Не бросаем после внедрения. Сопровождаем и дорабатываем под ваш рост." },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", team: "", agree: false });
  const [sent, setSent] = useState(false);
  const [activeContour, setActiveContour] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--warm-white)", color: "var(--text-primary)" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "rgba(247,245,242,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--warm-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="font-playfair text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Архи<span style={{ color: "var(--gold)" }}>Систем</span>
            </div>
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--green-cta)" }}>
            Записаться на аудит
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: "var(--dark-navy)", color: "var(--gold)" }}>
                <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: "var(--gold)" }}></span>
                Специализация: архитектурные бюро от 30 человек
              </div>

              <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                Перестаньте терять{" "}
                <span className="text-gold-gradient">30% выручки</span>{" "}
                на хаосе в проектах
              </h1>

              <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                Внедряем прозрачную систему управления под ключ: от заявки до финальных чертежей и расчёта рентабельности каждого проекта.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--green-cta)" }}>
                  <Icon name="Calendar" size={18} />
                  Провести бесплатный аудит
                </a>
                <a href="#solution" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium border transition-colors hover:bg-white" style={{ borderColor: "var(--warm-border)", color: "var(--text-primary)" }}>
                  <Icon name="PlayCircle" size={18} />
                  Как это работает
                </a>
              </div>

              <div className="flex flex-wrap gap-5">
                {["Для владельцев и ГИПов", "Архитектурные бюро и проектные институты", "Команды от 30 человек"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Icon name="CheckCircle2" size={16} style={{ color: "var(--green-cta)" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual split */}
            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: `1px solid var(--warm-border)` }}>
                {/* Chaos side */}
                <div className="absolute inset-0 left-0 w-1/2 p-6 flex flex-col gap-3" style={{ backgroundColor: "#FFF5F5" }}>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#E57373" }}>Было</div>
                  {["оконч_фасад.dwg", "оконч_фасад_2.dwg", "ФИНАЛ_правки.dwg", "версия_ГИП.dwg", "актуальный(1).dwg"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: "white", border: "1px solid #FECACA" }}>
                      <Icon name="FileWarning" size={14} style={{ color: "#EF4444" }} />
                      <span style={{ color: "#6B6B6B" }}>{f}</span>
                    </div>
                  ))}
                  <div className="mt-2 text-xs italic" style={{ color: "#EF4444" }}>+23 версии у всех...</div>
                </div>

                {/* Gold divider */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 z-10" style={{ backgroundColor: "var(--gold)" }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: "var(--gold)" }}>
                  <Icon name="ArrowRight" size={14} color="white" />
                </div>

                {/* Order side */}
                <div className="absolute inset-0 right-0 left-1/2 p-6 flex flex-col gap-3" style={{ backgroundColor: "#F0FDF4" }}>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--green-cta)" }}>Стало</div>
                  {["v3.0 Фасад — УТВЕРЖДЕНО", "v2.1 План 1эт — в работе", "v1.5 Разрез А-А — проверка"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: "white", border: "1px solid #BBF7D0" }}>
                      <Icon name="FileCheck2" size={14} style={{ color: "var(--green-cta)" }} />
                      <span style={{ color: "#1C1C1C" }}>{f}</span>
                    </div>
                  ))}
                  <div className="mt-2 text-xs font-medium" style={{ color: "var(--green-cta)" }}>Актуальная версия всегда одна</div>
                </div>

                {/* spacer */}
                <div className="h-64"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section id="problems" className="py-24 px-6" style={{ backgroundColor: "var(--dark-navy)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Узнаёте себя?</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Почему 80% проектных бюро<br />работают в режиме «пожарной команды»
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Каждая из этих проблем стоит вам денег, нервов и клиентов. Ежедневно.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="group rounded-2xl p-7 relative overflow-hidden transition-all hover:-translate-y-1" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,126,0.2)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 pulse-dot" style={{ backgroundColor: "#EF4444" }}></div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200,169,126,0.15)" }}>
                    <Icon name={p.icon} size={20} style={{ color: "var(--gold)" }} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{p.text}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "var(--gold)" }}></div>
              </div>
            ))}

            {/* CTA card */}
            <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ backgroundColor: "var(--green-cta)" }}>
              <div>
                <p className="font-playfair text-2xl font-bold text-white mb-3">Это про вас?</p>
                <p className="text-sm text-white/80 leading-relaxed">Мы можем устранить каждую из этих проблем за 4–6 недель.</p>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "white", color: "var(--green-cta)" }}>
                Да, хочу систему
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION OVERVIEW ── */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Наш подход</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Единая операционная система<br />для вашего бюро
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Мы не просто настраиваем Битрикс24. Мы выстраиваем 5 управленческих контуров, которые заставляют бизнес работать предсказуемо.
            </p>
          </div>

          {/* Bento grid contours overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {CONTOURS.map((c, i) => (
              <button key={i} onClick={() => setActiveContour(i)}
                className="rounded-2xl p-5 text-left transition-all hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: activeContour === i ? "var(--dark-navy)" : "white",
                  border: `1px solid ${activeContour === i ? "var(--gold)" : "var(--warm-border)"}`,
                  boxShadow: activeContour === i ? "0 8px 32px rgba(26,26,46,0.15)" : "none",
                }}>
                <div className="font-playfair text-4xl font-bold mb-3 text-gold-gradient">{c.num}</div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: activeContour === i ? "rgba(200,169,126,0.2)" : "var(--warm-white)" }}>
                  <Icon name={c.icon} size={16} style={{ color: activeContour === i ? "var(--gold)" : "var(--text-secondary)" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: activeContour === i ? "white" : "var(--text-primary)" }}>{c.title}</p>
              </button>
            ))}
          </div>

          {/* Active contour detail */}
          <div className="rounded-3xl p-10 transition-all" style={{ backgroundColor: "white", border: "1px solid var(--warm-border)", boxShadow: "0 4px 40px rgba(0,0,0,0.06)" }}>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="font-playfair text-8xl font-bold mb-4 text-gold-gradient opacity-30">{CONTOURS[activeContour].num}</div>
                <h3 className="font-playfair text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{CONTOURS[activeContour].title}</h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{CONTOURS[activeContour].desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--green-cta)" }}>
                  {CONTOURS[activeContour].cta}
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>
              <div className="space-y-3">
                {CONTOURS[activeContour].details.map((d, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ backgroundColor: "var(--warm-white)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--green-cta)" }}>
                      <Icon name="Check" size={12} color="white" />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE ── */}
      <section id="case" className="py-24 px-6" style={{ backgroundColor: "var(--dark-navy)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Реальный результат</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Архитектурное бюро, 40 человек:<br />порядок за 6 недель
            </h2>
          </div>

          {/* Was / Became */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#EF4444" }}></div>
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#EF4444" }}>Было</span>
              </div>
              {["Срывы сроков на каждом втором проекте", "Путаница в версиях чертежей", "ГИП тонет в микроменеджменте", "Непонятна рентабельность проектов", "Новые сотрудники входят 2–3 месяца"].map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <Icon name="X" size={16} style={{ color: "#EF4444", marginTop: 2, flexShrink: 0 }} />
                  <span className="text-sm text-white/70">{t}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(45,106,79,0.12)", border: "1px solid rgba(45,106,79,0.3)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--green-cta)" }}></div>
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#4ADE80" }}>Стало</span>
              </div>
              {["Все сроки под контролем, задержки видны за 2 недели", "Один источник правды для всех чертежей", "ГИП занимается архитектурой, а не поиском файлов", "Каждый проект — с прозрачной маржой", "Онбординг нового сотрудника: 2 дня по чек-листам"].map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <Icon name="Check" size={16} style={{ color: "#4ADE80", marginTop: 2, flexShrink: 0 }} />
                  <span className="text-sm text-white/80">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {METRICS.map((m, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,126,0.2)" }}>
                <div className="font-playfair text-4xl font-bold mb-2 text-gold-gradient">{m.value}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--green-cta)" }}>
              Хочу такие же результаты
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Схема работы</p>
            <h2 className="font-playfair text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Как мы внедряем</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((s, i) => (
              <div key={i} className="relative">
                {i < HOW_WE_WORK.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 -translate-y-1/2 z-0" style={{ backgroundColor: "var(--warm-border)" }}></div>
                )}
                <div className="relative z-10 rounded-2xl p-7" style={{ backgroundColor: "white", border: "1px solid var(--warm-border)" }}>
                  <div className="font-playfair text-3xl font-bold mb-4 text-gold-gradient">{s.num}</div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "var(--warm-white)" }}>
                    <Icon name={s.icon} size={20} style={{ color: "var(--green-cta)" }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Почему мы</p>
            <h2 className="font-playfair text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Экспертиза, которой доверяют</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ backgroundColor: "var(--warm-white)", border: "1px solid var(--warm-border)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "var(--dark-navy)" }}>
                  <Icon name={w.icon} size={22} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Тарифы</p>
            <h2 className="font-playfair text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Выберите глубину внедрения</h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>Начните с нужного уровня — масштабируйте по мере роста</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <div key={i} className={`rounded-3xl p-8 relative flex flex-col transition-all hover:-translate-y-1`}
                style={{
                  backgroundColor: p.highlight ? "var(--dark-navy)" : "white",
                  border: `1px solid ${p.highlight ? "var(--gold)" : "var(--warm-border)"}`,
                  boxShadow: p.highlight ? "0 20px 60px rgba(26,26,46,0.2)" : "none",
                }}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--gold)", color: "var(--dark-navy)" }}>
                    {p.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-bold mb-1" style={{ color: p.highlight ? "white" : "var(--text-primary)" }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: p.highlight ? "rgba(255,255,255,0.55)" : "var(--text-secondary)" }}>{p.subtitle}</p>
                </div>
                <div className="flex-1 space-y-3 mb-8">
                  {p.contours.map((c, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p.highlight ? "rgba(200,169,126,0.3)" : "rgba(45,106,79,0.1)" }}>
                        <Icon name="Check" size={10} style={{ color: p.highlight ? "var(--gold)" : "var(--green-cta)" }} />
                      </div>
                      <span className="text-sm" style={{ color: p.highlight ? "rgba(255,255,255,0.8)" : "var(--text-primary)" }}>{c}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: p.highlight ? "var(--gold)" : "var(--green-cta)",
                    color: p.highlight ? "var(--dark-navy)" : "white",
                  }}>
                  {p.cta}
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--dark-navy)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Начать работу</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Хватит гадать —<br />пора управлять
              </h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Запишитесь на бесплатную диагностику ваших процессов. Мы проанализируем ситуацию и предложим план именно для вашего бюро.
              </p>

              <div className="space-y-4 mb-10">
                {["Анализ узких мест в текущих процессах", "Карта оптимизации с конкретными шагами", "Оценка сроков и стоимости внедрения"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200,169,126,0.2)", border: "1px solid var(--gold)" }}>
                      <Icon name="Check" size={12} style={{ color: "var(--gold)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a href="tel:+79001234567" className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Icon name="Phone" size={16} style={{ color: "var(--gold)" }} />
                  +7 (900) 123-45-67
                </a>
                <a href="mailto:hello@archisystem.ru" className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Icon name="Mail" size={16} style={{ color: "var(--gold)" }} />
                  hello@archisystem.ru
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-opacity hover:opacity-80" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
                    <Icon name="MessageCircle" size={14} />
                    Telegram
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-opacity hover:opacity-80" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
                    <Icon name="Phone" size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,126,0.2)" }}>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(45,106,79,0.2)" }}>
                    <Icon name="CheckCircle2" size={32} style={{ color: "#4ADE80" }} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">Заявка принята!</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Ваше имя</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Александр"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Компания</label>
                      <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Бюро «Иванов»"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Телефон</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7 (900) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Email</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@bureau.ru"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Размер команды</label>
                    <select value={form.team} onChange={e => setForm({ ...form, team: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: form.team ? "white" : "rgba(255,255,255,0.4)" }}>
                      <option value="" style={{ backgroundColor: "#1A1A2E" }}>Выберите</option>
                      <option value="30-50" style={{ backgroundColor: "#1A1A2E" }}>30–50 человек</option>
                      <option value="50-100" style={{ backgroundColor: "#1A1A2E" }}>50–100 человек</option>
                      <option value="100+" style={{ backgroundColor: "#1A1A2E" }}>100+ человек</option>
                    </select>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required checked={form.agree} onChange={e => setForm({ ...form, agree: e.target.checked })}
                      className="mt-1 rounded" style={{ accentColor: "var(--gold)" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Согласен на обработку персональных данных и гарантирую конфиденциальность переданной информации
                    </span>
                  </label>
                  <button type="submit" className="w-full py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "var(--green-cta)", color: "white" }}>
                    <Icon name="Calendar" size={18} />
                    Записаться на бесплатный аудит
                  </button>
                  <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <Icon name="Lock" size={12} style={{ display: "inline", marginRight: 4 }} />
                    Данные защищены и не передаются третьим лицам
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#12122A", borderTop: "1px solid rgba(200,169,126,0.15)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-playfair text-lg font-bold" style={{ color: "white" }}>
            Архи<span style={{ color: "var(--gold)" }}>Систем</span>
          </div>
          <div className="flex gap-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} className="hover:opacity-80 transition-opacity">{l.label}</a>)}
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 АрхиСистем. Все права защищены.</p>
        </div>
      </footer>

    </div>
  );
}
