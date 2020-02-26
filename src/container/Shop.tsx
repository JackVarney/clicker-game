import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "../store";
import Number from "../components/Number";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  margin: 20px 0 0 0;

  * {
    margin: 0 0 0 25%;
  }
`;

const Shop: FC = () => {
  const customerRate = useSelector(state => state.game.customers.rate);
  const maxCustomers = useSelector(state => state.game.customers.maxCustomers);
  const score = useSelector(state => state.game.score);
  const customers = useSelector(state => state.game.customers.count);

  return (
    <Wrapper>
      <Number label="Cash">{score}</Number>
      <Number label="Customers">{customers}</Number>
      <Number label="New customers">{customerRate}</Number>
      <Number label="Max customers">{maxCustomers}</Number>
    </Wrapper>
  );
};

export default Shop;
