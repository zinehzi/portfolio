import enMessages from "../locales/en.json";
import faMessages from "../locales/fa.json";

type EnMessages = typeof enMessages;
type FaMessages = typeof faMessages;

declare global {
  interface IntlMessages extends EnMessages, FaMessages {}
}
