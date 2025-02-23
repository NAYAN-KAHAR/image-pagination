import { useEffect, useState } from "react";
import axios from "axios";
import './paggination.css';

const Paggination = () => {
    const [img, setImg] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    const fetchImages = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=10`);
        setImg(response.data);
        // console.log(response.data);
    };

    useEffect(() => {
        fetchImages();
    }, [pageNo]);

    const nextPaggination = Array.from({length: 4}, (_, index) => pageNo + index);
    const prevPaggination = Array.from({length: 3}, (_, index) => pageNo - 1 - index).filter(value => value > 0).reverse();
    const mergeArray = [...prevPaggination, ...nextPaggination];
    console.log('mergeArray', mergeArray);

    const nextBtn = () => {
        setPageNo(pageNo + 1);
    };

    const prevBtn = () => {
        setPageNo(pageNo - 1);
    };

    return (
        <>
        <nav className="navbar bg-dark">
            <h3 className="navbar-brand text-white mx-4">Paggination</h3>
        </nav>
            <div className="container py-2">
             <div className="row">
              <div className="col-lg-6 col-mb-8 col-12">
        
                {img && img.map((data, i) => {
                    return <img key={i} src={data.download_url} alt="img" width={110} height={110} />;
                })}

                </div>

                <div className="col-lg-6 col-mb-8 col-12 py-3">
                    {pageNo > 1 && <button onClick={prevBtn}>Prev</button>}

                        {mergeArray.map((curValue, i) => {
                            return (
                                <button onClick={() => setPageNo(curValue)} key={i}
                                className={curValue === pageNo ? "active" : ""}> {curValue}</button>);
                        })}

                    <button onClick={nextBtn}>Next</button>
            
            </div>
            </div></div>
        </>
    );
};

export default Paggination;
