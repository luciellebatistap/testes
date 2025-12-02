import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // O 'base' é o nome do seu repositório no GitHub
  base: '/testes/',  
  plugins: [react()],
})