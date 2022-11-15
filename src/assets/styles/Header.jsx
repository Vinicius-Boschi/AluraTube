import styled from "styled-components"

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

    .banner {
      width: 100%;
      height: 250px;
    }

    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }

    .user-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .user-job {
      color: #666666;
      margin-top: 5px;
    }
`