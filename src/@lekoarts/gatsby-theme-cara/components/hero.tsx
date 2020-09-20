/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import Icon from "./icon"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Icon
          icon="gatsby"
          width="14rem"
          left="10%"
          top="10%"
          color="#663399"
        />
        <Icon
          icon="react"
          width="14rem"
          left="60%"
          top="50%"
        />
      </UpDown>
      <UpDownWide>
        <Icon
          icon="typescript"
          width="6rem"
          left="80%"
          top="10%"
        />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Icon
          icon="sass"
          width="8rem"
          left="28%"
          top="10%"
        />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <Icon
          icon="gridsome"
          width="8rem"
          left="40%"
          top="75%"
        />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <Icon
          icon="vue"
          width="10rem"
          left="5%"
          top="90%"
        />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
