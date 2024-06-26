import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'CalendarDays',
      file: './dist/calendar-days.umd.js',
      format: 'umd',
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    external: ['ms'],
    output: [
      { file: './dist/calendar-days.cjs.js', format: 'cjs' },
      { file: 'dist/calendar-days.esm.js', format: 'es' },
    ],
  },
];
