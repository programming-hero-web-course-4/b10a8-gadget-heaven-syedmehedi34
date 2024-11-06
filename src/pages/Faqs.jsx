const Faqs = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between mb-20">
      <div className="w-full md:w-[70%]  mt-12 max-[768px]:order-2">
        <h1 className="text-textOF font-bold text-3xl">FAQs</h1>
        <p className="text-textOF60 mt-3 w-full md:w-4/5 text-sm md:text-[1rem]">
          Have questions? Here you&apos;ll find the answers most valued by our
          partners, along with access to step-by-step instructions and support.
        </p>

        {/*  */}
        <div className="join join-vertical w-full  mt-10">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              1. What types of gadgets do you sell?
            </div>
            <div className="collapse-content">
              <p>
                We offer a wide range of gadgets, including smartphones,
                laptops, tablets, smartwatches, headphones, and other tech
                accessories from popular and trusted brands.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              2. Are your products authentic and brand-new?
            </div>
            <div className="collapse-content">
              <p>
                Yes, all our products are 100% authentic, sourced directly from
                authorized distributors, and brand-new in original packaging.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              3. What is your return policy?
            </div>
            <div className="collapse-content">
              <p>
                We offer a hassle-free return policy within 30 days of purchase.
                If you’re not satisfied or received a defective item, please
                contact our support team to initiate a return or exchange.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              4. Do you offer any warranties on the products?
            </div>
            <div className="collapse-content">
              <p>
                Yes, most of our products come with a manufacturer’s warranty.
                Warranty periods vary by brand and product, so please check the
                product details or contact us for specific warranty information.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              5. How can I contact customer support?
            </div>
            <div className="collapse-content">
              <p>
                You can reach our customer support team via email at
                support@gadget-heaven.com or call us at 1-800-GADGETS. We’re
                available Monday to Friday, 9 AM to 6 PM.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="max-[768px]:order-1">
        <img className="w-96" src="./public/faq.gif" alt="" />
      </div>
    </div>
  );
};

export default Faqs;
