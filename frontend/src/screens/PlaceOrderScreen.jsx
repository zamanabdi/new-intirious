import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { toast } from 'react-toastify';
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";
import Message from "../components/message/Message";
import Loader from "../components/loader/Loader";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";



const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <ListGroup variant="flush">

          {/* shipping address */}
          <ListGroup.Item>
          <h2>Shipping</h2>
          <p>
          <strong>Address:</strong>
          {cart.shippingAddress.address},
          {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {
            cart.shippingAddress.country
          }
          </p>
          </ListGroup.Item>

          {/* payment method */}
          <ListGroup.Item>
           <h2>Payment Method</h2>
           <strong>Method: </strong>
           {cart.paymentMethod}
          </ListGroup.Item>

          {/* */}
          <ListGroup.Item>
          <h2>Order Items</h2>
          {
           cart.cartItems.length === 0? (<Message>Your cart is empty</Message>) : (<ListGroup variant="flush">
            {
                cart.orderItems.map((item,index) => (<ListGroup.Item>
                    
                    
                    </ListGroup.Item>))
            }
            </ListGroup>) 
          }
          </ListGroup.Item>
          
          </ListGroup>
        </Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
