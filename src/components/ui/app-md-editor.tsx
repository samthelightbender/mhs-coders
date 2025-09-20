'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Loader2 } from 'lucide-react'
import * as commands from '@uiw/react-md-editor/commands'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import './md-editor-overrides.css'

const filteredCommands = [
  commands.title,
  commands.divider,
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.divider,
  commands.link,
  commands.quote,
  commands.code,
  commands.codeBlock,
  commands.divider,
  commands.table,
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
]

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[300px] border rounded-md">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }
)

interface MDEditorProps {
  value?: string
  onChange?: (value?: string) => void
  placeholder?: string
  height?: number
}

export function MDEditorWrapper({
  value = '',
  onChange,
  height = 300
}: MDEditorProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[300px] border rounded-md">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }

  const effectiveTheme = theme === 'system' ? systemTheme : theme

  return (
    <div data-color-mode={effectiveTheme} className="mt-2 rounded-md border overflow-hidden">
      <MDEditor
        value={value}
        onChange={onChange}
        height={height}
        preview="edit"
        commands={filteredCommands}
        visibleDragbar={false}
        onDrop={() => false}
        onPaste={() => false}
      />
    </div>
  )
}