/** @jsx jsx */
import { jsx } from "theme-ui"
import { Icon as Iconify } from '@iconify/react';
import { hidden } from "../styles/utils"

import gatsby from '@iconify/icons-simple-icons/gatsby';
import react from '@iconify/icons-logos/react';
import typescript from '@iconify/icons-logos/typescript-icon';
import vue from '@iconify/icons-logos/vue';
import sass from '@iconify/icons-logos/sass';
import gridsome from '@iconify/icons-logos/gridsome-icon';
import javascript from '@iconify/icons-logos/javascript';
import git from '@iconify/icons-cib/git';
import css from '@iconify/icons-cib/css3';
import html from '@iconify/icons-cib/html5';
import linux from '@iconify/icons-logos/linux-tux';

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: string | number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

type IconType =
  "gatsby" |
  "react" |
  "typescript" |
  "vue" |
  "sass" |
  "gridsome" |
  "javascript" |
  "git" |
  "css" |
  "html" |
  "linux"

const icons = {
  gatsby,
  react,
  typescript,
  vue,
  sass,
  gridsome,
  javascript,
  git,
  css,
  html,
  linux,
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
