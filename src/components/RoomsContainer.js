import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from '../context'

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  )
}

export default withRoomConsumer(RoomsContainer)
