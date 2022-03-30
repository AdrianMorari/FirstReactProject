import { Link } from "react-router-dom";

export default function CreateMovieTheater() {
  return (
    <>
      <h3>Create movie theater</h3>
      <Link className="btn btn-primary" to="/movietheaters/create">
        Create movie theater
      </Link>
    </>
  );
}
