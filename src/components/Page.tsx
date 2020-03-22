import React from 'react'

export interface PageProps {
  name: string
  page: string
  children: any
}

const Page: React.SFC<PageProps> = ({ name, page, children }) => {
  return <>{page !== name ? null : <div>{children}</div>}</>
}

export default Page
