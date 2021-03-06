import * as React from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from '../../../layouts/baseLayout'
import ChannelLayout from '../../../layouts/ChannelLayout'
import ChatLayout from '../../../layouts/ChatLayout'

const Channel: React.FC<PageProps> = (props) => {
  const { serverId } = props.params
  return (
    <BaseLayout>
      <ChannelLayout />
      <ChatLayout />
    </BaseLayout>
  )
}

export default Channel
