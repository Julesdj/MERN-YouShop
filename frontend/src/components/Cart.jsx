import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {
    return <div>
    <Table responsive>
        <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Status</th>
                <th>Inventory</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product._id}>
                    <td>
                        <Form.Check type="checkbox" />
                    </td>

                    <td>{product.name}</td>
                    <td>Status</td>
                    <td>{product.qtyInStock}</td>
                    {/* TODO: Add edit functionality */}
                    <td>
                        <Link to={'/store/admin/products/edit'}>
                            Edit
                        </Link>
                    </td>
                    <td>
                        <MdDelete
                            onClick={(e) =>
                                setProductId(`${product._id}`)
                            }
                            style={{ fontSize: '30px' }}
                            variant="warning"
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
</div>
}

export default Cart;
