
export default function ServerComponent() {
    const list = [
        { id: 0, title: 'first' },
        { id: 1, title: 'second' },
        { id: 2, title: 'third' },
    ]


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
