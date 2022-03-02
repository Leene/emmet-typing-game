import styled from "styled-components"
export default function StaticHeart() {
  return (
    <>
      <Heart
        width="132"
        height="107"
        viewBox="0 0 172 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M163.426 18.0357C202.426 61.0358 84.4257 146.036 84.4257 146.036C84.4257 146.036 -27.5743 66.0357 6.4257 18.0357C40.4257 -29.9644 84.4257 33.0358 84.4257 33.0358C84.4257 33.0358 124.426 -24.9644 163.426 18.0357Z"
          fill="black"
        />
      </Heart>
    </>
  )
}

const Heart = styled.svg`
  height: 20px;
  width: 35px;
`
