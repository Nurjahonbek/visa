
// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { Calendar, MapPin, Users, Home, Calculator, User, Wifi, Battery, Signal, PhoneCall, Globe, Sparkles, Facebook, Instagram, Phone, Mail, ChevronDown, ChevronUp, X, ChevronLeft, Trash2, ChevronRight, Menu, Check } from 'lucide-react';
// import { differenceInDays, parse } from 'date-fns';

// // Define a type for a traveler
// interface Traveler {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: string;
// }

// // Define the keys for the translation object to ensure type safety
// interface TranslationKeys {
//   insuranceTitle: string;
//   firstTripDate: string;
//   lastTripDate: string;
//   amountOfDays: string;
//   travelers: string;
//   years: string;
//   calculate: string;
//   yourContract: string;
//   whatIsIncluded: string;
//   insuranceCoverage: string;
//   annualInsurancePolicy: string;
//   location: string;
//   medicalExpenses: string;
//   emergencyEvacuation: string;
//   repatriation: string;
//   personalLiability: string;
//   sportsCoverage: string;
//   covid19: string;
//   calculateOptions: string;
//   autoInsurance: string;
//   forVehicleTravel: string;
//   flightInsurance: string;
//   forAirTravel: string;
//   medicalPlus: string;
//   extendedCoverage: string;
//   sportsAdventure: string;
//   forActiveTravel: string;
//   travelCostCalculator: string;
//   insurancePremium: string;
//   visaFeeEstimate: string;
//   serviceFee: string;
//   totalEstimate: string;
//   getDetailedQuote: string;
//   travelTrailerOptions: string;
//   compactTrailer: string;
//   upTo2People: string;
//   perWeek: string;
//   familyTrailer: string;
//   upTo4People: string;
//   luxuryTrailer: string;
//   premiumFeatures: string;
//   addTrailerToPackage: string;
//   home: string;
//   profile: string;
//   partnership: string;
//   llmTitle: string;
//   llmDescription: string;
//   generateItinerary: string;
//   getVisaInfo: string;
//   loading: string;
//   error: string;
//   itineraryHeader: string;
//   visaInfoModalTitle: string;
//   close: string;
//   modalVisaInfo: string;
//   coverageTitle: string;
//   minPrice: string;
//   fastAndEasy: string;
//   policyToEmail: string;
//   support247: string;
//   visaApplication: string;
//   detailedMedicalRisks: string;
//   reimbursement: string;
//   homeVisits: string;
//   clinicVisits: string;
//   hospitalization: string;
//   stomatology: string;
//   covid19Treatment: string;
//   aboutUs: string;
//   aboutCompany: string;
//   contactDetails: string;
//   faq: string;
//   whatToDo: string;
//   downloadDocuments: string;
//   footerAddress: string;
//   footerPhone: string;
//   footerMail: string;
//   footerCopyright: string;
//   additionalCoverages: string;
//   downloadPolicy: string;
//   goToCalculator: string;
//   backToMain: string;
//   addTraveler: string;
//   firstName: string;
//   lastName: string;
//   age: string;
//   totalCost: string;
//   travelerName: string;
//   travelerAge: string;
//   actions: string;
//   visitRussia: string;
//   annualDays: string;
//   dayOptions: string;
// }

// // Language translations object with explicit types
// const translations: { [key: string]: TranslationKeys } = {
//   en: {
//     insuranceTitle: 'Insurance for visa to Russia',
//     firstTripDate: 'The first trip date:',
//     lastTripDate: 'The last trip date:',
//     amountOfDays: 'Amount of days:',
//     travelers: 'Travelers',
//     years: 'years',
//     calculate: 'Calculate',
//     yourContract: 'Your contract',
//     whatIsIncluded: 'What is included in Your insurance policy:',
//     insuranceCoverage: 'Insurance coverage:',
//     annualInsurancePolicy: 'Annual insurance policy',
//     location: 'Belarus',
//     medicalExpenses: 'Medical expenses',
//     emergencyEvacuation: 'Emergency evacuation',
//     repatriation: 'Repatriation',
//     personalLiability: 'Personal liability',
//     sportsCoverage: 'Sports coverage',
//     covid19: 'COVID-19',
//     calculateOptions: 'Calculate Options',
//     autoInsurance: 'Auto Insurance',
//     forVehicleTravel: 'For vehicle travel',
//     flightInsurance: 'Flight Insurance',
//     forAirTravel: 'For air travel',
//     medicalPlus: 'Medical Plus',
//     extendedCoverage: 'Extended coverage',
//     sportsAdventure: 'Sports & Adventure',
//     forActiveTravel: 'For active travel',
//     travelCostCalculator: 'Travel Cost Calculator',
//     insurancePremium: 'Insurance premium:',
//     visaFeeEstimate: 'Visa fee estimate:',
//     serviceFee: 'Service fee:',
//     totalEstimate: 'Total estimate:',
//     getDetailedQuote: 'Get Detailed Quote',
//     travelTrailerOptions: 'Travel Trailer Options',
//     compactTrailer: 'Compact Trailer',
//     upTo2People: 'Up to 2 people',
//     perWeek: 'per week',
//     familyTrailer: 'Family Trailer',
//     upTo4People: 'Up to 4 people',
//     luxuryTrailer: 'Luxury Trailer',
//     premiumFeatures: 'Premium features',
//     addTrailerToPackage: 'Add Trailer to Package',
//     home: 'Home',
//     profile: 'Profile',
//     partnership: 'partnership',
//     llmTitle: 'Trip Planning Assistant',
//     llmDescription: 'Use Gemini AI to get a personalized itinerary and visa information for your trip to Russia.',
//     generateItinerary: 'Generate Travel Itinerary',
//     getVisaInfo: 'Get Visa Info',
//     loading: 'Generating your plan...',
//     error: 'Failed to generate content. Please try again.',
//     itineraryHeader: 'Your Custom Itinerary',
//     visaInfoModalTitle: 'Russia Visa Information',
//     close: 'Close',
//     modalVisaInfo: 'This is a general overview. Always check official sources for the most current requirements based on your nationality and type of travel. A typical tourist visa requires a passport valid for at least 6 months after your trip, a completed application form, a photograph, and an official invitation or a tour confirmation from a Russian travel agency.',
//     coverageTitle: 'Insurance coverage',
//     minPrice: 'Minimum price',
//     fastAndEasy: 'Fast and easy',
//     policyToEmail: 'Policy to e-mail',
//     support247: '24/7 Support',
//     visaApplication: 'Visa application',
//     detailedMedicalRisks: 'Detailed medical risks covered',
//     reimbursement: 'Reimbursement of prescription medicines',
//     homeVisits: 'Home visits by a doctor',
//     clinicVisits: 'Clinic visits',
//     hospitalization: 'Hospitalization in case of emergency',
//     stomatology: 'Emergency stomatology',
//     covid19Treatment: 'COVID-19 treatment organization',
//     aboutUs: 'About us',
//     aboutCompany: 'About the company',
//     contactDetails: 'Contact details',
//     faq: 'FAQ',
//     whatToDo: 'What to do in case of a problem',
//     downloadDocuments: 'Download documents',
//     footerAddress: '72, Dzerzhinsky str., 220036 Minsk, Belarus',
//     footerPhone: '+375(29)110-14-36',
//     footerMail: 'info@solidtravel.by',
//     footerCopyright: '© 2024 "TA Assistance" Ltd. All rights reserved.',
//     additionalCoverages: 'Additional coverages',
//     downloadPolicy: 'Download policy',
//     goToCalculator: 'Go to Travel Cost Calculator',
//     backToMain: 'Back to Main',
//     addTraveler: 'Add a tourist',
//     firstName: 'First Name',
//     lastName: 'Last Name',
//     age: 'Age',
//     totalCost: 'Total cost:',
//     travelerName: 'Name',
//     travelerAge: 'Age',
//     actions: 'Actions',
//     visitRussia: 'Visit Russia',
//     annualDays: 'Select number of days:',
//     dayOptions: 'days',
//   },
//   ru: {
//     insuranceTitle: 'Страхование для визы в Россию',
//     firstTripDate: 'Дата первой поездки:',
//     lastTripDate: 'Дата последней поездки:',
//     amountOfDays: 'Количество дней:',
//     travelers: 'Путешественники',
//     years: 'лет',
//     calculate: 'Рассчитать',
//     yourContract: 'Ваш контракт',
//     whatIsIncluded: 'Что включено в Вашу страховую программу:',
//     insuranceCoverage: 'Страховое покрытие:',
//     annualInsurancePolicy: 'Годовой страховой полис',
//     location: 'Беларусь',
//     medicalExpenses: 'Медицинские расходы',
//     emergencyEvacuation: 'Экстренная эвакуация',
//     repatriation: 'Репатриация',
//     personalLiability: 'Личная ответственность',
//     sportsCoverage: 'Покрытие спорта',
//     covid19: 'COVID-19',
//     calculateOptions: 'Варианты расчета',
//     autoInsurance: 'Авто страхование',
//     forVehicleTravel: 'Для поездок на авто',
//     flightInsurance: 'Авиа страхование',
//     forAirTravel: 'Для авиа перелетов',
//     medicalPlus: 'Медицина Плюс',
//     extendedCoverage: 'Расширенное покрытие',
//     sportsAdventure: 'Спорт и экстрим',
//     forActiveTravel: 'Для активного отдыха',
//     travelCostCalculator: 'Калькулятор стоимости поездки',
//     insurancePremium: 'Страховая премия:',
//     visaFeeEstimate: 'Примерная стоимость визы:',
//     serviceFee: 'Сервисный сбор:',
//     totalEstimate: 'Общая стоимость:',
//     getDetailedQuote: 'Получить подробную смету',
//     travelTrailerOptions: 'Опции для автодомов',
//     compactTrailer: 'Компактный трейлер',
//     upTo2People: 'До 2 человек',
//     perWeek: 'в неделю',
//     familyTrailer: 'Семейный трейлер',
//     upTo4People: 'До 4 человек',
//     luxuryTrailer: 'Люкс трейлер',
//     premiumFeatures: 'Премиум опции',
//     addTrailerToPackage: 'Добавить трейлер к пакету',
//     home: 'Главная',
//     profile: 'Профиль',
//     partnership: 'партнерство',
//     llmTitle: 'Помощник по планированию поездок',
//     llmDescription: 'Используйте Gemini AI, чтобы получить персональный маршрут и информацию о визе для вашей поездки в Россию.',
//     generateItinerary: 'Создать маршрут поездки',
//     getVisaInfo: 'Получить информацию о визе',
//     loading: 'Генерирую ваш план...',
//     error: 'Не удалось сгенерировать контент. Пожалуйста, попробуйте еще раз.',
//     itineraryHeader: 'Ваш индивидуальный маршрут',
//     visaInfoModalTitle: 'Информация о визе в Россию',
//     close: 'Закрыть',
//     modalVisaInfo: 'Это общий обзор. Всегда проверяйте официальные источники для получения самой актуальной информации о требованиях, основанных на вашем гражданстве и типе поездки. Для получения стандартной туристической визы требуется паспорт, действительный не менее 6 месяцев после окончания поездки, заполненная анкета, фотография и официальное приглашение или подтверждение тура от российского туристического агентства.',
//     coverageTitle: 'Страховое покрытие',
//     minPrice: 'Минимальная цена',
//     fastAndEasy: 'Быстро и легко',
//     policyToEmail: 'Полис на e-mail',
//     support247: 'Поддержка 24/7',
//     visaApplication: 'Для оформления визы',
//     detailedMedicalRisks: 'Подробные медицинские риски, покрываемые полисом',
//     reimbursement: 'Возмещение стоимости лекарств',
//     homeVisits: 'Выезд врача на дом',
//     clinicVisits: 'Посещение клиники',
//     hospitalization: 'Госпитализация в случае экстренной ситуации',
//     stomatology: 'Экстренная стоматология',
//     covid19Treatment: 'Организация лечения COVID-19',
//     aboutUs: 'О нас',
//     aboutCompany: 'О компании',
//     contactDetails: 'Контакты',
//     faq: 'FAQ',
//     whatToDo: 'Что делать при страховом случае',
//     downloadDocuments: 'Скачать документы',
//     footerAddress: 'ул. Дзержинского, 72, 220036 Минск, Беларусь',
//     footerPhone: '+375(29)110-14-36',
//     footerMail: 'info@solidtravel.by',
//     footerCopyright: '© 2024 ООО "ТА Ассистанс". Все права защищены.',
//     additionalCoverages: 'Дополнительные покрытия',
//     downloadPolicy: 'Скачать полис',
//     goToCalculator: 'Перейти к калькулятору стоимости поездки',
//     backToMain: 'Назад',
//     addTraveler: 'Добавить туриста',
//     firstName: 'Имя',
//     lastName: 'Фамилия',
//     age: 'Возраст',
//     totalCost: 'Общая стоимость:',
//     travelerName: 'Имя',
//     travelerAge: 'Возраст',
//     actions: 'Действия',
//     visitRussia: 'Visit Russia',
//     annualDays: 'Kunlar sonini tanlang:',
//     dayOptions: 'Kunlar:',
//   },
//   uz: {
//     insuranceTitle: 'Rossiyaga viza uchun sugʻurta',
//     firstTripDate: 'Birinchi sayohat sanasi:',
//     lastTripDate: 'Oxirgi sayohat sanasi:',
//     amountOfDays: 'Kunlar soni:',
//     travelers: 'Sayohat qiluvchilar',
//     years: 'yosh',
//     calculate: 'Hisoblash',
//     yourContract: 'Sizning shartnomangiz',
//     whatIsIncluded: 'Sizning sugʻurta polisiga nimalar kiritilgan:',
//     insuranceCoverage: 'Sugʻurta qoplami:',
//     annualInsurancePolicy: 'Yillik sugʻurta polisi',
//     location: 'Belorussiya',
//     medicalExpenses: 'Tibbiy xarajatlar',
//     emergencyEvacuation: 'Favqulodda evakuatsiya',
//     repatriation: 'Vatanga qaytarish',
//     personalLiability: 'Shaxsiy javobgarlik',
//     sportsCoverage: 'Sport qoplami',
//     covid19: 'COVID-19',
//     calculateOptions: 'Hisoblash variantlari',
//     autoInsurance: 'Avto sugʻurta',
//     forVehicleTravel: 'Avtomobilda sayohat uchun',
//     flightInsurance: 'Aviatsiya sugʻurtasi',
//     forAirTravel: 'Havo safarlari uchun',
//     medicalPlus: 'Tibbiyot Plyus',
//     extendedCoverage: 'Kengaytirilgan qoplama',
//     sportsAdventure: 'Sport va sarguzasht',
//     forActiveTravel: 'Faol dam olish uchun',
//     travelCostCalculator: 'Sayohat xarajatlari kalkulyatori',
//     insurancePremium: 'Sugʻurta mukofoti:',
//     visaFeeEstimate: 'Viza uchun taxminiy toʻlov:',
//     serviceFee: 'Xizmat haqi:',
//     totalEstimate: 'Umumiy xarajat:',
//     getDetailedQuote: 'Batafsil taklifni olish',
//     travelTrailerOptions: 'Treyler variantlari',
//     compactTrailer: 'Kompakt treyler',
//     upTo2People: '2 kishigacha',
//     perWeek: 'haftasiga',
//     familyTrailer: 'Oila treyleri',
//     upTo4People: '4 kishigacha',
//     luxuryTrailer: 'Lyuks treyler',
//     premiumFeatures: 'Premium imkoniyatlar',
//     addTrailerToPackage: 'Treylerni paketga qoʻshish',
//     home: 'Bosh sahifa',
//     profile: 'Profil',
//     partnership: 'hamkorlik',
//     llmTitle: 'Sayohat rejalashtirish yordamchisi',
//     llmDescription: 'Rossiyaga sayohatingiz uchun shaxsiy marshrut va viza maʼlumotlarini olish uchun Gemini AI dan foydalaning.',
//     generateItinerary: 'Sayohat marshrutini yaratish',
//     getVisaInfo: 'Viza haqida maʼlumot olish',
//     loading: 'Rejangizni yaratmoqda...',
//     error: 'Kontentni yaratishda xatolik yuz berdi. Iltimos, qayta urinib koʻring.',
//     itineraryHeader: 'Sizning shaxsiy marshrutingiz',
//     visaInfoModalTitle: 'Rossiya vizasi haqida maʼlumot',
//     close: 'Yopish',
//     modalVisaInfo: 'Bu umumiy maʼlumot. Har doim fuqaroligingiz va sayohat turiga qarab eng dolzarb talablarni rasmiy manbalardan tekshiring. Oddiy turistik viza uchun sayohatdan keyin kamida 6 oy davomida amal qiladigan pasport, toʻldirilgan ariza shakli, fotosurat va Rossiya sayyohlik agentligidan rasmiy taklif yoki turni tasdiqlovchi hujjat talab qilinadi.',
//     coverageTitle: 'Sugʻurta qoplami',
//     minPrice: 'Minimal narx',
//     fastAndEasy: 'Tez va oson',
//     policyToEmail: 'Polis elektron pochtaga',
//     support247: '24/7 Yordam',
//     visaApplication: 'Viza olish uchun',
//     detailedMedicalRisks: 'Sugʻurta qoplami tibbiy xavflar',
//     reimbursement: 'Retsept boʻyicha dorilar xarajatlarini qoplash',
//     homeVisits: 'Shifokorning uyga tashrifi',
//     clinicVisits: 'Klinikaga tashrif',
//     hospitalization: 'Favqulodda vaziyatda kasalxonaga yotqizish',
//     stomatology: 'Favqulodda stomatologiya',
//     covid19Treatment: 'COVID-19 davolashni tashkil etish',
//     aboutUs: 'Biz haqimizda',
//     aboutCompany: 'Kompaniya haqida',
//     contactDetails: 'Kontaktlar',
//     faq: 'FAQ',
//     whatToDo: 'Sugʻurta holati yuz berganda nima qilish kerak',
//     downloadDocuments: 'Hujjatlarni yuklab olish',
//     footerAddress: '72, Dzerzhinsky koʻchasi, 220036 Minsk, Belorussiya',
//     footerPhone: '+375(29)110-14-36',
//     footerMail: 'info@solidtravel.by',
//     footerCopyright: '© 2024 "TA Assistance" MChJ. Barcha huquqlar himoyalangan.',
//     additionalCoverages: 'Qoʻshimcha qoplamalar',
//     downloadPolicy: 'Polisni yuklab olish',
//     goToCalculator: 'Sayohat xarajatlari kalkulyatoriga oʻtish',
//     backToMain: 'Asosiy sahifaga qaytish',
//     addTraveler: 'Sayohat qiluvchi qoʻshish',
//     firstName: 'Ism',
//     lastName: 'Familiya',
//     age: 'Yosh',
//     totalCost: 'Umumiy xarajat:',
//     travelerName: 'Ism',
//     travelerAge: 'Yosh',
//     actions: 'Harakatlar',
//     visitRussia: 'Visit Russia',
//     annualDays: 'Kunlar sonini tanlang:',
//     dayOptions: 'Kunlar:',
//   }
// };

// const annualDayOptions: number[] = [10, 20, 30, 60, 120, 240, 360];

// // Memoized component for each traveler row to prevent re-rendering of the entire list
// interface TravelerRowProps {
//   traveler: Traveler;
//   t: TranslationKeys;
//   onTravelerChange: (id: number, field: keyof Traveler, value: string) => void;
//   onRemoveTraveler: (id: number) => void;
// }

// const TravelerRow = memo(({ traveler, t, onTravelerChange, onRemoveTraveler }: TravelerRowProps) => {
//   return (
//     <div className="flex items-center space-x-2 mb-2">
//       <input
//         type="text"
//         value={traveler.firstName}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTravelerChange(traveler.id, 'firstName', e.target.value)}
//         className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//         placeholder={t.firstName}
//       />
//       <input
//         type="text"
//         value={traveler.lastName}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTravelerChange(traveler.id, 'lastName', e.target.value)}
//         className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//         placeholder={t.lastName}
//       />
//       <input
//         type="number"
//         value={traveler.age}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTravelerChange(traveler.id, 'age', e.target.value)}
//         className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//         placeholder={t.age}
//       />
//       <button onClick={() => onRemoveTraveler(traveler.id)} className="text-red-500 p-2 hover:bg-red-100 rounded-full transition-colors">
//         <X size={20} />
//       </button>
//     </div>
//   );
// });

// const App = () => {
//   // State for language and form inputs
//   const [language, setLanguage] = useState<'en' | 'ru' | 'uz'>('uz');
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
//   const [firstDate, setFirstDate] = useState('2025-08-15');
//   const [lastDate, setLastDate] = useState('2025-08-23');
//   const [travelers, setTravelers] = useState<Traveler[]>([{ id: 1, firstName: '', lastName: '', age: '30' }]);
//   const [isAnnualPolicy, setIsAnnualPolicy] = useState(false);
//   const [selectedAnnualDays, setSelectedAnnualDays] = useState<number>(annualDayOptions[0]);

//   // State for calculated values
//   const [coverage, setCoverage] = useState<number>(35000);
//   const [days, setDays] = useState<number>(9);
//   const [insurancePremium, setInsurancePremium] = useState<number>(0);
//   const [visaFeeEstimate, setVisaFeeEstimate] = useState<number>(0);
//   const [serviceFee, setServiceFee] = useState<number>(0);
//   const [totalEstimate, setTotalEstimate] = useState<number>(0);

//   // States for UI elements and LLM
//   const [itinerary, setItinerary] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [showVisaModal, setShowVisaModal] = useState<boolean>(false);
//   const [showFaq, setShowFaq] = useState<boolean>(false);
//   const [showCoverage, setShowCoverage] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<'main' | 'calculator'>('main');

//   const t: TranslationKeys = translations[language];

//   // --- useEffect hooks for data persistence and calculations ---

//   // Load data from localStorage on component mount
//   useEffect(() => {
//     try {
//       const savedTravelers = localStorage.getItem('travelers');
//       if (savedTravelers) {
//         setTravelers(JSON.parse(savedTravelers));
//       }
//       const savedFirstDate = localStorage.getItem('firstDate');
//       if (savedFirstDate) setFirstDate(savedFirstDate);
//       const savedLastDate = localStorage.getItem('lastDate');
//       if (savedLastDate) setLastDate(savedLastDate);
//       const savedIsAnnualPolicy = localStorage.getItem('isAnnualPolicy');
//       if (savedIsAnnualPolicy) setIsAnnualPolicy(JSON.parse(savedIsAnnualPolicy));
//       const savedSelectedAnnualDays = localStorage.getItem('selectedAnnualDays');
//       if (savedSelectedAnnualDays) setSelectedAnnualDays(JSON.parse(savedSelectedAnnualDays));

//     } catch (e) {
//       console.error("Failed to load from localStorage", e);
//     }
//   }, []);

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('travelers', JSON.stringify(travelers));
//     localStorage.setItem('firstDate', firstDate);
//     localStorage.setItem('lastDate', lastDate);
//     localStorage.setItem('isAnnualPolicy', isAnnualPolicy.toString()); // Convert boolean to string for localStorage
//     localStorage.setItem('selectedAnnualDays', JSON.stringify(selectedAnnualDays));
//   }, [travelers, firstDate, lastDate, isAnnualPolicy, selectedAnnualDays]);

//   // Effect to calculate the number of days and update premiums
//   useEffect(() => {
//     let calculatedDays = 0;
//     if (isAnnualPolicy) {
//       calculatedDays = selectedAnnualDays;
//     } else {
//       try {
//         const start = parse(firstDate, 'yyyy-MM-dd', new Date());
//         const end = parse(lastDate, 'yyyy-MM-dd', new Date());
//         calculatedDays = differenceInDays(end, start) + 1;
//       } catch (error) {
//         calculatedDays = 0;
//       }
//     }
//     setDays(calculatedDays > 0 ? calculatedDays : 0);

//     // Update costs based on new days and travelers count (Figma values)
//     const basePricePerDay = isAnnualPolicy ? 0 : 5;
//     const basePricePerTraveler = 50;
//     const calculatedInsurancePremium = (calculatedDays * basePricePerDay) * travelers.length + (travelers.length * basePricePerTraveler);
//     const calculatedVisaFeeEstimate = travelers.length * 150; // Example from Figma
//     const calculatedServiceFee = travelers.length * 50; // Example from Figma

//     setInsurancePremium(calculatedInsurancePremium);
//     setVisaFeeEstimate(calculatedVisaFeeEstimate);
//     setServiceFee(calculatedServiceFee);

//   }, [firstDate, lastDate, travelers, isAnnualPolicy, selectedAnnualDays]);

//   // Effect to update total estimate
//   useEffect(() => {
//     const total = (Number(insurancePremium) || 0) + (Number(visaFeeEstimate) || 0) + (Number(serviceFee) || 0);
//     setTotalEstimate(total);
//   }, [insurancePremium, visaFeeEstimate, serviceFee]);


//   // --- Helper functions ---

//   const getFlagEmoji = (lang: string): string => {
//     if (lang === 'en') return '🇺🇸'; // or 🇬🇧
//     if (lang === 'ru') return '🇷🇺';
//     if (lang === 'uz') return '🇺🇿';
//     return '🇺🇿'; // Default
//   };

//   const handleLanguageChange = (lang: 'en' | 'ru' | 'uz') => {
//     setLanguage(lang);
//     setShowLanguageDropdown(false);
//   };

//   const handleCalculate = () => {
//     const ageSum = travelers.reduce((sum, traveler) => sum + (Number.parseInt(traveler.age) || 0), 0);
//     setCoverage(30000 + days * 100 + ageSum * 50);
//   };

//   const handleAddTraveler = () => {
//     setTravelers(prevTravelers => [...prevTravelers, { id: Date.now(), firstName: '', lastName: '', age: '' }]);
//   };

//   const handleRemoveTraveler = (id: number) => {
//     setTravelers(prevTravelers => prevTravelers.filter(traveler => traveler.id !== id));
//   };

//   // Callback to handle traveler data changes efficiently
//   const handleTravelerChange = useCallback((id: number, field: keyof Traveler, value: string) => {
//     setTravelers(prevTravelers =>
//       prevTravelers.map(traveler =>
//         traveler.id === id ? { ...traveler, [field]: value } : traveler
//       )
//     );
//   }, []);

//   const handleGenerateItinerary = async () => {
//     setIsLoading(true);
//     setItinerary(null);
//     try {
//       const travelerDetails = travelers.map(t => `${t.firstName} ${t.lastName} (${t.age})`).join(', ');
//       const prompt = `Create a ${days}-day trip plan for a trip to Russia for the following travelers: ${travelerDetails}. Include a day-by-day breakdown with suggestions for activities, dining, and cultural experiences. Do not include price information. Format the response as a markdown list with headings for each day.`;

//       const chatHistory = [];
//       chatHistory.push({ role: "user", parts: [{ text: prompt }] });
//       const payload = { contents: chatHistory };
//       const apiKey = "";
//       const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         throw new Error(`API call failed with status: ${response.status}`);
//       }

//       const result = await response.json();
//       const text = result?.candidates?.[0]?.content?.parts?.[0]?.text as string | undefined;

//       if (text) {
//         setItinerary(text);
//       } else {
//         setItinerary(t.error);
//       }

//     } catch (error) {
//       console.error("Error generating itinerary:", error);
//       setItinerary(t.error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleShowVisaModal = () => {
//     setShowVisaModal(true);
//   };

//   interface ModalProps {
//     title: string;
//     content: string;
//     onClose: () => void;
//   }

//   const Modal = ({ title, content, onClose }: ModalProps) => {
//     return (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
//         <div className="relative p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white">
//           <div className="mt-3 text-center">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
//             <div className="mt-2 px-7 py-3">
//               <p className="text-sm text-gray-500">{content}</p>
//             </div>
//             <div className="items-center px-4 py-3">
//               <button
//                 id="ok-btn"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//               >
//                 {t.close}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // --- Main application views ---

//   const MainView = () => (
//     <>
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-2">
//         {t.insuranceTitle}
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-12">
//         {t.annualInsurancePolicy}
//       </p>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200">
//           <div className="mb-4">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="annualPolicy"
//                 checked={isAnnualPolicy}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                   setIsAnnualPolicy(e.target.checked);
//                   // Reset dates if switching to non-annual
//                   if (!e.target.checked) {
//                     setFirstDate('2025-08-15');
//                     setLastDate('2025-08-23');
//                   }
//                 }}
//                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//               />
//               <label htmlFor="annualPolicy" className="ml-2 text-sm font-medium text-gray-700">{t.annualInsurancePolicy}</label>
//             </div>
//           </div>

//           {isAnnualPolicy ? (
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">{t.annualDays}</label>
//               <div className="relative">
//                 <select
//                   value={selectedAnnualDays}
//                   onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedAnnualDays(Number(e.target.value))}
//                   className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
//                 >
//                   {annualDayOptions.map((day: number) => (
//                     <option key={day} value={day}>{day} {t.dayOptions}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">{t.firstTripDate}</label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     value={firstDate}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstDate(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">{t.lastTripDate}</label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     value={lastDate}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastDate(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 </div>
//               </div>
//             </>
//           )}

//           <div className="mb-4 flex justify-between items-center bg-white rounded-lg p-3 border border-gray-300">
//             <span className="text-sm font-medium text-gray-700">{t.amountOfDays}</span>
//             <span className="text-xl font-bold text-blue-600">{days}</span>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">{t.travelers} ({travelers.length})</label>
//             {travelers.map((traveler: Traveler) => (
//               <TravelerRow
//                 key={traveler.id}
//                 traveler={traveler}
//                 t={t}
//                 onTravelerChange={handleTravelerChange}
//                 onRemoveTraveler={handleRemoveTraveler}
//               />
//             ))}
//             <button
//               onClick={handleAddTraveler}
//               className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
//             >
//               {t.addTraveler}
//             </button>
//           </div>
//           <button
//             onClick={handleCalculate}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
//           >
//             {t.calculate}
//           </button>
//           <div className="mt-4 flex justify-between items-center text-xl font-bold text-gray-900">
//             <span>{t.insuranceCoverage}:</span>
//             <span>{coverage.toLocaleString()} €</span>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
//           <h3 className="text-2xl font-bold mb-4 text-blue-600">{t.coverageTitle}</h3>
//           <div className="grid grid-cols-2 gap-4 text-center mb-6">
//             <div className="p-4 bg-gray-100 rounded-xl">
//               <Sparkles className="mx-auto mb-2 text-blue-600" size={24} />
//               <div className="text-sm font-medium">{t.minPrice}</div>
//             </div>
//             <div className="p-4 bg-gray-100 rounded-xl">
//               <Calendar className="mx-auto mb-2 text-blue-600" size={24} />
//               <div className="text-sm font-medium">{t.fastAndEasy}</div>
//             </div>
//             <div className="p-4 bg-gray-100 rounded-xl">
//               <Mail className="mx-auto mb-2 text-blue-600" size={24} />
//               <div className="text-sm font-medium">{t.policyToEmail}</div>
//             </div>
//             <div className="p-4 bg-gray-100 rounded-xl">
//               <PhoneCall className="mx-auto mb-2 text-blue-600" size={24} />
//               <div className="text-sm font-medium">{t.support247}</div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-lg font-semibold mb-2">{t.detailedMedicalRisks}</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.reimbursement}</span>
//               </li>
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.homeVisits}</span>
//               </li>
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.clinicVisits}</span>
//               </li>
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.hospitalization}</span>
//               </li>
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.stomatology}</span>
//               </li>
//               <li className="flex items-start">
//                 <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                 <span>{t.covid19Treatment}</span>
//               </li>
//             </ul>
//           </div>
//           <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
//             {t.downloadPolicy}
//           </button>
//         </div>
//       </div>

//       {/* Traveler cost table and summary */}
//       <div className="mt-12">
//         <h2 className="text-3xl font-bold mb-4 text-blue-600">{t.yourContract}</h2>
//         <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-blue-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     {t.travelerName}
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     {t.travelerAge}
//                   </th>
//                   <th scope="col" className="relative px-6 py-3">
//                     <span className="sr-only">{t.actions}</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {travelers.map((traveler: Traveler) => (
//                   <tr key={traveler.id} className="hover:bg-blue-50 transition-colors">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <User size={20} className="text-blue-500 mr-3" />
//                         <div className="text-sm font-medium text-gray-900">{`${traveler.firstName} ${traveler.lastName}`}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">{traveler.age} {t.years}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <button
//                         onClick={() => handleRemoveTraveler(traveler.id)}
//                         className="text-red-600 hover:text-red-900"
//                         title="O'chirish"
//                       >
//                         <Trash2 size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="mt-6 border-t border-gray-200 pt-4">
//             <h4 className="text-lg font-bold mb-2">{t.totalCost}</h4>
//             <div className="flex justify-between items-center text-sm mb-2">
//               <span>{t.insurancePremium}</span>
//               <span className="font-semibold">{insurancePremium.toLocaleString()} €</span>
//             </div>
//             <div className="flex justify-between items-center text-sm mb-2">
//               <span>{t.visaFeeEstimate}</span>
//               <span className="font-semibold">{visaFeeEstimate.toLocaleString()} €</span>
//             </div>
//             <div className="flex justify-between items-center text-sm mb-2">
//               <span>{t.serviceFee}</span>
//               <span className="font-semibold">{serviceFee.toLocaleString()} €</span>
//             </div>
//             <div className="flex justify-between items-center text-xl font-bold text-blue-600 border-t border-gray-300 pt-2 mt-2">
//               <span>{t.totalEstimate}</span>
//               <span>{totalEstimate.toLocaleString()} €</span>
//             </div>
//           </div>
//         </div>
//       </div>


//       {/* Gemini AI Integration Section */}
//       <div className="mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-200">
//         <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
//           <Sparkles className="mr-2 text-purple-600" size={24} />
//           {t.llmTitle}
//         </h3>
//         <p className="text-sm text-gray-600 mb-4">{t.llmDescription}</p>
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//           <button
//             onClick={handleGenerateItinerary}
//             disabled={isLoading}
//             className="flex-1 flex items-center justify-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? (
//               <div className="flex items-center">
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 {t.loading}
//               </div>
//             ) : (
//               <div className="flex items-center">
//                 <Sparkles className="mr-2" size={16} />
//                 {t.generateItinerary}
//               </div>
//             )}
//           </button>
//           <button
//             onClick={handleShowVisaModal}
//             className="flex-1 flex items-center justify-center bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
//           >
//             <Sparkles className="mr-2 text-purple-600" size={16} />
//             {t.getVisaInfo}
//           </button>
//         </div>
//         {itinerary && (
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
//             <h4 className="font-semibold text-xl mb-2">{t.itineraryHeader}</h4>
//             <div className="text-sm text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: itinerary.replace(/\n/g, '<br />') }} />
//           </div>
//         )}
//       </div>
//     </>
//   );

//   const CalculatorView = () => (
//     <>
//       <button
//         onClick={() => setCurrentPage('main')}
//         className="mb-8 flex items-center text-blue-600 font-semibold hover:underline"
//       >
//         <ChevronLeft size={16} className="mr-1" /> {t.backToMain}
//       </button>

//       <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">
//         {t.travelCostCalculator}
//       </h1>

//       <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 mb-8">
//         <h3 className="text-2xl font-bold mb-4 text-blue-600">Hisoblagich</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">{t.insurancePremium}</label>
//             <input
//               type="number"
//               value={insurancePremium}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInsurancePremium(Number(e.target.value))}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">{t.visaFeeEstimate}</label>
//             <input
//               type="number"
//               value={visaFeeEstimate}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVisaFeeEstimate(Number(e.target.value))}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">{t.serviceFee}</label>
//             <input
//               type="number"
//               value={serviceFee}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setServiceFee(Number(e.target.value))}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//         </div>
//         <div className="mt-6 flex justify-between items-center text-2xl font-bold text-gray-900">
//           <span>{t.totalEstimate}:</span>
//           <span>{totalEstimate.toLocaleString()} €</span>
//         </div>
//         <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
//           {t.getDetailedQuote}
//         </button>
//       </div>

//       <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
//         <h3 className="text-2xl font-bold mb-4 text-blue-600">{t.travelTrailerOptions}</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
//             <h4 className="font-semibold text-lg">{t.compactTrailer}</h4>
//             <p className="text-sm text-gray-600">{t.upTo2People}</p>
//             <p className="font-bold text-xl text-blue-600 mt-2">100 €</p>
//             <p className="text-xs text-gray-500">{t.perWeek}</p>
//           </div>
//           <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
//             <h4 className="font-semibold text-lg">{t.familyTrailer}</h4>
//             <p className="text-sm text-gray-600">{t.upTo4People}</p>
//             <p className="font-bold text-xl text-blue-600 mt-2">150 €</p>
//             <p className="text-xs text-gray-500">{t.perWeek}</p>
//           </div>
//           <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
//             <h4 className="font-semibold text-lg">{t.luxuryTrailer}</h4>
//             <p className="text-sm text-gray-600">{t.premiumFeatures}</p>
//             <p className="font-bold text-xl text-blue-600 mt-2">250 €</p>
//             <p className="text-xs text-gray-500">{t.perWeek}</p>
//           </div>
//         </div>
//         <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
//           {t.addTrailerToPackage}
//         </button>
//       </div>
//     </>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
//       <header className="bg-blue-600 text-white px-4 py-3 shadow-md flex items-center justify-between sticky top-0 z-20">
//         <div className="flex items-center space-x-2">
//           <a href="#" className="flex items-center space-x-2 text-xl font-bold">
//             <img src="https://placehold.co/32x32/ffffff/000?text=VR" alt="Visit Russia Logo" className="rounded-full" />
//             <span>{t.visitRussia}</span>
//           </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <MapPin size={20} />
//             <span className="text-sm font-medium">{t.location}</span>
//           </div>
//           <PhoneCall size={20} />
//           <div className="relative">
//             <button
//               onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
//               className="flex items-center space-x-1 p-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <span className="text-2xl">{getFlagEmoji(language)}</span>
//             </button>
//             {showLanguageDropdown && (
//               <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-30">
//                 <button onClick={() => handleLanguageChange('uz')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   <span className="text-lg mr-2">🇺🇿</span> O'zbekcha
//                 </button>
//                 <button onClick={() => handleLanguageChange('ru')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   <span className="text-lg mr-2">🇷🇺</span> Русский
//                 </button>
//                 <button onClick={() => handleLanguageChange('en')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   <span className="text-lg mr-2">🇺🇸</span> English
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8 max-w-4xl">
//         {currentPage === 'main' ? <MainView /> : <CalculatorView />}

//         <div className="mt-12 space-y-4">
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
//             <button onClick={() => setShowCoverage(!showCoverage)} className="flex justify-between items-center w-full text-lg font-bold text-blue-600">
//               {t.detailedMedicalRisks}
//               {showCoverage ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//             </button>
//             {showCoverage && (
//               <ul className="space-y-2 mt-4 text-sm text-gray-600">
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.reimbursement}</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.homeVisits}</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.clinicVisits}</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.hospitalization}</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.stomatology}</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{t.covid19Treatment}</span>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
//             <button onClick={() => setShowFaq(!showFaq)} className="flex justify-between items-center w-full text-lg font-bold text-blue-600">
//               {t.faq}
//               {showFaq ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//             </button>
//             {showFaq && (
//               <div className="mt-4 space-y-4 text-sm text-gray-600">
//                 <p>Q: How can I download my policy?</p>
//                 <p>A: After the payment, the policy will be sent to your email. You can also download it from your personal account.</p>
//                 <p>Q: What should I do in case of an emergency?</p>
//                 <p>A: Contact our 24/7 support hotline immediately. The number is listed in your policy and on this website.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <footer className="bg-blue-600 text-white p-8 mt-12">
//         <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
//           <div>
//             <h4 className="font-bold mb-2">{t.aboutUs}</h4>
//             <p className="text-gray-200 leading-relaxed">{t.aboutCompany}</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Menu</h4>
//             <ul className="space-y-1">
//               <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.aboutCompany}</a></li>
//               <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.faq}</a></li>
//               <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.whatToDo}</a></li>
//               <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.downloadDocuments}</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">{t.contactDetails}</h4>
//             <div className="space-y-1 text-gray-200">
//               <div className="flex items-center">
//                 <MapPin size={16} className="mr-2 flex-shrink-0" />
//                 <span>{t.footerAddress}</span>
//               </div>
//               <div className="flex items-center">
//                 <Phone size={16} className="mr-2 flex-shrink-0" />
//                 <span>{t.footerPhone}</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail size={16} className="mr-2 flex-shrink-0" />
//                 <span>{t.footerMail}</span>
//               </div>
//             </div>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-200 hover:text-white transition-colors">
//                 <Facebook size={24} />
//               </a>
//               <a href="#" className="text-gray-200 hover:text-white transition-colors">
//                 <Instagram size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="container mx-auto max-w-4xl text-center mt-8 pt-4 border-t border-blue-500 text-gray-200 text-xs">
//           {t.footerCopyright}
//         </div>
//       </footer>

//       {showVisaModal && (
//         <Modal
//           title={t.visaInfoModalTitle}
//           content={t.modalVisaInfo}
//           onClose={() => setShowVisaModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default App;




















import React, { useState, useEffect, useRef, memo } from 'react';
import { Calendar, MapPin, Users, Home, Calculator, User, Wifi, Battery, Signal, PhoneCall, Globe, Sparkles, Facebook, Instagram, Phone, Mail, ChevronDown, ChevronUp, X, ChevronLeft, Trash2, ChevronRight, Menu, Check } from 'lucide-react';
import { differenceInDays, parse } from 'date-fns';

// Define a type for a traveler
interface Traveler {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
}

// Define the keys for the translation object to ensure type safety
interface TranslationKeys {
  insuranceTitle: string;
  firstTripDate: string;
  lastTripDate: string;
  amountOfDays: string;
  travelers: string;
  years: string;
  calculate: string;
  yourContract: string;
  whatIsIncluded: string;
  insuranceCoverage: string;
  annualInsurancePolicy: string;
  location: string;
  medicalExpenses: string;
  emergencyEvacuation: string;
  repatriation: string;
  personalLiability: string;
  sportsCoverage: string;
  covid19: string;
  calculateOptions: string;
  autoInsurance: string;
  forVehicleTravel: string;
  flightInsurance: string;
  forAirTravel: string;
  medicalPlus: string;
  extendedCoverage: string;
  sportsAdventure: string;
  forActiveTravel: string;
  travelCostCalculator: string;
  insurancePremium: string;
  visaFeeEstimate: string;
  serviceFee: string;
  totalEstimate: string;
  getDetailedQuote: string;
  travelTrailerOptions: string;
  compactTrailer: string;
  upTo2People: string;
  perWeek: string;
  familyTrailer: string;
  upTo4People: string;
  luxuryTrailer: string;
  premiumFeatures: string;
  addTrailerToPackage: string;
  home: string;
  profile: string;
  partnership: string;
  llmTitle: string;
  llmDescription: string;
  generateItinerary: string;
  getVisaInfo: string;
  loading: string;
  error: string;
  itineraryHeader: string;
  visaInfoModalTitle: string;
  close: string;
  modalVisaInfo: string;
  coverageTitle: string;
  minPrice: string;
  fastAndEasy: string;
  policyToEmail: string;
  support247: string;
  visaApplication: string;
  detailedMedicalRisks: string;
  reimbursement: string;
  homeVisits: string;
  clinicVisits: string;
  hospitalization: string;
  stomatology: string;
  covid19Treatment: string;
  aboutUs: string;
  aboutCompany: string;
  contactDetails: string;
  faq: string;
  whatToDo: string;
  downloadDocuments: string;
  footerAddress: string;
  footerPhone: string;
  footerMail: string;
  footerCopyright: string;
  additionalCoverages: string;
  downloadPolicy: string;
  goToCalculator: string;
  backToMain: string;
  addTraveler: string;
  firstName: string;
  lastName: string;
  age: string;
  totalCost: string;
  travelerName: string;
  travelerAge: string;
  actions: string;
  visitRussia: string;
  annualDays: string;
  dayOptions: string;
  fillAllFieldsError: string;
}

// Language translations object with explicit types
const translations: { [key: string]: TranslationKeys } = {
  en: {
    insuranceTitle: 'Insurance for visa to Russia',
    firstTripDate: 'The first trip date:',
    lastTripDate: 'The last trip date:',
    amountOfDays: 'Amount of days:',
    travelers: 'Travelers',
    years: 'years',
    calculate: 'Calculate',
    yourContract: 'Your contract',
    whatIsIncluded: 'What is included in Your insurance policy:',
    insuranceCoverage: 'Insurance coverage:',
    annualInsurancePolicy: 'Annual insurance policy',
    location: 'Belarus',
    medicalExpenses: 'Medical expenses',
    emergencyEvacuation: 'Emergency evacuation',
    repatriation: 'Repatriation',
    personalLiability: 'Personal liability',
    sportsCoverage: 'Sports coverage',
    covid19: 'COVID-19',
    calculateOptions: 'Calculate Options',
    autoInsurance: 'Auto Insurance',
    forVehicleTravel: 'For vehicle travel',
    flightInsurance: 'Flight Insurance',
    forAirTravel: 'For air travel',
    medicalPlus: 'Medical Plus',
    extendedCoverage: 'Extended coverage',
    sportsAdventure: 'Sports & Adventure',
    forActiveTravel: 'For active travel',
    travelCostCalculator: 'Travel Cost Calculator',
    insurancePremium: 'Insurance premium:',
    visaFeeEstimate: 'Visa fee estimate:',
    serviceFee: 'Service fee:',
    totalEstimate: 'Total estimate:',
    getDetailedQuote: 'Get Detailed Quote',
    travelTrailerOptions: 'Travel Trailer Options',
    compactTrailer: 'Compact Trailer',
    upTo2People: 'Up to 2 people',
    perWeek: 'per week',
    familyTrailer: 'Family Trailer',
    upTo4People: 'Up to 4 people',
    luxuryTrailer: 'Luxury Trailer',
    premiumFeatures: 'Premium features',
    addTrailerToPackage: 'Add Trailer to Package',
    home: 'Home',
    profile: 'Profile',
    partnership: 'partnership',
    llmTitle: 'Trip Planning Assistant',
    llmDescription: 'Use Gemini AI to get a personalized itinerary and visa information for your trip to Russia.',
    generateItinerary: 'Generate Travel Itinerary',
    getVisaInfo: 'Get Visa Info',
    loading: 'Generating your plan...',
    error: 'Failed to generate content. Please try again.',
    itineraryHeader: 'Your Custom Itinerary',
    visaInfoModalTitle: 'Russia Visa Information',
    close: 'Close',
    modalVisaInfo: 'This is a general overview. Always check official sources for the most current requirements based on your nationality and type of travel. A typical tourist visa requires a passport valid for at least 6 months after your trip, a completed application form, a photograph, and an official invitation or a tour confirmation from a Russian travel agency.',
    coverageTitle: 'Insurance coverage',
    minPrice: 'Minimum price',
    fastAndEasy: 'Fast and easy',
    policyToEmail: 'Policy to e-mail',
    support247: '24/7 Support',
    visaApplication: 'Visa application',
    detailedMedicalRisks: 'Detailed medical risks covered',
    reimbursement: 'Reimbursement of prescription medicines',
    homeVisits: 'Home visits by a doctor',
    clinicVisits: 'Clinic visits',
    hospitalization: 'Hospitalization in case of emergency',
    stomatology: 'Emergency stomatology',
    covid19Treatment: 'COVID-19 treatment organization',
    aboutUs: 'About us',
    aboutCompany: 'About the company',
    contactDetails: 'Contact details',
    faq: 'FAQ',
    whatToDo: 'What to do in case of a problem',
    downloadDocuments: 'Download documents',
    footerAddress: '72, Dzerzhinsky str., 220036 Minsk, Belarus',
    footerPhone: '+375(29)110-14-36',
    footerMail: 'info@solidtravel.by',
    footerCopyright: '© 2024 "TA Assistance" Ltd. All rights reserved.',
    additionalCoverages: 'Additional coverages',
    downloadPolicy: 'Download policy',
    goToCalculator: 'Go to Travel Cost Calculator',
    backToMain: 'Back to Main',
    addTraveler: 'Add a tourist',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    totalCost: 'Total cost:',
    travelerName: 'Name',
    travelerAge: 'Age',
    actions: 'Actions',
    visitRussia: 'Visit Russia',
    annualDays: 'Select number of days:',
    dayOptions: 'days',
    fillAllFieldsError: 'Please fill in all traveler details (First Name, Last Name, and Age).'
  },
  ru: {
    insuranceTitle: 'Страхование для визы в Россию',
    firstTripDate: 'Дата первой поездки:',
    lastTripDate: 'Дата последней поездки:',
    amountOfDays: 'Количество дней:',
    travelers: 'Путешественники',
    years: 'лет',
    calculate: 'Рассчитать',
    yourContract: 'Ваш контракт',
    whatIsIncluded: 'Что включено в Вашу страховую программу:',
    insuranceCoverage: 'Страховое покрытие:',
    annualInsurancePolicy: 'Годовой страховой полис',
    location: 'Беларусь',
    medicalExpenses: 'Медицинские расходы',
    emergencyEvacuation: 'Экстренная эвакуация',
    repatriation: 'Репатриация',
    personalLiability: 'Личная ответственность',
    sportsCoverage: 'Покрытие спорта',
    covid19: 'COVID-19',
    calculateOptions: 'Варианты расчета',
    autoInsurance: 'Авто страхование',
    forVehicleTravel: 'Для поездок на авто',
    flightInsurance: 'Авиа страхование',
    forAirTravel: 'Для авиа перелетов',
    medicalPlus: 'Медицина Плюс',
    extendedCoverage: 'Расширенное покрытие',
    sportsAdventure: 'Спорт и экстрим',
    forActiveTravel: 'Для активного отдыха',
    travelCostCalculator: 'Калькулятор стоимости поездки',
    insurancePremium: 'Страховая премия:',
    visaFeeEstimate: 'Примерная стоимость визы:',
    serviceFee: 'Сервисный сбор:',
    totalEstimate: 'Общая стоимость:',
    getDetailedQuote: 'Получить подробную смету',
    travelTrailerOptions: 'Опции для автодомов',
    compactTrailer: 'Компактный трейлер',
    upTo2People: 'До 2 человек',
    perWeek: 'в неделю',
    familyTrailer: 'Семейный трейлер',
    upTo4People: 'До 4 человек',
    luxuryTrailer: 'Люкс трейлер',
    premiumFeatures: 'Премиум опции',
    addTrailerToPackage: 'Добавить трейлер к пакету',
    home: 'Главная',
    profile: 'Профиль',
    partnership: 'партнерство',
    llmTitle: 'Помощник по планированию поездок',
    llmDescription: 'Используйте Gemini AI, чтобы получить персональный маршрут и информацию о визе для вашей поездки в Россию.',
    generateItinerary: 'Создать маршрут поездки',
    getVisaInfo: 'Получить информацию о визе',
    loading: 'Генерирую ваш план...',
    error: 'Не удалось сгенерировать контент. Пожалуйста, попробуйте еще раз.',
    itineraryHeader: 'Ваш индивидуальный маршрут',
    visaInfoModalTitle: 'Информация о визе в Россию',
    close: 'Закрыть',
    modalVisaInfo: 'Это общий обзор. Всегда проверяйте официальные источники для получения самой актуальной информации о требованиях, основанных на вашем гражданстве и типе поездки. Для получения стандартной туристической визы требуется паспорт, действительный не менее 6 месяцев после окончания поездки, заполненная анкета, фотография и официальное приглашение или подтверждение тура от российского туристического агентства.',
    coverageTitle: 'Страховое покрытие',
    minPrice: 'Минимальная цена',
    fastAndEasy: 'Быстро и легко',
    policyToEmail: 'Полис на e-mail',
    support247: 'Поддержка 24/7',
    visaApplication: 'Для оформления визы',
    detailedMedicalRisks: 'Подробные медицинские риски, покрываемые полисом',
    reimbursement: 'Возмещение стоимости лекарств',
    homeVisits: 'Выезд врача на дом',
    clinicVisits: 'Посещение клиники',
    hospitalization: 'Госпитализация в случае экстренной ситуации',
    stomatology: 'Экстренная стоматология',
    covid19Treatment: 'Организация лечения COVID-19',
    aboutUs: 'О нас',
    aboutCompany: 'О компании',
    contactDetails: 'Контакты',
    faq: 'FAQ',
    whatToDo: 'Что делать при страховом случае',
    downloadDocuments: 'Скачать документы',
    footerAddress: 'ул. Дзержинского, 72, 220036 Минск, Беларусь',
    footerPhone: '+375(29)110-14-36',
    footerMail: 'info@solidtravel.by',
    footerCopyright: '© 2024 ООО "ТА Ассистанс". Все права защищены.',
    additionalCoverages: 'Дополнительные покрытия',
    downloadPolicy: 'Скачать полис',
    goToCalculator: 'Перейти к калькулятору стоимости поездки',
    backToMain: 'Назад',
    addTraveler: 'Добавить туриста',
    firstName: 'Имя',
    lastName: 'Фамилия',
    age: 'Возраст',
    totalCost: 'Общая стоимость:',
    travelerName: 'Имя',
    travelerAge: 'Возраст',
    actions: 'Действия',
    visitRussia: 'Visit Russia',
    annualDays: 'Kunlar sonini tanlang:',
    dayOptions: 'Kunlar:',
    fillAllFieldsError: 'Пожалуйста, заполните все данные о путешественниках (Имя, Фамилия и Возраст).'
  },
  uz: {
    insuranceTitle: 'Rossiyaga viza uchun sugʻurta',
    firstTripDate: 'Birinchi sayohat sanasi:',
    lastTripDate: 'Oxirgi sayohat sanasi:',
    amountOfDays: 'Kunlar soni:',
    travelers: 'Sayohat qiluvchilar',
    years: 'yosh',
    calculate: 'Hisoblash',
    yourContract: 'Sizning shartnomangiz',
    whatIsIncluded: 'Sizning sugʻurta polisiga nimalar kiritilgan:',
    insuranceCoverage: 'Sugʻurta qoplami:',
    annualInsurancePolicy: 'Yillik sugʻurta polisi',
    location: 'Belorussiya',
    medicalExpenses: 'Tibbiy xarajatlar',
    emergencyEvacuation: 'Favqulodda evakuatsiya',
    repatriation: 'Vatanga qaytarish',
    personalLiability: 'Shaxsiy javobgarlik',
    sportsCoverage: 'Sport qoplami',
    covid19: 'COVID-19',
    calculateOptions: 'Hisoblash variantlari',
    autoInsurance: 'Avto sugʻurta',
    forVehicleTravel: 'Avtomobilda sayohat uchun',
    flightInsurance: 'Aviatsiya sugʻurtasi',
    forAirTravel: 'Havo safarlari uchun',
    medicalPlus: 'Tibbiyot Plyus',
    extendedCoverage: 'Kengaytirilgan qoplama',
    sportsAdventure: 'Sport va sarguzasht',
    forActiveTravel: 'Faol dam olish uchun',
    travelCostCalculator: 'Sayohat xarajatlari kalkulyatori',
    insurancePremium: 'Sugʻurta mukofoti:',
    visaFeeEstimate: 'Viza uchun taxminiy toʻlov:',
    serviceFee: 'Xizmat haqi:',
    totalEstimate: 'Umumiy xarajat:',
    getDetailedQuote: 'Batafsil taklifni olish',
    travelTrailerOptions: 'Treyler variantlari',
    compactTrailer: 'Kompakt treyler',
    upTo2People: '2 kishigacha',
    perWeek: 'haftasiga',
    familyTrailer: 'Oila treyleri',
    upTo4People: '4 kishigacha',
    luxuryTrailer: 'Lyuks treyler',
    premiumFeatures: 'Premium imkoniyatlar',
    addTrailerToPackage: 'Treylerni paketga qoʻshish',
    home: 'Bosh sahifa',
    profile: 'Profil',
    partnership: 'hamkorlik',
    llmTitle: 'Sayohat rejalashtirish yordamchisi',
    llmDescription: 'Rossiyaga sayohatingiz uchun shaxsiy marshrut va viza maʼlumotlarini olish uchun Gemini AI dan foydalaning.',
    generateItinerary: 'Sayohat marshrutini yaratish',
    getVisaInfo: 'Viza haqida maʼlumot olish',
    loading: 'Rejangizni yaratmoqda...',
    error: 'Kontentni yaratishda xatolik yuz berdi. Iltimos, qayta urinib koʻring.',
    itineraryHeader: 'Sizning shaxsiy marshrutingiz',
    visaInfoModalTitle: 'Rossiya vizasi haqida maʼlumot',
    close: 'Yopish',
    modalVisaInfo: 'Bu umumiy maʼlumot. Har doim fuqaroligingiz va sayohat turiga qarab eng dolzarb talablarni rasmiy manbalardan tekshiring. Oddiy turistik viza uchun sayohatdan keyin kamida 6 oy davomida amal qiladigan pasport, toʻldirilgan ariza shakli, fotosurat va Rossiya sayyohlik agentligidan rasmiy taklif yoki turni tasdiqlovchi hujjat talab qilinadi.',
    coverageTitle: 'Sugʻurta qoplami',
    minPrice: 'Minimal narx',
    fastAndEasy: 'Tez va oson',
    policyToEmail: 'Polis elektron pochtaga',
    support247: '24/7 Yordam',
    visaApplication: 'Viza olish uchun',
    detailedMedicalRisks: 'Sugʻurta qoplami tibbiy xavflar',
    reimbursement: 'Retsept boʻyicha dorilar xarajatlarini qoplash',
    homeVisits: 'Shifokorning uyga tashrifi',
    clinicVisits: 'Klinikaga tashrif',
    hospitalization: 'Favqulodda vaziyatda kasalxonaga yotqizish',
    stomatology: 'Favqulodda stomatologiya',
    covid19Treatment: 'COVID-19 davolashni tashkil etish',
    aboutUs: 'Biz haqimizda',
    aboutCompany: 'Kompaniya haqida',
    contactDetails: 'Kontaktlar',
    faq: 'FAQ',
    whatToDo: 'Sugʻurta holati yuz berganda nima qilish kerak',
    downloadDocuments: 'Hujjatlarni yuklab olish',
    footerAddress: '72, Dzerzhinsky koʻchasi, 220036 Minsk, Belorussiya',
    footerPhone: '+375(29)110-14-36',
    footerMail: 'info@solidtravel.by',
    footerCopyright: '© 2024 "TA Assistance" MChJ. Barcha huquqlar himoyalangan.',
    additionalCoverages: 'Qoʻshimcha qoplamalar',
    downloadPolicy: 'Polisni yuklab olish',
    goToCalculator: 'Sayohat xarajatlari kalkulyatoriga oʻtish',
    backToMain: 'Asosiy sahifaga qaytish',
    addTraveler: 'Sayohat qiluvchi qoʻshish',
    firstName: 'Ism',
    lastName: 'Familiya',
    age: 'Yosh',
    totalCost: 'Umumiy xarajat:',
    travelerName: 'Ism',
    travelerAge: 'Yosh',
    actions: 'Harakatlar',
    visitRussia: 'Visit Russia',
    annualDays: 'Kunlar sonini tanlang:',
    dayOptions: 'Kunlar:',
    fillAllFieldsError: 'Iltimos, barcha sayohatchilar maʼlumotlarini (Ism, Familiya va Yosh) toʻldiring.'
  }
};

const annualDayOptions: number[] = [10, 20, 30, 60, 120, 240, 360];

// Memoized component for each traveler row to prevent re-rendering of the entire list
interface TravelerRowProps {
  traveler: Traveler;
  t: TranslationKeys;
  onRemoveTraveler: (id: number) => void;
  // Use a ref object to store the input fields for each traveler
  inputRefs: React.MutableRefObject<{[id: number]: {firstName: HTMLInputElement | null, lastName: HTMLInputElement | null, age: HTMLInputElement | null}}>;
}

// React.memo is used here, but the core logic for state updates on typing has been moved
// to the `useRef` approach in the parent component.
const TravelerRow = memo(({ traveler, t, onRemoveTraveler, inputRefs }: TravelerRowProps) => {
  // We use a local ref for the current traveler's inputs
  // The refs are assigned in the parent component's useEffect
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // We add the refs to the parent's ref object when the component mounts
    // and clean them up when it unmounts.
    if (firstNameRef.current && lastNameRef.current && ageRef.current) {
        inputRefs.current[traveler.id] = {
            firstName: firstNameRef.current,
            lastName: lastNameRef.current,
            age: ageRef.current
        };
    }
    return () => {
        delete inputRefs.current[traveler.id];
    };
  }, [traveler.id, inputRefs]);


  return (
    <div className="flex items-center space-x-2 mb-2">
      <input
        type="text"
        ref={firstNameRef}
        defaultValue={traveler.firstName}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder={t.firstName}
      />
      <input
        type="text"
        ref={lastNameRef}
        defaultValue={traveler.lastName}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder={t.lastName}
      />
      <input
        type="number"
        ref={ageRef}
        defaultValue={traveler.age}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder={t.age}
      />
      <button onClick={() => onRemoveTraveler(traveler.id)} className="text-red-500 p-2 hover:bg-red-100 rounded-full transition-colors">
        <X size={20} />
      </button>
    </div>
  );
});

const App = () => {
  // State for language and form inputs
  const [language, setLanguage] = useState<'en' | 'ru' | 'uz'>('ru'); // Default language set to Russian ('ru')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [firstDate, setFirstDate] = useState('2025-08-15');
  const [lastDate, setLastDate] = useState('2025-08-23');
  // `committedTravelers` - "Hisoblash" tugmasi bosilganda yangilanadigan state
  const [committedTravelers, setCommittedTravelers] = useState<Traveler[]>([{ id: 1, firstName: '', lastName: '', age: '30' }]);
  const [isAnnualPolicy, setIsAnnualPolicy] = useState(false);
  const [selectedAnnualDays, setSelectedAnnualDays] = useState<number>(annualDayOptions[0]);

  // `inputRefs` - bu input maydonlarining joriy qiymatlarini saqlash uchun useRef
  // Bu state yangilanmaydi, shuning uchun yozish paytida qayta render bo'lmaydi
  const inputRefs = useRef<{[id: number]: {firstName: HTMLInputElement | null, lastName: HTMLInputElement | null, age: HTMLInputElement | null}}>({});

  // State for calculated values
  const [coverage, setCoverage] = useState<number>(35000);
  const [days, setDays] = useState<number>(9);
  const [insurancePremium, setInsurancePremium] = useState<number>(0);
  const [visaFeeEstimate, setVisaFeeEstimate] = useState<number>(0);
  const [serviceFee, setServiceFee] = useState<number>(0);
  const [totalEstimate, setTotalEstimate] = useState<number>(0);

  // States for UI elements and LLM
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showVisaModal, setShowVisaModal] = useState<boolean>(false);
  const [showFaq, setShowFaq] = useState<boolean>(false);
  const [showCoverage, setShowCoverage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<'main' | 'calculator'>('main');

  const t: TranslationKeys = translations[language];

  // --- useEffect hooks for data persistence and calculations ---

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      const savedTravelers = localStorage.getItem('travelers');
      if (savedTravelers) {
        setCommittedTravelers(JSON.parse(savedTravelers));
      }
      const savedFirstDate = localStorage.getItem('firstDate');
      if (savedFirstDate) setFirstDate(savedFirstDate);
      const savedLastDate = localStorage.getItem('lastDate');
      if (savedLastDate) setLastDate(savedLastDate);
      const savedIsAnnualPolicy = localStorage.getItem('isAnnualPolicy');
      if (savedIsAnnualPolicy) setIsAnnualPolicy(JSON.parse(savedIsAnnualPolicy));
      const savedSelectedAnnualDays = localStorage.getItem('selectedAnnualDays');
      if (savedSelectedAnnualDays) setSelectedAnnualDays(JSON.parse(savedSelectedAnnualDays));

    } catch (e) {
      console.error("Failed to load from localStorage", e);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('travelers', JSON.stringify(committedTravelers));
    localStorage.setItem('firstDate', firstDate);
    localStorage.setItem('lastDate', lastDate);
    localStorage.setItem('isAnnualPolicy', isAnnualPolicy.toString());
    localStorage.setItem('selectedAnnualDays', JSON.stringify(selectedAnnualDays));
  }, [committedTravelers, firstDate, lastDate, isAnnualPolicy, selectedAnnualDays]);

  // Effect to calculate the number of days and update premiums based on committed travelers
  useEffect(() => {
    let calculatedDays = 0;
    if (isAnnualPolicy) {
      calculatedDays = selectedAnnualDays;
    } else {
      try {
        const start = parse(firstDate, 'yyyy-MM-dd', new Date());
        const end = parse(lastDate, 'yyyy-MM-dd', new Date());
        calculatedDays = differenceInDays(end, start) + 1;
      } catch (error) {
        calculatedDays = 0;
      }
    }
    setDays(calculatedDays > 0 ? calculatedDays : 0);

    // Update costs based on new days and committed travelers count
    const basePricePerDay = isAnnualPolicy ? 0 : 5;
    const basePricePerTraveler = 50;
    const calculatedInsurancePremium = (calculatedDays * basePricePerDay) * committedTravelers.length + (committedTravelers.length * basePricePerTraveler);
    const calculatedVisaFeeEstimate = committedTravelers.length * 150;
    const calculatedServiceFee = committedTravelers.length * 50;

    setInsurancePremium(calculatedInsurancePremium);
    setVisaFeeEstimate(calculatedVisaFeeEstimate);
    setServiceFee(calculatedServiceFee);

  }, [firstDate, lastDate, committedTravelers, isAnnualPolicy, selectedAnnualDays]);

  // Effect to update total estimate
  useEffect(() => {
    const total = (Number(insurancePremium) || 0) + (Number(visaFeeEstimate) || 0) + (Number(serviceFee) || 0);
    setTotalEstimate(total);
  }, [insurancePremium, visaFeeEstimate, serviceFee]);


  // --- Helper functions ---

  const getFlagEmoji = (lang: 'en' | 'ru' | 'uz'): string => {
    if (lang === 'en') return '🇺🇸';
    if (lang === 'ru') return '🇷🇺';
    if (lang === 'uz') return '🇺🇿';
    return '🇺🇿'; // Default
  };

  const handleLanguageChange = (lang: 'en' | 'ru' | 'uz') => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  // "Hisoblash" tugmasi bosilganda chaqiriladi
  const handleCalculate = () => {
    // useRef yordamida input maydonlarining joriy qiymatlarini o'qish
    const newTravelers: Traveler[] = Object.values(inputRefs.current).map(ref => ({
      id: 0, // Id will be updated below
      firstName: ref?.firstName?.value || '',
      lastName: ref?.lastName?.value || '',
      age: ref?.age?.value || ''
    }));

    // Barcha maydonlarning to'ldirilganligini tekshirish
    const allFieldsFilled = newTravelers.every(t => t.firstName.trim() && t.lastName.trim() && t.age.trim());
    if (!allFieldsFilled) {
      setValidationError(t.fillAllFieldsError);
      setTimeout(() => setValidationError(null), 5000);
      return;
    }

    // `committedTravelers` state ni yangilash
    // Bu faqat barcha maydonlar to'ldirilgandagina sodir bo'ladi
    setCommittedTravelers(newTravelers.map((t, index) => ({...t, id: index + 1})));

    const ageSum = newTravelers.reduce((sum, traveler) => sum + (Number.parseInt(traveler.age) || 0), 0);
    setCoverage(30000 + days * 100 + ageSum * 50);
  };


  const handleAddTraveler = () => {
    setCommittedTravelers(prevTravelers => [...prevTravelers, { id: Date.now(), firstName: '', lastName: '', age: '' }]);
  };

  const handleRemoveTraveler = (id: number) => {
    setCommittedTravelers(prevTravelers => prevTravelers.filter(traveler => traveler.id !== id));
  };

  const handleGenerateItinerary = async () => {
    // Input maydonlarini tekshirish
    const allFieldsFilled = committedTravelers.every(t => t.firstName.trim() && t.lastName.trim() && t.age.trim());
    if (!allFieldsFilled) {
      setValidationError(t.fillAllFieldsError);
      // Xato xabarini 5 soniyadan so'ng yashirish
      setTimeout(() => setValidationError(null), 5000);
      return;
    }

    setIsLoading(true);
    setItinerary(null);
    setValidationError(null); // Agar avval xato bo'lsa, uni tozalash
    try {
      const travelerDetails = committedTravelers.map(traveler => `${traveler.firstName} ${traveler.lastName} (${traveler.age} ${t.years})`).join(', ');
      const prompt = `Create a ${days}-day trip plan for a trip to Russia for the following travelers: ${travelerDetails}. Include a day-by-day breakdown with suggestions for activities, dining, and cultural experiences. Do not include price information. Format the response as a markdown list with headings for each day.`;

      const chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text as string | undefined;

      if (text) {
        setItinerary(text);
      } else {
        setItinerary(t.error);
      }

    } catch (error) {
      console.error("Error generating itinerary:", error);
      setItinerary(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowVisaModal = () => {
    setShowVisaModal(true);
  };

  interface ModalProps {
    title: string;
    content: string;
    onClose: () => void;
  }

  const Modal = ({ title, content, onClose }: ModalProps) => {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="relative p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">{content}</p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Main application views ---

  const MainView = () => (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-2">
        {t.insuranceTitle}
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        {t.annualInsurancePolicy}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200">
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="annualPolicy"
                checked={isAnnualPolicy}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setIsAnnualPolicy(e.target.checked);
                  // Reset dates if switching to non-annual
                  if (!e.target.checked) {
                    setFirstDate('2025-08-15');
                    setLastDate('2025-08-23');
                  }
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="annualPolicy" className="ml-2 text-sm font-medium text-gray-700">{t.annualInsurancePolicy}</label>
            </div>
          </div>

          {isAnnualPolicy ? (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.annualDays}</label>
              <div className="relative">
                <select
                  value={selectedAnnualDays}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedAnnualDays(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
                >
                  {annualDayOptions.map((day: number) => (
                    <option key={day} value={day}>{day} {t.dayOptions}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.firstTripDate}</label>
                <div className="relative">
                  <input
                    type="date"
                    value={firstDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.lastTripDate}</label>
                <div className="relative">
                  <input
                    type="date"
                    value={lastDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </>
          )}

          <div className="mb-4 flex justify-between items-center bg-white rounded-lg p-3 border border-gray-300">
            <span className="text-sm font-medium text-gray-700">{t.amountOfDays}</span>
            <span className="text-xl font-bold text-blue-600">{days}</span>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">{t.travelers} ({committedTravelers.length})</label>
            {committedTravelers.map((traveler: Traveler) => (
              <TravelerRow
                key={traveler.id}
                traveler={traveler}
                t={t}
                onRemoveTraveler={handleRemoveTraveler}
                inputRefs={inputRefs}
              />
            ))}
            <button
              onClick={handleAddTraveler}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
            >
              {t.addTraveler}
            </button>
          </div>
          {/* Faqat hisoblash tugmasini bosganda state yangilanadi */}
          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            {t.calculate}
          </button>
          <div className="mt-4 flex justify-between items-center text-xl font-bold text-gray-900">
            <span>{t.insuranceCoverage}:</span>
            <span>{coverage.toLocaleString()} €</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">{t.coverageTitle}</h3>
          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            <div className="p-4 bg-gray-100 rounded-xl">
              <Sparkles className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-sm font-medium">{t.minPrice}</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <Calendar className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-sm font-medium">{t.fastAndEasy}</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <Mail className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-sm font-medium">{t.policyToEmail}</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <PhoneCall className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-sm font-medium">{t.support247}</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">{t.detailedMedicalRisks}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.reimbursement}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.homeVisits}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.clinicVisits}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.hospitalization}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.stomatology}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{t.covid19Treatment}</span>
              </li>
            </ul>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
            {t.downloadPolicy}
          </button>
        </div>
      </div>

      {/* Traveler cost table and summary */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">{t.yourContract}</h2>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.travelerName}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.travelerAge}
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">{t.actions}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {committedTravelers.map((traveler: Traveler) => (
                  <tr key={traveler.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User size={20} className="text-blue-500 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{`${traveler.firstName} ${traveler.lastName}`}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{traveler.age} {t.years}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleRemoveTraveler(traveler.id)}
                        className="text-red-600 hover:text-red-900"
                        title="O'chirish"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="text-lg font-bold mb-2">{t.totalCost}</h4>
            <div className="flex justify-between items-center text-sm mb-2">
              <span>{t.insurancePremium}</span>
              <span className="font-semibold">{insurancePremium.toLocaleString()} €</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-2">
              <span>{t.visaFeeEstimate}</span>
              <span className="font-semibold">{visaFeeEstimate.toLocaleString()} €</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-2">
              <span>{t.serviceFee}</span>
              <span className="font-semibold">{serviceFee.toLocaleString()} €</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-blue-600 border-t border-gray-300 pt-2 mt-2">
              <span>{t.totalEstimate}</span>
              <span>{totalEstimate.toLocaleString()} €</span>
            </div>
          </div>
        </div>
      </div>


      {/* Gemini AI Integration Section */}
      <div className="mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
          <Sparkles className="mr-2 text-purple-600" size={24} />
          {t.llmTitle}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{t.llmDescription}</p>
        {validationError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4" role="alert">
            <span className="block sm:inline">{validationError}</span>
          </div>
        )}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleGenerateItinerary}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t.loading}
              </div>
            ) : (
              <div className="flex items-center">
                <Sparkles className="mr-2" size={16} />
                {t.generateItinerary}
              </div>
            )}
          </button>
          <button
            onClick={handleShowVisaModal}
            className="flex-1 flex items-center justify-center bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            <Sparkles className="mr-2 text-purple-600" size={16} />
            {t.getVisaInfo}
          </button>
        </div>
        {itinerary && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
            <h4 className="font-semibold text-xl mb-2">{t.itineraryHeader}</h4>
            <div className="text-sm text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: itinerary.replace(/\n/g, '<br />') }} />
          </div>
        )}
      </div>
    </>
  );

  const CalculatorView = () => (
    <>
      <button
        onClick={() => setCurrentPage('main')}
        className="mb-8 flex items-center text-blue-600 font-semibold hover:underline"
      >
        <ChevronLeft size={16} className="mr-1" /> {t.backToMain}
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">
        {t.travelCostCalculator}
      </h1>

      <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Hisoblagich</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.insurancePremium}</label>
            <input
              type="number"
              value={insurancePremium}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInsurancePremium(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.visaFeeEstimate}</label>
            <input
              type="number"
              value={visaFeeEstimate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVisaFeeEstimate(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.serviceFee}</label>
            <input
              type="number"
              value={serviceFee}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setServiceFee(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center text-2xl font-bold text-gray-900">
          <span>{t.totalEstimate}:</span>
          <span>{totalEstimate.toLocaleString()} €</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
          {t.getDetailedQuote}
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">{t.travelTrailerOptions}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
            <h4 className="font-semibold text-lg">{t.compactTrailer}</h4>
            <p className="text-sm text-gray-600">{t.upTo2People}</p>
            <p className="font-bold text-xl text-blue-600 mt-2">100 €</p>
            <p className="text-xs text-gray-500">{t.perWeek}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
            <h4 className="font-semibold text-lg">{t.familyTrailer}</h4>
            <p className="text-sm text-gray-600">{t.upTo4People}</p>
            <p className="font-bold text-xl text-blue-600 mt-2">150 €</p>
            <p className="text-xs text-gray-500">{t.perWeek}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
            <h4 className="font-semibold text-lg">{t.luxuryTrailer}</h4>
            <p className="text-sm text-gray-600">{t.premiumFeatures}</p>
            <p className="font-bold text-xl text-blue-600 mt-2">250 €</p>
            <p className="text-xs text-gray-500">{t.perWeek}</p>
          </div>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
          {t.addTrailerToPackage}
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-600 text-white px-4 py-3 shadow-md flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2 text-xl font-bold">
            <img src="https://placehold.co/32x32/ffffff/000?text=VR" alt="Visit Russia Logo" className="rounded-full" />
            <span>{t.visitRussia}</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MapPin size={20} />
            <span className="text-sm font-medium">{t.location}</span>
          </div>
          <PhoneCall size={20} />
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-1 p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="text-2xl">{getFlagEmoji(language)}</span>
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-30">
                <button onClick={() => handleLanguageChange('uz')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span className="text-lg mr-2">🇺🇿</span> O'zbekcha
                </button>
                <button onClick={() => handleLanguageChange('ru')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span className="text-lg mr-2">🇷🇺</span> Русский
                </button>
                <button onClick={() => handleLanguageChange('en')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span className="text-lg mr-2">🇺🇸</span> English
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {currentPage === 'main' ? <MainView /> : <CalculatorView />}

        <div className="mt-12 space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <button onClick={() => setShowCoverage(!showCoverage)} className="flex justify-between items-center w-full text-lg font-bold text-blue-600">
              {t.detailedMedicalRisks}
              {showCoverage ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {showCoverage && (
              <ul className="space-y-2 mt-4 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.reimbursement}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.homeVisits}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.clinicVisits}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.hospitalization}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.stomatology}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.covid19Treatment}</span>
                </li>
              </ul>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <button onClick={() => setShowFaq(!showFaq)} className="flex justify-between items-center w-full text-lg font-bold text-blue-600">
              {t.faq}
              {showFaq ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {showFaq && (
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>Q: How can I download my policy?</p>
                <p>A: After the payment, the policy will be sent to your email. You can also download it from your personal account.</p>
                <p>Q: What should I do in case of an emergency?</p>
                <p>A: Contact our 24/7 support hotline immediately. The number is listed in your policy and on this website.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-8 mt-12">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2">{t.aboutUs}</h4>
            <p className="text-gray-200 leading-relaxed">{t.aboutCompany}</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Menu</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.aboutCompany}</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.faq}</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.whatToDo}</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">{t.downloadDocuments}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">{t.contactDetails}</h4>
            <div className="space-y-1 text-gray-200">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>{t.footerAddress}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>{t.footerPhone}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>{t.footerMail}</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-4xl text-center mt-8 pt-4 border-t border-blue-500 text-gray-200 text-xs">
          {t.footerCopyright}
        </div>
      </footer>

      {showVisaModal && (
        <Modal
          title={t.visaInfoModalTitle}
          content={t.modalVisaInfo}
          onClose={() => setShowVisaModal(false)}
        />
      )}
    </div>
  );
};

export default App;
