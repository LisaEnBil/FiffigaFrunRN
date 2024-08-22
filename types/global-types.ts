export type Item =
    {
        id: number,
        categories: string[],
        title: string,
        description: string
    }

export type CategoryItem =
    { category: string; checked: boolean; }

export type LikedItem =
    {
        id: number,
        categories: string[],
        title: string,
        description: string,
        checked: boolean,
    }
