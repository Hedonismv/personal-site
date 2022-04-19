import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseFetch = (url) => {
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	useEffect(() => {
		setLoading(true)
		setData(null)
		setError(null)

		const source = axios.CancelToken.source()
		axios.get(url, {cancelToken: source.token})
			.then(res => {
				setLoading(false);
				res.data && setData(res.data);
			})
			.catch(error => {
				setLoading(false)
				setError(error)
			})
		return () => {
			source.cancel();
		}
	}, [url])

	return {data, loading, error};
};

export default UseFetch;