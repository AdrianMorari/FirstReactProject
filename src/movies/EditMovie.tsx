import MovieForm from "./MovieForm";

export default function EditMovie() {
    return (
      <>
        <h3>Edit movie</h3>
        <MovieForm
        model={{ title: "Toy Story", inTheaters: true, trailer: "url", releaseDate: new Date('1999-06-17') }}
        onSubmit={(values) => console.log(values)}
      />
      </>
    );
  }