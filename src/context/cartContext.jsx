import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const CartContext = createContext();

// ============================================================
// ===================== CART PROVIDER =========================
// ============================================================

export function CartProvider({ children }) {

    // ========================================================
    // ================= INITIAL CART STATE ===================
    // ========================================================

    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("dandiyaCart");

            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);

                if (Array.isArray(parsedCart)) {
                    return parsedCart;
                }
            }
        } catch (error) {
            console.error(
                "❌ Cart loading error:",
                error
            );
        }

        return [];
    });

    // ========================================================
    // ================= SAVE CART TO STORAGE =================
    // ========================================================

    useEffect(() => {
        try {
            localStorage.setItem(
                "dandiyaCart",
                JSON.stringify(cartItems)
            );
        } catch (error) {
            console.error(
                "❌ Cart saving error:",
                error
            );
        }
    }, [cartItems]);

    // ========================================================
    // ================= ADD ITEM TO CART =====================
    // ========================================================

    const addToCart = (product) => {
        setCartItems((prevItems) => {

            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            // ==================================================
            // PRODUCT ALREADY EXISTS
            // ==================================================

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity:
                                Number(item.quantity || 0) + 1,
                        }
                        : item
                );
            }

            // ==================================================
            // ADD NEW PRODUCT
            // ==================================================

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    // ========================================================
    // ================= REMOVE ITEM ==========================
    // ========================================================

    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => item.id !== id
            )
        );
    };

    // ========================================================
    // ================= INCREASE QUANTITY ====================
    // ========================================================

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            Number(item.quantity || 0) + 1,
                    }
                    : item
            )
        );
    };

    // ========================================================
    // ================= DECREASE QUANTITY ====================
    // ========================================================

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity:
                                Number(item.quantity || 0) - 1,
                        }
                        : item
                )
                .filter(
                    (item) =>
                        Number(item.quantity) > 0
                )
        );
    };

    // ========================================================
    // ================= TOTAL PRICE ==========================
    // ========================================================

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            Number(item.quantity || 0),
        0
    );

    // ========================================================
    // ================= TOTAL ITEMS ==========================
    // ========================================================

    const totalItems = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.quantity || 0),
        0
    );

    // ========================================================
    // ================= CONTEXT VALUE ========================
    // ========================================================

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalPrice,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// ============================================================
// ======================= USE CART ===========================
// ============================================================

export function useCart() {
    return useContext(CartContext);
}