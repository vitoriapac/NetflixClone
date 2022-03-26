import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './tmdb'
import MovieRow from './Components/MovieRow'
import FeaturedMovie from './Components/FeaturedMovie'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //Pegar lista totalament
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegar lista em destaque
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
