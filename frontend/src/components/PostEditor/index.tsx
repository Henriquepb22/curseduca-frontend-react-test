import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostEditor: React.FC = () => {
    const [text, setText] = useState<EditorState>();

    return (
        <Editor editorState={text} onEditorStateChange={(e) => setText(e)} />
    );
};

export default PostEditor;
