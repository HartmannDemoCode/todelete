const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}]

const NamesView = () => {
    return (
        <ul>
            {names.map(name=><li>{name.fname} {name.lname}</li>)}
            
            {names.map(function(element){
                return (<li>
                    {element.fname}
                    </li>);
            })}
        </ul>
    );
};
const ExtraComponent = () => {
    return <div>Hello from extra</div>
};

export default NamesView;
export {ExtraComponent};
