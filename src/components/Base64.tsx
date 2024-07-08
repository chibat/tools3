import { EncodeDecode } from "./EncodeDecode.tsx";

export default function() {
  return <EncodeDecode encode={v => btoa(v)} decode={v => atob(v)}/>;
}
