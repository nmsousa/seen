export enum FilterType {
    ALL = 'ALL',
    YEAR = 'YEAR',
    SEEN_STATUS = 'SEEN_STATUS',
    GENRE = 'GENRE',
}

export interface MovieFilter {
    filterType: FilterType;
    filterText: string;
}
