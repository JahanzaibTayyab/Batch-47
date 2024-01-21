const getData2 = async () => {
  const res = await fetch(
    "https://api.quotable.io/random?tags=history|civil-rights",
    {
      next: {
        revalidate: 1,
      },
    }
  );
  return res.json();
};

export default async function Home() {
  const quote = await getData2();
  console.log("quote: ", quote);
  return <div className="p-5">{quote.content}</div>;
}
