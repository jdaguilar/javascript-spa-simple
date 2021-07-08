import views from '../views/posts.html'


const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = views;

    const postsElement = divElement.querySelector('#posts');
    let totalPosts = divElement.querySelector('#totalPosts');

    const posts = await getPosts();
    totalPosts.innerHTML = posts.length;

    posts.forEach(post => {
        postsElement.innerHTML += `
            <li class="list-group-item border-primary bg-dark text-white">
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            </li>
        `
    });

    return divElement;
}