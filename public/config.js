// config.js - الملف الموحد لإدارة الروابط والـ API
const CONFIG = {
    // ضع رابط نفق كلود فلير الخاص بك هنا كعنوان أساسي وثابت للموبايل
    SERVER_URL: "http://156.205.217.214:80"
};

// كود ذكي: إذا كنت تفتح المشروع من الكمبيوتر كـ Localhost، سيتعرف عليه تلقائياً
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // إذا كنت شغال تجربة على الـ PC مباشرة، سيستخدم المنفذ المحلي
    CONFIG.SERVER_URL = window.location.origin; 
}

// تجميد الكائن لمنع التلاعب به أثناء تشغيل التطبيق
Object.freeze(CONFIG);