import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import importPlugin from 'eslint-plugin-import'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    name: 'architecture-rules',

    plugins: {
      import: importPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: true,
      },
    },

    rules: {
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/components',
              from: './src/views',
              message: 'Les components ne doivent pas importer les views',
            },
            {
              target: './src/data',
              from: ['./src/components', './src/views'],
              message: 'Les data doivent rester pures (pas de dépendance UI)',
            },
            {
              target: './src/router',
              from: './src/components',
              message: 'Le router doit importer uniquement des views',
            },
          ],
        },
      ],

      'import/no-relative-parent-imports': 'error',
    },
  },
)
