import { useState } from "react";
import Editor from './Editor';
import parser from 'html-react-parser'


function Home() {
  const [desc, setDesc] = useState('')
  const [limit, setLimit] = useState('0')
  const [show, setShow] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }
  const toggleShowOutput = () => {
    setShowOutput(!showOutput);
  }
  const buttonText = showOutput ? 'back': 'post'
  const parentShowDiv = show ? "dn" : "";
  const childShowDiv = show ? "" : "dn";

  return (
    <>
      <div className="flex items-center bg-near-white w-100 vh-100">
        <div className="cf center mw6 w-100">
          <div className="fl ba br2  b--black-10 w-100">
            <div className="fl w-100 pa2 bb b--black-10"> &nbsp; </div>
            <div className="fl w-100 pa3">
              <input className={`fl w-100 bg-transparent inputfield f4 b pv2 black  ${!show ? 'dn': ''}`}  name="title" type="text" placeholder="Add Title"/>
              <div className={`fl w-100  ${showOutput? 'dn': ''}`}>
                <div className={`pointer fl w-100 vh-50-ns vh-75 ${parentShowDiv}`} onClick={() => {toggleShow();}}>
                  <span className="fl b w-100 pv2">
                    Add post title
                  </span>
                  <span className="fl black-40 f7 w-100 pv2">
                    Add content
                  </span>
                </div>
                <div className={childShowDiv}>
                  <Editor setDesc={setDesc} setLimit= {setLimit}/>
                </div>
              </div>
              <div className={`fl vh-50-ns vh-75 w-100 ${!showOutput? 'dn': ''}`}>
                {parser(desc)}
              </div>
            </div>
            <div className="ph3 pv2 bottom-0 bg-white fl w-100">
              <div className="f7 tr">
                {limit} / 1000 words
              </div>
            </div>
          </div>
          <div className="fl w-100 pt3">
            <div onClick={toggleShowOutput} className="fr f7 ttc white pointer bg-dark-green br2 b pa2">
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
