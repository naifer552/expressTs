import { DiariesEntry } from '../types';
import diariesData from './diaries.json';

const diaries: Array<DiariesEntry> = diariesData as Array<DiariesEntry>;

export const getEntries = () => diaries;

export const addEntry = () => null;