import { Box, Center, HStack, Image, Skeleton, Stack, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, setCart } from "../../Redux/Cart/action";
import CartProduct from "./CartProduct";
import NoItemInCart from '../../BannerImages/no_item_in_cart.png'

function CartStack() {
  const dispatch = useDispatch();
  const { cartItems,totalCount } = useSelector((state) => state.cart);
  const [loading,setLoading] = useState(false)
 console.log(cartItems);

  function removeItem(id){
        
    fetch(`http://localhost:3000/Cart/${id}`,{
    method:"DELETE",
   
    headers:{"content-type": "application/json"}
}).then((res)=>res.json()).then(dispatch(remove(id))).catch((err)=>console.log(err))


}

 

  if(cartItems.length < 1){
    return <Center>
        <Image src={NoItemInCart}></Image>
    </Center>
  }
  
  
  return (
    <VStack width={"100%"} >
      {cartItems.map((el) => (!loading ?<CartProduct key={el.id} data={el} func={removeItem} />: <Skeleton> <CartProduct key={el.id} data={el} func={removeItem} /></Skeleton> 
        
      ))}
    </VStack>
  );
}

export default CartStack;
