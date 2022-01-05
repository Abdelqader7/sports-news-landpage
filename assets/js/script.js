let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let dropdownMenuButton = document.getElementById("dropdownMenuButton1");
let paragraph = document.getElementById("para");
let stc = document.getElementById("stc");
let mobily = document.getElementById("mobily");
let zain = document.getElementById("zain");
let continueBtn = document.getElementById("continue");
let agree = document.getElementById("agree");
let terms = document.getElementById("terms");
let example = document.getElementsByName('Mobile')[0];
let mobile = document.getElementById("mobile");
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
        paragraph.textContent = "أحصل على رسائل نصيّة لأحدث الأخبار الرياضيّة مقابل سعر زهيد"
        stc.textContent = "إس تي سي";
        mobily.textContent = "موبايلي";
        zain.textContent = "زين";
        continueBtn.textContent = "استمرار";
        agree.textContent = "النقر على الزر يعني أنك موافق على ";
        terms.textContent = "الشروط والأحكام";
        example.style.textAlign = "center";
        example.placeholder = "966xxxxxxxxx :مثال";
        mobile.textContent = "أدخل رقم هاتفك";
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
        paragraph.textContent = `Get text messages for the latest sports news by lower prices!`
        stc.textContent = "STC";
        mobily.textContent = "Mobily";
        zain.textContent = "Zain";
        continueBtn.textContent = "Continue";
        agree.textContent = "Clicking the button means you are okay with";
        terms.textContent = "Terms & Conditions";
        example.placeholder = "Example: 966xxxxxxxxx";
        mobile.textContent = "Enter Your Mobile Number";
        alert.textContent = "Welcome to Next Stage for Sports News.";
        developer.textContent = "A Full-Stack Developer";
        copyright.textContent = "© Abdelqader - Next Stage"
        subscribe_now.textContent = "Subscribe Now";
        encourage.textContent = "By subscribing, you will be with one of the first people who getting the latest news about several sports!";
    }
}
