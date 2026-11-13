import { useEffect, useRef } from 'react';
import { useCart } from '../../context/useCart';
import './Cart.css';

type CartProps = {
  onClose: () => void;
};

function Cart({ onClose }: CartProps) {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const cartRef = useRef<HTMLElement>(null);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements =
        cartRef.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
    >
      <section
        ref={cartRef}
        className="cart-section"
        id="carrinho"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cart-header">
          <h2 id="cart-title">Meu carrinho</h2>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg
              width="54"
              height="54"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2 2h2l2.4 11.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 6H5" />
            </svg>

            <h3>Seu carrinho está vazio</h3>

            <p>
              Explore nossa coleção de artefatos medievais
              e encontre suas próximas peças.
            </p>

            <button
              type="button"
              className="cart-continue-button"
              onClick={onClose}
            >
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={item.product.id}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                  />

                  <div className="cart-item-info">
                    <h3>{item.product.name}</h3>

                    <p>
                      Preço unitário:{' '}
                      {item.product.price.toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                        }
                      )}
                    </p>

                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.product.id)
                        }
                        aria-label={`Diminuir quantidade de ${item.product.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.product.id)
                        }
                        aria-label={`Aumentar quantidade de ${item.product.name}`}
                      >
                        +
                      </button>
                    </div>

                    <p>
                      Subtotal:{' '}
                      {(
                        item.product.price *
                        item.quantity
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.product.id)
                      }
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>
                Total:{' '}
                {totalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h3>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Cart;
