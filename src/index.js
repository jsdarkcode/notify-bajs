import NotifyBaJS from "./js/notify";

export default function notifyBaJS(payload = {}) {
  return new NotifyBaJS(payload);
}
