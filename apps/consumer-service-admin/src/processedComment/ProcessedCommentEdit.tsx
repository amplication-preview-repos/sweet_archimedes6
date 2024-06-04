import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedCommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="originalCommentId" source="originalCommentId" />
        <DateTimeInput label="processedDate" source="processedDate" />
        <TextInput label="processingStatus" source="processingStatus" />
      </SimpleForm>
    </Edit>
  );
};
