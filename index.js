import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import { 
  FormCheckout 
} from 'src/ui-components';

const e = React.createElement;

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
	<AmplifyProvider>
		<FormCheckout />
	</AmplifyProvider>
	)
  }
}

const domContainer = document.querySelector('#base_content');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ConfirmationForm));
