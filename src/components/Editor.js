import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from "@tiptap/extension-underline";
import CharacterCount from '@tiptap/extension-character-count'
import MenuBar from '../utils/Toolbar'
import '../assets/css/style.css'

const limit = 1000

const Editor = ({setDesc, setLimit}) => {
  const editor = useEditor({
    extensions: [
      StarterKit, Underline,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: ``,
    onUpdate: ({editor}) => {
      const html = editor.getHTML();
      const limit = editor?.storage.characterCount.words();
      setDesc(html);
      setLimit(limit);
    }
  })
  return (
      <div className='flex flex-column w-100'>
        <MenuBar editor={editor} />
        <div className='fl w-100 vh-50-ns vh-75 overflow-auto'>
          <EditorContent editor={editor} />
        </div>
      </div>
  );
}  


export default Editor;
