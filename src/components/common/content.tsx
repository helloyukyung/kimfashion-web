'use client'

interface ContentProps {
  value: string
}

export default function Content({value}: ContentProps) {
  return <div dangerouslySetInnerHTML={{__html: value}} />
}
