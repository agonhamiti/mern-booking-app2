import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Export the configuration object
export default defineConfig({
  plugins: [react()],
})
