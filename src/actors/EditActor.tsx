import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{ name: 'Tom Hanks', dateOfBirth: new Date('1956-03-13') }}
        onSubmit={values => console.log(values)}
      />
    </>
  );
}