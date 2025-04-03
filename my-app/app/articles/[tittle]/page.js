export const metadata = {
  title: "Show Article Page",
};

export default function  ShowArticlePage(props) {
  return (
    <div>
      <h1>Article page</h1>
      <h1>{props.params.tittle}</h1>
    </div>
  );
}

