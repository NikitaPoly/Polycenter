import type { PROPS } from "./infoWindowSDSSettings";

export default function UserInfoWindowSDS({ userData }: PROPS) {
  return (
    <ul>
      <li>Name : {userData.UserName}</li>
      <li>Email : {userData.UserEmail}</li>
      <li> Graduation : {userData.GraduationYear}</li>
      <li>Orders Complete : {userData.OrderCompleted}</li>
      <li>Orders Requested : {userData.OrdersRequested}</li>
      <li> Current Ballance : {userData.Ballance}</li>
    </ul>
  );
}
