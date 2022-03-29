import {
    POKEMON_LOAD, 
    GET_POKEMON_SUCCESS,
    GET_ALL_POKEMON_SUCCESS,
    GET_ALL_POKEMON_FAIL,
    GET_POKEMON_FAIL, 
    } from "../constants/pokemonActionType";
import axios from "axios";

export const getAllPokemon = () => async (dispatch) =>{
    dispatch ({type:POKEMON_LOAD})
    try {
        const response = await axios.get( "/allpokemons", );
        dispatch({type:GET_ALL_POKEMON_SUCCESS, payload:response.data.pokemons})
      } catch (error) {
        dispatch({type:GET_ALL_POKEMON_FAIL, payload:error})
      }
}

export const getPokemonbyNumber = (number) => async (dispatch) =>{
  dispatch ({type:POKEMON_LOAD})
  try {
      const response = await axios.get(`/pokemonsNumber/${number}`);
      dispatch({type:GET_POKEMON_SUCCESS, payload:response.data.pokemon})
    } catch (error) {
      dispatch({type:GET_POKEMON_FAIL, payload:error})
    }
}

export const getPokemonbyName = (name) => async (dispatch) =>{
  dispatch ({type:POKEMON_LOAD})
  try {
    console.log(`/pokemons/${name}`)
      const response = await axios.get(`/pokemons/${name}` );
      dispatch({type:GET_POKEMON_SUCCESS, payload:response.data.pokemon})
    } catch (error) {
      console.dir(error)
      dispatch({type:GET_POKEMON_FAIL, payload:error})

    }
}

