import {
  Field,
  Form,
  withFormik
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';


function Login({values, errors, touched, machine, error, success}) {
  console.table(errors);
  return (
    <Form>
      <label>Username</label>
      <Field name='username' type='text' value={values.username}/>
      {touched.username && errors.username && <p>{errors.username}</p>}
      <label>Password</label>
      <Field name='password' type='password' value={values.password}/>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <button type="Submit">Submit</button>
      {success && <p>Success</p>}
      {error && <p>Error</p>}
    </Form>
  );
}

export default withFormik( {
  mapPropsToValues( {username, password} ) {
    return {
      username   : username || '',
      password: password || ''
    };
  },
  handleSubmit( values, bag ) {
    console.log( bag );
    bag.props.machine('START');
    axios.post('http://localhost:5000/api/login',values).then(res=>{
      bag.props.machine('SUCCESS');
      console.log(res.data);
    }).catch(err => {
      bag.props.machine('ERROR');
      console.log(err.response);
    })

  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Email Address is Required"),
    password: Yup.string().required("Password field is required")
  })
} )( Login );