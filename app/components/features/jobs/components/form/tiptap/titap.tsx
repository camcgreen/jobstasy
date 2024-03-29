'use client'
import React from 'react'
import DOMPurify from 'dompurify'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Toolbar from '@/app/components/features/jobs/components/form/tiptap/toolbar'
import styles from '@/app/components/features/jobs/components/form/tiptap/tiptap.module.css'

const Tiptap = ({
  description,
  onChange,
}: {
  description: string
  onChange: (richText: string) => void
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure({}), Heading, ListItem, BulletList],
    content: description,
    editorProps: {
      attributes: {
        class: styles.container,
      },
    },
    onUpdate({ editor }) {
      const dirtyHTML: string = editor.getHTML()
      const cleanHTML: string = DOMPurify.sanitize(dirtyHTML)
      onChange(cleanHTML)
    },
  })

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
