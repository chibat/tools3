import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

export function Converter(props: { convert: (value: string) => string }) {
  const message = signal("");
  const result = signal("");
  return (
    <>
      <input type="text" autofocus style="width: 100%"
        onChange={e => {
          message.value = "";
          result.value = "";
          try {
            result.value = props.convert(e.currentTarget.value);
          } catch (e) {
            console.error(e);
            message.value = ERROR_MESSAGE;
          }
        }} />
      <input readonly style="width: 100%; border: none;" value={result} />
      <span style="color: red">{message}</span>
    </>
  );
}
