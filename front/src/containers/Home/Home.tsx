import React from "react"
import Navbar from "../../components/Navbar";
import { useHistory } from "react-router-dom"
import "./styles.scss"

const Home = () => {
  const history = useHistory();
  const goToSearchPage = (search: string) => history.push("/items?search=" + search)

  return (
        <div className="home_container">
            <Navbar onSubmit={goToSearchPage} />
        </div>
    )
}

export default Home
