const AddToCart = () => {
  return (
    <div className="lg:max-w-5xl max-lg:max-w-2xl mx-auto bg-white p-4">
      <div className="grid lg:grid-cols-3 gap-6">

        {/* 🛒 Cart Items */}
        <div className="lg:col-span-2 bg-gray-100 p-6 rounded-md">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-8">

            {/* Item 1 */}
            <div className="grid sm:grid-cols-3 items-center gap-4">
              <div className="sm:col-span-2 flex sm:items-center max-sm:flex-col gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-md">
                  <img src="https://readymadeui.com/images/product14.webp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold">Velvet Sneaker</h4>
                  <h6 className="text-xs text-red-500 mt-1 cursor-pointer">Remove</h6>

                  {/* Size + Quantity */}
                  <div className="flex gap-4 mt-4">

                    {/* Size */}
                    <button className="px-3 py-1 border rounded-md text-xs">
                      XL
                    </button>

                    {/* Quantity */}
                    <div className="flex items-center px-3 py-1 border rounded-md text-xs">
                      <span className="cursor-pointer">-</span>
                      <span className="mx-3">2</span>
                      <span className="cursor-pointer">+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:ml-auto">
                <h4 className="font-semibold">$20.00</h4>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid sm:grid-cols-3 items-center gap-4">
              <div className="sm:col-span-2 flex sm:items-center max-sm:flex-col gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-md">
                  <img src="https://readymadeui.com/images/watch5.webp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold">Smart Watch Timex</h4>
                  <h6 className="text-xs text-red-500 mt-1 cursor-pointer">Remove</h6>

                  <div className="flex gap-4 mt-4">
                    <button className="px-3 py-1 border rounded-md text-xs">
                      XL
                    </button>

                    <div className="flex items-center px-3 py-1 border rounded-md text-xs">
                      <span>-</span>
                      <span className="mx-3">1</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:ml-auto">
                <h4 className="font-semibold">$120.00</h4>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid sm:grid-cols-3 items-center gap-4">
              <div className="sm:col-span-2 flex sm:items-center max-sm:flex-col gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-md">
                  <img src="https://readymadeui.com/images/sunglass1.webp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold">Sun Glass</h4>
                  <h6 className="text-xs text-red-500 mt-1 cursor-pointer">Remove</h6>

                  <div className="flex gap-4 mt-4">
                    <button className="px-3 py-1 border rounded-md text-xs">
                      XL
                    </button>

                    <div className="flex items-center px-3 py-1 border rounded-md text-xs">
                      <span>-</span>
                      <span className="mx-3">1</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:ml-auto">
                <h4 className="font-semibold">$50.00</h4>
              </div>
            </div>

          </div>
        </div>

        {/* 💳 Order Summary */}
        <div className="bg-gray-100 rounded-md p-6 h-max">
          <h3 className="text-lg font-semibold">Order details</h3>
          <hr className="border-gray-300 mt-4 mb-8" />

          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">Discount <span>$0.00</span></li>
            <li className="flex justify-between">Shipping <span>$2.00</span></li>
            <li className="flex justify-between">Tax <span>$4.00</span></li>
            <li className="flex justify-between font-semibold text-black">
              Total <span>$216.00</span>
            </li>
          </ul>

          <div className="mt-6 space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md">
              Checkout
            </button>
            <button className="w-full border py-2 rounded-md">
              Continue Shopping
            </button>
          </div>

          {/* Promo */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">
              Do you have a promo code?
            </p>
            <div className="flex border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Promo code"
                className="w-full px-3 py-2 outline-none"
              />
              <button className="bg-blue-600 text-white px-4">
                Apply
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddToCart;