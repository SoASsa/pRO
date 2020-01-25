import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loader from 'react-loader-spinner'
import {
    CardColums,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import MovieCard from "./components/card";
import Modal from "./components/modal_redux";
import {getMovies, updateViewId} from './store/action_creators'

const App = (props) => {
    const [ viewId, setViewId] = useState(null);
    const [ showModal, setShowModal] = useState(false);
    const movieLisr = useSelector (store =>store.app.movieList);
    const isLoading = useSelector (store =>store.app.isLoading);

    const [ watched, setWatched] = useState({});
    const dispatcher = useDispatch();
}