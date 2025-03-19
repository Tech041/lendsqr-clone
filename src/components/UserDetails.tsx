export interface UserDetailsProp {
  sector: string;
  full_name: string;
  email: string;
  phone?: string;
  date?: string;
  level: string;
}
const styles = "border-b border-gray-300 px-4 py-6";
const UserDetails = ({ sector, full_name, email, level }: UserDetailsProp) => {
  return (
    <tr>
      <td className={styles}>{sector}</td>
      <td className={styles}>{full_name}</td>
      <td className={styles}>{email}</td>
      <td className={styles}>{level}</td>
    </tr>
  );
};

export default UserDetails;
