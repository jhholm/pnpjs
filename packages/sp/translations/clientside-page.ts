import { _ClientsidePage } from "../clientside-pages/types.js";
import { spPost, spGet } from "../operations.js";
import { SPQueryable } from "../spqueryable.js";
import { IClientSidePageTranslations } from "./types.js";

declare module "../clientside-pages/types" {
    interface _ClientsidePage {
        createTranslations(languages: string[]): Promise<IClientSidePageTranslations>;
        getTranslations(): Promise<IClientSidePageTranslations>;
    }
    interface IClientsidePage {
        /**
         * Creates a translation of this page
         *
         * @param languages array of language codes to create translations or leave empty if all translations should be created
         */
        createTranslations(languages: string []): Promise<IClientSidePageTranslations>;
        /**
         * Gets translation information for this page
         */
        getTranslations(): Promise<IClientSidePageTranslations>;
    }
}

_ClientsidePage.prototype.createTranslations = async function (this: _ClientsidePage, languages: string[] = []): Promise<any> {
    return spPost<void>(SPQueryable(this, `_api/sitepages/pages(${this.json.Id})/translations/create`), { body: JSON.stringify({ request: { LanguageCodes: languages }})});
};

_ClientsidePage.prototype.getTranslations = async function (this: _ClientsidePage): Promise<IClientSidePageTranslations> {
    return spGet<IClientSidePageTranslations>(SPQueryable(this, `_api/sitepages/pages(${this.json.Id})/translations`));
};
