export async function getAllPosts() {
    const response = await fetch("http:localhost:5050/posts", {
        method: "GET",
        headers: {
            "Cache-Control": "no-store",
        }
    });
    const data = await response.json();
    return data;
}

export async function getPostById(id: string) {
    const response = await fetch(`http:localhost:5050/posts/${id}`, {
        method: "GET",
        headers: {
            "Cache-Control": "no-store",
        }
    });
    const data = await response.json();
    return data;
}