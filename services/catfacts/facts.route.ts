import { catfact } from '@catfact/index';

export function getFact(max_length?: string) {
  return catfact.get('/fact').query({ max_length });
}

export function getFacts(max_length?: string, limit?: string) {
  return catfact.get('/facts').query({ max_length, limit });
}
