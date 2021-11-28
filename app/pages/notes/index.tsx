import { Button } from '@chakra-ui/button';
import { useCurrentUser } from 'app/core/hooks/useCurrentUser';
import Layout from 'app/core/layouts/Layout';
import getNotes from 'app/notes/queries/getNotes';
import {
  BlitzPage,
  Head,
  Link,
  Routes,
  usePaginatedQuery,
  useRouter,
} from 'blitz';
import React, { Suspense } from 'react';

const ITEMS_PER_PAGE = 100;

export const NotesList = () => {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const page = Number(router.query.page) || 0;
  const [{ notes, hasMore }] = usePaginatedQuery(getNotes, {
    orderBy: { id: 'asc' },
    where: { userId: currentUser?.id },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={Routes.ShowNotePage({ noteId: note.id })}>
              <a>{note.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Button
        textTransform="uppercase"
        disabled={page === 0}
        onClick={goToPreviousPage}
      >
        Previous
      </Button>
      <Button
        textTransform="uppercase"
        disabled={!hasMore}
        onClick={goToNextPage}
      >
        Next
      </Button>
    </div>
  );
};

const NotesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewNotePage()}>
            <Button textTransform="uppercase">Create Note</Button>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <NotesList />
        </Suspense>
      </div>
    </>
  );
};

NotesPage.authenticate = true;
NotesPage.getLayout = (page) => <Layout>{page}</Layout>;

export default NotesPage;
