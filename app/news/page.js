export const revalidate = 60;

export default async function NewsPage() {
  console.log("News page regenerated at:", new Date().toISOString());

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (
    <div>
      <h1>News</h1>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
