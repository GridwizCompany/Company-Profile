/**
 * partnersList.ts
 * Daftar partner resmi dan mapping ke file logo yang ada di /public/images/partners/logo/
 */

export interface PartnerOption {
  id: string;
  name: string;
  logo: string;
}

export const EVENT_PARTNERS_LIST: PartnerOption[] = [
  { id: "acibara",       name: "Acibara",                logo: "/images/partners/logo/acibara.svg" },
  { id: "aruna",         name: "Aruna Senggigi",         logo: "/images/partners/logo/aruna.svg" },
  { id: "bento",         name: "Bento Kopi",             logo: "/images/partners/logo/bento.svg" },
  { id: "dapoersasak",   name: "Dapoer Sasak",           logo: "/images/partners/logo/dapoersasak.svg" },
  { id: "dcmmandalika",  name: "DCM Mandalika",          logo: "/images/partners/logo/dcmmandalika.svg" },
  { id: "deco",          name: "Deco Hotel",             logo: "/images/partners/logo/deco.svg" },
  { id: "esda",          name: "ESDA",                   logo: "/images/partners/logo/esda.svg" },
  { id: "golkar",        name: "Golkar",                 logo: "/images/partners/logo/golkar.svg" },
  { id: "hayafarma",     name: "Haya Farma",             logo: "/images/partners/logo/hayafarma.svg" },
  { id: "janjijiwa",     name: "Janji Jiwa",             logo: "/images/partners/logo/janjijiwa.svg" },
  { id: "kinta",         name: "Kinta Hotel",            logo: "/images/partners/logo/kinta.svg" },
  { id: "madjoe",        name: "Madjoe",                 logo: "/images/partners/logo/madjoe.svg" },
  { id: "mattowa",       name: "Mattowa",                logo: "/images/partners/logo/mattowa.svg" },
  { id: "mayura",        name: "Mayura Water Park",      logo: "/images/partners/logo/mayura.svg" },
  { id: "merumata",      name: "Merumatta Senggigi",     logo: "/images/partners/logo/merumata.svg" },
  { id: "pinkot",        name: "Pinkot",                 logo: "/images/partners/logo/pinkot.svg" },
  { id: "poltekpar",     name: "Poltekpar Lombok",       logo: "/images/partners/logo/poltekpar.svg" },
  { id: "rplay",         name: "RPlay",                  logo: "/images/partners/logo/rplay.svg" },
  { id: "uin",           name: "UIN Mataram",            logo: "/images/partners/logo/uin.svg" },
  { id: "ummat",         name: "UMMAT",                  logo: "/images/partners/logo/ummat.svg" },
  { id: "unram",         name: "Universitas Mataram",    logo: "/images/partners/logo/unram.svg" },
];

export function getPartnerById(id: string): PartnerOption | undefined {
  return EVENT_PARTNERS_LIST.find((p) => p.id === id);
}

export function getPartnerLogo(idOrFilename: string): string {
  const match = EVENT_PARTNERS_LIST.find(
    (p) => p.id === idOrFilename || p.logo.endsWith(`/${idOrFilename}`) || p.name.toLowerCase() === idOrFilename.toLowerCase()
  );
  if (match) return match.logo;
  if (idOrFilename.startsWith("/")) return idOrFilename;
  return `/images/partners/logo/${idOrFilename}`;
}
