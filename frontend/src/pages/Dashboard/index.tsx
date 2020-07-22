import React, { useEffect, useState } from "react";

import api from "../../services/api";

import PostItem from "../../components/PostItem";

import { PostsType } from "../../ts/types";
import PostEditor from "../../components/PostEditor";

const Dashboard: React.FC = () => {
    const [posts, setPosts] = useState<PostsType[]>([]);

    useEffect(() => {
        async function handlePosts() {
            const token = sessionStorage.getItem("token");
            const res = await api.get("/posts", {
                headers: { authorization: token },
            });

            setPosts(res.data);
        }

        handlePosts();
    }, []);

    return (
        <main>
            <div>
                <PostEditor />
            </div>
            <section className="mt-2">
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        title={post.title}
                        text={post.text}
                    />
                ))}
            </section>
        </main>
    );
};

export default Dashboard;
