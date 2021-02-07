
export const Launches = ({ launches }) => {
    return (
        <div >
            Naziv lansiranja: {launches.map(el => <p key={el.id}>{el.name}<br /></p>)}
        </div>
    )
}