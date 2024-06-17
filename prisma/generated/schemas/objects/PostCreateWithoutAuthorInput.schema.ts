import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
    likes: z.bigint(),
  })
  .strict();

export const PostCreateWithoutAuthorInputObjectSchema = Schema;