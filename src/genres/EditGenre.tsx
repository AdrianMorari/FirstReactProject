import { useParams } from "react-router";

export default function EditGenre() {
  const {id}: any = useParams();

  return (
    <>
      <h3>Edit Genre</h3>
      The id is {id}
    </>
  );
}