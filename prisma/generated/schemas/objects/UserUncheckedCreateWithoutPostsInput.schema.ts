import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict();

export const UserUncheckedCreateWithoutPostsInputObjectSchema = Schema;
