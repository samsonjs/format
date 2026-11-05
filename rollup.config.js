import terser from '@rollup/plugin-terser'

export default {
  input: 'src/format.js',
  plugins: [terser()],
  output: [
    {
      file: 'builds/format.cjs',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'builds/format.min.js',
      format: 'umd',
      name: 'format',
      exports: 'default'
    }
  ]
}
