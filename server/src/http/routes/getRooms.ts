import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const dbRooms = schema.rooms;
    const result = await db
      .select({ id: dbRooms.id, name: dbRooms.name })
      .from(dbRooms)
      .orderBy(dbRooms.createdAt);
    return result;
  });
};
