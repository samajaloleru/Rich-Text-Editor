import { useState } from "react";
import { FaBold, FaItalic, FaStrikethrough, FaCode, FaListOl, FaListUl, FaQuoteLeft, FaRedo, FaUndo, FaUnderline, FaLaptopCode, FaCaretDown } from "react-icons/fa";

const MenuBar = ({ editor }) => {
  const [show, setShow] = useState();
  const [paragraghStyle, setParagraghStyle] = useState('paragragh');

  const toggleShow = () => {
    setShow(!show);
  }
  var ShowDiv = show ? "" : "dn";

  if (!editor) {
    return null
  }
  
  return (
    <>
    <div className="fl w-100">
      <div className="flex justify-between items-center bg-white w-two-thirds flex-row black-60 br2 pv1 f8">
        <div className="flex w-20">
          <div className="ttc w-100 pointer pl1 tc">
            {paragraghStyle} <FaCaretDown onClick={toggleShow}/>
          </div>
          <div className={`absolute z-max pointer w-auto ${ShowDiv}`}>
            <div className="ph3 pv2 mt3 f7 bg-white cf w-40 bb b--black-05 card-shadow hover-white">
              <button
                onClick={() => {editor.chain().focus().setParagraph().run(); toggleShow(); setParagraghStyle("paragraph")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('paragraph') ? 'is-active' : ''}`}
              >
                paragraph
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 1 }).run(); toggleShow(); setParagraghStyle("heading 1")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
              >
                h1
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 2 }).run(); toggleShow(); setParagraghStyle("heading 2")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
              >
                h2
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 3 }).run(); toggleShow(); setParagraghStyle("heading 3")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
              >
                h3
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 4 }).run(); toggleShow(); setParagraghStyle("heading 4")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}
              >
                h4
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 5 }).run(); toggleShow(); setParagraghStyle("heading 5")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}`}
              >
                h5
              </button>
              <button
                onClick={() => {editor.chain().focus().toggleHeading({ level: 6 }).run(); toggleShow(); setParagraghStyle("heading 6")}}
                className={`inputfield bg-transparent fl w-100 hover-bg-black-60 hover-white pv1 ${editor.isActive('heading', { level: 6 }) ? 'is-active' : 'inputfield bg-transparent'}`}
              >
                h6
              </button>
            </div>
          </div>
        </div>
        <div className="br flex bl w-auto b--black-40">
          <button
            className='inputfield bg-transparent'
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }>
            <FaUndo/>
          </button>
          <button
            className='inputfield bg-transparent'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            <FaRedo/>
          </button>
        </div>
        <div className="br flex w-auto b--black-40">
          <button 
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive('bold') ? 'is-active' : 'inputfield bg-transparent'}
            >
            <FaBold/>
          </button>

          <button 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') ? 'is-active' : 'inputfield bg-transparent'}>
            <FaItalic/>
          </button>
          <button 
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleUnderline()
                .run()
            }
            className={editor.isActive('underline') ? 'is-active' : 'inputfield bg-transparent'}>
            <FaUnderline/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') ? 'is-active' : 'inputfield bg-transparent'}
          >
            <FaStrikethrough/>
          </button>
        </div>
        <div className="flex w-auto b--black-40">
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={editor.isActive('code') ? 'is-active' : 'inputfield bg-transparent'}
          >
            <FaCode/>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : 'inputfield bg-transparent'}
          >
            <FaListOl/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : 'inputfield bg-transparent'}
            >
            <FaListUl/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : 'inputfield bg-transparent'}
          >
            <FaLaptopCode/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : 'inputfield bg-transparent'}
          >
            <FaQuoteLeft/>
          </button>
        </div>
      </div>
    </div>
      {/* 
      
       */}
    </>
  )
}


export default MenuBar;