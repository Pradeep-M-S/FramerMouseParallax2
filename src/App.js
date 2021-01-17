import React from "react"
import "./styles.css"
import { Frame, useAnimation } from "framer"

export default function App() {
  let birdAnim = useAnimation()
  let cloudAnim = useAnimation()
  let bgAnim = useAnimation()
  let sunAnim = useAnimation()
  return (
    <div className="App">
      <h1> Mouse move parallax effect </h1>
      <Frame
        size={550}
        background={null}
        onMouseMove={(event, info) => {
          let offsetX = event.clientX - window.innerWidth / 2
          let offsetY = event.clientY - window.innerHeight / 2

          console.log([offsetX, offsetY])
          bgAnim.start({ x: offsetX / 14, y: offsetY / 14 })
          sunAnim.start({ x: offsetX / 10, y: offsetY / 10 })
          cloudAnim.start({ x: offsetX / 8, y: offsetY / 8 })
          birdAnim.start({ x: offsetX / 6, y: offsetY / 6 })
        }}
        center
      >
        <Frame
          //bg
          size={500}
          top={50}
          left={20}
          background={null}
          animate={bgAnim}
          image="https://image.flaticon.com/icons/svg/119/119596.svg"
        />
        <Frame
          //sun
          left={155}
          background={null}
          top={55}
          animate={sunAnim}
          image="https://image.flaticon.com/icons/svg/789/789395.svg"
        />
        <Frame
          //cloud
          background={null}
          left={335}
          top={55}
          animate={sunAnim}
          image="https://image.flaticon.com/icons/svg/414/414927.svg"
        />{" "}
        <Frame
          // bird
          background={null}
          left={35}
          top={200}
          animate={birdAnim}
          image="https://image.flaticon.com/icons/svg/789/789392.svg"
        />
      </Frame>
    </div>
  )
}
