import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { name } from './package';

export default {
  output: {
    file: `dist/${name}.js`,
    format: 'cjs',
  },
  input: path.join(__dirname, 'src/index.js'),
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.json'],
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
    }),
  ],
  sourcemap: true,
};
