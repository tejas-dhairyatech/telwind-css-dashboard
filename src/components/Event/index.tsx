import Title from '../../ui/Title'
import { events } from '../../utils/constants/event'
import Item from './Item'

const Event = () => {
    return (
        <div className='flex flex-col bg-white rounded-2xl p-3 gap-3 '>
            <Title>Event</Title>
            {
                events.map((ev) => {
                    return (
                        <>
                            <Item data={ev} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Event