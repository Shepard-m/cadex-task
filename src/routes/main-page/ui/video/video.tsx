import styled from "styled-components";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { Suspense } from "react";
import { mTablet } from "../../../../config/style/globalMixins";

interface IVideoProps {
  videoId: string;
  title?: string;
}

const VideoContainerDiv = styled.div`
  max-width: 530px;
  width: 100%;
  height: 235px;

  & > article {
    max-height: 100%;
    height: 100%;
  }

  ${mTablet`
    max-width: 100%;
  `}
`



export const Video = ({ videoId, title = "" }: IVideoProps) => {

  return (
    <VideoContainerDiv>
      <Suspense fallback={<div>Загрузка</div>}>
        <LiteYouTubeEmbed
          id={videoId}
          title={title}
          noCookie
        />
      </Suspense>
    </VideoContainerDiv>
 );
}
