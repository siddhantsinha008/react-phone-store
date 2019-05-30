import styled from 'styled-components';

export const ButtonContainer=styled.button`
background:transparent;
margin:0.2rem 0.5rem 0.2rem 0;
border-radius:0.2rem;
border:0.05rem solid #ec7f37;
cursor:pointer;
color:#393939;
transition:all 0.5s ease-in-out;
&:hover{ 
    background-color:#393939;
    color:#ec7f37;
}
&:focus{
    outline:none;
}
`

export const ButtonContainer1=styled.button`
background:transparent;
margin:0.2rem 0.5rem 0.2rem 0;
border-radius:0.2rem;
border:0.05rem solid #ec7f37;
color:#ec7f37
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{ 
    background-color:#ec7f37;
    color:#393939;
}
&:focus{
    outline:none;
}
`

export const ButtonContainer2=styled.button`
background:transparent;
margin:0.2rem 0.5rem 0.2rem 0;
border-radius:0.2rem;
border:0.05rem solid #fa5b3d;
color:#fa5b3d;
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{ 
    background-color:#fa5b3d;
    color:#393939;
}
&:focus{
    outline:none;
}
`