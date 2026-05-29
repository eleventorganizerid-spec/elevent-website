import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'elevent',
  title: 'Elevent CMS',
  projectId: '98jwav2j',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemas },
})
