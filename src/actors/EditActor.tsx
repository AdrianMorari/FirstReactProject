import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{ name: 'Tom Hanks',
        dateOfBirth: new Date('1956-07-09'),
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg',
        biography: '# Tom Hanks \n\n Was borned in **Kentucky**'
      }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
