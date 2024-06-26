"use client";

import { useState } from "react";
import Pagination from "../paginate/page";

function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, totalPages, handlePageChange };
}

export default function DialogBoxContent({
  open,
  handleClickClose,
  reportData,
}) {
  const { currentPage, totalPages, handlePageChange } = usePagination();

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${
        open ? "block" : "hidden"
      } z-50`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={handleClickClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recently Generated Reports
              </h3>
              <div>
                <button
                  type="button"
                  className="border-2 border-gray-800 px-1 py-1 mr-3 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    className="h-4 w-4"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="768"
                    height="768"
                    viewBox="0 0 768 768"
                  >
                    <path
                      fill="#000"
                      d="M635.040 128l-211.488 250.048c-4.704 5.536-7.552 12.768-7.552 20.672v221.504l-64-32v-189.504c0.032-7.264-2.464-14.624-7.552-20.672l-211.488-250.048zM704 64h-640c-17.664 0-32 14.336-32 32 0 7.904 2.848 15.136 7.552 20.672l248.448 293.76v197.568c0 12.448 7.104 23.264 17.696 28.608l128 64c15.808 7.904 35.040 1.504 42.944-14.304 2.304-4.672 3.392-9.632 3.36-14.304v-261.568l248.448-293.76c11.424-13.504 9.728-33.696-3.776-45.088-6.048-5.12-13.408-7.616-20.672-7.584z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={handleClickClose}
                  type="button"
                  className="border-2 border-gray-800 px-1 py-1 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Report Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reportData &&
                    reportData.map((report, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {report.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {report.reportName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href={report.downloadLink}>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <path d="M9.233-0.017c0.076-0 0.153-0.001 0.232-0.001 0.208-0.001 0.415-0.001 0.623-0.001 0.175 0 0.349-0 0.524-0.001 0.413-0.001 0.825-0.001 1.238-0 0.423 0 0.845-0 1.268-0.002 0.365-0.001 0.731-0.001 1.096-0.001 0.217 0 0.434-0 0.651-0.001 0.897-0.003 1.759 0.002 2.635 0.211 0.090 0.021 0.090 0.021 0.182 0.042 2.22 0.528 3.801 1.921 5.369 3.491 0.112 0.112 0.224 0.224 0.336 0.335 0.234 0.233 0.467 0.467 0.701 0.7 0.268 0.268 0.536 0.535 0.804 0.802 0.261 0.26 0.521 0.52 0.782 0.781 0.11 0.109 0.219 0.219 0.329 0.328 0.84 0.836 1.601 1.669 2.184 2.708 0.021 0.037 0.041 0.074 0.063 0.112 0.562 1.016 0.915 2.112 1.062 3.263 0.008 0.059 0.008 0.059 0.016 0.119 0.068 0.567 0.056 1.137 0.056 1.707 0 0.121 0.001 0.243 0.001 0.364 0.001 0.329 0.001 0.657 0.002 0.986 0 0.206 0 0.412 0.001 0.617 0.001 0.645 0.001 1.291 0.002 1.936 0 0.742 0.001 1.484 0.003 2.226 0.001 0.576 0.002 1.151 0.002 1.727 0 0.343 0 0.686 0.002 1.029 0.001 0.323 0.001 0.646 0.001 0.969-0 0.118 0 0.235 0.001 0.353 0.010 2.084-0.586 3.863-2.039 5.386-1.191 1.148-2.781 1.855-4.446 1.849-0.062 0-0.123 0.001-0.187 0.001-0.204 0.001-0.409 0.001-0.613 0.001-0.147 0-0.295 0.001-0.442 0.001-0.399 0.001-0.798 0.001-1.196 0.001-0.25 0-0.499 0-0.749 0.001-0.827 0.001-1.654 0.002-2.482 0.002-0.067 0-0.067 0-0.135 0-0.067 0-0.067 0-0.135 0-0.721-0-1.442 0.001-2.163 0.003-0.743 0.002-1.485 0.003-2.228 0.003-0.416-0-0.832 0-1.248 0.002-0.392 0.001-0.783 0.001-1.175 0-0.143-0-0.286 0-0.429 0.001-2.027 0.010-3.769-0.579-5.244-2.012-1.319-1.332-1.886-3.151-1.879-4.994-0-0.081-0-0.162-0.001-0.245-0.001-0.222-0-0.443 0-0.665 0-0.24-0-0.48-0.001-0.72-0.001-0.469-0-0.938-0-1.407 0-0.381 0-0.763 0-1.144-0-0.054-0-0.109-0-0.165-0-0.111-0-0.221-0-0.332-0-1.035 0-2.071 0.001-3.106 0.001-0.887 0-1.774-0-2.661-0.001-1.032-0.001-2.064-0.001-3.096 0-0.11 0-0.22 0-0.331 0-0.054 0-0.108 0-0.164 0-0.381-0-0.761-0-1.142-0-0.464-0-0.929 0-1.393 0-0.237 0-0.473 0-0.71-0-0.257 0-0.514 0.001-0.772-0-0.074-0.001-0.147-0.001-0.223 0.003-0.684 0.076-1.368 0.275-2.024 0.013-0.044 0.027-0.088 0.040-0.133 0.518-1.631 1.695-3.067 3.215-3.859 0.994-0.495 1.983-0.754 3.095-0.751zM6.313 4.063c-0.705 0.843-0.967 1.814-0.962 2.896-0 0.081-0.001 0.161-0.001 0.244-0.001 0.222-0.001 0.443-0 0.665 0 0.24-0 0.48-0.001 0.72-0.001 0.469-0.001 0.938-0.001 1.408 0 0.382 0 0.763-0 1.145-0 0.054-0 0.109-0 0.165-0 0.111-0 0.221-0 0.332-0.001 1.036-0.001 2.072 0 3.108 0.001 0.946-0 1.893-0.002 2.839-0.002 0.973-0.002 1.947-0.002 2.92 0 0.546 0 1.092-0.001 1.637-0.001 0.465-0.001 0.929 0 1.394 0.001 0.237 0.001 0.473-0 0.71-0.006 1.537 0.095 2.814 1.231 3.964 1.082 1.020 2.329 1.132 3.744 1.129 0.138 0 0.275 0.001 0.413 0.001 0.372 0.001 0.743 0.001 1.115 0.001 0.311-0 0.622 0 0.934 0.001 0.777 0.001 1.553 0.001 2.33-0 0.672-0.001 1.344 0 2.017 0.002 0.693 0.002 1.385 0.002 2.078 0.002 0.388-0 0.776-0 1.164 0.001 0.365 0.001 0.73 0.001 1.095-0 0.133-0 0.266-0 0.4 0.001 1.332 0.006 2.566-0.185 3.572-1.141 0.842-0.842 1.208-1.877 1.215-3.051-0-0.17-0.001-0.34-0.002-0.51-0-0.123-0-0.247 0-0.37 0-0.333-0.001-0.665-0.002-0.998-0.001-0.348-0.001-0.697-0.002-1.045-0.001-0.659-0.002-1.317-0.004-1.976-0.002-0.75-0.003-1.501-0.004-2.251-0.002-1.543-0.005-3.085-0.009-4.628-0.035-0-0.071-0-0.108-0-0.868-0.002-1.735-0.006-2.603-0.011-0.42-0.002-0.839-0.004-1.259-0.005-0.406-0.001-0.811-0.003-1.217-0.006-0.154-0.001-0.308-0.001-0.462-0.001-1.464-0.001-2.789-0.151-3.875-1.237-0.738-0.793-1.057-1.709-1.059-2.779-0.001-0.107-0.001-0.107-0.002-0.216-0.002-0.235-0.003-0.469-0.004-0.704-0.001-0.163-0.002-0.326-0.004-0.49-0.003-0.385-0.005-0.77-0.007-1.155-0.002-0.439-0.005-0.877-0.009-1.315-0.006-0.901-0.012-1.803-0.017-2.704-0.146-0.073-0.233-0.071-0.397-0.072-0.086-0.001-0.086-0.001-0.173-0.001-0.094-0-0.094-0-0.19-0.001-0.066-0-0.132-0.001-0.2-0.001-0.22-0.001-0.44-0.002-0.659-0.003-0.075-0-0.15-0.001-0.228-0.001-0.399-0.001-0.797-0.002-1.196-0.003-0.41-0.001-0.82-0.003-1.23-0.005-0.317-0.002-0.633-0.002-0.95-0.002-0.151-0-0.302-0.001-0.453-0.002-1.567-0.011-2.9 0.207-4.012 1.403zM18.688 3.625c-0.006 0.764-0.010 1.529-0.013 2.293-0.001 0.355-0.003 0.71-0.006 1.065-0.003 0.343-0.004 0.686-0.005 1.029-0 0.131-0.001 0.261-0.003 0.392-0.002 0.183-0.002 0.367-0.002 0.55-0.001 0.053-0.002 0.107-0.003 0.162 0.003 0.422 0.097 0.811 0.39 1.127 0.383 0.351 0.723 0.4 1.227 0.396 0.059 0 0.117 0 0.177 0 0.193-0 0.386-0.001 0.579-0.002 0.134-0 0.268-0 0.402-0.001 0.353-0 0.705-0.002 1.058-0.003 0.36-0.001 0.72-0.002 1.080-0.002 0.706-0.001 1.412-0.003 2.118-0.006-0.164-0.356-0.342-0.639-0.603-0.93-0.053-0.060-0.053-0.060-0.107-0.121-0.463-0.519-0.957-1.008-1.449-1.499-0.104-0.104-0.208-0.208-0.311-0.312-0.216-0.216-0.432-0.432-0.648-0.648-0.276-0.275-0.551-0.551-0.826-0.827-0.214-0.214-0.428-0.428-0.642-0.642-0.102-0.102-0.203-0.203-0.305-0.305-0.639-0.641-1.258-1.258-2.046-1.716-0.021 0-0.041 0-0.063 0z"></path>
                              <path d="M16.595 16.057c0.399 0.237 0.662 0.554 0.78 1.006 0.018 0.196 0.019 0.391 0.020 0.588 0.001 0.058 0.001 0.116 0.002 0.176 0.002 0.191 0.003 0.381 0.004 0.572 0.001 0.133 0.002 0.265 0.004 0.398 0.003 0.348 0.006 0.697 0.008 1.045 0.003 0.356 0.006 0.711 0.009 1.067 0.006 0.697 0.011 1.395 0.016 2.092 0.073-0.075 0.073-0.075 0.147-0.151 0.182-0.186 0.364-0.371 0.547-0.556 0.079-0.080 0.157-0.16 0.235-0.24 0.113-0.116 0.227-0.231 0.341-0.346 0.034-0.036 0.069-0.071 0.104-0.108 0.289-0.289 0.601-0.499 1.009-0.569 0.523 0.006 0.853 0.086 1.23 0.455 0.25 0.371 0.399 0.747 0.324 1.203-0.147 0.496-0.459 0.818-0.82 1.174-0.056 0.056-0.112 0.113-0.17 0.171-0.118 0.119-0.237 0.237-0.356 0.354-0.151 0.149-0.3 0.299-0.449 0.45-0.83 0.839-1.532 1.506-2.705 1.789-0.072 0.018-0.072 0.018-0.146 0.036-0.679 0.107-1.392 0.059-2.041-0.161-0.053-0.017-0.106-0.033-0.16-0.051-0.707-0.249-1.252-0.77-1.773-1.291-0.055-0.055-0.111-0.11-0.168-0.167-0.116-0.115-0.232-0.231-0.347-0.347-0.118-0.118-0.236-0.235-0.355-0.352-0.173-0.17-0.345-0.342-0.517-0.513-0.053-0.052-0.106-0.104-0.16-0.157-0.365-0.369-0.55-0.651-0.609-1.177 0.017-0.365 0.139-0.724 0.38-1.001 0.308-0.275 0.593-0.399 1.010-0.405 0.061-0.002 0.122-0.004 0.185-0.005 0.472 0.067 0.798 0.339 1.12 0.672 0.037 0.037 0.073 0.074 0.111 0.112 0.116 0.117 0.231 0.235 0.346 0.353 0.079 0.080 0.158 0.16 0.237 0.24 0.193 0.195 0.384 0.391 0.575 0.588 0-0.073 0-0.146 0.001-0.222 0.002-0.691 0.006-1.381 0.011-2.072 0.002-0.355 0.004-0.71 0.005-1.065 0.001-0.343 0.003-0.686 0.006-1.029 0.001-0.131 0.001-0.261 0.001-0.392 0-0.183 0.002-0.367 0.004-0.55-0-0.080-0-0.080-0.001-0.162 0.007-0.42 0.101-0.814 0.396-1.127 0.455-0.409 1.013-0.54 1.609-0.325z"></path>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
