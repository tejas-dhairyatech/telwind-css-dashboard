import Title from "../../ui/Title"
import { users } from "../../utils/Data/user"
import Member from "./Member"

const Team = () => {
    return (
        <div className="flex flex-col 
        bg-white rounded-2xl p-3 gap-3 flex-1">
            <Title>Team</Title>
            {
                users.map((user, index) => {
                    return (
                        <>
                            <Member key={index} user={user} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Team