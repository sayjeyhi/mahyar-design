/** @jsx jsx */
import { jsx } from "theme-ui"
import { Icon as Iconify } from '@iconify/react';
import { hidden } from "../styles/utils"

import gatsby from '@iconify/icons-simple-icons/gatsby';
import react from '@iconify/icons-logos/react';
import typescript from '@iconify/icons-logos/typescript-icon';
import vue from '@iconify/icons-logos/vue';
import sass from '@iconify/icons-logos/sass';

type IconType =
  "gatsby" |
  "react" |
  "typescript" |
  "vue" |
  "sass"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: string | number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const icons = {
  gatsby,
  react,
  typescript,
  vue,
  sass,
}

const Icon = ({ color = `currentColor`, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <Iconify
    icon={icons[icon]}
    width={width}
    sx={{
      position: `absolute`,
      fill: `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color: color,
      left: left,
      top: top,
    }}
  />
)

export default Icon
