import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "./Butler-Bold.woff",
});
const OtherWeLike = () => {
  return (
    <div
      className="mt-10"
      //   className={`${myFont.className}`}
    >
      <div>
        <h2 className={`text-4xl font-semibold py-4 ${myFont.className}`}>
          Other Carry-on Backpacks We Liked
        </h2>
        <p className="text-lg">
          While we tested plenty of high-scoring carry-on backpacks, there were
          some that almost made our list but didn’t quite make the cut due to
          several weaknesses revealed during testing.
          <br />
          <br />
          <a href="#" className="text-blue-800 underline font-semibold">
            Earth Pak Summit Dry Bag Backpack:
          </a>{" "}
          We loved how durable, comfortable, and water resistant this 35-liter
          backpack is. It also comes with a waterproof phone case that kept our
          phone dry when submerged underwater. However, the roll top is so long
          and cumbersome, it makes packing a bit of a hassle. <br />
          <br />
          <a href="#" className="text-blue-800 underline font-semibold">
            Bellroy Transit Backpack Plus:
          </a>{" "}
          We loved the adjustable sternum and waist straps that you can tuck
          into the bag when not in use, but we think there are better bags out
          there for a fraction of the price. and cumbersome, it makes packing a
          bit of a hassle.
          <br />
          <br />
          <a href="#" className="text-blue-800 underline font-semibold">
            AmazonBasics Carry-on Travel Backpack:
          </a>{" "}
          It had plenty of compartments for staying organized and the material
          felt durable, but there weren’t any standout features that made it a
          must-have backpack.
          <br />
          <br />
          <a href="#" className="text-blue-800 underline font-semibold">
            Vancropak Carry-on Backpack, Extra Large 40L:
          </a>{" "}
          This backpack fits all of the packing items, and it even fits under an
          airplane seat, but our budget pick performed slightly better and it
          costs less.
        </p>
      </div>
      <div>
        <h2
          className={`text-[36px] font-semibold py-4 mt-5 ${myFont.className} `}
        >
          Our Testing Process
        </h2>
        <p className="text-lg">
          On more than seven separate occasions, we tested carry-on backpacks in
          our New York City lab to make sure we were creating this list with the
          best options from trusted luggage brands. For our latest tests, we
          built a specially designed airplane set that includes a row of real
          airplane seats and an overhead storage bin. To date, we've put over 89
          carry-on backpacks through a series of trials that compared capacity,
          design, comfort, durability, and overall value. After completing our
          in-house testing, we sent the backpacks out with our Travel + Leisure
          editors to give us insight into how they fared during real-world
          travel. We have been updating this article with long-term testing
          insights as soon as they become available. <br />
          <br />
          To test for capacity, we began by packing the bags with three shirts,
          two pairs of pants, one jacket, one pair of shoes, and a toiletry bag.
          We noted if any space was left over as well as how functional the
          compartments were for organizing the contents packed. We evaluated the
          overall design of the bags by paying attention to how they fold out,
          how well the zippers and buckles work, and the functionality of each
          pocket or compartment. <br />
          <br />
          Next, we put on the backpacks and walked around for 10 minutes to rate
          comfortability. The highest scoring backpacks were exceptionally
          enjoyable to wear with the weight evenly distributed on the shoulders
          or hips.
          <br />
          <br />
        </p>
        <div className="my-3">
          <Image src="/assets/bagInRak.jpg" alt="" width={600} height={500} />
          <p className="uppercase text-gray-500 text-sm">
            PHOTO: Travel + Leisure / Jhett Thompson
          </p>
        </div>
        <div>
          <Image src="/assets/s22.jpeg" alt="" width={600} height={500} />
          <p className="uppercase text-gray-500 text-sm">
            PHOTO: Travel + Leisure / Joy Kim
          </p>
        </div>
        <p className="text-lg">
          Then, we threw the backpacks a few feet or off a countertop to test
          for durability. The highest-rated bags had no scuffs or tears after
          rough handling, and the packed items inside remained unharmed as well.
          Our testers had no previous knowledge of the cost of each backpack
          until after testing was completed. This allowed us to give an unbiased
          rating of overall values, where the top bags were determined to be
          fairly priced based on a high-quality performance, especially for the
          pricier bags. After our lab tests, the backpacks were sent out for
          real-world testing for up to six months.
        </p>
      </div>
      <section className="my-12">
        <h2 className={`text-4xl font-semibold ${myFont.className}`}>
          Tips for Buying a Carry-on Backpack
        </h2>
        <div>
          <h3 className={`text-[28px] mt-8 font-semibold ${myFont.className}`}>
            Consider under-the-seat versus carry-on bags
          </h3>
          <p className="text-lg mt-4">
            Not all carry-on backpacks will fit under the seat of an airplane,
            but if that’s your intended use, we recommend checking an airline’s
            underseat dimensions before heading to the airport. Similarly, with
            a carry-on backpack for the overhead bin, you’ll want to
            double-check the airline’s carry-on size restrictions to avoid
            paying unwanted fees if the bag is stuffed full of clothes.{" "}
          </p>
        </div>
        <div>
          <h3 className={`text-[28px] mt-8 font-semibold ${myFont.className}`}>
            Keep in mind what the bag will be used for
          </h3>
          <p className="text-lg mt-4">
            It may seem obvious, but to find the perfect travel backpack you
            need to first consider its primary function. For those traveling by
            foot, a smaller, lightweight backpack would be better for
            portability and comfort. For those traveling by air, a compression
            bag or backpack that has plentiful organization could be a better
            choice so you get the most out of the limited airline baggage space.
            When traveling by air, you might also want to consider an option
            with wheels for added convenience, like a rolling backpack,
            weekender, or duffel bag. .{" "}
          </p>
        </div>
      </section>
      <section className="p-5 border border-red-800">
        <h2 className={`text-[28px] mt-8 font-semibold ${myFont.className}`}>
          Frequently Asked Questions
        </h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold py-3">
            How much can fit in a carry-on backpack?
          </h3>
          <p>
            During our test, we packed three shirts, two pants, one jacket, one
            pair of shoes, and a toiletry bag into each bag and often had extra
            space for more clothes. Many backpacks come with a laptop
            compartment, but you’ll want to make sure that feature is included
            before purchasing yours.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold py-3">
            Are all carry-on backpacks airline-approved?
          </h3>
          <p>
            Carry-on size restrictions vary by airline, and it’s possible for a
            carry-on backpack to not fit within some limits. Most bags will have
            a product details section highlighting the dimensions of the
            backpack. If you’re looking to fit the bag solely under the seat,
            you should check to make sure the bag fits the dimensions while it’s
            packed.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold py-3">
            Can I bring a backpack and an additional carry-on bag onto the
            plane?
          </h3>
          <p>
            It depends on the airline, where you're flying, and the kind of
            flight class you purchase. Some airlines only allow you to bring one
            item onto the plane with you, while others will let you bring a
            personal item, such as a backpack, and an additional carry-on item,
            like a suitcase or weekender bag. It's always best practice to
            double check your airline's luggage restrictions prior to traveling.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className={`text-4xl ${myFont.className}`}>
          Why Trust Travel + Leisure
        </h2>
        <p className="mt-2 text-lg pt-2">
          After moving to New York City in the spring of 2022 to test travel
          gear for T+L, Anna Popp has spent countless hours personally testing
          more than 50 backpacks including bags on this list from Cotopaxi,
          Calpak, Peak Design, and Nomatic. She has been traveling with our top
          pick for more than four years — and even had to get everyone in her
          family the same bag so they would stop stealing hers.
        </p>
      </section>
    </div>
  );
};

export default OtherWeLike;
