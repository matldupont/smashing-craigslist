import * as React from 'react';
import styled from 'styled-components';

import ChatButton from './ChatButton'; 
import Gallery from './Gallery';

const Title = () => {
  return <h1>Vintage Desk/Table Mortise and Tenin - $125 (centreville)</h1>
}


const ReportButton = () => {
  return <button>report post</button>
}

const Description = styled.p`
`;

const Details = styled.ul`

`;

const DetailItem = styled.li`

`;

const Condition = styled.div`
`;

const PostInfo = styled.div`

`;

const Tips = styled.ul`

`;

const Tip = styled.li``;

const Ad = () => {
  return (
    <div>
      <div>
        <ChatButton />
        <ReportButton />
      </div>
      <div>
        <Title />
      </div>
      <Gallery />
      <Description>
        Very old handmade table or desk. Solid maple we refinished.  Vintage Mortise and Tenon connection.  Don't let age fool you, it is a very sturdy desk/table.  Built well a vary long time ago.
      </Description>
      <Condition />
      <Details>
        <DetailItem>do NOT contact me with unsolicited services or offers</DetailItem>
      </Details>
      <PostInfo>
        <span>post id: 6729861747</span>
        <span>posted: about an hour ago</span>
      </PostInfo>
      <Tips>
        <Tip><a href="https://cragslist.com">safety tips</a></Tip>
      </Tips>
    </div>
  )
};

export default Ad;
