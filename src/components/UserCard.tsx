interface UserCardProp {
  src: string;
  text: string;
  value: string;
}
const UserCard = ({ src, text, value }: UserCardProp) => {
  return (
    <div className=" w-full lg:w-[24%] py-5 px-3 bg-white shadow-lg rounded-lg">
      <div className="py-1">
        <img src={src} alt="" className="" />
      </div>
      <div className="py-1">{text}</div>
      <div className="py-1 font-bold">{value}</div>
    </div>
  );
};

export default UserCard;
