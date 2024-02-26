const showComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .this(res => res.json())
        .this(data => console.log(data))
    .catch(error => console.error('error happened', error))
}


const loadComment = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);
    } catch {
        
    }
}

const std = JSON.stringify({ name: 'james' });
console.log(std.name);