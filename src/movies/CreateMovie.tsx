import { Link } from "react-router-dom";

export default function CreateMovie() {
  return (
    <>
      <h3>Create movie</h3>
      <Link className="btn btn-primary" to="/movie/create">
        Create movie
      </Link>
    </>
  );
}
