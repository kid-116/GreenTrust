export default function FarmerCard({ profile }) {
  profile = JSON.parse(profile);

  return (
    <div className="flex items-center mx-3">
      <div className="mr-4">
        <img
          src={`https://ipfs.io/ipfs/${profile.profilePic}`}
          className="rounded-full w-[60px] h-[60px]"
          onError={(e) => (e.currentTarget.src = "/images/jonathan.png")}
        />
      </div>
      <div>
        <p className="font-comfortaa text-darkGray text-xl font-bold">{profile.name}</p>
        <p className="font-comfortaa text-darkGray text-base font-normal">{profile.email}</p>
      </div>
    </div>
  );
}

