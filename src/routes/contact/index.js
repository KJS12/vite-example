/**
 * index.js는 import 경로를 간결하게 하고, 폴더를 하나의 모듈처럼 구성하기 위해 사용됨
 *
 * [ AS-IS ]
 *  import Contact from './routes/contact/Contact'
 *  import { loader } from "./routes/contact/loader";
 *  import { action } from "./routes/contact/action";
 *
 * [ TO-BE ]
 *  import Contact, { loader, action } from './routes/contact'
 */

import Contact from "./Contact";
// import Favorite from "./Favorite"; // Contact.jsx 내부에서 사용된다면 import/export할 필요는 없으나 외부에서 쓰일경우 선언한다.

import { loader } from "./loader";
import { action } from "./action";

export { loader, action }
export default Contact;