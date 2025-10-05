"use client";

import { useTranslations } from "next-intl";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useState } from "react";
import SimilarOffers from "@/components/Offers/similarOffers";
import Image from "next/image";
import Link from "next/link";

interface OfferItem {
  id: number;
  title_ar: string;
}

interface Branch {
  id: number;
  name_ar: string;
  name_en: string;
}

interface OfferData {
  id: number;
  name_ar: string;
  name_en: string;
  price: number;
  image: string;
  short_description_ar: string;
  short_description_en: string;
  status: number;
  items: OfferItem[];
  branches: Branch[];
}

const OfferPage = () => {
  const t = useTranslations("Offers");
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  // Mock data - replace with actual API call
  const offer: OfferData = {
    id: 1,
    name_ar: "عرض تجريبي",
    name_en: "Test Offer",
    price: 999,
    image: "/images/layser.webp",
    short_description_ar: "وصف مختصر",
    short_description_en: "Short description",
    status: 1,
    items: [],
    branches: [],
  };

  const handleQuantityChange = (type: "plus" | "minus") => {
    if (type === "plus" && quantity < 100) {
      setQuantity(quantity + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement cart logic here
  };

  return (
    <>
      <BreadCrumb
        title="Offers"
        breadcrumbs={[
          { name: t("Derma") },
          { name: t("Offers") },
          { name: "اختبار" },
        ]}
      />

      <section className="services-single">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="shop-detail">
                {/* ADD TO CART */}
                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src={offer.image}
                      alt={offer.name_en}
                      width={300}
                      height={370}
                      className="img-fluid object-fit-cover rounded"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="single-content shop-content">
                      <h2>{offer.name_en}</h2>
                      <div className="shop-price">
                        <ins>
                          <span id="offer_price">{offer.price}</span> {t("SAR")}
                        </ins>
                      </div>
                      <div className="product-detail">
                        <p>{offer.short_description_en}</p>
                      </div>
                      {/* Form */}
                      {offer.status === 1 && (
                        <form onSubmit={handleAddToCart}>
                          {offer.items && offer.items.length > 0 && (
                            <div className="offer-items my-2">
                              <h5 className="bold mb-3">
                                {t("Choose offer items")}
                              </h5>
                              {offer.items.map((item) => (
                                <div key={item.id} className="my-1 px-1">
                                  <input
                                    type="checkbox"
                                    className="form-check-input items_offer"
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedItems([
                                          ...selectedItems,
                                          item.id,
                                        ]);
                                      } else {
                                        setSelectedItems(
                                          selectedItems.filter(
                                            (id) => id !== item.id
                                          )
                                        );
                                      }
                                    }}
                                  />
                                  <label className="form-check-label">
                                    {item.title_ar}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn-default-pure btn-number btn-sm"
                                  disabled={quantity <= 1}
                                  onClick={() => handleQuantityChange("minus")}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                className="form-control input-number general-input"
                                value={quantity}
                                readOnly
                                style={{ margin: "0px 7px" }}
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn-default-pure btn-number btn-sm"
                                  onClick={() => handleQuantityChange("plus")}
                                  disabled={quantity >= 100}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </span>
                            </div>
                          </div>

                          {offer.branches && offer.branches.length > 1 && (
                            <>
                              <p className="text-danger bold">
                                {t("Choose Nearest Branch")}
                              </p>
                              <select
                                className="form-control"
                                value={selectedBranch}
                                onChange={(e) =>
                                  setSelectedBranch(e.target.value)
                                }
                                required
                              >
                                <option value="">
                                  {t("- please chose branch -")}
                                </option>
                                {offer.branches.map((branch) => (
                                  <option key={branch.id} value={branch.id}>
                                    {branch.name_en}
                                  </option>
                                ))}
                              </select>
                            </>
                          )}
                          <div className="d-flex justify-content-center align-items-center mt-5">
                            <button
                              type="submit"
                              className="btn toCart btn-default"
                            >
                              {t("AddToCart")}
                            </button>
                          </div>
                        </form>
                      )}
                      {/* Form */}
                    </div>
                  </div>
                </div>
                {/* ADD TO CART */}
                {/* Description */}
                <div className="row">
                  <div className="col-md-12">
                    <div id="store-tab-main" className="mt-5">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <Link href="#1" data-toggle="tab">
                            الوصف
                          </Link>
                        </li>
                      </ul>

                      <div className="tab-content mt-5">
                        <div className="tab-pane active" id="1">
                          <p>
                            3 جلسات ليزر جسم كامل مع الرتوش + جلسة تشقير وجه
                            وحواجب
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Description */}
              </div>
            </div>
            {/* Similar Offers */}
            <SimilarOffers />
            {/* Similar Offers */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferPage;
