import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { serveCustomer } from '../store/actions/serve-customer';
import Number from '../components/Number';
import Button from '../components/Button';
import Staff from './Staff';

function Main() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.game.score);
  const customers = useSelector(state => state.game.customers.count);

  return (
    <div>
      <Number label={'Score'}>{score}</Number>
      <Number label={'Customers'}>{customers}</Number>
      <Button
        onClick={() => {
          dispatch(serveCustomer);
        }}
      >
        Serve customer
      </Button>
      <Staff />
    </div>
  );
}

export default Main;
