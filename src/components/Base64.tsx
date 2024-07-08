import { Converter } from "./Converter.tsx";

const encode = (v: string) => btoa(v);
const decode = (v: string) => atob(v);

export default function () {
  return <>
    <h2>encode</h2>
    <Converter convert={encode} />
    <h2>decode</h2>
    <Converter convert={decode} />
  </>
}
