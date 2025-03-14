interface TeamCardProp {
  src: string;
  src2: string;
  src3: string;
  content: string;
  name: string;
  organization: string;
}
const LendingTeamCard = ({ src, src2, content, src3, name, organization }:TeamCardProp) => {
  return (
    <div className="w-full shadow-lg border rounded-xl bg-white h-[300px]">
      <div className="px-3 py-2 h-full w-full">
        <div className="flex justify-between py-4 h-[30%]">
          <div className="flex-1 ">
            <img src={src} alt="" className="h-[35px] w-[90px]" />
          </div>
          <div className="flex-1  flex justify-end">
            <img src={src2} alt="" className="w-[50px] h-[35px]"/>
          </div>
        </div>
        <div className="h-[20%]">
          <p className="text-primary-300">{content}</p>
        </div>
        <div className="flex items-center mt-10  h-[30%]">
          <div className="h-full   ">
            <img src={src3} alt="" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-semibold text-black">{name}</p>
            <p className="text-primary-300">{organization}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingTeamCard;
