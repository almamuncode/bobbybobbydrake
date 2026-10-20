import type { MenuCategory, LocalizedString } from "@/types/menu";
export const menu = [
  {
    id: "build-your-own",
    name: { en: "Build Your Own", ko: "나만의 핫도그" },
    items: [
      {
        id: "single-dog",
        name: { en: "Single Dog", ko: "싱글 도그" },
        price: 10000,
        description: {
          en: "One build-your-own American-style hotdog.",
          ko: "취향대로 만드는 아메리칸 핫도그 1개.",
        },
        image: "byo-single",
      },
      {
        id: "double-dog",
        name: { en: "Double Dog", ko: "더블 도그" },
        price: 18000,
        description: {
          en: "Two build-your-own hotdogs.",
          ko: "취향대로 만드는 핫도그 2개.",
        },
        image: "byo-single",
      },
      {
        id: "single-combo",
        name: { en: "Single Combo", ko: "싱글 콤보" },
        price: 18500,
        description: {
          en: "Single hotdog + waffle fries + can drink.",
          ko: "핫도그 1개 + 와플 프라이 + 캔 음료.",
        },
        image: "chili-cheese-dog-combo",
      },
      {
        id: "double-combo",
        favoriteDescription: {
          en: "Two build-your-own hotdogs with waffle fries and one can drink.",
          ko: "취향대로 만드는 핫도그 2개와 와플 프라이, 캔 음료 1개.",
        },
        name: { en: "Double Combo", ko: "더블 콤보" },
        price: 25000,
        description: {
          en: "Two hotdogs + waffle fries + can drink.",
          ko: "핫도그 2개 + 와플 프라이 + 캔 음료.",
        },
        image: "byo-double-combo",
      },
    ],
  },
  {
    id: "signature-dogs",
    name: { en: "Signature Dogs", ko: "시그니처 도그" },
    items: [
      {
        id: "chili-cheese-dog",
        favoriteDescription: {
          en: "Beef chili, shredded cheese, melted cheese and diced onions.",
          ko: "비프 칠리, 슈레드 치즈, 녹인 치즈와 다진 양파.",
        },
        name: { en: "Chili Cheese Dog", ko: "칠리 치즈 도그" },
        price: 13000,
        description: {
          en: "Beef chili, shredded cheese, melted cheese, diced onions.",
          ko: "비프 칠리, 슈레드 치즈, 녹인 치즈와 다진 양파.",
        },
        image: "chili-cheese-dog",
        popular: true,
      },
      {
        id: "bacon-bbq-dog",
        name: { en: "Bacon BBQ Dog", ko: "베이컨 바비큐 도그" },
        price: 13000,
        description: {
          en: "American cheese, bacon crumbles, BBQ sauce, grilled onions.",
          ko: "아메리칸 치즈, 베이컨, 바비큐 소스와 구운 양파.",
        },
        image: "bacon-bbq-dog",
      },
      {
        id: "spicy-jalapeño-dog",
        name: { en: "Spicy Jalapeño Dog", ko: "스파이시 할라피뇨 도그" },
        price: 12500,
        description: {
          en: "Pickled jalapeños, shredded cheese, sriracha and mayo.",
          ko: "할라피뇨 피클, 슈레드 치즈, 스리라차와 마요네즈.",
        },
        image: "spicy-jalapeno-dog",
        spicy: true,
      },
      {
        id: "honey-relish-dog",
        name: { en: "Honey Relish Dog", ko: "허니 렐리시 도그" },
        price: 12500,
        description: {
          en: "Grilled onions, relish, honey mustard and ketchup.",
          ko: "구운 양파, 렐리시, 허니 머스터드와 케첩.",
        },
        image: "honey-relish-dog",
      },
      {
        id: "buffalo-ranch-dog",
        name: { en: "Buffalo Ranch Dog", ko: "버팔로 랜치 도그" },
        price: 11000,
        description: {
          en: "Buffalo, ranch, bacon crumbles, diced onions, shredded cheese.",
          ko: "버팔로 소스, 랜치, 베이컨, 다진 양파와 슈레드 치즈.",
        },
        image: "buffalo-ranch-dog",
        spicy: true,
      },
    ],
  },
  {
    id: "sliders",
    name: { en: "Sliders", ko: "미니 슬라이더" },
    items: [
      {
        id: "classic-cheeseburger",
        name: { en: "Classic Cheeseburger", ko: "클래식 치즈버거" },
        price: 0,
        description: {
          en: "Beef patty and American cheese.",
          ko: "비프 패티와 아메리칸 치즈.",
        },
        image: "classic-sliders",
      },
      {
        id: "bacon-bbq",
        name: { en: "Bacon BBQ", ko: "베이컨 바비큐" },
        price: 0,
        description: {
          en: "American cheese, bacon, BBQ sauce and grilled onions.",
          ko: "아메리칸 치즈, 베이컨, 바비큐 소스와 구운 양파.",
        },
        image: "bacon-bbq-sliders",
      },
      {
        id: "jalapeño-chipotle",
        name: { en: "Jalapeño Chipotle", ko: "할라피뇨 치폴레" },
        price: 0,
        description: {
          en: "American cheese, chipotle mayo, pickled jalapeños, diced onions.",
          ko: "아메리칸 치즈, 치폴레 마요, 할라피뇨 피클과 다진 양파.",
        },
        image: "jalapeno-chipotle-sliders",
      },
      {
        id: "teriyaki",
        name: { en: "Teriyaki", ko: "데리야키" },
        price: 0,
        description: {
          en: "American cheese, grilled onions and teriyaki sauce.",
          ko: "아메리칸 치즈, 구운 양파와 데리야키 소스.",
        },
        image: "teriyaki-sliders",
      },
    ],
  },
  {
    id: "fries",
    name: { en: "Fries", ko: "프라이" },
    items: [
      {
        id: "waffle-fries",
        name: { en: "Waffle Fries", ko: "와플 프라이" },
        price: 7000,
        description: {
          en: "Crispy golden waffle fries.",
          ko: "바삭하고 노릇한 와플 프라이.",
        },
        image: "chili-cheese-fries",
      },
      {
        id: "chili-cheese-fries",
        name: { en: "Chili Cheese Fries", ko: "칠리 치즈 프라이" },
        price: 11500,
        description: {
          en: "Beef chili, melted cheese and diced onions.",
          ko: "비프 칠리, 녹인 치즈와 다진 양파.",
        },
        image: "chili-cheese-fries",
      },
      {
        id: "bacon-ranch-fries",
        name: { en: "Bacon Ranch Fries", ko: "베이컨 랜치 프라이" },
        price: 12000,
        description: {
          en: "Bacon crumbles, melted cheese and ranch drizzle.",
          ko: "베이컨, 녹인 치즈와 랜치 소스.",
        },
        image: "bacon-ranch-fries",
      },
      {
        id: "build-your-own-loaded-fries",
        name: { en: "Build Your Own Loaded Fries", ko: "나만의 로디드 프라이" },
        price: 11000,
        description: {
          en: "Customize your loaded waffle fries.",
          ko: "토핑을 골라 나만의 와플 프라이를 즐기세요.",
        },
        image: "bacon-ranch-fries",
      },
    ],
  },
  {
    id: "wings-nuggets",
    name: { en: "Wings & Nuggets", ko: "윙 & 너겟" },
    items: [
      {
        id: "4-wings",
        name: { en: "4 Wings", ko: "윙 4조각" },
        price: 10000,
        description: {
          en: "Kiosk / register only.",
          ko: "키오스크 또는 카운터에서만 주문 가능합니다.",
        },
        image: "8-wings",
      },
      {
        id: "8-wings",
        name: { en: "8 Wings", ko: "윙 8조각" },
        price: 18000,
        description: {
          en: "Original, Honey BBQ, Buffalo or Cajun.",
          ko: "오리지널, 허니 바비큐, 버팔로 또는 케이준.",
        },
        image: "8-wings",
        flavors: true,
      },
      {
        id: "wing-combo",
        favoriteDescription: {
          en: "8 wings with waffle fries and one can drink. Choose one flavor.",
          ko: "윙 8조각과 와플 프라이, 캔 음료 1개. 한 가지 맛을 선택하세요.",
        },
        name: { en: "Wing Combo", ko: "윙 콤보" },
        price: 26000,
        description: {
          en: "8 wings + waffle fries + can drink.",
          ko: "윙 8조각 + 와플 프라이 + 캔 음료.",
        },
        image: "8-wing-combo",
        flavors: true,
      },
      {
        id: "6-nuggets",
        name: { en: "6 Nuggets", ko: "너겟 6조각" },
        price: 7000,
        description: {
          en: "Choose up to one dipping sauce.",
          ko: "디핑 소스 최대 1개 선택.",
        },
        image: "6-nuggets",
      },
      {
        id: "10-nuggets",
        name: { en: "10 Nuggets", ko: "너겟 10조각" },
        price: 11000,
        description: {
          en: "Choose up to one dipping sauce.",
          ko: "디핑 소스 최대 1개 선택.",
        },
        image: "6-nuggets",
      },
      {
        id: "10-nugget-combo",
        name: { en: "10 Nugget Combo", ko: "너겟 10조각 콤보" },
        price: 18500,
        description: {
          en: "10 nuggets + waffle fries + can drink.",
          ko: "너겟 10조각 + 와플 프라이 + 캔 음료.",
        },
        image: "10-nugget-combo",
      },
    ],
  },
  {
    id: "kids",
    name: { en: "Kids", ko: "키즈 밀" },
    items: [
      {
        id: "kids-hot-dog-meal",
        name: { en: "Kids Hot Dog Meal", ko: "키즈 핫도그 밀" },
        price: 10000,
        description: {
          en: "1 hotdog + waffle fries + kids drink.",
          ko: "핫도그 1개 + 와플 프라이 + 어린이 음료.",
        },
        image: "kids-hotdog-meal",
        kids: true,
      },
      {
        id: "kids-slider-meal",
        name: { en: "Kids Slider Meal", ko: "키즈 슬라이더 밀" },
        price: 10000,
        description: {
          en: "2 mini sliders + waffle fries + kids drink.",
          ko: "미니 슬라이더 2개 + 와플 프라이 + 어린이 음료.",
        },
        image: "kids-slider-meal",
        kids: true,
      },
      {
        id: "kids-nugget-meal",
        name: { en: "Kids Nugget Meal", ko: "키즈 너겟 밀" },
        price: 10000,
        description: {
          en: "5 chicken nuggets + waffle fries + kids drink.",
          ko: "치킨 너겟 5조각 + 와플 프라이 + 어린이 음료.",
        },
        image: "kids-nugget-meal",
        kids: true,
      },
    ],
  },
  {
    id: "drinks-extras",
    name: { en: "Drinks & Extras", ko: "음료 & 추가" },
    items: [
      {
        id: "can-drink",
        name: { en: "Can Drink", ko: "캔 음료" },
        price: 4000,
        description: {
          en: "Choose from available canned drinks.",
          ko: "매장에서 준비된 캔 음료 중 선택하세요.",
        },
      },
      {
        id: "kids-drink",
        name: { en: "Kids Drink", ko: "어린이 음료" },
        price: 2500,
        description: {
          en: "Available kids drink flavors.",
          ko: "매장에서 준비된 어린이 음료.",
        },
      },
      {
        id: "premium-topping",
        supplement: true,
        name: { en: "Premium Topping", ko: "프리미엄 토핑" },
        price: 2000,
        description: {
          en: "Add to eligible hotdogs.",
          ko: "추가 가능한 핫도그에 선택하세요.",
        },
      },
      {
        id: "dnb-signature-sauce",
        supplement: true,
        name: { en: "DNB Signature Sauce", ko: "DNB Signature 소스" },
        price: 1000,
        description: {
          en: "Add to eligible hotdogs.",
          ko: "추가 가능한 핫도그에 선택하세요.",
        },
      },
    ],
  },
] satisfies MenuCategory[];
export const toppings = [
  {
    name: { en: "Premium toppings", ko: "프리미엄 토핑" },
    rule: { en: "+₩2,000 each", ko: "개당 +₩2,000" },
    items: [
      { en: "Chili (100% Beef)", ko: "칠리 (100% 소고기)" },
      { en: "Melted Cheese", ko: "녹인 치즈" },
      { en: "Grilled Onions", ko: "구운 양파" },
      { en: "Bacon Crumbles", ko: "베이컨" },
      { en: "Grilled Bell Peppers", ko: "구운 파프리카" },
    ],
  },
  {
    name: { en: "Free toppings", ko: "무료 토핑" },
    rule: { en: "On the house", ko: "무료" },
    items: [
      { en: "Relish", ko: "렐리시" },
      { en: "Diced Onions", ko: "다진 양파" },
      { en: "Shredded Cheese", ko: "슈레드 치즈" },
      { en: "Pickled Jalapeños", ko: "할라피뇨 피클" },
      { en: "Sauerkraut", ko: "사우어크라우트" },
    ],
  },
  {
    name: { en: "Classic sauces", ko: "클래식 소스" },
    rule: { en: "Free", ko: "무료" },
    items: [
      { en: "Ketchup", ko: "케첩" },
      { en: "Mustard", ko: "머스터드" },
      { en: "Mayo", ko: "마요네즈" },
      { en: "Ranch", ko: "랜치" },
    ],
  },
  {
    name: { en: "DNB Signature", ko: "DNB Signature" },
    rule: { en: "+₩1,000 each", ko: "개당 +₩1,000" },
    items: [
      { en: "Honey Mustard", ko: "허니 머스터드" },
      { en: "Honey BBQ", ko: "허니 바비큐" },
      { en: "Sweet Chili", ko: "스위트 칠리" },
      { en: "Buffalo", ko: "버팔로" },
      { en: "Sriracha", ko: "스리라차" },
      { en: "Chipotle Mayo", ko: "치폴레 마요" },
      { en: "Garlic Aioli", ko: "갈릭 아이올리" },
      { en: "Teriyaki", ko: "데리야키" },
    ],
  },
  {
    name: { en: "Nugget dipping", ko: "너겟 디핑 소스" },
    rule: { en: "Choose one", ko: "1개 선택" },
    items: [
      { en: "Ketchup", ko: "케첩" },
      { en: "Honey Mustard", ko: "허니 머스터드" },
      { en: "BBQ Sauce", ko: "바비큐 소스" },
      { en: "Sweet & Sour", ko: "스위트 앤 사워" },
    ],
  },
];
export const sliderPricing = [
  { name: { en: "3 Sliders", ko: "슬라이더 3개" }, price: 15000 },
  { name: { en: "3 Slider Combo", ko: "슬라이더 3개 콤보" }, price: 23500 },
  { name: { en: "5 Sliders", ko: "슬라이더 5개" }, price: 19000 },
  { name: { en: "5 Slider Combo", ko: "슬라이더 5개 콤보" }, price: 28000 },
];
export const wingFlavors: LocalizedString[] = [
  { en: "Original", ko: "오리지널" },
  { en: "Honey BBQ", ko: "허니 바비큐" },
  { en: "Buffalo", ko: "버팔로" },
  { en: "Cajun", ko: "케이준" },
];
export const favoriteIds = ["chili-cheese-dog", "double-combo", "wing-combo"];
export const comboUpgrade = 8500;
