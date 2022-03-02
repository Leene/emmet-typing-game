import styled, { keyframes } from "styled-components"

export default function AnimatedHeart(props) {
  const { stopAnimation, setStopAnimation } = props

  const RightHeart = styled.g`
    animation: ${brokeOffDownFadeOut_right} 1s ease-in forwards;
    animation-play-state: ${stopAnimation};
  `

  const LeftHeart = styled.g`
    animation: ${brokeOffDownFadeOut_left} 1s ease-in forwards;
    animation-play-state: ${stopAnimation};
  `
  return (
    <>
      <Heart
        className="heart3"
        width="132"
        height="107"
        viewBox="0 0 171 146"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <LeftHeart className="heart3-left">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M84.3753 32.9644L79 47L89 71L67 87L97 109L83.8239 145.6C75.0561 139.209 -26.1111 63.97 6.4257 18.0357C39.759 -29.0232 82.704 30.6078 84.3753 32.9644Z"
          />
        </LeftHeart>
        <RightHeart className="heart3-right">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83.3753 32.7997L78 46.8353L88 70.8353L66 86.8353L96 108.835L82.8239 145.435C83.2182 145.723 83.4257 145.871 83.4257 145.871C83.4257 145.871 201.426 60.871 162.426 17.8709C123.426 -25.1291 83.4257 32.871 83.4257 32.871C83.4257 32.871 83.4088 32.8468 83.3753 32.7997Z"
          />
        </RightHeart>
      </Heart>
    </>
  )
}

const brokeOffDownFadeOut_right = keyframes`
 0% {
    transform: translate(0%, 0%) rotate(0deg);
    transform-origin: 0% bottom 0px;
  }
  10% {
    transform: rotate(60deg);
    transform: translate(10%, 0%) rotate(0deg);
    transform-origin: 0% bottom 0px;
    opacity: 1;
  }
  75% {
    transform: translate(100%, 50%) rotate(120deg);
    transform-origin: 0% bottom 0px;
    opacity: 0;
  }
  100% {
    transform: translate(100%, 50%) rotate(120deg);
    transform-origin: 0% bottom 0px;
    opacity: 0;
  }
 
`

const brokeOffDownFadeOut_left = keyframes`

 0% {
    transform: translate(0%, 0%) rotate(0deg);
    transform-origin: 90% bottom -20px;
  }
  20% {
    transform: rotate(60deg);
    transform: translate(0%, 0%);
    transform-origin: 90% bottom -20px;
    opacity: 1;
  }
  75% {
    transform: translate(-10%, 20%) rotate(-120deg);
    transform-origin: 90% bottom -20px;
    opacity: 0;
  }

  100% {
    transform: translate(-10%, 20%) rotate(-120deg);
    transform-origin: 90% bottom -20px;
    opacity: 0;
  }
`

const Heart = styled.svg`
    overflow: visible;
    height: 20px;
    width: 35px;
`
