
interface IProps {
    params: Promise<{ id: string }>,
    searchPrams: Promise<{}>
}

async function page(props: IProps) {

    const { id } = await props.params
    console.log(id);
    

    return (
        <div>store details:</div>
    )
}

export default page