import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Cast = ({ image, castName, role }) => {
  const profileImage = image
    ? `${IMAGE_BASE_URL}${image}`
    : "https://via.placeholder.com/150";

  return (<div className="flex flex-col items-center text-center">

    <div className="w-32 h-32">
      <img
        src={profileImage}
        alt={castName}
        className="w-full h-full rounded-full object-cover"
      />
    </div>

    <h3 className="text-base font-semibold text-gray-800 mt-2">
      {castName}
    </h3>

    <p className="text-sm text-gray-500">
      as {role}
    </p>

  </div>

  );
};

export default React.memo(Cast);
