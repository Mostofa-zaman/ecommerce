import { imagesProvider } from "../../../helpers/imgProvider";
import Button from "../../commonComponent/Button";
import Container from "../../commonComponent/Container";

const Subscribe = () => {

  /// images destructure here

  const subimg = [
    imagesProvider.subone,
    imagesProvider.subtwo,
    imagesProvider.subthree,
    imagesProvider.subfour,
    imagesProvider.subfive,
  ];
  return (
    <div className="py-[72px] bg-secondary_700 ">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-gray_00 heading1">Subscribe to our newsletter</h1>
          <p className="md_400 text-gray_00 w-[536px] text-center pt-3 pb-8">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="w-[625px] bg-gray_00  rounded  flex items-center gap-x-4 p-4">
            <input
              type="email"
              className="w-[424px] border-none rounded p-3 "
              placeholder="Email address"
            />
            <Button
              children={"Subscribe"}
              className={"!bg-primary_500  !text-gray_00 py-3"}
            />
          </div>
          <div className="w-[500px] h-[1px] bg-gray_400 mt-8 mb-6"></div>
          <div className="flex items-center gap-x-12">
            {/* map here */}

            {subimg.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`sub-image-${index}`}
                  className="h-[80px] w-[100%] object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
