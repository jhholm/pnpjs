export interface IClientSidePageTranslations {
    UntranslatedLanguages: string[],
    Items: IClientSidePageTranslationItem[]
}

export interface IClientSidePageTranslationItem {
    Culture: string;
    FileStatus: number;
    HasPublishedVersion: boolean;
    LastModified: string;
    Path: {
        DecodedUrl: string
    };
    Title: string;
}