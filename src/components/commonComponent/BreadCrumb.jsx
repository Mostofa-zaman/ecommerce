import { Link, useLocation } from "react-router";
import Container from "./Container";

const BreadCrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div className="bg-gray_50 py-6">
      <Container>
        <div className="flex items-center flex-wrap gap-x-2 text-sm ">
          {/* home link */}
          <Link
            to="/"
            className="hover:text-primary transition-colors bg-green-500 text-white px-2 py-1 rounded-sm font-public_sans"
          >
            Home
          </Link>
          {/* dynamic path  */}
          {paths.map((name, index) => {
            const route = "/" + paths.slice(0, index + 1).join("/");
            const islast = index === paths.length - 1;

            return (
              <div key={route} className="flex items-center gap-x-2">
                <span className="text-gray-500 text-xl">/</span>
                {islast ? (
                  <span className="bg-purple-400 text-white font-public_sans py-1 px-2 capitalize  ">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={route}
                    className="bg-blue-500 text-white font-public_sans py-1 px-2 capitalize rounded-sm hover:bg-blue-600 transition-colors "
                  >
                    {name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
