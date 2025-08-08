'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react'

// Dummy data
const products = [
  { id: 1, name: 'Product 1', category: 'Electronics', brand: '/microsoft.svg', price: '$10', stock: 12, views: 150 },
  { id: 2, name: 'Product 2', category: 'Fashion', brand: '/google.svg', price: '$20', stock: 8, views: 120 },
  { id: 3, name: 'Product 3', category: 'Books', brand: '/pinterest-round.svg', price: '$30', stock: 30, views: 200 },
  { id: 4, name: 'Product 4', category: 'Beauty', brand: '/fli.svg', price: '$40', stock: 5, views: 80 },
  { id: 5, name: 'Product 5', category: 'Home', brand: '/pf.svg', price: '$50', stock: 15, views: 99 },
  { id: 6, name: 'Product 6', category: 'Toys', brand: '/pf.svg', price: '$60', stock: 10, views: 60 },
  { id: 7, name: 'Product 7', category: 'Electronics', brand: '/behance.svg', price: '$70', stock: 7, views: 230 },
  { id: 8, name: 'Product 8', category: 'Fashion', brand: '/microsoft.svg', price: '$80', stock: 3, views: 89 },
  { id: 9, name: 'Product 9', category: 'Books', brand: '/fli.svg', price: '$90', stock: 11, views: 110 },
  { id: 10, name: 'Product 10', category: 'Beauty', brand: '/google.svg', price: '$100', stock: 9, views: 150 },
  { id: 11, name: 'Product 11', category: 'Home', brand: '/brand1.svg', price: '$110', stock: 6, views: 175 },
  { id: 12, name: 'Product 12', category: 'Toys', brand: '/brand2.svg', price: '$120', stock: 14, views: 140 },
  { id: 13, name: 'Product 13', category: 'Electronics', brand: '/brand3.svg', price: '$130', stock: 4, views: 95 },
  { id: 14, name: 'Product 14', category: 'Fashion', brand: '/brand4.svg', price: '$140', stock: 18, views: 210 },
  { id: 15, name: 'Product 15', category: 'Books', brand: '/brand5.svg', price: '$150', stock: 9, views: 135 },
  { id: 16, name: 'Product 16', category: 'Beauty', brand: '/brand1.svg', price: '$160', stock: 12, views: 160 },
  { id: 17, name: 'Product 17', category: 'Home', brand: '/brand2.svg', price: '$170', stock: 2, views: 85 },
  { id: 18, name: 'Product 18', category: 'Toys', brand: '/brand3.svg', price: '$180', stock: 16, views: 220 },
  { id: 19, name: 'Product 19', category: 'Electronics', brand: '/brand4.svg', price: '$190', stock: 8, views: 145 },
  { id: 20, name: 'Product 20', category: 'Fashion', brand: '/brand5.svg', price: '$200', stock: 13, views: 190 },
];


const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-4 overflow-x-auto w-full">
      <div className='flex relative justify-between'>
        <h2 className="text-xl font-bold mb-4">Products table</h2>
        <div className='flex  gap-2'>
          <div>
            <SearchIcon className="absolute right-5 top-2 h-5 w-7 text-gray-400" />

          </div>

          <div>
            ...
          </div>
        </div>
      </div>

      <table className="min-w-full table-auto rounded-lg border border-gray-300">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4"><input type="checkbox" className='rounded-xl' /></th>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Brand</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Views</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id} className="border-t border-gray-300">
              <td className="p-4"><input type="checkbox" /></td>
              <td className="py-4 px-2 flex gap-2">
                <div className=''>
                  <img src={product.brand} alt="Brand" className="w-10 h-10 object-contain" />
                </div>
                <div><p className='font-semibold'>{product.name}</p> <p className='text-gray-500 text-sm'>345666433</p></div>
              </td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">
                <img src={product.brand} alt="Brand" className="w-8 h-8 object-contain" />
              </td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">{product.views}</td>
              <td className="p-3">...</td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="flex border border-gray-300 px-4 items-center gap-2 py-4 flex-wrap">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Products;
