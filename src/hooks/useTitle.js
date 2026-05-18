import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Tutor Booking System`;
  }, [title]);
};

export default useTitle;