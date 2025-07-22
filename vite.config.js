/**
 * 경로 별칭(alias) 설정 추가 예시
 * [ AS-IS ]
 *  import { updateContact } from "../../utils/contacts";
 *
 * [ TO-BE ]
 * import { updateContact } from "@utils/contacts";
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";

// __dirname 대체 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ → src/
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  }
})
