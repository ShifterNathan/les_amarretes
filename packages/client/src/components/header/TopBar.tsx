import { HomeIcon } from "@heroicons/react/20/solid";
import { ITopBarProps } from "../../interfaces/Header/ITopBarProps";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PopOverHeader from "./PopOverHeader";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export default function TopBar(props: ITopBarProps) {
  const { pages } = props;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleNavigation = () => {
    if (window.location.pathname === "/") return;
    navigate("/");
  }

  return (
    <div
      className="flex justify-between items-center border-b border-gray-200 w-full pb-2 pt-2"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-4 ml-6 md:ml-10">
        <li>
          <div>
            <button onClick={handleNavigation} className="text-gray-500 hover:text-gray-500">
              <HomeIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </button>
          </div>
        </li>
        {pages?.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                aria-current={page?.current ? "page" : undefined}
              >
                {page?.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
      <button
        onClick={isAuthenticated ? () => navigate("/profile") : togglePopover}
        className="flex items-center justify-center hover:text-primary-500 transition-colors duration-200 gap-2 mr-6 md:mr-10"
        aria-label="Iniciar sesión / registrarse"
      >
        <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8" />
        {isAuthenticated ? (
          <span className="text-xs md:text-sm text-left leading-4">
            Hola! <br />
            username
          </span>
        ) : (
          <span className="text-xs md:text-sm">
            Iniciar sesión / registrarse
          </span>
        )}
      </button>

      <PopOverHeader show={isPopoverOpen} togglePopover={togglePopover} />
    </div>
  );
}
