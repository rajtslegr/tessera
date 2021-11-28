import { useCurrentUser } from 'app/core/hooks/useCurrentUser';
import Layout from 'app/core/layouts/Layout';
import { FORM_ERROR, NoteForm } from 'app/notes/components/NoteForm';
import createNote from 'app/notes/mutations/createNote';
import { BlitzPage, Link, Routes, useMutation, useRouter } from 'blitz';
import { Suspense } from 'react';

const NewNotePage: BlitzPage = () => {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const [createNoteMutation] = useMutation(createNote);

  return (
    <div>
      <h1>Create New Note</h1>

      <NoteForm
        submitText="Create Note"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateNote}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const note = await createNoteMutation({
              ...values,
              userId: currentUser?.id,
            });
            router.push(Routes.ShowNotePage({ noteId: note.id }));
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

      <p>
        <Link href={Routes.NotesPage()}>
          <a>Notes</a>
        </Link>
      </p>
    </div>
  );
};

NewNotePage.authenticate = true;
NewNotePage.getLayout = (page) => (
  <Layout title={'Create New Note'}>
    <Suspense fallback="...loading">{page}</Suspense>
  </Layout>
);

export default NewNotePage;
