import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

interface DetailProductProps {}

const DetailProduct: React.FunctionComponent<DetailProductProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/");
  }, [id, navigate]);

  return (
    <div className="product-detail">
      <div className="product-detail__left">
        <img
          src="https://cdn.nhathuoclongchau.com.vn/unsafe/600x0/https://cms-prod.s3-sgn09.fptcloud.com/00008543_kem_chong_nang_eucerin_sun_protection_spf50_6202_5c8f_large_3d83b930d7.jpg"
          alt="product"
        />
      </div>
      <div className="product-detail__right">
        <p className="brand-name">
          Thương hiệu:
          <span> Beet</span>
        </p>
        <p className="product-name">
          Kem tẩy lông Veet Silk And Fresh trong 3 phút dành cho da thường (25g)
        </p>
        <div className="overview-rating">
          <span className="sku">00029780 - </span>
          <div className="stars">
            <span>5</span>
            <FaStar />
          </div>
          <span className="text-blue"> - 1 đánh giá</span>
          <span className="text-blue"> - 58 bình luận</span>
        </div>
        <p className="price">
          43000₫<span> / Túyp</span>
        </p>
        <div className="w-full flex items-center gap-6">
          <p className="w-1/3">Chọn đơn vị tính</p>
          <div className="w-3/4 flex items-center gap-3">
            <button className="px-3 h-9 bg-transparent cursor-pointer border rounded-full border-gray-3 outline-none">
              Hộp
            </button>
            <button className="px-3 h-9 bg-transparent cursor-pointer border rounded-full border-gray-3 outline-none">
              Vỉ
            </button>
            <button className="px-3 h-9 bg-transparent cursor-pointer border rounded-full border-gray-3 outline-none">
              Ống
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
