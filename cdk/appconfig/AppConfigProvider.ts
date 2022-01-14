import { Construct } from "constructs";

export class AppConfigProvider<T> {

    contextKey: string;
    appConfigMap = new Map<string, T>();

    constructor(
        appConfigMap: { [appConfigName: string]: T; },
        contextKey = 'AppConfigName',
    ) {
        this.contextKey = contextKey;
        for (const [appConfigName, appConfig] of Object.entries(appConfigMap)) {
            this.appConfigMap.set(appConfigName, appConfig);
        }
    }

    getConfig(construct: Construct): T {
        const appConfigName = construct.node.tryGetContext(this.contextKey);
        if (appConfigName === undefined) {
            throw new Error(`missing key ${JSON.stringify(this.contextKey)} in context; run "cdk --context ${this.contextKey}=${[...this.appConfigMap.keys()].join('|')} ..."`);
        }

        const appConfig = this.appConfigMap.get(appConfigName);
        if (appConfig === undefined) {
            throw new Error(`invalid value for context key ${JSON.stringify(this.contextKey)}. run "cdk --context ${this.contextKey}=${[...this.appConfigMap.keys()].join('|')} ..."`);
        }

        return appConfig;
    }

}