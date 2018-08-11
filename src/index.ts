import { dad } from './libs/dad';
import { IDadDate } from './utils/secToDate';

import isToday from './libs/isToday';
import now from '../out/src';

export { now, isToday };

type DateStringOrSeconds = string | number;
// export const tw = (value: DateStringOrSeconds) => dad(value).tw;

/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss (+08:00) | timestamp
 *
 */
export function tw(value: string): number;
export function tw(value: number): IDadDate;
export function tw(value: DateStringOrSeconds) {
  if (typeof value === 'string') return dad(value).tw;
  return dad(value).tw;
}
/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss (+09:00) | timestamp
 *
 */
export function ja(value: string): number;
export function ja(value: number): IDadDate;
export function ja(value: DateStringOrSeconds) {
  if (typeof value === 'string') return dad(value).ja;
  return dad(value).ja;
}

/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss (+08:00) | timestamp
 *
 */
export function hk(value: string): number;
export function hk(value: number): IDadDate;
export function hk(value: DateStringOrSeconds) {
  if (typeof value === 'string') return dad(value).tw;
  return dad(value).tw;
}

export default dad;
exports = dad;
