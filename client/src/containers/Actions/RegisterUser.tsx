import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from "../../redux/actions/web3Actions"

const RegisterUser = React.memo((props: any) => {
  const { data, error, loadedCount, progress, rollbackProgress } = useSelector((state: any) => state.nos.register);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Register state</h1>
      <h1>Times loadedd: {loadedCount}</h1>
      <h1>Overall Progress: {progress}</h1>
      <h1>Rollback Progress: {rollbackProgress}</h1>
      <h1>Data: {JSON.stringify(data)}</h1>
      <h1>Error: {JSON.stringify(error)}</h1>
      <button onClick={() => dispatch(userActions.call(`Pingu-${Math.random()}`))}>Hello</button>
    </>
  );
});

export default RegisterUser;
