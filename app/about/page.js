export const revalidate = false;

export default function AboutPage() {
  console.log("About page generated at build time:", new Date().toISOString());

  return (
    <div>
      <h1>About Page</h1>
      <p>This page is statically generated.</p>
    </div>
  );
}
