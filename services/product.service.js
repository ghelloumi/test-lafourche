import fetch from "isomorphic-unfetch";
import {HOST} from "../constants";

export const getProduct = async function (handle) {
    try {
        const res = await fetch(`${HOST}/products?handle=${handle}`);
        const data = await res.json();
        return data[0]
    } catch (e) {
        console.error(e)
    }
};

export const getProducts = async function (page, pageSize) {
    try {
        const res = await fetch(`${HOST}/products?_page=${page}&_limit=${pageSize}`);
        return await res.json();
    } catch (e) {
        console.error(e)
    }
};