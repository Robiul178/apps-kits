import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 ">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/man.jpg" alt="jhs" width={800} height={800} />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">Benefits of You</h2>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quas
            culpa vero, ratione, sed et deserunt vitae officia consequuntur
            consequatur amet fugiat distinctio.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className=" p-4 bg-white shadow-lg border">
          <div className="flex justify-center">
            {" "}
            <Image src="/handMoney.jpg" alt="jhs" width={80} height={80} />
          </div>
          <h2 className="text-lg font-semibold py-4">Upfront payment</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quas
            culpa vero, ratione, sed et deserunt vitae officia
          </p>
        </div>
        <div className=" p-4 bg-white shadow-lg border">
          <div className="flex justify-center">
            {" "}
            <Image src="/9872488.jpg" alt="jhs" width={80} height={80} />
          </div>
          <h2 className="text-lg font-semibold py-4">No Risk</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quas
            culpa vero, ratione, sed et deserunt vitae officia
          </p>
        </div>
        <div className=" p-4 bg-white shadow-lg border">
          <div className="flex justify-center">
            {" "}
            <Image src="/handMoney.jpg" alt="jhs" width={80} height={80} />
          </div>
          <h2 className="text-lg font-semibold py-4"> Easy To Setup</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quas
            culpa vero, ratione, sed et deserunt vitae officia
          </p>
        </div>
        <div className=" p-4 bg-white shadow-lg border">
          <div className="flex justify-center">
            <Image src="/balance.jpg" alt="jhs" width={80} height={80} />
          </div>
          <h2 className="text-lg font-semibold py-4">Fair Prising </h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quas
            culpa vero, ratione, sed et deserunt vitae officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
