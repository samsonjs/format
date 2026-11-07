import terser from '@rollup/plugin-terser';

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
      exports: 'default',
      // 0.2.2 also exposed printf and vsprintf as globals in browsers.
      footer:
        '(function(g){g.format&&g.format.vsprintf&&(g.printf=g.format.printf,g.vsprintf=g.format.vsprintf)})(typeof globalThis!="undefined"?globalThis:self);'
    }
  ]
};
