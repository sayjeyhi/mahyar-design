/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Icon from "./icon"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <Icon
        icon="git"
        color="icon_darkest"
        width="4rem"
        left="50%"
        top="5%"
      />
      <Icon
        icon="gridsome"
        width="6rem"
        left="40%"
        top="70%"
      />
      <Icon
        icon="vue"
        width="10rem"
        left="5%"
        top="92%"
      />
      <Icon
        icon="javascript"
        width="4rem"
        left="70%"
        top="15%"
      />
      <UpDown>
        <Icon
          icon="gatsby"
          width="12rem"
          left="5%"
          top="5%"
          color="#663399"
        />
        <Icon
          icon="react"
          width="14rem"
          left="60%"
          top="50%"
          hiddenMobile
        />
      </UpDown>
      <UpDownWide>
        <Icon
          icon="typescript"
          width="6rem"
          left="80%"
          top="10%"
        />
        <Icon
          icon="sass"
          width="8rem"
          left="28%"
          top="10%"
          hiddenMobile
        />
        <Icon
          icon="css"
          color="icon_darkest"
          width="4rem"
          left="55%"
          top="35%"
        />
      </UpDownWide>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
