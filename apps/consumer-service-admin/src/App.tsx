import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedCommentList } from "./processedComment/ProcessedCommentList";
import { ProcessedCommentCreate } from "./processedComment/ProcessedCommentCreate";
import { ProcessedCommentEdit } from "./processedComment/ProcessedCommentEdit";
import { ProcessedCommentShow } from "./processedComment/ProcessedCommentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedComment"
          list={ProcessedCommentList}
          edit={ProcessedCommentEdit}
          create={ProcessedCommentCreate}
          show={ProcessedCommentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
