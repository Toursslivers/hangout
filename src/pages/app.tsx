import * as React from "react"
import { PageProps } from "gatsby"
import { ModalContainer } from 'reoverlay';

import BaseLayout from "../layouts/baseLayout"
import ChannelLayout from '../layouts/ChannelLayout'
import ChatLayout from "../layouts/ChatLayout"
import Seo from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}



const AppPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <>
      <Seo title="阿瓦隆" />
      <ModalContainer />
      <BaseLayout>
        <ChannelLayout />
        <ChatLayout />
      </BaseLayout>
    </>
  )
}

export default AppPage