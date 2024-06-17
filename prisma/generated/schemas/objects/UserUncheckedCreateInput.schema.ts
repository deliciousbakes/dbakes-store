import { z } from 'zod';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    posts: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
