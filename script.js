// script.js - النسخة النهائية والمعدلة

// --- Global DOM Elements ---
const searchByIdForm = document.getElementById('searchByIdForm');
const searchByNameForm = document.getElementById('searchByNameForm');
const uniIdInput = document.getElementById('uniIdInput');
const nameInput = document.getElementById('nameInput');
const fatherNameInput = document.getElementById('fatherNameInput');
const resultsContainer = document.getElementById('resultsContainer');
const searchTypeRadios = document.querySelectorAll('input[name="searchType"]');
const searchIdBtn = document.getElementById('searchIdBtn');
const searchNameBtn = document.getElementById('searchNameBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// --- Data Definitions ---

// قوائم المواد
const practicalSubjectsList = ['الكيمياء الحيوية و البيولوجيا الجزيئية', 'علم النسج العام', 'التشريح الوصفي 1'];
const theoreticalSubjectsList = ['الكيمياء الحيوية و البيولوجيا الجزيئية', 'علم النسج العام', 'التشريح الوصفي 1', 'علم النفس السلوكي', 'اللغة العربية', 'اللغة الانكليزية 3'];

// جدول الامتحانات (Exam Schedule)
const examSchedule = [
    { day: "الثلاثاء", date: "2026-01-27", subject: "كيمياء حيوية وبيولوجيا جزيئية", time: "10:30", duration: "ساعة واحدة" },
    { day: "الأحد", date: "2026-02-01", subject: "لغة أجنبية 3", time: "10:30", duration: "ساعة واحدة" },
    { day: "الثلاثاء", date: "2026-02-03", subject: "لغة عربية", time: "12:00", duration: "ساعة واحدة" },
    { day: "الأربعاء", date: "2026-02-11", subject: "النسج العام", time: "10:30", duration: "ساعة واحدة" },
    { day: "الخميس", date: "2026-02-19", subject: "علم النفس السلوكي", time: "10:30", duration: "ساعة واحدة" },
    { day: "الأحد", date: "2026-03-01", subject: "التشريح الوصفي 1", time: "12:00", duration: "ساعة واحدة" }
];

/* بيانات الملاحظات (Notes Data)
   تم استبدال الايموجي بأيقونات Font Awesome
   وتم تنسيق النصوص باستخدام HTML لتظهر بشكل جميل داخل المودال
*/
const notesData = [
    {
        title: "الكيمياء الحيوية و البيولوجيا الجزيئية",
        icon: "fa-flask",
        date: "2026-01-27",
        content: `
            <div style="text-align: right;">
                <p>مع اقتراب أول امتحان، إليكم التفاصيل الكاملة للمادة:</p>
                
                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-calendar-check"></i> أولاً: موعد الامتحان
                </h4>
                <p><strong>يوم الثلاثاء 27 / 1 / 2026</strong> (الامتحان مثبت).</p>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-list-ul"></i> ثالثاً: المحاضرات المطلوبة بالتفصيل
                </h4>
                
                <h5 style="color: var(--secondary-color); margin-top: 10px;"><i class="fas fa-vial"></i> قسم الكيمياء الحيوية:</h5>
                <ul style="list-style-type: disc; margin-right: 20px; margin-bottom: 10px;">
                    <li>سكريات (1 + 2)</li>
                    <li>الحموض الأمينية + الهيموغلوبين والميوغلوبين</li>
                    <li>البروتينات</li>
                    <li>شحوم (1 + 2 + 3)</li>
                    <li>كيمياء الأنسجة</li>
                    <li>أنزيمات (1 + 2 + 3)</li>
                </ul>
                
                <div style="background-color: rgba(220, 53, 69, 0.1); padding: 10px; border-radius: 5px; border-right: 3px solid var(--danger-color); margin-bottom: 10px;">
                    <strong><i class="fas fa-times-circle" style="color: var(--danger-color);"></i> المحذوفات:</strong>
                    الماء و PH - الأغشية الحيوية - النكليوتيدات.
                </div>

                <h5 style="color: var(--secondary-color); margin-top: 10px;"><i class="fas fa-dna"></i> قسم البيولوجيا الجزيئية:</h5>
                <ol style="margin-right: 20px;">
                    <li>بنية الحموض النووية</li>
                    <li>تعضي الدنا وتنسخه والتعبير الجيني</li>
                    <li>تخليق الدنا وتحوّره</li>
                </ol>
                
                <div style="background-color: rgba(220, 53, 69, 0.1); padding: 10px; border-radius: 5px; border-right: 3px solid var(--danger-color);">
                    <strong><i class="fas fa-times-circle" style="color: var(--danger-color);"></i> المحذوفات:</strong>
                    المحاضرة الرابعة (الرنا الصغري والنكليوتيدات).
                </div>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-lightbulb"></i> نصائح هامة
                </h4>
                <ul style="margin-right: 20px;">
                    <li>ركّزوا على الفهم قبل الحفظ، خصوصًا في السكريات، الشحوم، والأنزيمات.</li>
                    <li>حاولوا ربط المحاضرات ببعضها حتى تكتمل الصورة.</li>
                    <li>المصادر متوفرة على قناة الفريق العلمي.</li>
                </ul>
            </div>
        `
    },
    {
        title: "اللغة العربية",
        icon: "fa-book-open",
        date: "2026-02-03",
        content: `
            <div style="text-align: right;">
                <h4 style="color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-calendar-day"></i> موعد الامتحان
                </h4>
                <p>يوم الثلاثاء 3 / 2 / 2026</p>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-clipboard-list"></i> المقرر المطلوب
                </h4>
                
                <h5 style="color: var(--secondary-color);"><i class="fas fa-pen-fancy"></i> مباحث النحو والصرف والإملاء:</h5>
                <p>جميع المباحث مطلوبة <span style="color: var(--danger-color); font-weight: bold;">ما عدا:</span></p>
                <ul style="margin-right: 20px; margin-bottom: 10px;">
                    <li>الفاعل</li>
                    <li>نائب الفاعل</li>
                    <li>الجار والمجرور</li>
                </ul>

                <h5 style="color: var(--secondary-color);"><i class="fas fa-exclamation-triangle"></i> الأخطاء الشائعة:</h5>
                <p>من 1 إلى 50.</p>

                <h5 style="color: var(--secondary-color);"><i class="fas fa-scroll"></i> النصوص المختارة:</h5>
                <p>المطلوب الأبيات السبعة الأولى من كل نص:</p>
                <ul style="list-style-type: circle; margin-right: 20px;">
                    <li>نسور الفداء – زكي قنصل</li>
                    <li>أمتي – عمر أبو ريشة</li>
                    <li>عانقي النور – عبدالله الصالح العثيمين</li>
                    <li>يا تونس الخضراء – نزار قباني</li>
                    <li>سنعود – عبد الكريم الكرمي</li>
                    <li>عاش الفداء – محمد عبده غانم</li>
                    <li>عاشق دمشقي – نزار قباني</li>
                    <li>ضفاف بردى – الأخطل الصغير</li>
                </ul>

                <div style="background-color: var(--light-bg); padding: 10px; border-radius: 5px; margin-top: 15px;">
                    <i class="fas fa-info-circle" style="color: var(--primary-color);"></i>
                    <strong>ملاحظة:</strong> الدورات ضرورية جداً لفهم طريقة الأسئلة. ركزوا على التطبيق وليس الحفظ فقط.
                </div>
            </div>
        `
    },
    {
        title: "اللغة الإنكليزية 3",
        icon: "fa-language",
        date: "2026-02-01",
        content: `
            <div style="text-align: right;">
                <h4 style="color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-clock"></i> التفاصيل الامتحانية
                </h4>
                <p><strong>الموعد:</strong> الأحد 1 / 2 الساعة 10:30.</p>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-book"></i> المقرر والملفات
                </h4>
                <ul style="margin-right: 20px;">
                    <li>المقرر الأساسي (مع حذف الوحدة 19: The Eye).</li>
                    <li>ملف حلول تمارين المقرر.</li>
                    <li>ملف اللواحق والبوادئ (Prefixes & Suffixes).</li>
                    <li>ملف القواعد (مع مراجعة القواعد الأساسية من السنوات السابقة).</li>
                </ul>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-file-alt"></i> النصوص
                </h4>
                <div style="background-color: rgba(255, 193, 7, 0.2); padding: 10px; border-radius: 5px; border-right: 3px solid var(--warning-color);">
                    <i class="fas fa-exclamation-circle" style="color: var(--warning-color);"></i>
                    <strong>تنبيه هام:</strong> نص الامتحان سيكون خارجياً بالكامل.
                </div>
                <p style="margin-top: 10px;">المطلوب نظرياً للاطلاع (للتمرن على المفردات والفهم):</p>
                <ul style="margin-right: 20px;">
                    <li>جميع نصوص المقرر.</li>
                    <li>نصين إضافيين تم إعطاؤهما في المحاضرة.</li>
                </ul>
            </div>
        `
    },
    {
        title: "علم النسج العام",
        icon: "fa-microscope",
        date: "2026-02-11",
        content: `
            <div style="text-align: right;">
                <h4 style="color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-calendar-alt"></i> الموعد
                </h4>
                <p>الأربعاء 11 / 2 / 2026.</p>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-check-double"></i> المباحث المطلوبة
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> مدخل إلى علم النسج</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسيج الظهاري</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسيج الضام</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسج الدعامية</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسيج العضلي</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسيج العصبي</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> النسيج الغدي</div>
                    <div><i class="fas fa-check" style="color: var(--success-color); font-size: 0.8em;"></i> المستقبلات</div>
                </div>

                <h4 style="color: var(--danger-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-trash-alt"></i> المحذوفات
                </h4>
                <ul style="margin-right: 20px;">
                    <li><span style="color: var(--danger-color);">النسيج الدموي</span> (محذوف).</li>
                    <li>فقرة <strong>الأطوار</strong> ضمن محاضرة النسيج العظمي (المطلوب تعداد فقط دون شرح).</li>
                </ul>
            </div>
        `
    },
    {
        title: "علم النفس السلوكي",
        icon: "fa-brain",
        date: "2026-02-19",
        content: `
            <div style="text-align: right;">
                <h4 style="color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-clock"></i> التوقيت
                </h4>
                <p>الخميس 19 / 2 الساعة 10:30.</p>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-book-medical"></i> المقرر القديم (المطلوب)
                </h4>
                <ul style="margin-right: 20px; line-height: 1.8;">
                    <li>من البداية حتى صفحة 77 (الشخصيّة).</li>
                    <li>فصل الدافعيّة والتعلّم: ص 108 - 117.</li>
                    <li>فصل الذكاء (أنواع الذكاء عند غاردنر): ص 133 - 135.</li>
                    <li>فصل الذاكرة والنسيان والتعلّم: ص 158 - 179 (حتى فقرة النسيان والتعلّم).</li>
                    <li>فصل التفكير: من ص 196 حتى نهاية المقرّر.</li>
                </ul>

                <h4 style="color: var(--primary-color); margin-top: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                    <i class="fas fa-external-link-alt"></i> المحاضرات الخارجية
                </h4>
                <p>محاضرات إضافية من كتاب Oxford:</p>
                <ul style="list-style-type: square; margin-right: 20px;">
                    <li>علم النفس المعرفي.</li>
                    <li>المسبّبات المرضيّة.</li>
                    <li>الشخصيّة.</li>
                    <li>(إريكسون – بياجيه – التعلّق).</li>
                    <li>المحاضرة الأخيرة (مواضيع متنوّعة).</li>
                </ul>
            </div>
        `
    }
];

// --- Helper Functions ---

// تحويل الأرقام إلى كلمات (للتفقيط)
const numberToWords = (num) => {
    if (num === 0) return 'صفر';
    const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    
    if (num > 99) return num.toString();
    if (num < 10) return ones[num];
    if (num === 10) return 'عشرة';
    if (num < 20) return ones[num - 10] + ' عشر';
    
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return one > 0 ? `${ones[one]} و ${tens[ten]}` : tens[ten];
};

// التحقق مما إذا كان موعد الامتحان قد مضى
const hasDatePassed = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const examDate = new Date(dateString);
    return today > examDate;
};

// تفعيل وضع التحميل للأزرار
const setLoading = (isLoading, buttonElement) => {
    if (!buttonElement) return;
    if (isLoading) {
        buttonElement.classList.add('btn-loading');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('btn-loading');
        buttonElement.disabled = false;
    }
};

// دوال البحث
const searchById = (id) => typeof studentData !== 'undefined' ? studentData.find(student => student.uniId === id) : null;

const searchByName = (name, fatherName) => {
    if (typeof studentData === 'undefined') return null;
    return studentData.find(student => 
        student.name.trim().toLowerCase().includes(name.trim().toLowerCase()) &&
        student.fatherName.trim().toLowerCase().includes(fatherName.trim().toLowerCase())
    );
};

// دوال حساب التقدير واللون
const getPracticalGrade = (score) => {
    if (score >= 27) return { text: 'ممتاز', class: 'grade-excellent' };
    if (score >= 23) return { text: 'جيد جداً', class: 'grade-very-good' };
    if (score >= 18) return { text: 'متوسط', class: 'grade-good' };
    if (score >= 12) return { text: 'سيئ', class: 'grade-poor' };
    return { text: 'راسب', class: 'grade-fail' };
};

const getTheoreticalGrade = (score) => {
    if (score >= 96) return { text: 'ممتاز جداً', class: 'grade-excellent' };
    if (score >= 85) return { text: 'ممتاز', class: 'grade-very-good' };
    if (score >= 78) return { text: 'جيد جداً', class: 'grade-good' };
    if (score >= 70) return { text: 'متوسط', class: 'grade-medium' };
    if (score >= 60) return { text: 'سيئ', class: 'grade-poor' };
    return { text: 'راسب', class: 'grade-fail' };
};

const getSubjectIcon = (subjectName) => {
    if (subjectName.includes('الكيمياء')) return 'fa-flask';
    if (subjectName.includes('النسج')) return 'fa-microscope';
    if (subjectName.includes('التشريح')) return 'fa-user-md';
    if (subjectName.includes('النفس')) return 'fa-brain';
    if (subjectName.includes('العربية')) return 'fa-book-open';
    if (subjectName.includes('الانكليزية') || subjectName.includes('أجنبية')) return 'fa-language';
    return 'fa-file-alt';
};

// --- Core Calculations ---

const calculateSemesterAverage = (student) => {
    const subjects = Object.keys(student.scores);
    let totalSum = 0;
    let subjectCount = 0;
    
    subjects.forEach(subject => {
        const practicalScore = student.scores[subject].practical || 0;
        const theoreticalScore = student.scores[subject].theoretical || 0;
        const totalScore = practicalScore + theoreticalScore;
        
        if (totalScore > 0) {
            totalSum += totalScore;
            subjectCount++;
        }
    });

    return subjectCount > 0 ? (totalSum / subjectCount).toFixed(2) : 0;
};

const countFailedSubjects = (student) => {
    const subjects = Object.keys(student.scores);
    let failedCount = 0;
    
    subjects.forEach(subject => {
        const practicalScore = student.scores[subject].practical || 0;
        const theoreticalScore = student.scores[subject].theoretical || 0;
        const totalScore = practicalScore + theoreticalScore;
        
        // يعتبر راسباً إذا كانت الدرجة أقل من 60 وليست صفراً (أي صدرت النتيجة)
        if (totalScore > 0 && totalScore < 60) {
            failedCount++;
        }
    });
    return failedCount;
};

// --- Rendering Functions ---

// 1. عرض جدول الامتحانات
const renderSchedule = () => {
    const container = document.getElementById('scheduleContainer');
    if(!container) return;
    
    container.innerHTML = examSchedule.map(exam => {
        const isPassed = hasDatePassed(exam.date);
        const cardClass = isPassed ? 'schedule-card completed' : 'schedule-card';
        
        return `
            <div class="${cardClass}">
                <div class="schedule-header">${exam.subject}</div>
                <div class="schedule-body">
                    <div class="schedule-row">
                        <span class="schedule-label"><i class="fas fa-calendar-day"></i> اليوم</span>
                        <span class="schedule-value">${exam.day}</span>
                    </div>
                    <div class="schedule-row">
                        <span class="schedule-label"><i class="fas fa-clock"></i> التاريخ</span>
                        <span class="schedule-value">${exam.date}</span>
                    </div>
                    <div class="schedule-row">
                        <span class="schedule-label"><i class="fas fa-hourglass-half"></i> الوقت</span>
                        <span class="schedule-value">${exam.time}</span>
                    </div>
                    <div class="schedule-row">
                        <span class="schedule-label"><i class="fas fa-stopwatch"></i> المدة</span>
                        <span class="schedule-value">${exam.duration}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

// 2. عرض الملاحظات الهامة
const renderNotes = () => {
    const container = document.getElementById('notesContainer');
    if(!container) return;

    container.innerHTML = notesData.map((note, index) => {
        const isPassed = hasDatePassed(note.date);
        const cardClass = isPassed ? 'note-preview-card passed' : 'note-preview-card';
        
        return `
            <div class="${cardClass}">
                <div class="passed-badge"><i class="fas fa-check-circle"></i></div>
                <div class="note-preview-icon"><i class="fas ${note.icon}"></i></div>
                <div class="note-preview-title">${note.title}</div>
                <button class="note-details-btn" onclick="openNoteModal(${index})">
                    <i class="fas fa-eye"></i> انقر لمشاهدة التفاصيل
                </button>
            </div>
        `;
    }).join('');
};

// 3. عرض نتائج البحث وتوليد البطاقات
const displayStudentInfo = (student) => {
    resultsContainer.innerHTML = '';

    if (!student) {
        resultsContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i> عذرًا، لم يتم العثور على أي نتائج تطابق بحثك. يرجى التأكد من صحة المعلومات المدخلة.
            </div>`;
        return;
    }

    resultsContainer.innerHTML = `
        <div class="search-result-card">
            <h3><i class="fas fa-user-graduate"></i> نتيجة البحث</h3>
            <div class="student-info">
                <p>الاسم و النسبة: <span>${student.name}</span></p>
                <p>اسم الأب: <span>${student.fatherName}</span></p>
                <p>الرقم الجامعي: <span>${student.uniId}</span></p>
            </div>
            <button class="get-grades-btn" onclick="showGrades('${student.uniId}')">
                <i class="fas fa-file-invoice"></i> عرض كشف الدرجات
            </button>
        </div>
        <div id="gradesContainer" class="grades-container"></div>
    `;
};

const showGrades = (uniId) => {
    const student = searchById(uniId);
    const gradesContainer = document.getElementById('gradesContainer');
    if (!student || !gradesContainer) return;

    let practicalCardsHTML = '';
    let theoreticalCardsHTML = '';

    // توليد بطاقات العملي
    practicalSubjectsList.forEach(subject => {
        const score = student.scores[subject];
        const practicalScore = (score?.practical === "غير موجود") ? 0 : (score?.practical || 0);
        const icon = getSubjectIcon(subject);

        if (practicalScore === 0) {
            practicalCardsHTML += `
                <div class="subject-card border-pending">
                    <div class="subject-card-icon"><i class="fas ${icon}"></i></div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <p class="no-grades-message"><i class="fas fa-hourglass-start"></i> لم تصدر الدرجات بعد</p>
                    </div>
                </div>`;
        } else {
            const grade = getPracticalGrade(practicalScore);
            const result = practicalScore >= 12; // درجة النجاح في العملي
            const resultClass = result ? 'result-pass' : 'result-fail';
            const borderClass = result ? 'border-pass' : 'border-fail';

            practicalCardsHTML += `
                <div class="subject-card ${borderClass}">
                    <div class="subject-card-icon"><i class="fas ${icon}"></i></div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <div class="subject-details">
                            <div class="detail-row"><span class="detail-label">درجة العملي:</span><span class="detail-value">${practicalScore}</span></div>
                            <div class="detail-row"><span class="detail-label">كتابةً:</span><span class="detail-value">${numberToWords(practicalScore)}</span></div>
                            <div class="detail-row"><span class="detail-label">النتيجة:</span><span class="detail-value ${resultClass}">${result ? 'ناجح' : 'راسب'}</span></div>
                            <div class="detail-row"><span class="detail-label">التقدير:</span><span class="detail-value ${grade.class}">${grade.text}</span></div>
                        </div>
                    </div>
                </div>`;
        }
    });

    // توليد بطاقات النظري
    theoreticalSubjectsList.forEach(subject => {
        const score = student.scores[subject];
        const theoreticalScore = score?.theoretical || 0;
        const practicalScore = (score?.practical === "غير موجود") ? 0 : (score?.practical || 0);
        const total = practicalScore + theoreticalScore;
        const icon = getSubjectIcon(subject);

        if (theoreticalScore === 0) {
            theoreticalCardsHTML += `
                <div class="subject-card border-pending">
                    <div class="subject-card-icon"><i class="fas ${icon}"></i></div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <p class="no-grades-message"><i class="fas fa-hourglass-start"></i> بانتظار صدور النتائج</p>
                    </div>
                </div>`;
        } else {
            const grade = getTheoreticalGrade(total);
            const result = total >= 60; // درجة النجاح في النظري (المجموع)
            const resultClass = result ? 'result-pass' : 'result-fail';
            const borderClass = result ? 'border-pass' : 'border-fail';

            theoreticalCardsHTML += `
                <div class="subject-card ${borderClass}">
                    <div class="subject-card-icon"><i class="fas ${icon}"></i></div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <div class="subject-details">
                            <div class="detail-row"><span class="detail-label">عملي / نظري:</span><span class="detail-value">${practicalScore > 0 ? practicalScore : '-'} / ${theoreticalScore}</span></div>
                            <div class="detail-row"><span class="detail-label">المجموع:</span><span class="detail-value">${total}</span></div>
                            <div class="detail-row"><span class="detail-label">كتابةً:</span><span class="detail-value">${numberToWords(total)}</span></div>
                            <div class="detail-row"><span class="detail-label">النتيجة:</span><span class="detail-value ${resultClass}">${result ? 'ناجح' : 'راسب'}</span></div>
                            <div class="detail-row"><span class="detail-label">التقدير:</span><span class="detail-value ${grade.class}">${grade.text}</span></div>
                        </div>
                    </div>
                </div>`;
        }
    });

    const average = calculateSemesterAverage(student);
    const failedSubjects = countFailedSubjects(student);

    gradesContainer.innerHTML = `
        <div class="results-section">
            <h4 class="section-title"><i class="fas fa-vials"></i> القسم العملي</h4>
            <div class="subjects-cards-container">${practicalCardsHTML}</div>
        </div>
        <div class="results-section">
            <h4 class="section-title"><i class="fas fa-book-reader"></i> القسم النظري</h4>
            <div class="subjects-cards-container">${theoreticalCardsHTML}</div>
        </div>
        <div class="summary-card">
            <h4><i class="fas fa-chart-line"></i> ملخص الفصل الأول</h4>
            <div class="summary-data">
                <div class="summary-item"><p>المعدل الفصلي</p><span>${average}%</span></div>
                <div class="summary-item"><p>مواد الحمل</p><span style="color: ${failedSubjects > 0 ? 'var(--danger-color)' : 'var(--success-color)'}">${failedSubjects}</span></div>
            </div>
        </div>
        
        <div class="print-btn-container">
            <button class="print-btn" onclick="printResults('${uniId}')">
                <i class="fas fa-print"></i> طباعة كشف الدرجات
            </button>
        </div>
    `;
    
    gradesContainer.classList.add('show');
    // تمرير الشاشة للأسفل قليلاً لرؤية النتائج
    setTimeout(() => {
        gradesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
};

// --- Note Modal Logic ---
window.openNoteModal = (index) => {
    const note = notesData[index];
    const modal = document.getElementById('noteModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div class="note-header" style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
            <div class="note-icon" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 10px;">
                <i class="fas ${note.icon}"></i>
            </div>
            <h3 class="note-title" style="color: var(--text-dark); margin: 0; text-align: center;">
                ${note.title}
            </h3>
        </div>
        <div class="note-full-content" style="font-family: var(--font-main); color: var(--text-dark);">
            ${note.content}
        </div>
    `;
    
    modal.classList.add('show');
};

const closeNoteModalBtn = document.getElementById('closeNoteModal');
if (closeNoteModalBtn) {
    closeNoteModalBtn.addEventListener('click', () => {
        document.getElementById('noteModal').classList.remove('show');
    });
}

const noteModalOverlay = document.getElementById('noteModal');
if (noteModalOverlay) {
    noteModalOverlay.addEventListener('click', (e) => {
        if (e.target === noteModalOverlay) {
            noteModalOverlay.classList.remove('show');
        }
    });
}

// --- Printing Logic ---
window.printResults = (uniId) => {
    const student = searchById(uniId);
    if (!student) return;

    const average = calculateSemesterAverage(student);
    const dateNow = new Date().toLocaleString('ar-SY');

    let tableRows = '';
    theoreticalSubjectsList.forEach(subject => {
        const score = student.scores[subject];
        const theoreticalScore = score?.theoretical || 0;
        const practicalScore = (score?.practical === "غير موجود" || !score?.practical) ? 0 : score.practical;
        const total = practicalScore + theoreticalScore;
        
        if (total > 0) {
            const status = total >= 60 ? 'ناجح' : 'راسب';
            tableRows += `
                <tr>
                    <td>${subject}</td>
                    <td>${practicalScore > 0 ? practicalScore : '-'}</td>
                    <td>${theoreticalScore}</td>
                    <td>${total}</td>
                    <td>${numberToWords(total)}</td>
                    <td>${status}</td>
                </tr>
            `;
        }
    });

    const printWindow = window.open('', '_blank');
    
    const printContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <title>كشف درجات - ${student.name}</title>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
            <style>
                body { font-family: 'Cairo', sans-serif; padding: 20px; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 10px; }
                .student-details { margin-bottom: 20px; font-size: 1.1rem; line-height: 1.8; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid #000; padding: 10px; text-align: center; font-size: 0.9rem; }
                th { background-color: #f2f2f2; font-weight: bold; }
                .footer-text { margin-top: 20px; font-weight: bold; border: 1px dashed #000; padding: 10px; display: inline-block; }
                .bottom-section { margin-top: 50px; display: flex; justify-content: space-between; align-items: flex-end; }
                .transcript-label { font-size: 1.5rem; border: 3px double #000; padding: 5px 20px; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>وزارة التعليم العالي و البحث العلمي</h2>
                <h3>جامعة حمص - كلية الطب البشري</h3>
                <h4>نتائج امتحانات السنة الثانية</h4>
            </div>
            
            <div class="student-details">
                يشهد قسم الامتحانات بأن الطالب/ة: <strong>${student.name}</strong><br>
                اسم الأب: <strong>${student.fatherName}</strong><br>
                قد نال/ت الدرجات التالية في الدورة الفصلية الأولى للعام الدراسي 2026:
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>المقرر</th>
                        <th>درجة العملي</th>
                        <th>درجة النظري</th>
                        <th>المجموع رقماً</th>
                        <th>المجموع كتابةً</th>
                        <th>النتيجة</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            
            <div class="footer-text">
                المعدل الفصلي العام: ${average}%
            </div>
            
            <div class="bottom-section">
                <div>
                    <div class="transcript-label">هذه الوثيقة غير رسمية</div>
                    <div style="margin-top: 10px; font-size: 0.8rem;">تاريخ الطباعة: ${dateNow}</div>
                </div>
                <div style="text-align: center;">
                    <svg id="barcode"></svg>
                    <div>الرقم الجامعي: ${student.uniId}</div>
                </div>
            </div>

            <script>
                window.onload = function() {
                    JsBarcode("#barcode", "${student.uniId}", {
                        format: "CODE128",
                        lineColor: "#000",
                        width: 2,
                        height: 40,
                        displayValue: false
                    });
                    setTimeout(function() { window.print(); }, 800);
                };
            </script>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
};

// --- UI & Events ---

// Dark Mode Toggle
const enableDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if(darkModeToggle) darkModeToggle.checked = true;
};

const disableDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    if(darkModeToggle) darkModeToggle.checked = false;
};

if(darkModeToggle) {
    darkModeToggle.addEventListener('change', (e) => {
        e.target.checked ? enableDarkMode() : disableDarkMode();
    });
}

// Restore theme preference
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

// Sidebar Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initial Renders
    renderSchedule();
    renderNotes();

    // Menu Controls
    const menuToggle = document.getElementById('menuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');
    const pageContents = document.querySelectorAll('.page-content');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
            sidebarOverlay.classList.add('show');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        });
    }

    // Page Switching
    sidebarMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = item.getAttribute('data-page');
            
            pageContents.forEach(page => page.classList.remove('active'));
            const targetElement = document.getElementById(`${targetPage}Page`);
            if(targetElement) targetElement.classList.add('active');
            
            // Close Sidebar on mobile after selection
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
            window.scrollTo(0, 0);
        });
    });
    
    // Swipe to Close Sidebar (RTL awareness)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (sidebar.classList.contains('open')) {
            // In RTL, Sidebar is on Right. Swipe Right (End > Start) to close? 
            // Usually, swipe towards the edge closes it.
            if (touchEndX > touchStartX + 50) { 
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('show');
            }
        }
    });
});

// Search Type Toggle
searchTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'id') {
            searchByIdForm.classList.add('active');
            searchByNameForm.classList.remove('active');
        } else {
            searchByIdForm.classList.remove('active');
            searchByNameForm.classList.add('active');
        }
        resultsContainer.innerHTML = '';
    });
});

// Search Handlers
if (searchByIdForm) {
    searchByIdForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setLoading(true, searchIdBtn);
        
        setTimeout(() => {
            const id = uniIdInput.value.trim();
            const student = searchById(id);
            displayStudentInfo(student);
            setLoading(false, searchIdBtn);
        }, 600);
    });
}

if (searchByNameForm) {
    searchByNameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setLoading(true, searchNameBtn);
        
        setTimeout(() => {
            const name = nameInput.value.trim();
            const fatherName = fatherNameInput.value.trim();
            const student = searchByName(name, fatherName);
            displayStudentInfo(student);
            setLoading(false, searchNameBtn);
        }, 600);
    });
}

// PDF Download Simulation
const downloadBtn = document.getElementById('downloadPdfBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        setLoading(true, this);
        setTimeout(() => {
            // For demo purposes - replace '777.pdf' with actual path if needed
            const link = document.createElement('a');
            link.href = '777.pdf'; 
            link.download = 'توزيع_الطلاب.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setLoading(false, this);
        }, 1500);
    });
}