import { Navigate, useParams } from 'react-router-dom';

type RoomParams = { roomId: string };

export function RoomDetails() {
  const params = useParams<RoomParams>();
  if (!params.roomId || params.roomId === '') {
    return <Navigate replace to="/" />;
  }
  return <div>Room details - {JSON.stringify(params)}</div>;
}
