import { writable } from 'svelte/store';
import { TIMELINE_DEFAULT_ZOOM } from './constants';
import { PlanSummaryData } from './plan-data';

export const planSummary = writable(new PlanSummaryData([]));
export const nowPosition = writable(0);
export const now = writable(new Date());
export const zoomLevel = writable(TIMELINE_DEFAULT_ZOOM);
