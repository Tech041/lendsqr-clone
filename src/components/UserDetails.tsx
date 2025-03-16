interface UserDetailsProp {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
}
const styles = "border-b border-gray-300 px-4 py-6";
const UserDetails = ({
  organization,
  username,
  email,
  phone,
  date,
  status,
}: UserDetailsProp) => {
  return (
    <tr>
      <td className={styles}>{organization}</td>
      <td className={styles}>{username}</td>
      <td className={styles}>{email}</td>
      <td className={styles}>{phone}</td>
      <td className={styles}>{date}</td>
      <td className={styles}>{status}</td>
    </tr>
  );
};

export default UserDetails;
