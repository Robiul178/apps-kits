"use client";

import { ChevronRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import Card from "@/components/common/card";
import "@/components/common/card.css";
import Picks from "@/components/picks";
import Section from "@/components/section";
import OtherWeLike from "@/components/pages/other-we-like";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../app/fonts/Butler/Butler-Medium.woff2",
});

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto p-2">
      <section>
        <div className="mt-5 flex flex-wrap uppercase">
          <div className="flex items-center">
            <h2>Travel Products</h2>
            <ChevronRight size={18} className="mx-2" />
          </div>
          <div className="flex items-center">
            <h2>Luggage + Bags</h2>
            <ChevronRight size={18} className="mx-2" />
          </div>

          <h2>Backpacks, Totes + Small Bags</h2>
        </div>

        <div>
          <h1 className={`md:text-5xl text-3xl   mt-5 ${myFont.className}`}>
            The 11 Best Carry-on Travel Backpacks of 2024, Tested and Reviewed
          </h1>
          <p className="text-xl py-4">
            These spacious and comfortable carry-on backpacks can easily replace
            a suitcase
          </p>

          <div className="text-md ">
            By <span className="underline">Anna Popp,</span>{" "}
            <span className="w-[1px] h-1 border mx-1 border-zinc-300"></span>
            Updated on August 8, 2024
          </div>

          <div>
            <div className="text-blue-800 flex gap-3 py-4">
              <MessageSquare /> 6 Comment
            </div>
            <div className="flex md:justify-end gap-3 max-sm:py-2">
              <div className="border p-2 rounded-full w-fit h-fit border-black">
                <Image
                  src="/assets/facebook.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="border p-2 rounded-full  w-fit h-fit border-black">
                <Image
                  src="/assets/twitter.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="border p-2 rounded-full  w-fit h-fit border-black">
                <Image
                  src="/assets/pinterest.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="border p-3 rounded-full  w-fit h-fit border-black">
                <Image src="/assets/mail.png" alt="" width={14} height={14} />
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-[1050px]  md:flex  gap-10 ">
          {/* <div class="max-w-1/4  max-h-[300px] sticky  top-0 bg-[#F5F2EA] max-sm:hidden">
          </div> */}
          <div className="w-1/4 sticky max-h-[300px] p-5  top-10 bg-[#F5F2EA] max-sm:hidden">
            <h2 className=" text-lg py-2">In This Article</h2>
            <ul className="border-l-2 px-2 text-sm max-sm:underline">
              <li className="mb-3 ml-1">Our Top Picks</li>
              <li className="mb-3 ml-1">Reviews</li>
              <li className="mb-3 ml-1">Others We Liked</li>
              <li className="mb-3 ml-1">Our Testing Process</li>
              <li className="mb-3 ml-1">Tips For Buying</li>
              <li className="mb-3 ml-1">FAQ</li>
              <li className="mb-3 ml-1">Why Trust T+L</li>
            </ul>
          </div>

          <div class="w-3/4 bg-white p-4 pt-0 ">
            <Image src="/assets/bag.jpeg" alt="ok" width={800} height={500} />
            <p className="text-gray-500 py-2">
              Photo: Travel + Leisure/Joy Kim
            </p>

            <p className="text-lg  font-normal mt-20">
              Skip the stress of checking a bag or lugging a traditional
              carry-on suitcase around an airport by adding a carry-on backpack
              to your travel gear. Practical, functional, and hassle-free, a
              carry-on backpack can fit up to a week’s worth of clothes,
              depending on your wardrobe and packing prowess. Whether you’re
              backpacking through Europe or embarking on a weekend getaway, this
              style helps make your trip as efficient and enjoyable as possible.{" "}
              <br />
              <br />
              We evaluated 89 carry-on backpacks in more than seven separate
              tests in our New York City lab and even utilized our airplane set
              — complete with a row of real plane seats and overhead storage
              bins — during the process. We then took each bag out into the
              world for at least six months to test its worth on a variety of
              trips.
            </p>

            <div className="bg-[#F5F2EA] p-5 my-5">
              <h1 className="text-2xl font-semibold">Why I'm the Expert</h1>
              <p className="mt-2 text-lg">
                After taking part in every single backpack test we've done since
                2022, personally testing more than 50 bags, and even owning two
                packs from this list, including our best overall winner, I'm
                confident there is a carry-on backpack for every type of
                traveler here.
              </p>
            </div>

            <div>
              <h1 className={`text-4xl mt-14 mb-2 ${myFont.className}`}>
                Our Top Picks
              </h1>

              <Picks
                top="Best Overall:"
                paragrapg="Cotopaxi Allpa 35L Travel Pack at Amazon $200"
              />
              <Picks
                top="Best for Long Trips:"
                paragrapg="Away The Outdoor Convertible Backpack 45L at Awaytravel.com $220"
              />
              <Picks top="Best With Packing Cubes:" paragrapg="" />
              <Picks
                top="Best With Packing Cubes:"
                paragrapg="SALE Asenlin 40L Travel Backpack at Amazon $40 $34"
              />
              <Picks
                top="Best for Photographers::"
                paragrapg="Peak Design Travel Backpack 45L at Amazon $300"
              />
              <Picks
                top="Best Compression:"
                paragrapg="Tropicfeel Shell Backpack at Tropicfeel.com $249"
              />
              <Picks
                top="Best Organization:"
                paragrapg="Topo Designs Global Travel Bag 30L at Backcountry.com $199"
              />
              <Picks
                top="Best Expandable:"
                paragrapg="Nomatic Travel Pack at Amazon $280"
              />
              <Picks
                top="Best Value:"
                paragrapg="SALE Matein Travel Backpack at Amazon $56 $34"
              />
              <Picks
                top="Best Waterproof:"
                paragrapg="Tortuga Travel Backpack at Tortugabackpacks.com $350"
              />
              <Picks
                top="Best for Foot Travel:"
                paragrapg="Osprey Fairview 40 at Amazon $185"
              />
            </div>

            <Section
              top_title="Best Overall"
              top_paragraph="Cotopaxi Allpa 35L Travel Pack"
              bannerImg="/assets/bagg.jpg"
              banner_caption="PHOTO: Amazon"
              text="$200 at Amazon"
              text2="$225 at REI"
              text3="$200 at Zappos"
              gray_title="Why We Love It:"
              gray_paragraph="I've used this pack for over four years and I'm confident I can fit more in it than a carry-on."
              gray_title2="What to Consider"
              gray_paragraph2="There isn’t a designated water bottle holder."
              paragraph_1st="The Cotopaxi Allpa 35L Travel Pack earned our top pick as the best carry-on backpack with its perfect performance in all categories of our testing. We loved its high capacity and thought the unstructured style was ideal for wedging clothes into every corner, maximizing packing space in the clamshell-style compartments. The shell is made of a TPU-coated 1000D polyester with a rubbery feel, and although it feels resistant to liquids, the backpack comes with a rain cover to ensure that your belongings stay dry while traveling. Handles on all four sides of the backpack make it easy to carry and lift into an overhead bin from any angle. The only downside to the bag is that it doesn't have a water bottle holder on the sides, so you'll have to carry one or try to fit it in the top pocket in the front."
              paragraph_2nd="During testing, we weren't surprised to see that the durable-feeling materials weren't damaged at all after we repeatedly tossed the bag onto the ground. Aside from testing this bag in our lab, I personally own it and have used it for countless trips in the last four years. The quality hasn't wavered in the slightest and I typically reach for the bag since I can fit more than I could in a carry-on. Plus, with the rising costs of bringing luggage on an airplane, this bag has been a real money-saver since I can usually fit my personal items inside, too."
              details="35 liters | 20 x 12 x 8 inches | 3.8 pounds | TPU-coated 1000D polyester, nylon | Padded laptop sleeve"
              img1="/assets/bag.jpeg"
              img2="/assets/bagg.jpg"
              img3="/assets/bagInRak.jpg"
              img4="/assets/slide4.jpg"
              img5="/assets/s22.jpeg"
              img6="/assets/s33.jpeg"
            />

            <Section
              top_title="Best for Long Trips"
              top_paragraph="Away The Outdoor Convertible Backpack 45L"
              bannerImg="/assets/blackbag.jpg"
              banner_caption="PHOTO: Away"
              text="$220 at Awaytravel.com"
              gray_title="Why We Love It"
              gray_paragraph="We love how comfortable it is on your shoulders and back thanks to the soft materials and cushioned shoulder straps."
              gray_title2="What to Consider"
              gray_paragraph2="At nearly 22 inches tall, this pack may be too long for those with shorter torsos."
              paragraph_1st="You ll be surprised by just how spacious this backpack is  The main compartment opens up like a clam shell for easy access to items that allowed us to fit an entire four-day packing list with ease — plus a few extra items. There are multiple large compartments, compression straps, and a few pockets in this backpack that are ideal for organizing clothes, gear, and accessories. While the 45-liter backpack can grow heavy when completely filled, the padded shoulder straps are supportive and keep you comfortable when walking for long periods of time. Plus, the convenient duffel handles allow you to switch up your carrying style if you do grow fatigued  "
              paragraph_2nd="This backpack also sports a well-padded laptop sleeve that protected our testing laptop when we threw the fully packed bag off a counter three times. There was also no sign of rips, scuffs, or tears in the bag s fabric after our tests. This water- and abrasion-resistant backpack would be perfect for avid travels who are looking for a sleek backpack to take them from city explorations to camping adventures."
              details="45 liters | 21.7 x 13.6 x 9.5 inches | 3.32 pounds | Water-resistant"
              img1="/assets/s22.jpeg"
              img2="/assets/s33.jpeg"
              img3="/assets/bagInRak.jpg"
              img4="/assets/blackbag.jpg"
              img5="/assets/s01.jpg"
            />

            <Section
              top_title="Best With Packing Cubes"
              top_paragraph="Asenlin 40L Travel Backpack"
              bannerImg="/assets/s01.jpg"
              banner_caption="PHOTO: Amazon"
              text="$40 $34 at Amazon"
              text2=""
              text3=""
              gray_title="Why We Love It"
              gray_paragraph="It’s spacious and comes with three packing cubes to stay organized while traveling. "
              gray_title2="What to Consider"
              gray_paragraph2="After six months of use, the bag is scuffed up with noticeable scratches."
              paragraph_1st="Perfect for travelers on a budget, the Asenlin 40L Travel Backpack impressed us with its packing features and comfortable fit. We thought the bag provided excellent organization thanks to the interior and exterior compression that provided extra room for packing. The backpack comes with three different packing cubes in small, medium, and large. We also like that this backpack includes both a suitcase strap and a handle to hold it horizontally. The backpack itself also features straps inside and a laptop sleeve to easily hold down items and pack electronics."
              paragraph_2nd="The design didn’t blow us away like those from some of the more costly brands, but it does have a laptop sleeve and a water bottle holder. We also liked the flexibility of being able to wear the Asenlin as a backpack, hold it like a briefcase, or use the trolley sleeve to slide it onto a roller suitcase’s handle. However, a bigger adjustment range for the chest strap would have been ideal. During our durability tests, the backpack didn’t scuff or show signs of damage. We think this budget pick is well worth the low price for those looking to get a durable, comfortable, and spacious carry-on backpack."
              details="40 liters | 18.5 x 12.5 x 9.5 inches | 2.7 pounds | Polyester | 17-inch laptop pocket"
              img1="/assets/s01.jpg"
              img2="/assets/s011.jpg"
              img3="/assets/s0111.jpg"
              img4="/assets/s01111.jpeg"
              img5="/assets/s011111.avif"
            />

            <Section
              top_title="Best for Photographers"
              top_paragraph="Peak Design Travel Backpack 45L"
              bannerImg="/assets/photographer/1.jpg"
              banner_caption="PHOTO: REI"
              text="$300 at Amazon"
              text2="$300 at REI"
              text3="$300 at Backcountry.com"
              gray_title="Why We Love It"
              gray_paragraph="You can access the main compartment on the bag from four different exterior zippers."
              gray_title2="What to Consider"
              gray_paragraph2="This is one of the most expensive backpacks on our list."
              paragraph_1st="This 45-liter backpack has a main compartment that is spacious enough to fit clothes for at least four days, and its expansive design is helpful for packing bulky items like jackets and shoes. Placing the clothes and shoes into the bag during testing was efficient and simple thanks to a removable divider sleeve and compression straps to hold everything down securely. Designed with photographers in mind, this backpack functions similarly to a camera bag. It can fit camera cubes, and it has four points of entry to the main compartment, allowing travelers to quickly grab clothes or accessories without unzipping the backpack. There is a padded laptop sleeve and stretchy side pockets for water bottles or a camera tripod."
              paragraph_2nd="Peak Design didn’t let any space go to waste on its backpack, so even the hip belt has a small pocket on it for storage and can be packed away when you’re not looking for extra support. It’s also easy to adjust all of the straps to prevent weight imbalances and pinching. Made of weatherproof and water-resistant recycled nylon, the bag held up perfectly after we tossed it on the ground, showing no signs of scuffs or damage — exactly what you want in a durable backpack. Although the price of this bag is steep, it comes with plenty of helpful features for travelers, and the stellar performance leads us to believe that it would last a long time. "
              details="45 liters | 13 x 22 x 9.5 inches | 4.8 pounds | Nylon, polyester | Laptop sleeve | Expandable"
              img1="/assets/photographer/1.jpg"
              img2="/assets/photographer/2.avif"
              img3="/assets/photographer/3.jpg"
              img4="/assets/photographer/44.jpg"
              img5="/assets/photographer/2.jpg"
            />
            <Section
              top_title="Best Compression"
              top_paragraph="Tropicfeel Shell Backpack"
              bannerImg="/assets/comparison/c1.jpg"
              banner_caption="PHOTO: Tropicfeel"
              text="$249 at Tropicfeel.com"
              text2=""
              text3=""
              gray_title="Why We Love It"
              gray_paragraph="It features adjustable straps to change the bags size and a removable compressing wardrobe organizer."
              gray_title2="What to Consider"
              gray_paragraph2="The handle on the top of the bag wasn’t as comfortable to hold onto as we hoped. "
              paragraph_1st="We love this backpack’s thoughtful features geared toward all types of travelers. The Tropicfeel Shell Backpack has the ability to store up to 42 liters worth of clothing for a weekend or week-long trip, but you can also use it as a 20-liter backpack for day trips, sightseeing, and everyday use."
              paragraph_2nd="After regularly using the bag for six months, we found it to be incredibly sturdy and durable. We had no issues fitting our full packing list and found that there was plenty more room thanks to the variety of adjustable buckled straps that allow you to adjust the size of the bag. You can loosen the front buckle to allow the roll-up opening flap to expand to fit more items, and there is a kangaroo pouch at the bottom of the backpack that provides an additional six liters of space for shoes or other items you want to keep separate. There’s also a padded compartment in the back of the backpack that can fit laptops up to 17 inches long and a removable compressing wardrobe organizer that can be hung in a closet when you reach your destination.
               We thought the backpack was comfortable to wear after adjusting the shoulder and waist straps, but we found that it might take some effort to get the buckles into your desired setting. The Shell Backpack didn’t show any signs of damage throughout testing, and the material is weather-proof. For travelers looking to add upgrades to their backpacks, the brand has an organization system and accessory pouches that you can add on for additional fees. If you need an all-in-one backpack, we think this backpack’s versatility makes it well worth the higher cost. Bonus, if you want a sustainable backpack, this one is made from made 100 percent recycled nylon and 64 percent recycled polyester. "
              details="20 to 42 liters | 12 x 20 x 7.5 inches | 3.3 pounds | Recycled polyester"
              img1="/assets/comparison/c1.jpg"
              img2="/assets/comparison/c2.jpg"
              img3="/assets/comparison/c33.jpg"
              img4="/assets/comparison/c4.jpg"
              img5="/assets/bagInRak.jpg"
            />
            {/* end */}

            <OtherWeLike />
          </div>
        </div>
      </section>

      {/* card section */}
      <section>
        <div className="mb-20">
          <h1 className="text-2xl font-bold py-5">Related Articles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card
              heading="Travelers Call This $37 Expandable Backpack the ‘Most Amazing’ Carry-on — and It Even Comes With Packing Cubes"
              name="Emeli Belfior"
              img="/assets/card/card1.jpg"
            />
            <Card
              heading="The 12 Best Personal Item Bags of 2024, Tested and Reviewed"
              name="Hillary Belfior"
              img="/assets/card/card2.jpg"
            />
            <Card
              heading="The 13 Best Backpacks for Disney Vacations in 2024"
              name="Hillary Belfior"
              img="/assets/card/card3.jpg"
            />
            <Card
              heading="The 9 Best Waterproof Backpacks, Tested and Reviewed"
              name="Maddie Micle"
              img="/assets/card/card4.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
