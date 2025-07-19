import { join } from 'path';
import { app } from 'electron';
import isDev from './checkDevelopment.js';

export default function getPreload(): string {
    return join(
        app.getAppPath(),
        isDev() ? '.' : '..',
        '/dist-electron/preload.cjs'
    );
};
