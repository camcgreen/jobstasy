'use client'
import React from 'react'
import { type Editor } from '@tiptap/react'
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from 'lucide-react'
// import {Toggle} from './ui/toggle'

type Props = {
  editor: Editor | null
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null
  }
  return (
    <div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 />
      </div>
      <div onClick={() => editor.chain().focus().toggleBold()}>
        <Bold />
      </div>
      <div onClick={() => editor.chain().focus().toggleItalic()}>
        <Italic />
      </div>
    </div>
  )
}

export default Toolbar
