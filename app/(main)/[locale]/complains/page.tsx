"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import React from "react";

const Complain = () => {
  const t = useTranslations("Complains");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <BreadCrumb
        title={t("Complains")}
        breadcrumbs={[{ name: t("Complains") }]}
      />

      <section className="py-16 bg-gray-50 ">
        <div
          className="container mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className=" bg-[#24403f] rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-3xl font-bold text-center text-[#B1946A] mb-10">
              {t("Complains")}
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="ادخل الإسم"
                required
                className="border-b border-gray-300 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              />

              {/* Phone */}
              <input
                type="text"
                name="phone"
                placeholder="رقم الجوال"
                required
                className="border-b border-gray-300 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              />

              {/* Hidden */}
              <input type="hidden" name="branch_id" value="53560" />

              {/* Department */}
              <select
                name="department_id"
                required
                className="border-b border-gray-300 py-3 bg-transparent text-gray-400 focus:outline-none"
              >
                <option value="">الأقسام</option>
                <option value="10">جلدية</option>
              </select>

              {/* Complaint to */}
              <select
                name="addressed_complained"
                required
                className="border-b border-gray-300 py-3 bg-transparent text-gray-400 focus:outline-none"
              >
                <option value="">القسم الموجه له الشكوي</option>
                <option value="1367">الماليه</option>
                <option value="1366">المواعيد</option>
                <option value="1365">اداره الفرع</option>
                <option value="1364">طبيب</option>
                <option value="1362">تسويق</option>
                <option value="1361">تمريض</option>
                <option value="1360">خدمه عملاء</option>
                <option value="1359">استقبال</option>
              </select>

              {/* Service */}
              <input
                type="text"
                name="service"
                placeholder="الخدمة"
                className="md:col-span-2 border-b border-gray-300 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              />

              {/* Message */}
              <textarea
                name="user_complain_note"
                placeholder="ادخل رسالتك هنا"
                required
                rows={4}
                className="md:col-span-2 border-b border-gray-300 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              ></textarea>

              {/* Submit */}
              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complain;
