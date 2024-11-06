const Footer = () => {
  return (
    <footer className=" bg-gray-300  text-neutral-content py-16 px-12">
      <div>
        <h1 className="mb-3 text-textOF text-[2rem] text-center font-bold">
          Gadget Heaven
        </h1>
        <p className="text-textOF60 font-[500] text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider w-11/12 mx-auto"></div>

      <div className="footer md:items-center md:justify-around md:justify-items-center ">
        <nav>
          <h6 className="footer-title text-textOF text-[18px]">Services</h6>
          <a className="link link-hover text-textOF60"> Product Support</a>
          <a className="link link-hover text-textOF60">Order Tracking</a>
          <a className="link link-hover text-textOF60">Shipping & Delivery</a>
          <a className="link link-hover text-textOF60">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-textOF text-[18px]">Company</h6>
          <a className="link link-hover text-textOF60">About us</a>
          <a className="link link-hover text-textOF60">Career</a>
          <a className="link link-hover text-textOF60">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title text-textOF text-[18px]">Legal</h6>
          <a className="link link-hover text-textOF60">Terms of use</a>
          <a className="link link-hover text-textOF60">Privacy policy</a>
          <a className="link link-hover text-textOF60">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
