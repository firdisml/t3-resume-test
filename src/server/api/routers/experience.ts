import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const experienceRouter = createTRPCRouter({
  insert: publicProcedure
    .input(z.object({ id: z.string(), title: z.string(), employer: z.string(), start_date: z.date(), end_date: z.date(), description: z.array(z.string()), index: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.experience.create({
        data: {
          userId: input.id,
          title: input.title,
          employer: input.employer,
          start_date: input.start_date,
          end_date: input.end_date,
          description: input.description,
          index: input.index,
        }
      });
    }),

  update: publicProcedure
    .input(z.object({ id: z.string(), title: z.string(), employer: z.string(), start_date: z.date(), end_date: z.date(), description: z.array(z.string()) }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.experience.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          employer: input.employer,
          start_date: input.start_date,
          end_date: input.end_date,
          description: input.description,
        }
      });
    }),

    updateIndex: publicProcedure
    .input(z.object({ id: z.string(), index: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.experience.update({
        where: {
          id: input.id,
        },
        data: {
          index: input.index
        }
      });
    }),
  

  fetch: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.experience.findMany({
      orderBy: [
        {
          index: 'asc',
        },
      ],
      where: {
        userId: input.id,
      }
    });
  }),

  fetchUnique: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.experience.findUnique({
      where: {
        id: input.id,
      }
    });
  }),



  count: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.experience.count({
      where: {
        userId: input.id,
      }
    });
  }),
});
