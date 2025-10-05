"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import BreadCrumb from "@/components/ui/BreadCrumb";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  quantity: number;
  branch: string;
  branchId: number;
}

const CartPage = () => {
  const t = useTranslations("Cart");

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 14605,
      name: "جلسة ليزر جسم كامل مع الرتوش + جلسة تشقير وجه وحواجب",
      image: "/images/layser.webp",
      price: 490,
      discountPrice: 563.5,
      quantity: 1,
      branch: "اوريل",
      branchId: 53560,
    },
  ]);

  const handleQuantityChange = (id: number, value: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );

  return (
    <main>
      <BreadCrumb title={t("Cart")} breadcrumbs={[{ name: t("Cart") }]} />

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 data-aos="fade-up" className="text-2xl font-bold">
              {t("Cart")}
            </h3>
          </div>

          <div
            id="cart-main"
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm">
                    <th className="p-3">#</th>
                    <th className="p-3">{t("Offers")}</th>
                    <th className="p-3">{t("Items")}</th>
                    <th className="p-3">{t("Price")}</th>
                    <th className="p-3">{t("DiscountPrice")}</th>
                    <th className="p-3">{t("Quantity")}</th>
                    <th className="p-3">{t("Branch")}</th>
                    <th className="p-3">{t("Total")}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((item, index) => (
                        <tr
                          key={item.id}
                          className="border-b hover:bg-gray-50 text-sm"
                        >
                          <td className="p-3 text-center">{index + 1}</td>

                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                              />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </td>

                          <td className="p-3 text-center">-</td>

                          <td className="p-3">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/Sar.png"
                                alt="SAR"
                                width={18}
                                height={18}
                              />
                              <span>{item.price}</span>
                            </div>
                          </td>

                          <td className="p-3">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/Sar.png"
                                alt="SAR"
                                width={18}
                                height={18}
                              />
                              <span>{item.discountPrice}</span>
                            </div>
                          </td>

                          <td className="p-3">
                            <input
                              type="number"
                              min="0"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  Number(e.target.value)
                                )
                              }
                              className="w-16 border rounded-md px-2 py-1 text-center"
                            />
                          </td>

                          <td className="p-3 text-center">{item.branch}</td>

                          <td className="p-3">
                            <div className="flex items-center gap-1 font-semibold">
                              <Image
                                src="/images/Sar.png"
                                alt="SAR"
                                width={18}
                                height={18}
                              />
                              <span>
                                {(item.discountPrice * item.quantity).toFixed(
                                  2
                                )}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}

                      <tr className="bg-gray-50 text-sm">
                        <td colSpan={3} className="p-3">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder={t("EnterCoupon")}
                              className="border rounded-md px-3 py-2 w-40"
                            />
                            <button className="bg-[#B1946A] text-white px-4 py-2 rounded-md hover:bg-[#9a805b]">
                              {t("ApplyCoupon")}
                            </button>
                          </div>
                          <p
                            className="text-red-500 text-sm mt-2"
                            id="responseText"
                          ></p>
                        </td>

                        <td colSpan={3} className="p-3">
                          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                            {t("UpdateCart")}
                          </button>
                        </td>

                        <td colSpan={2} className="p-3">
                          <div className="flex items-center gap-1 font-bold">
                            <Image
                              src="/images/Sar.png"
                              alt="SAR"
                              width={18}
                              height={18}
                            />
                            {cartTotal.toFixed(2)}
                          </div>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <tr>
                      <td colSpan={8} className="p-6 text-center text-gray-500">
                        {t("EmptyCart")}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
