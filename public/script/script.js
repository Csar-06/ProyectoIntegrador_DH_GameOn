document.addEventListener('DOMContentLoaded', function () {
    let subtotal = 0;

    // Función para agregar un producto al carrito
    function addToCart(productName, productPrice) {
        // Crear un nuevo elemento de producto para el carrito
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('product');
        cartProduct.innerHTML = `
            <div class="info">
                <h3>${productName}</h3>
                <p>$ ${productPrice.toFixed(2)}</p>
                <button class="remove-from-cart">Remove</button>
            </div>
        `;

        // Agregar el producto al contenedor del carrito
        const cartContainer = document.querySelector('.summary .totals');
        cartContainer.insertAdjacentElement('beforebegin', cartProduct);

        // Actualizar el subtotal
        subtotal += productPrice;
        document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);

        // Calcular el total
        const taxes = subtotal * 0.1; // Consideremos un impuesto del 10%
        let total = subtotal + taxes;
        
        // Validar que el subtotal y el total no sean negativos
        subtotal = Math.max(subtotal, 0);
        total = Math.max(total, 0);

        // Actualizar los elementos en el DOM
        document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
        document.getElementById('taxes').textContent = '$' + taxes.toFixed(2);
        document.getElementById('total').textContent = '$' + total.toFixed(2);
    }

    // Función para vaciar el carrito
    function emptyCart() {
        // Eliminar todos los productos del carrito
        const cartItems = document.querySelectorAll('.product');
        cartItems.forEach(item => {
            item.remove();
        });

        // Restablecer los totales a cero
        document.getElementById('subtotal').textContent = '$0.00';
        document.getElementById('taxes').textContent = '$0.00';
        document.getElementById('total').textContent = '$0.00';
    }

    // Agregar productos al carrito cuando se hace clic en los botones "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productInfo = button.closest('.product');
            const productName = productInfo.querySelector('h3').textContent.trim();
            const productPriceText = productInfo.querySelector('p').textContent.trim();
            const productPrice = parseFloat(productPriceText.replace('$', ''));

            if (!isNaN(productPrice)) {
                addToCart(productName, productPrice);
            } else {
                console.error("El precio no es válido:", productPriceText);
            }
        });
    });

    // Eliminar productos del carrito cuando se hace clic en los botones "Remove"
    document.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('remove-from-cart')) {
            const product = event.target.parentElement.parentElement;
            const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            subtotal -= price;
            document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);

            // Calcular el total nuevamente después de eliminar un producto
            const taxes = subtotal * 0.1; // Consideremos un impuesto del 10%
            const total = subtotal + taxes;
            document.getElementById('taxes').textContent = '$' + taxes.toFixed(2);
            document.getElementById('total').textContent = '$' + total.toFixed(2);

            product.remove();
        }
    });

    // Manejar el clic en el botón "Empty Cart"
    const emptyCartButton = document.getElementById('empty-cart-button');
    if (emptyCartButton) {
        emptyCartButton.addEventListener('click', emptyCart);
    }
});