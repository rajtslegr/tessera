import { resolver } from 'blitz';
import db from 'db';
import { z } from 'zod';

const UpdateNote = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateNote),
  resolver.authorize(),
  async ({ id, ...data }) => {
    await db.note.deleteMany({ where: { id } });
    const note = await db.note.update({ where: { id }, data });

    return note;
  },
);
