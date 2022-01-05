let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let dropdownMenuButton = document.getElementById("dropdownMenuButton1");
let paragraph = document.getElementById("para2");
let subscribeBtn = document.getElementById("subscribe");
let agree = document.getElementById("agree");
let terms = document.getElementById("terms");
let code = document.getElementById("code");
let alert = document.getElementById("alert");
let developer = document.getElementById("developer");
let copyright = document.getElementById("copyright");
let subscribe_now = document.getElementById("subscribe_now");
let encourage = document.getElementById("encourage");

let closeBtn = document.getElementById("close");

closeBtn.onclick = () => {
    document.getElementById("alert").style.position = "absolute";
    document.getElementById("alert").style.visibility = "hidden";
}

let paras = document.getElementsByTagName("p");

arabic.onclick = () => {
    setLanguage("arabic");
    localStorage.setItem("Language", "arabic");
};
english.onclick = () => {
    setLanguage("english");
    localStorage.setItem("Language", "english");
};

onload = () => {
    setLanguage(localStorage.getItem("Language"));
}

const setLanguage = (getLanguage) => {
    if (getLanguage === "arabic") {
        dropdownMenuButton.textContent = "العربية";
        paragraph.style.direction = "right"
        paragraph.textContent = `هو اشتراك مدفوع ، وسيصبح التجديد تلقائيًا لمشتركي زين بكلفة 7 (شامل قيمة الضريبة المضافة) ريال س و أسبوعي ل STC وموبايلي بكلفة 5.75 (شامل قيمة الضريبة المضافة) ريال س ، لا يوجد التزام ، يمكنك الإلغاء في أي وقت عن طريق الرابط أو عن طريق إرسال
        U3 إلى 705711 لزين
        رسالة فارغة إلى 800444 ل STC..`
        subscribeBtn.textContent = "اشتراك";
        agree.textContent = "النقر على الزر يعني أنك موافق على ";
        terms.textContent = "الشروط والأحكام";
        code.textContent = "أدخل الكود الخاص بك";
        alert.textContent = ".أهلاً بك في المرحلة التالية لأخبار الرياضة";
        alert.style.textAlign = "right";
        closeBtn.style.float = "left";
        developer.textContent = "مطور برمجيات";
        copyright.textContent = " عبدالقادر - المرحلة التالية ©";
        subscribe_now.textContent = "اشترك الآن";
        encourage.textContent = "من خلال اشتراكك الآن، سوف تكون من بين أول الأشخاص لتخصل على آخر آخبار الرياضات المختلفة";
    }
    if (getLanguage === "english") {
        dropdownMenuButton.textContent = "English";
        paragraph.textContent = `It is a paid subscription, and the renewal will be automatically for Zain subscribers at a cost of 7 (inclusive of value added tax) SAR, weekly for STC and Mobily at a cost of 5.75 (inclusive of VAT) SAR, there is no obligation, you can cancel at any time via the link or via send
        U3 to 705711 for Zain,
        Blank message to 800444 for STC or Blank message to 901555 for Mobily.`
        subscribeBtn.textContent = "Subscribe";
        agree.textContent = "Clicking the button means you are okay with";
        terms.textContent = "Terms & Conditions";
        code.textContent = "Enter The Code";
        alert.textContent = "Welcome to Next Stage for Sports News.";
        developer.textContent = "A Full-Stack Developer";
        copyright.textContent = "© Abdelqader - Next Stage"
        subscribe_now.textContent = "Subscribe Now";
        encourage.textContent = "By subscribing, you will be with one of the first people who getting the latest news about several sports!";
    }
}
