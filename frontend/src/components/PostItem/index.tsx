import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import { PostsType } from "../../ts/types";

type Props = Pick<PostsType, "title" | "text">;

const PostItem: React.FC<Props> = ({ title, text }) => {
    const toHtml = (text: string) => {
        return { __html: text };
    };

    return (
        <article>
            <Jumbotron>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={toHtml(text)}></div>
            </Jumbotron>
        </article>
    );
};

export default PostItem;
