import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

/**
 * Thunk
 * : 다른 작업이 완료될 때까지 작업을 지연시키는 단순한 함수
 *   thunk로 작업 크리에이터(action creator)를 작성.
 *   => action creator : 작업 객체를 즉시 반환하지 않음.
 *   즉, 작업을 반환하는 다른 함수를 반환함.
 */
export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-b4262-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
            }));
        }
    };
}

export const sendCartData = (cart) => {
    /**
     * prameter로 들어오는 dispatch 함수는 어디서 오는 것인가?
     * => 리덕스 툴킷은 실제로 작업 객체가 아닌 함수인 작업을 디스패치 하는 것으로 확인되면 
     * 해당 함수를 자동으로 실행함. 그래서 리덕스는 그 함수를 실행함.
     * 이 함수에서 그것은 우리에게 자동으로 디스패치 인수를 줄것임.
     * 실행된 함수에서 우리는 다시 디스패치를 할 수 있음.
     */
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending', // 전: ...을 기다리는 동안, 형: 임박한(=imminent)
            title: 'Sending...',
            message: 'Sending cart data!',
        }));

        const sendRequest = async () => {
            /**
             * method 방식이 'post'가 아니고 'put'인 이유?
             * put 요청을 보내면 firebase(저장소-db)에 데이터를 저장하지만
             * post 방식처럼 새 데이터가 데이터 목록에 추가되지 않고 기존의 데이터를 오버라이드 함(즉, update한다는 얘기)
             */
            const response = await fetch('https://react-http-b4262-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed!');
            }
        };

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success', 
                title: 'Succes!', 
                message: 'Sent cart data successfully!',
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }));
        }

    };
}; 
