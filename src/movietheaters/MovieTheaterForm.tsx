import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { Form, Formik, FormikHelpers } from "formik";
import movieTheaterCreationDTO from "./movieTheaters.model";
import MapField from "../forms/MapField";
import coordinateDTO from "../utils/coordinates.model";

export default function ActionForm(props: movieTheaterFormProps) {
  function transformCoordinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude,
      };
      return [response];
    }
    return undefined;
  }

  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name" />

            <div style={{ marginBottom: "1rem" }}>
              <MapField
                latField="latitude"
                lngField="longitude"
                coordinates={transformCoordinates()}
              />
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
