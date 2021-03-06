import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState/';
const initialState = useInitialState(API);

const App = () => {
  const [initialState, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch(API)
      .tehn((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return initialState.length === 0 ? <h1>loadin...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories tilte='Mi Lista'>
          <Carousel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} {...{ item }} />)}
          </Carousel>
        </Categories>
      )}

      <Categories tilte='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...{ item }} />)}
        </Carousel>
      </Categories>
      <Categories tilte='Originales de Platzivideo'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...{ item }} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
