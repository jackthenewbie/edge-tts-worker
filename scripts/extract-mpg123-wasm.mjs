import { writeFile } from "node:fs/promises";
import WASMAudioDecoderCommon from "../node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderCommon.js";
import EmscriptenWASM from "../node_modules/mpg123-decoder/src/EmscriptenWasm.js";

new WASMAudioDecoderCommon();
new EmscriptenWASM(WASMAudioDecoderCommon);
const wasm = await WASMAudioDecoderCommon.inflateDynEncodeString(EmscriptenWASM.wasm);
await writeFile(new URL("../src/mpg123.wasm", import.meta.url), wasm);
