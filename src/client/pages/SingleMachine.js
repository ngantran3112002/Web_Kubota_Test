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

  const { id, name, description1, description2, description3, image1, image2, image3, image4, image5, details1 } = singleMachine;

  // console.log("machine id ", machineId)
  // console.log("machine ", SingleMachine)

  return (
    <section>
        <div className="pg-header">
            <div className="container">
                <div className="row align-items-center">
                    <div>
                        <h2>{name}</h2>
                        {/* <p>{pathname}</p> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-machine">
            <div className="row">
                <div>
                    <h5 className="header-content">{description1}</h5>
                    <img src={image2} alt="" className="img-fluid" />
                    <h5 className="header-content">{description2}</h5>
                    <img src={image3} alt="" className="img-fluid" />
                    <h5 className="header-content">{description3}</h5>
                    <img src={image4} alt="" className="img-fluid" />
                    <img src={image5} alt="" className="img-fluid" />
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