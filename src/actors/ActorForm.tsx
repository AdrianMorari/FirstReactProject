import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { Form, Formik, FormikHelpers } from "formik";
import { actorCreationDTO } from "./actors.model";

export default function ActionForm(props: actorFormProps) {
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

            <Button disabled={formikProps.isSubmitting} type="submit">
              Save changes
            </Button>
            <Link className="btn btn-secondary" to="/actors">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
