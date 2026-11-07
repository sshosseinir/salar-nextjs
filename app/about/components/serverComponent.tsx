import axios from "axios"

export default async function ServerComponent() {
    // const list = [
    //     { id: 0, title: 'first' },
    //     { id: 1, title: 'second' },
    //     { id: 2, title: 'third' },
    // ]

    const list = await axios('')


    return (
        <div className='flex gap-2'>
            {
                list.map(item => {
                    return (
                        <div key={item.id}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}
