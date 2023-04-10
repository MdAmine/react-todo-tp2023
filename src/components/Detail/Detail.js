import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { n } = useParams();
  const { c } = useParams();
  const { e} = useParams();
  const { f } = useParams();
  const { j } = useParams();
  return (
    <>
  <center>
    <div>
      <br />
      <br />
        <h1 style={{ color: "white" }}>Detail</h1>
        <br />
      <br />
        <h4 style={{ color: "white" }}>ID :   {id}</h4>
        <h4 style={{ color: "white" }}>Todo :   {n}</h4>
        <h4 style={{ color: "white" }}>Completed :   {c}</h4>
        <h4 style={{ color: "white" }}>Priority :   {e}</h4>
        <h4 style={{ color: "white" }}>createdAt :   {f}</h4>
        <h4 style={{ color: "white" }}>editedAt :   {j}</h4>
      </div>
  </center>
    
    </>
      
  );
}

export default Detail;
