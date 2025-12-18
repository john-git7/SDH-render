export default function Home() {
  return (
    <div>
      <h1>Environment Aware Build Demo</h1>
      <p>Current Environment: {process.env.NEXT_PUBLIC_ENV}</p>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
