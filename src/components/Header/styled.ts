import styled from '@styled';

export const SearchWrapper = styled.div`
  &,
  div {
    display: inline-flex;
  }

  margin-left: 2rem;
  flex-direction: row;
  align-self: center;
  align-items: center;
  text-align: right;

  input {
    &.search-enable {
      width: 20em;
      outline: none;
      opacity: 1;
      margin-left: 0.3rem;
      border-bottom: 1px solid #fff;
      visibility: visible;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
    }
    /* -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out; */
    visibility: hidden;
    border: none;
    width: 0;
    opacity: 0;
    overflow: hidden;
    /* animation-delay: 0.3s; */
    max-width: 20em;
    height: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }
`;
