'use client'
import {getImageUrl} from '@/api/images'
import {ImageActions} from '@xeger/quill-image-actions'
import {ImageFormats} from '@xeger/quill-image-formats'
import {useEffect, useMemo, useRef, useState} from 'react'
import {useFormContext} from 'react-hook-form'
import ReactQuill, {Quill} from 'react-quill'

import 'react-quill/dist/quill.snow.css'

Quill.register('modules/imageActions', ImageActions)
Quill.register('modules/imageFormats', ImageFormats)

function ContentEditor() {
  const {setValue, getValues} = useFormContext()
  const [editorContent, setEditorContent] = useState('')
  const ref = useRef<any>(null)
  const handleChange = (value: string) => {
    setValue('content', value)
  }

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()
    input.addEventListener('change', async () => {
      if (!input.files) return
      const file = input?.files
      try {
        const imgUrl = await getImageUrl({fileList: file, imageType: 'hi'})
        const editor = ref.current.getEditor()
        const range = editor.getSelection()
        editor.insertEmbed(range.index, 'image', imgUrl)
        editor.setSelection(range.index + 1)
      } catch (error) {
        console.error(error)
      }
    })
  }

  const modules = useMemo(
    () => ({
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
          [{header: [1, 2, false]}],
          ['bold', 'italic', 'underline', 'strike'],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
          ['link', 'image'],
          [{align: []}, {color: []}, {background: []}],
          ['clean'],
          ['customControl']
        ],
        handlers: {
          image: imageHandler
        },
        ImageResize: {
          modules: ['Resize']
        }
      }
    }),
    []
  )
  useEffect(() => {
    const initialContent = getValues('content')
    console.log(initialContent)
    setEditorContent(initialContent)
  }, [getValues])

  return (
    <div className="mb-20">
      <ReactQuill
        ref={ref}
        value={editorContent}
        modules={modules}
        style={{height: '700px'}}
        theme="snow"
        onChange={handleChange}
      />
    </div>
  )
}

export default ContentEditor
