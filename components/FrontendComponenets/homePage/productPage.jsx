import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {/* Product Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://dummyimage.com/420x260"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* Copy this block for more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://dummyimage.com/421x261"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          {/* Copy this block for more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://dummyimage.com/421x261"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          {/* Copy this block for more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://dummyimage.com/421x261"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          {/* Copy this block for more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://dummyimage.com/421x261"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          {/* Copy this block for more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="#" className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="product"
                src="https://res.cloudinary.com/dkp8e94jw/image/upload/f_auto,q_auto/Screenshot_2026-03-19_222953_ianftz"
                fill
                className="object-cover object-center"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest mb-1">CATEGORY</h3>
              <h2 className="text-white text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}