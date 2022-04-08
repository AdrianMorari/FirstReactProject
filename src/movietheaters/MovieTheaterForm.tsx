import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Map from "../utils/Map";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { Form, Formik, FormikHelpers } from "formik";
import movieTheaterCreationDTO  from "./movieTheaters.model";


export default function ActionForm(props: movieTheaterFormProps) {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase()
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name" />

          <div style={{marginBottom: "1rem"}}>
              <Map />
          </div>

            <Button disabled={formikProps.isSubmitting} type="submit">
              Save changes
            </Button>
            <Link className="btn btn-secondary" to="/movietheaters">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface movieTheaterFormProps {
  model: movieTheaterCreationDTO;
  onSubmit(
    values: movieTheaterCreationDTO,
    action: FormikHelpers<movieTheaterCreationDTO>
  ): void;
}
