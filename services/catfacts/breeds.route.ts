import { catfact } from '@catfact/index';

export function getBreeds(limit?: string) {
  return catfact.get('/breeds').query({ limit });
}
