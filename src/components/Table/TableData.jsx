const TableData = ({users}) => {
    console.log("alos",users);

    function betsToString(player) {
    return player.bets.map(bet => bet.numbers.join('.')).join(' | ');
    }

    return (
        <>
            {
                users.map((user, index) => {
                    const {name, cpf, bets} = user;
                                       
                    return (
                        <tr key={index+1}>
                        <td>{index+1}</td> 
                        <td>{name}</td>
                        <td>{cpf}</td>
                        <td>{betsToString(user)}</td>
                    </tr>
                    )
                })
            }
        </>
    )
}; export default TableData;