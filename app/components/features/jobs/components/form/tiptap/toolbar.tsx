'use client'
import React from 'react'
import { type Editor } from '@tiptap/react'
import { Bold, Italic, Heading2, List, ListOrdered } from 'lucide-react'
import styles from '@/app/components/features/jobs/components/form/tiptap/toolbar.module.css'

type Props = {
  editor: Editor | null
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null
  }
  return (
    <div className={styles.container}>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading') ? styles.active : ''}
      >
        <Heading2 />
      </div>
      {/* <div
        onClick={() => editor.chain().focus().setParagraph()}
        className={editor.isActive('paragraph') ? styles.active : ''}
      >
        <p>Para</p>
      </div> */}
      <div
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? styles.active : ''}
      >
        <Bold />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? styles.active : ''}
      >
        <Italic />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? styles.active : ''}
      >
        <List />
      </div>
    </div>
  )
}

export default Toolbar
