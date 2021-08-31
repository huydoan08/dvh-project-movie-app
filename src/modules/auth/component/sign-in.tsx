import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/hotfilm",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export default function SigninForm() {
  return (
    <div className="m-auto p-10 bg-gray-200 rounded-lg mt-20 max-w-sm">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
