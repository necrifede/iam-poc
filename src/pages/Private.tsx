import { OidcSecure, useOidcAccessToken, useOidcIdToken } from "@axa-fr/react-oidc";

const Private = () => {
  // const { idTokenPayload } = useOidcIdToken();
  const { accessToken, accessTokenPayload } = useOidcAccessToken();
  const { idToken, idTokenPayload } = useOidcIdToken();

  console.log("idTokenPayload: ", idTokenPayload);
  console.log('accessToken: ', accessToken)
  console.log('accessTokenPayload: ', accessTokenPayload)
  console.log('idToken: ', idToken)

  return (
    <OidcSecure>
      <main>
        <h1>Private/secured </h1>
        <p>Check browser console log to see aditional information</p>
      </main>
    </OidcSecure>
  );
};

Private.propTypes = {};

export default Private;
