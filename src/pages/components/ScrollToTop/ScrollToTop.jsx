import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation(); // Get the route path and query params

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const scrollToId = urlParams.get("scrollTo"); // Extract the section ID

    if (scrollToId) {
      setTimeout(() => {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300); // Slight delay to ensure the component is loaded
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
