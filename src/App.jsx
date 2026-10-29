import { useEffect, useRef, useState } from 'react';
import { pageMarkup } from './pageMarkup';
import './styles.css';

export default function App() {
  const pageRef = useRef(null);
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const menuToggle = root.querySelector('#menuToggle');
    const mainNav = root.querySelector('#mainNav');
    const languageToggle = root.querySelector('#languageToggle');
    const hero = root.querySelector('.hero');
    const contactForm = root.querySelector('#contactForm');
    const formStatus = root.querySelector('#formStatus');
    const year = root.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();

    const applyLanguage = (lang) => {
      const english = lang === 'en';
      document.documentElement.lang = lang;
      document.documentElement.dir = english ? 'ltr' : 'rtl';
      if (hero) hero.dir = english ? 'ltr' : 'rtl';
      document.body.classList.toggle('english-hero', english);
      root.querySelectorAll('[data-ar][data-en]').forEach((element) => {
        element.innerHTML = english ? element.dataset.en : element.dataset.ar;
      });
      if (languageToggle) {
        languageToggle.textContent = english ? 'عربي' : 'EN';
        languageToggle.setAttribute('aria-label', english ? 'Switch to Arabic' : 'Switch to English');
      }
    };
    applyLanguage(language);

    const onLanguage = () => setLanguage((current) => current === 'ar' ? 'en' : 'ar');
    const onMenu = () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
    };
    const closeMenu = () => {
      mainNav?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    };
    const onSubmit = (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const lead = Object.fromEntries(new FormData(contactForm).entries());
      formStatus.textContent = `شكرًا ${lead.name}، تم التحقق من النموذج تجريبيًا. يلزم ربطه بخدمة استقبال الرسائل لإرسال طلبك فعليًا.`;
    };
    languageToggle?.addEventListener('click', onLanguage);
    menuToggle?.addEventListener('click', onMenu);
    mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    contactForm?.addEventListener('submit', onSubmit);
    return () => {
      languageToggle?.removeEventListener('click', onLanguage);
      menuToggle?.removeEventListener('click', onMenu);
      mainNav?.querySelectorAll('a').forEach((link) => link.removeEventListener('click', closeMenu));
      contactForm?.removeEventListener('submit', onSubmit);
    };
  }, [language]);

  return <div ref={pageRef} dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
