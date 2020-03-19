import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 22px;
    color: red;
`;

function Title({title}){
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
}

export default Title;
