let i = 0;

export default function Count() {
  console.log('i=', i);
  return (
    <div>
      <h1>{i}</h1>
      <h2>{++i}</h2>
    </div>
  );
}