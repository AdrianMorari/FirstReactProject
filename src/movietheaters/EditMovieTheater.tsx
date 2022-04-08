import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit movie theater</h3>
      <MovieTheaterForm
        model={{ name: "Patria", latitude: 47.02713154619099, longitude: 28.82852930175432}}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}