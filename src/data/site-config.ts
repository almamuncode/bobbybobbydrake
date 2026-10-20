// Owner settings. null hides optional UI. Keep siteUrl aligned with your production domain.
export const siteConfig: {
  siteUrl: string;
  phone: string | null;
  instagram: string | null;
  rating: number | null;
  reviews: { name: string; text: string }[];
  addressKo: string;
  addressEn: string;
  maps: { name: string; url: string }[];
} = {
  siteUrl: "https://dogsnbuns.kr",
  phone: null,
  instagram: null,
  rating: null,
  reviews: [],
  addressKo: "경기도 평택시 팽성읍 안정순환로 19",
  addressEn:
    "19 Anjeong Sunhwan-ro, Paengseong-eup, Pyeongtaek-si, Gyeonggi-do, South Korea",
  maps: [
    {
      name: "Naver Map",
      url:
        "https://map.naver.com/p/search/" +
        encodeURIComponent("경기도 평택시 팽성읍 안정순환로 19"),
    },
    {
      name: "Kakao Map",
      url:
        "https://map.kakao.com/?q=" +
        encodeURIComponent("경기도 평택시 팽성읍 안정순환로 19"),
    },
    {
      name: "Google Maps",
      url:
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent("경기도 평택시 팽성읍 안정순환로 19"),
    },
  ],
};
