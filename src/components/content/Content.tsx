'use client';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img from '@/assets/images.png';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

const productList = [
  { id: 1, name: 'Product Name 1', price: '$0.00' },
  { id: 2, name: 'Product Name 2', price: '$0.00' },
  { id: 3, name: 'Product Name 3', price: '$0.00' },
  { id: 4, name: 'Product Name 4', price: '$0.00' },
  { id: 5, name: 'Product Name 5', price: '$0.00' },
  { id: 6, name: 'Product Name 6', price: '$0.00' },
  { id: 7, name: 'Product Name 7', price: '$0.00' },
  { id: 8, name: 'Product Name 8', price: '$0.00' },
];

export default function Content() {
  return (
    <>
      <Row>
        <div className="col-12">
          <h3>Danh sách sản phẩm</h3>
        </div>
        {productList.length > 0 &&
          productList.map((item) => (
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 mx-auto"
              key={item.id}
            >
              <Card style={{ width: '18rem' }}>
                <Image
                  src={img}
                  alt="Picture of the author"
                  className="w-100"
                />
                <Card.Body>
                  <Card.Title className="text-danger">{item.name}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Row>
    </>
  );
}
