import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        // file: 'index.js',
        dir: 'dist',
        format: 'iife',
        name: 'handler',
    },
    plugins: [typescript(), terser()],
};
