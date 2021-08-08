import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
    {id: 'q1', author: 'Alex', text: 'Learnings React'},
    {id: 'q2', author: 'David', text: 'Learnings Vue'},
    {id: 'q3', author: 'Michael', text: 'Learnings Angular'},
    {id: 'q4', author: 'Alex', text: 'Learnings D3.js'},
    {id: 'q5', author: 'David', text: 'Learnings Node.js'},
];

const AllQuotes=()=>{

    return <>
    <h1>All Quotes Page</h1>
    <QuoteList quotes={DUMMY_QUOTES}/>
    </>

};

export default AllQuotes;