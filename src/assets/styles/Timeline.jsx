import styled from 'styled-components'

export const StyledTimeline = styled.div`
  .infos {
    width: 100%;
    padding: 16px;

    h2 {
      font-size: 16px;
      margin-bottom: 16px;
      text-transform: capitalize;
    }
  }

  .container {
    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px, 1fr);

    a {
      scroll-snap-align: start;

      span {
        padding: 8px 24px 0 0;
        margin-bottom: 20px;
        display: block;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
      }
    }
  }

  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
`