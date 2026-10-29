export const pageMarkup = String.raw`
  <div class="topbar">
    <div class="container topbar-inner">
      <span><span class="status-dot"></span> مركز عمليات الأمن السيبراني — حماية مستمرة</span>
      <a href="#contact">تحدث مع خبير أمن سيبراني <span aria-hidden="true">←</span></a>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#home" aria-label="NEXUS SOC الصفحة الرئيسية">
        <span class="brand-mark"><span></span><span></span><span></span></span>
        <span class="brand-name">NEXUS<span>SOC</span></span>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mainNav" aria-label="فتح القائمة"><span></span><span></span><span></span></button>
      <nav id="mainNav" class="main-nav">
        <a href="#services">الخدمات</a>
        <a href="#approach">آلية العمل</a>
        <a href="#advantages">لماذا نحن؟</a>
        <a href="#faq">الأسئلة الشائعة</a>
        <a class="nav-cta" href="#contact">اطلب استشارة <span>↗</span></a>
        <button class="language-toggle" id="languageToggle" type="button" aria-label="Switch to English">EN</button>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero section" id="home">
      <div class="hero-grid-bg"></div><div class="hero-ambient hero-ambient-one"></div><div class="hero-ambient hero-ambient-two"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line"></span><span data-ar="مركز عمليات الأمن السيبراني" data-en="SECURITY OPERATIONS CENTER">مركز عمليات الأمن السيبراني</span></div>
          <h1 data-ar="اكتشف التهديدات.<br><span>أوقفها قبل أن تتوسع.</span>" data-en="Detect threats.<br><span>Stop them before they spread.</span>">اكتشف التهديدات.<br><span>أوقفها قبل أن تتوسع.</span></h1>
          <p class="hero-lead" data-ar="مراقبة أمنية ذكية على مدار الساعة، وتحليل للتنبيهات، واستجابة منسقة للحوادث — لمنح مؤسستك رؤية أوضح وتحكمًا أكبر بالمخاطر." data-en="Always-on security monitoring, intelligent alert analysis, and coordinated incident response — giving your organization clearer visibility and stronger control over risk.">مراقبة أمنية ذكية على مدار الساعة، وتحليل للتنبيهات، واستجابة منسقة للحوادث — لمنح مؤسستك رؤية أوضح وتحكمًا أكبر بالمخاطر.</p>
          <div class="hero-actions"><a class="button button-primary" href="#contact"><span data-ar="اطلب تقييمًا أمنيًا" data-en="Request a Security Assessment">اطلب تقييمًا أمنيًا</span> <span>↗</span></a><a class="button button-ghost" href="#services"><span class="play-icon">▷</span><span data-ar="استكشف قدراتنا" data-en="Explore Capabilities">استكشف قدراتنا</span></a></div>
          <div class="hero-proof"><div class="proof-avatars"><span>24</span><span>7</span><span>✓</span></div><div><strong data-ar="مراقبة مستمرة" data-en="Continuous Monitoring">مراقبة مستمرة</strong><small data-ar="على مدار الساعة، طوال أيام الأسبوع" data-en="24 hours a day, 7 days a week">على مدار الساعة، طوال أيام الأسبوع</small></div><div class="proof-divider"></div><div><strong data-ar="استجابة منظمة" data-en="Coordinated Response">استجابة منظمة</strong><small data-ar="من الكشف إلى الاحتواء" data-en="From detection to containment">من الكشف إلى الاحتواء</small></div></div>
        </div>
        <div class="hero-visual" aria-label="Security operations dashboard illustration">
          <div class="visual-glow"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="orbit-node node-top"><span>✳</span><small>THREAT INTEL</small></div><div class="orbit-node node-right"><span>⌁</span><small>NETWORK</small></div><div class="orbit-node node-left"><span>◈</span><small>ENDPOINT</small></div>
          <div class="soc-panel"><div class="panel-top"><div><span class="live-pulse"></span><span data-ar="منصة المراقبة الأمنية" data-en="Security Monitoring Platform">منصة المراقبة الأمنية</span></div><span class="panel-tag">● LIVE SOC</span></div>
            <div class="panel-stats"><div class="mini-stat"><small data-ar="حالة الحماية" data-en="Protection Status">حالة الحماية</small><strong class="green-text" data-ar="نشطة" data-en="Active">نشطة</strong><span class="tiny-line"></span></div><div class="mini-stat"><small data-ar="الأحداث المحللة" data-en="Events Analyzed">الأحداث المحللة</small><strong>18,492</strong><span class="tiny-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></div><div class="mini-stat"><small data-ar="تنبيهات حرجة" data-en="Critical Alerts">تنبيهات حرجة</small><strong class="amber-text">03</strong><span class="tiny-line amber-line"></span></div></div>
            <div class="chart-head"><span data-ar="مؤشر نشاط التهديدات" data-en="Threat Activity Index">مؤشر نشاط التهديدات</span><span class="chart-legend"><i></i><span data-ar="أحداث مرصودة" data-en="Observed Events">أحداث مرصودة</span></span></div>
            <div class="chart"><div class="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><svg viewBox="0 0 500 170" role="img" aria-label="Illustrative threat activity chart"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#39e6bd" stop-opacity=".28"/><stop offset="1" stop-color="#39e6bd" stop-opacity="0"/></linearGradient></defs><g class="grid-lines"><path d="M0 20H500 M0 55H500 M0 90H500 M0 125H500 M0 160H500"/></g><path class="chart-area" d="M0 130 L35 118 L65 124 L95 88 L125 104 L155 62 L190 80 L220 50 L250 72 L280 35 L315 55 L350 24 L385 62 L420 40 L455 54 L500 18 L500 170 L0 170 Z"/><path class="chart-line" d="M0 130 L35 118 L65 124 L95 88 L125 104 L155 62 L190 80 L220 50 L250 72 L280 35 L315 55 L350 24 L385 62 L420 40 L455 54 L500 18"/><circle cx="350" cy="24" r="5" fill="#39e6bd" stroke="#07111f" stroke-width="3"/></svg></div>
            <div class="panel-bottom"><span><i class="legend-dot green"></i> SIEM <span data-ar="متصل" data-en="Connected">متصل</span></span><span><i class="legend-dot blue"></i> EDR <span data-ar="نشط" data-en="Active">نشط</span></span><span data-ar="تحديث مباشر" data-en="Live updates">تحديث مباشر</span></div>
          </div>
          <div class="floating-alert"><span class="alert-icon">!</span><div><strong data-ar="تم رصد نشاط غير معتاد" data-en="Unusual Activity Detected">تم رصد نشاط غير معتاد</strong><small data-ar="تحليل أولي جارٍ · الآن" data-en="Initial analysis in progress · Now">تحليل أولي جارٍ · الآن</small></div><span class="alert-pulse"></span></div>
          <div class="hero-visual-caption"><span class="shield-icon">⬡</span><span data-ar="تصور توضيحي للوحة SOC" data-en="Illustrative SOC dashboard">تصور توضيحي للوحة SOC</span></div>
        </div>
      </div>
      <div class="container trust-strip"><span data-ar="رؤية أمنية أوضح" data-en="Clearer Security Visibility">رؤية أمنية أوضح</span><i></i><span data-ar="مراقبة على مدار الساعة" data-en="24/7 Monitoring">مراقبة على مدار الساعة</span><i></i><span data-ar="تحليل قائم على السياق" data-en="Context-Driven Analysis">تحليل قائم على السياق</span><i></i><span data-ar="تقارير قابلة للتنفيذ" data-en="Actionable Reporting">تقارير قابلة للتنفيذ</span></div>
    </section>

    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-heading">
          <div><div class="eyebrow"><span class="eyebrow-line"></span> WHAT WE DO</div><h2>الأمن لا يتعلق بالتنبيهات فقط.<br><span>بل بما تفعله بعدها.</span></h2></div>
          <p>نساعد فرقك على تحويل الإشارات الأمنية المتفرقة إلى قرارات واضحة وإجراءات عملية، من الرصد الأولي حتى الاستجابة للحوادث.</p>
        </div>
        <div class="service-grid">
          <article class="service-card"><div class="service-number">01 / MONITOR</div><div class="service-icon icon-radar"><span></span></div><h3>المراقبة على مدار الساعة</h3><p>جمع الأحداث الأمنية ومراقبتها باستمرار للكشف عن الأنماط غير المعتادة وتقليل النقاط العمياء.</p><a href="#contact">اعرف المزيد <span>↗</span></a></article>
          <article class="service-card featured"><div class="service-number">02 / DETECT</div><div class="service-icon icon-crosshair"><span></span></div><h3>اكتشاف التهديدات</h3><p>تحليل التنبيهات وربط المؤشرات بالسياق لتحديد المخاطر المهمة والحد من الإنذارات غير الدقيقة.</p><a href="#contact">اعرف المزيد <span>↗</span></a><div class="card-accent"></div></article>
          <article class="service-card"><div class="service-number">03 / RESPOND</div><div class="service-icon icon-bolt">ϟ</div><h3>الاستجابة للحوادث</h3><p>تنسيق إجراءات الاحتواء والتحقيق والتعافي، مع توثيق واضح للدروس المستفادة وخطوات التحسين.</p><a href="#contact">اعرف المزيد <span>↗</span></a></article>
        </div>
      </div>
    </section>

    <section class="section approach-section" id="approach">
      <div class="container approach-layout">
        <div class="approach-copy">
          <div class="eyebrow"><span class="eyebrow-line"></span> OUR APPROACH</div>
          <h2>من الإشارة الأولى<br>إلى <span>القرار الصحيح.</span></h2>
          <p>منهج واضح يقلل الارتباك عند وقوع حدث أمني، ويمنح فريقك رؤية أفضل لما يحدث وما يجب فعله بعد ذلك.</p>
          <a class="text-link" href="#contact">ناقش احتياجاتك الأمنية <span>↗</span></a>
        </div>
        <div class="steps">
          <div class="step"><div class="step-index">01</div><div><h3>ربط مصادر البيانات</h3><p>تحديد الأصول المهمة وربط السجلات ومصادر التنبيه ذات الصلة.</p></div><span class="step-symbol">⌁</span></div>
          <div class="step"><div class="step-index">02</div><div><h3>الرصد والتحليل</h3><p>مراقبة الأحداث، وفرز التنبيهات، والتحقق من السياق ومستوى الخطورة.</p></div><span class="step-symbol">◎</span></div>
          <div class="step"><div class="step-index">03</div><div><h3>الاستجابة والتنسيق</h3><p>تصعيد الحالات المهمة وتنسيق إجراءات الاحتواء وفق خطة متفق عليها.</p></div><span class="step-symbol">↗</span></div>
          <div class="step"><div class="step-index">04</div><div><h3>التقرير والتحسين</h3><p>مراجعة ما حدث وتقديم توصيات عملية لتحسين وضعك الأمني.</p></div><span class="step-symbol">⌘</span></div>
        </div>
      </div>
    </section>

    <section class="section advantages-section" id="advantages">
      <div class="container">
        <div class="center-heading"><div class="eyebrow"><span class="eyebrow-line"></span> WHY NEXUS SOC</div><h2>شريك أمني يضيف <span>وضوحًا لقراراتك.</span></h2><p>خدمات قابلة للتكيّف مع حجم مؤسستك، ومستوى المخاطر، ونضج عمليات الأمن لديك.</p></div>
        <div class="advantage-grid">
          <article class="advantage"><div class="advantage-icon">◷</div><h3>تغطية مستمرة</h3><p>نهج مراقبة مصمم لتقليل الفجوات في الرؤية الأمنية خارج ساعات العمل.</p></article>
          <article class="advantage"><div class="advantage-icon">⌕</div><h3>أولوية للسياق</h3><p>فهم التنبيه ضمن بيئتك بدل التعامل مع كل إشارة على أنها حادث مؤكد.</p></article>
          <article class="advantage"><div class="advantage-icon">↯</div><h3>استجابة منظمة</h3><p>مسارات تصعيد واضحة وأدوار محددة لتقليل التأخير والارتباك.</p></article>
          <article class="advantage"><div class="advantage-icon">▤</div><h3>تقارير مفهومة</h3><p>ملخصات تساعد أصحاب القرار على فهم المخاطر وخطوات التحسين التالية.</p></article>
        </div>
      </div>
    </section>

    <section class="section assurance-section">
      <div class="container assurance-layout">
        <div><div class="eyebrow"><span class="eyebrow-line"></span> TRUST & TRANSPARENCY</div><h2>الثقة تُبنى<br><span>بالأدلة والوضوح.</span></h2><p>نؤمن بأن الأمن الفعال يحتاج إلى نطاق خدمة واضح، وتواصل موثق، وقياس مستمر للنتائج.</p></div>
        <div class="assurance-list">
          <div><span class="check">✓</span><div><strong>نطاق خدمة متفق عليه</strong><small>تحديد مصادر الرصد، ومستويات التصعيد، ومسؤوليات كل طرف.</small></div></div>
          <div><span class="check">✓</span><div><strong>توثيق قابل للمراجعة</strong><small>سجل للحوادث والإجراءات والتوصيات وفق الاتفاق التشغيلي.</small></div></div>
          <div><span class="check">✓</span><div><strong>نهج قائم على التحسين</strong><small>مراجعة دورية للتغطية والقواعد والإجراءات بناءً على النتائج.</small></div></div>
          <div class="assurance-note"><span>!</span><p>لا نعرض شعارات عملاء أو شهادات اعتماد غير موثقة. يمكن إضافة الشهادات الفعلية ودراسات الحالة بعد اعتمادها من الشركة.</p></div>
        </div>
      </div>
    </section>

    <section class="section faq-section" id="faq">
      <div class="container faq-layout">
        <div class="faq-intro"><div class="eyebrow"><span class="eyebrow-line"></span> FAQ</div><h2>أسئلة شائعة.<br><span>إجابات واضحة.</span></h2><p>هل تريد معرفة ما إذا كانت خدمات SOC مناسبة لفريقك؟ ابدأ من هنا أو تواصل معنا مباشرة.</p><a class="text-link" href="#contact">اسأل فريقنا <span>↗</span></a></div>
        <div class="faq-list">
          <details open><summary>ما هو مركز عمليات الأمن SOC؟ <span>+</span></summary><p>هو وظيفة أمنية تجمع المراقبة والتحليل والاستجابة للحوادث لمساعدة المؤسسة على اكتشاف الأنشطة المشبوهة والتعامل معها بطريقة منظمة.</p></details>
          <details><summary>هل نحتاج إلى فريق أمن داخلي؟ <span>+</span></summary><p>يعتمد ذلك على حجم المؤسسة ونموذج الخدمة. يمكن لخدمات SOC أن تدعم الفريق الداخلي أو تتولى نطاقًا تشغيليًا محددًا وفق اتفاق واضح.</p></details>
          <details><summary>ما الأنظمة التي يمكن مراقبتها؟ <span>+</span></summary><p>قد تشمل مصادر السجلات، وأجهزة المستخدمين، والخوادم، وأدوات الشبكات والسحابة، وفق التوافق الفني ونطاق الخدمة المتفق عليه.</p></details>
          <details><summary>كيف يتم التعامل مع حادث أمني؟ <span>+</span></summary><p>يتم التحقق من التنبيه وتقييم الأولوية ثم التصعيد والتنسيق مع الجهات المسؤولة لتنفيذ إجراءات الاحتواء والتحقيق والتعافي المتفق عليها.</p></details>
          <details><summary>كم يستغرق بدء الخدمة؟ <span>+</span></summary><p>يتحدد الجدول بعد تقييم البيئة ومصادر البيانات والمتطلبات. نحدد مراحل الربط والاختبار والتشغيل في خطة بدء الخدمة.</p></details>
        </div>
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="container contact-layout">
        <div class="contact-copy"><div class="eyebrow"><span class="eyebrow-line"></span> LET'S TALK SECURITY</div><h2>لنبدأ بتقييم<br><span>وضعك الأمني.</span></h2><p>شاركنا نبذة عن بيئتك والتحديات التي تواجهها، وسنرتب الخطوة التالية معك.</p><div class="contact-detail"><span class="contact-detail-icon">↗</span><div><strong>استشارة أولية</strong><small>نقاش مبدئي لتحديد الاحتياجات والأولويات</small></div></div><div class="contact-detail"><span class="contact-detail-icon">⌁</span><div><strong>نطاق واضح</strong><small>توصيات وخطوات تالية بناءً على المعلومات المتاحة</small></div></div></div>
        <form id="contactForm" class="contact-form">
          <div class="form-heading"><h3>تواصل مع الفريق</h3><p>الحقول التي تحمل علامة * مطلوبة.</p></div>
          <div class="field-row"><label>الاسم الكامل *<input name="name" autocomplete="name" required placeholder="اسمك"></label><label>البريد الإلكتروني *<input name="email" type="email" autocomplete="email" required placeholder="name@company.com" dir="ltr"></label></div>
          <div class="field-row"><label>اسم الشركة<input name="company" autocomplete="organization" placeholder="اسم المؤسسة"></label><label>حجم المؤسسة<select name="size"><option value="">اختر الحجم</option><option>1–50 موظفًا</option><option>51–250 موظفًا</option><option>251–1000 موظف</option><option>أكثر من 1000 موظف</option></select></label></div>
          <label>كيف يمكننا مساعدتك؟ *<textarea name="message" rows="4" required placeholder="أخبرنا عن احتياجاتك أو التحديات الأمنية..."></textarea></label>
          <button class="button button-primary submit-button" type="submit">إرسال طلب التواصل <span>↗</span></button>
          <p class="form-note">نموذج تجريبي للعرض. يلزم ربطه بخدمة بريد أو API لاستقبال الرسائل فعليًا.</p>
          <div id="formStatus" class="form-status" role="status" aria-live="polite"></div>
        </form>
      </div>
    </section>
    <section class="bottom-cta"><div class="container bottom-cta-inner"><div><span class="eyebrow">SECURITY STARTS WITH VISIBILITY</span><h2>رؤية أفضل. قرارات أسرع.</h2></div><a class="button button-light" href="#contact">تحدث إلى خبير <span>↗</span></a></div></section>
  </main>

  <footer class="site-footer"><div class="container footer-main"><a class="brand footer-brand" href="#home"><span class="brand-mark"><span></span><span></span><span></span></span><span class="brand-name">NEXUS<span>SOC</span></span></a><p>مركز عمليات الأمن السيبراني<br>رصد وتحليل واستجابة — بتواصل واضح.</p><div class="footer-links"><a href="#services">الخدمات</a><a href="#approach">آلية العمل</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">تواصل معنا</a></div></div><div class="container footer-bottom"><span>© <span id="year"></span> NEXUS SOC. جميع الحقوق محفوظة.</span><span>تصميم مفاهيمي تجريبي — لا يمثل مزود خدمة حقيقيًا.</span></div></footer>
`;
