import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import machineData from './machineData';
import "../css/singleMachine.css";
 

const SingleMachine = () => {

  const navigate = useNavigate();
  const { machineId } = useParams();
  //const { pathname } = useLocation();

  // get machine
  const singleMachine = machineData.find((machine) => machine.id === machineId);
  
  // console.log(typeof(machineId))

  const { id, name, description1, description2, description3, image1, image2, image3, image4, image5, image6, details1 } = singleMachine;

  // console.log("machine id ", machineId)
  // console.log("machine ", SingleMachine)

  return (
    <section>
        <div className="pg-header" id='box-header'>
            <div className="row align-items-center">
                <div>
                    <h2>{name}</h2>
                    {/* <p>{pathname}</p> */}
                </div>
            </div>
        </div>

        <div className="container-SingleMachine" id='box'>
            <div className="row">
                <div>
                    <h5 className="header-content">&nbsp; {description1}</h5>
                    <img src={image2} alt="" className="img-fluid" />
                    <h5 className="header-content">&nbsp; {description2}</h5>
                    <img src={image3} alt="" className="img-fluid" />
                    <h5 className="header-content">&nbsp; {description3}</h5>
                    <img src={image4} alt="" className="img-fluid" />
                    <img src={image5} alt="" className="img-fluid" />
                    <img src={image6} alt="" className="img-fluid" />
                </div>
                <div>
                    <br/>
                    <button className="btn btn-primary btn-xl" onClick={() => navigate(-1)}> &larr; Back </button> &nbsp; 
                    <Link to="/machine" className="btn btn-primary btn-xl"> Kĩ thuật máy &rarr; </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleMachine;