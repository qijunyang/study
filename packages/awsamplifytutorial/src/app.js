import $ from "jquery";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

$(() => {
    $("body").append("this is aws amplify tutorial")

    const username = "tom";
    const password = "xydafdsf";
    const email = "qj.msn.y@hotmail.com";
    // Auth.signUp({
    //     username,
    //     password,
    //     attributes: {
    //         email,          // optional
    //         // phone_number,   // optional - E.164 number convention
    //         // other custom attributes 
    //     },
    //     validationData: []  //optional
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(username, code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true    
    }).then(data => console.log(data))
      .catch(err => console.log(err));
    
    // Auth.resendSignUp(username).then(() => {
    //     console.log('code resent successfully');
    // }).catch(e => {
    //     console.log(e);
    // });

});