import { execSync } from 'child_process'
import path from 'path'

console.log('🚀 Running pre-deployment campus sync...')

try {
  // Run the campus sync
  execSync('npx tsx scripts/sync-campus-pages.ts', { 
    stdio: 'inherit',
    cwd: path.join(process.cwd())
  })
  
  console.log('✅ Pre-deployment sync completed successfully!')
} catch (error) {
  console.error('❌ Pre-deployment sync failed:', error)
  process.exit(1)
} 