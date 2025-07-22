// index.js는 import 경로를 간결하게 하고, 폴더를 하나의 모듈처럼 구성하기 위해 사용됨

import Root from "./Root";

import { action } from "./action";
import { loader } from "./loader";

export { action, loader }
export default Root;