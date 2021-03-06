import * as React from 'react'
import { PageProps } from 'gatsby'

import BaseLayout from '../layouts/baseLayout'
import ChannelLayout from '../layouts/ChannelLayout'
import ChatLayout from '../layouts/ChatLayout'
import Seo from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}

const AppPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <>
      <Seo title="同好圈" />
      <BaseLayout>
        <ChannelLayout />
        <ChatLayout />
      </BaseLayout>
    </>
  )
}

export default AppPage
