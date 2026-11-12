import axios from "axios"

export interface IData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}

export default async function ServerComponent() {

    // const { data } = await axios('https://fakestoreapi.com/products')

    // console.log(data);

    const result = await fetch('https://fakestoreapi.com/products',
        {
            cache: "force-cache"
        }
    )

    console.log(result);

    const data = await result.json();



    return (
        <div className='flex flex-col gap-2'>
            {
                data.map((item: IData) => {
                    return (
                        <div key={item.id}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}
