import axios from 'axios';
import { useState } from 'react';

export function useLocation() {
    const [data, setData] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (query: string) => {
        if (query === '') return { data, loading };

        try {
            setLoading(true);

            await axios
                .get('https://openapi.naver.com/v1/search/local.json', {
                    params: { query: query, display: 10 },
                    headers: {
                        'X-Naver-Client-Id':
                            process.env.EXPO_PUBLIC_NAVER_CLIENT_ID,
                        'X-Naver-Client-Secret':
                            process.env.EXPO_PUBLIC_NAVER_CLIENT_SECRET,
                    },
                })
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    if (data) setData(data.items);
                });
        } catch (e) {
            console.error(e);
            throw new Error(`Naver Search Location API ERROR: ${e}`);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, fetchData };
}
