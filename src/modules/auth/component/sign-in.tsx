import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/home",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export function SigninForm() {
  return (
    <div className="m-auto px-8 py-16 bg-gray-200 rounded mt-16 max-w-sm ring-8">
      <p className="ml-8 mb-10 text-black text-3xl capitalize">Login into account</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
