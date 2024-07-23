contract Property {
    int private price;   

    function getPrice() public view returns(int) {           
           /* Price(가격) 반환 */

        return price;
    }
}