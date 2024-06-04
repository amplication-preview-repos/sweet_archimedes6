import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedCommentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="originalCommentId" source="originalCommentId" />
        <DateTimeInput label="processedDate" source="processedDate" />
        <TextInput label="processingStatus" source="processingStatus" />
      </SimpleForm>
    </Create>
  );
};
