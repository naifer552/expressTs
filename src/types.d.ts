export type weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiariesEntry {
    id: number,
    date: string,
    weather: weather,
    visibility: visibility,
    comment: string
}