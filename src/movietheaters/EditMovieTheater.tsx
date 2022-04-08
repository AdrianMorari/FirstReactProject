import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit movie theater</h3>
      <MovieTheaterForm
        model={{ name: "test" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}