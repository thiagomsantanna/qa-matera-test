import { z } from 'zod';

const breed = z
  .object({
    breed: z.string(),
    country: z.string(),
    origin: z.string(),
    coat: z.string(),
    pattern: z.string(),
  })
  .strict();

export const breedsSchema = z.array(breed);

export function breedExample() {
  return {
    breed: 'Abyssinian',
    country: 'Ethiopia',
    origin: 'Natural/Standard',
    coat: 'Short',
    pattern: 'Ticked',
  };
}
