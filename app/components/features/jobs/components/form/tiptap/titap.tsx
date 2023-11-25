'use client'
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Toolbar from '@/app/components/features/jobs/components/form/tiptap/toolbar'

const Tiptap = ({
  description,
  onChange,
}: {
  description: string
  onChange: (richText: string) => void
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: '',
          levels: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: '',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
      console.log(editor.getHTML())
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
