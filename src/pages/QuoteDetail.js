import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Alex", text: "Learnings React" },
  { id: "q2", author: "David", text: "Learnings Vue" },
  { id: "q3", author: "Michael", text: "Learnings Angular" },
  { id: "q4", author: "Alex", text: "Learnings D3.js" },
  { id: "q5", author: "David", text: "Learnings Node.js" },
];

const QuoteDetail = () => {

  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
