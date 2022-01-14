import { AppConfigProvider } from './AppConfigProvider';

import { appConfigTest } from './appConfigTest';

export { AppConfig } from './AppConfig';

export const appConfigProvider = new AppConfigProvider({
    test: appConfigTest,
});