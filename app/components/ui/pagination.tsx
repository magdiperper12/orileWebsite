import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <>
      {/* Pagination */}
      <div className="row">
        <div className="col-md-12">
          <div className="post-pagination wow fadeInUp">
            <ul className="pagination">
              <li className="disabled prev">
                <Link href="#">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </Link>
              </li>
              <li className="active">
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li className="next">
                <Link href="#">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
