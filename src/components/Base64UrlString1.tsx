import { Converter } from "./Converter.tsx";
import { atob_url, btoa_url, fromBinary, toBinary } from "./utils.ts";

function encode(value: string) {
  return btoa_url(toBinary(value));
}
function decode(value: string) {
  return fromBinary(atob_url(value));
}

export default function () {
  return <>
  <h2>encode</h2>
  <Converter convert={encode} />
  <h2>decode</h2>
  <Converter convert={decode} />
</>
}
