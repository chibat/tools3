import { Converter } from "./Converter.tsx";
import { fromBinary, toBinary } from "./utils.ts";

function encode(value: string) {
  return btoa(toBinary(value))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
function decode(value: string) {
  return fromBinary(atob(value.replace(/-/g, '+').replace(/_/g, '/')));
}

export default function () {
  return <>
  <h2>encode</h2>
  <Converter convert={encode} />
  <h2>decode</h2>
  <Converter convert={decode} />
</>
}
