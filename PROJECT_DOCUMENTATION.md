# دوكومنتيشن شامل لمشروع Orile-Next

## 🌟 نظرة عامة على المشروع

**Orile-Next** هو موقع إلكتروني لخدمات طبية/صحية مبني باستخدام Next.js 15 مع دعم كامل للغات العربية والإنجليزية. المشروع يستخدم أحدث التقنيات الحديثة في تطوير مواقع الويب ويركز على تجربة المستخدم المتطورة.

---

## 📦 التقنيات المستخدمة

### Framework الأساسي

- **Next.js 15.2.4** - App Router (النظام الجديد)
- **React 19** - واجهة المستخدم الأساسية
- **TypeScript 5** - أمان الأكواد وتطوير أفضل

### إدارة الحالة والبيانات

- **Redux Toolkit 2.6.1** - إدارة الحالة العامة
- **React-Redux 9.2.0** - ربط Redux بـ React
- **Axios 1.8.4** - طلبات API

### التدويل (Internationalization)

- **next-intl 4.0.2** - نظام الترجمة الأساسي
- **next-i18next 15.4.2** - نظام ترجمة إضافي (قديم)
- دعم كامل للعربية والإنجليزية مع RTL/LTR

### UI/UX وتحسين التجربة

- **Bootstrap 5.3.5** & **React-Bootstrap 2.10.9** - نظام التصميم
- **Framer Motion 12.6.3** - انيميشن متقدم
- **AOS 2.3.4** - Animate On Scroll
- **React Animated Cursor 2.11.2** - مؤشر متحرك مخصص

### المكتبات الإضافية

- **React Icons 5.5.0** - أيقونات شاملة
- **Swiper 11.2.6** - سلايدرات متطورة
- **React Slick 0.30.3** - كاروسيل إضافي
- **jQuery 3.7.1** - للتوافق مع بعض المكونات

---

## 🏗️ هيكل المشروع

### 1. **مجلد الجذر (Root)**

```
orile-next/
├── package.json           # تبعيات وسكريبتات المشروع
├── next.config.ts         # إعدادات Next.js
├── next-i18next.config.js # إعدادات الترجمة القديمة
├── tsconfig.json          # إعدادات TypeScript
├── eslint.config.mjs      # قواعد ESLint
├── middleware.tsx         # Middleware للترجمة
├── global.d.ts            # تعريفات TypeScript العامة
└── README.md             # ملف التوثيق
```

### 2. **مجلد `app/` - التطبيق الرئيسي**

#### أ) **هيكل التوجيه (Routing)**

```
app/
├── layout.tsx                  # Layout أساسي (لا يُستخدم حالياً)
├── page.module.css            # ستايل الصفحة الرئيسية
├── favicon.ico               # أيقونة الموقع
└── (main)/                   # مجموعة التوجيه الرئيسية
    └── [locale]/             # صفحات مترجمة ديناميكياً
        ├── layout.tsx        # Layout للصفحات المترجمة
        ├── page.tsx          # الصفحة الرئيسية
        ├── blog/            # صفحات المدونة
        ├── cart/            # صفحات السلة
        ├── contact-us/      # صفحة التواصل
        ├── devices/         # صفحات الأجهزة
        ├── doctors/         # صفحات الأطباء
        ├── offers/          # صفحات العروض
        └── user/            # صفحات المستخدم
```

#### ب) **المكونات (Components)**

```
app/components/
├── core/                    # مكونات أساسية
│   ├── layout/             # مكونات التخطيط
│   │   ├── Header.tsx      # رأس الموقع + إعدادات عامة
│   │   ├── Footer.tsx      # تذييل الموقع
│   │   └── NavBar.tsx      # شريط التنقل
│   └── ui/                 # مكونات واجهة المستخدم
│       └── Youtube.tsx     # مشغل يوتيوب مخصص
├── sections/               # أقسام الصفحة الرئيسية
│   ├── Hero.tsx           # قسم البطل الرئيسي
│   ├── About.tsx          # قسم عنا
│   ├── Services.tsx       # قسم الخدمات
│   ├── Blog.tsx           # قسم المدونة
│   └── ContactUs.tsx      # قسم التواصل
├── Blogs/                 # مكونات المدونة
├── Devices/               # مكونات الأجهزة
└── Offers/                # مكونات العروض
```

### 3. **نظام إدارة الحالة (Redux)**

```
redux/
├── store.ts               # إعداد المتجر الرئيسي
├── Actions/              # الإجراءات
│   └── HeroAction.ts     # إجراءات قسم البطل (فارغ حالياً)
└── Reducers/             # المختزلات
    ├── HomeSlice.ts      # مختزل الصفحة الرئيسية
    └── Home/
        └── HeroSlice.ts  # مختزل قسم البطل
```

### 4. **نظام التدويل**

```
i18n/                     # إعدادات التدويل الحديثة
├── navigation.ts         # تنقل مترجم
├── routing.ts           # إعداد المسارات المترجمة
└── request.ts           # طلبات الترجمة

messages/                # ملفات الترجمة
├── ar.json             # الترجمة العربية
└── en.json             # الترجمة الإنجليزية

next-i18next.config.js  # إعدادات الترجمة القديمة
```

### 5. **الخدمات والمساعدات**

```
Hooks/                   # خطافات مخصصة
├── BaseUrl.ts          # إعداد Axios للـ API
├── AuthUser.ts         # إدارة المصادقة
├── Home.ts             # خدمات الصفحة الرئيسية
└── useGetData.ts       # خطاف لجلب البيانات

app/Hooks/              # خطافات إضافية
└── generalHook.tsx     # خطاف عام للتحميل

providers/              # موفري السياق
├── ReduxProvider.tsx   # موفر Redux
└── AosProvider.tsx     # موفر AOS للانيميشن
```

### 6. **الموارد الثابتة**

```
public/                 # الملفات العامة
├── images/            # صور المشروع
├── locales/          # ملفات الترجمة المحلية
│   ├── ar/           # ترجمات عربية
│   └── en/           # ترجمات إنجليزية
└── *.svg             # أيقونات SVG

app/styles/           # ملفات CSS
├── globals.css       # ستايل عام
├── theme.css         # ثيم المشروع
├── rtl.css          # ستايل الـ RTL للعربية
├── bootstrap.css     # Bootstrap
├── custom.css        # تخصيصات إضافية
└── ...              # ملفات CSS متنوعة
```

---

## ⚙️ الوظائف الأساسية

### 1. **نظام التدويل المتقدم**

- **اللغات المدعومة**: العربية (افتراضية) والإنجليزية
- **اتجاه النص**: RTL للعربية، LTR للإنجليزية
- **التوجيه المترجم**: `/[locale]/page` نمط
- **ترجمة ديناميكية**: تحميل الترجمات حسب الحاجة
- **تبديل اللغة**: في الوقت الفعلي بدون إعادة تحميل

### 2. **إدارة الحالة بـ Redux**

```typescript
// Store Configuration
export const store = configureStore({
  reducer: {
    home: homeReducer, // بيانات الصفحة الرئيسية
    Hero: HeroReducer, // بيانات قسم البطل
  },
});

// Example: Hero Slice
export const fetchHeroData = createAsyncThunk(
  "home/fetchHeroData",
  async () => {
    const response = await BaseUrl.get("/slider");
    return response.data;
  }
);
```

### 3. **نظام API والاتصال بالخادم**

```typescript
// BaseUrl Configuration
const BaseUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.0:8000/api/front",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

### 4. **نظام التخطيط المرن**

- **Layout متداخل**: Root layout + Locale-specific layout
- **مكونات مشتركة**: Header, Footer, NavBar
- **تحميل الخطوط**: Cairo font للنصوص العربية
- **Provider التسلسل**: Redux → NextIntl → AOS

### 5. **تحسين تجربة المستخدم**

- **تحميل تدريجي**: Loading states مع useGeneralHook
- **انيميشن متقدم**: AOS + Framer Motion
- **مؤشر مخصص**: React Animated Cursor
- **سلايدرات متطورة**: Swiper للمحتوى التفاعلي

---

## 🚀 السكريبتات والأوامر

```json
{
  "dev": "next dev --turbopack", // تشغيل التطوير مع Turbopack
  "build": "next build", // بناء المشروع للإنتاج
  "start": "next start", // تشغيل المشروع المبني
  "lint": "next lint" // فحص الأكواد
}
```

---

## 📋 نقاط القوة في المشروع

### ✅ **المزايا**

1. **تقنيات حديثة**: Next.js 15 + React 19 + TypeScript
2. **تدويل محترف**: نظام ترجمة متكامل مع RTL/LTR
3. **إدارة حالة متطورة**: Redux Toolkit مع TypeScript
4. **تجربة مستخدم ممتازة**: انيميشن وتحميل سلس
5. **هيكل منظم**: فصل المكونات والخدمات بشكل احترافي
6. **أداء محسن**: App Router + Turbopack
7. **متجاوب تماماً**: Bootstrap 5 + تصميم مرن

### ⚠️ **نقاط تحتاج تحسين**

1. **ملفات ترجمة مكررة**: next-i18next و next-intl معاً
2. **بعض المكونات غير مستخدمة**: ملفات Actions فارغة
3. **تعليقات كثيرة**: أكواد معلقة تحتاج تنظيف
4. **خلط في أنظمة CSS**: عدة ملفات CSS متداخلة

---

## 🔧 التشغيل والتطوير

### متطلبات التشغيل

- Node.js 18+
- npm أو yarn
- متصفح حديث

### خطوات التشغيل

```bash
# تنزيل التبعيات
npm install

# تشغيل وضع التطوير
npm run dev

# بناء للإنتاج
npm run build

# تشغيل الإنتاج
npm start
```

### متغيرات البيئة

```env
NEXT_PUBLIC_API_URL=http://127.0.0.0:8000/api/front
```

---

## 📝 خلاصة المشروع

**مشروع Orile-Next** هو موقع طبي متكامل مبني بأحدث التقنيات. يتميز بنظام تدويل احترافي، إدارة حالة متطورة، وتجربة مستخدم متميزة. المشروع يستخدم Next.js 15 مع App Router الجديد، Redux Toolkit لإدارة الحالة، ونظام ترجمة متكامل يدعم العربية والإنجليزية مع اتجاه النص المناسب.

الهيكل العام منظم بشكل احترافي مع فصل واضح بين المكونات، الخدمات، وإدارة الحالة. المشروع جاهز للتطوير والتوسع مع إمكانيات كبيرة لإضافة المزيد من الميزات.

---

إزالة المكتبات غير المستخدمة: تم تنظيف المشروع من أي مكتبة غير مستخدمة.

استبدال <img> بـ Image من Next.js: لتفعيل الـ responsive والـ lazy loading تلقائيًا.

تصحيح استدعاء الـ component: التغيير من <About></About> إلى <About />.

صفحة Home - Services: عمل component خاص للجزء المتكرر وإرسال البيانات كـ props.

صفحة Home - How Work: إضافة delay بين العناصر لظهورها بشكل متتالي باستخدام مكتبة AOS (fade-up).

صفحة Home - FAQ (faquestion): وضع الأسئلة والأجوبة داخل object، تكرارها بالـ map()، مع إضافة animation خفيف عبر Framer Motion.

صفحة Home - Testimonial: استبدال Swiper بـ Framer Motion بسبب مشكلة في الاستدعاء، ولأنه أبسط وأسرع.

صفحة Home - Blog وصفحة Blog: توحيد طريقة عرض البيانات بعمل component خارجي مشترك.

صفحات Doctor, Offer, Device: تعديل أسماء الـ component إلى CapitalCase ليتم التعرف عليها كمكونات React.

---

1- حذف جميع الملفات الغير مستخدمه

2- تنظيم الملفات والفولدرات بشكل مرتب

3- وضع كود ال html في ملف خارج المشروع

4- تم حل مشكله التي تظهر في بدء الويبسايت حيث تم استخدام <html> <body> tags and fonts inside localLayout والمفروض يستخدم في ال rootLayout فقط

5- ذيادة صفحه لل [errors] باستخدام next rout page

6- تغيير ال <a> from html tage to <Link> from nextjs في جميع الصفحات الاستفادة من الـ Client-side navigation (تنقل أسرع بدون إعادة تحميل الصفحة)

---

feat: add Tailwind CSS configuration and dependencies

- Updated package.json to include Tailwind CSS and related dependencies.
- Created postcss.config.mjs to configure PostCSS with Tailwind CSS.
- Added tailwind.config.js to define custom theme and content paths for Tailwind CSS.
