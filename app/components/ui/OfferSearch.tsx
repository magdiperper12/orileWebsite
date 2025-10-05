"use client";

import React from 'react'
import { useTranslations } from 'next-intl'

const OfferSearch = () => {
    const t = useTranslations("Search");
  return (
    <>
         <form className="mb-5">
            <div className="row">
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control general-input"
                  placeholder={t("Search")}
                />
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn-default-pure">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
    </>
  )
}

export default OfferSearch
