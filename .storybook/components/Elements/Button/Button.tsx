import * as React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

type Props = {
  text: string;
};

const ButtonComponent = styled.button`
  background: gray;
  border-radius: 20px;
  padding: 4px 16px;
`;
 
export const Button = ({
  text
}: Props) => {
  return ( 
    <ButtonComponent>
      {text}
    </ButtonComponent>
   );
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
