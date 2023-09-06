import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieCards from "./MovieCards";
import "./Pagination.css";
import "./stylee.css";
import Left from "./assets/Left";
import Right from "./assets/Right";

const Cards = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1 page

  const apikey = "7a1c19ea3c361a4d3cc53eb70ef8298c";

  useEffect(() => {
    getMoviesByPage(currentPage);
  }, [currentPage]);

  const getMoviesByPage = async (page) => {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${page}`
      );
      const { results, total_pages } = response.data;

      setMoviesDetails(results);
      setTotalPages(total_pages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section className="main_card">
        <div className="container_card">
          <div className="row">
            {moviesDetails.map((moviesDetail, index) => (
              <MovieCards
                title={moviesDetail.title}
                imgSrc={moviesDetail.poster_path}
                id={moviesDetail.id}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* pagination */}
        <div className="pagination justify-content-center">
          <button style={{borderRadius:"50%"}}
            className="btn btn-danger"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Left></Left>
          </button>
          <span className="m-5" style={{ fontSize: "25px" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button style={{borderRadius:"50%"}}
            className="btn btn-danger"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Right></Right>
          </button>
        </div>
      </section>
    </>
  );
};

export default Cards;
